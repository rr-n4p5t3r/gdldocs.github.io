---
layout: default
title: Crear Cluster y Desplegar AWX
parent: Kubernetes
has_children: true
nav_order: 4
---

Esta es la versión en español que reune todos los pasos descriptos en mis notas en inglés dentro de esta sección.

{: .highlight }
Resta crear más documentación explicando el escalado horizontal, vertical (RAM/CPU) y los varios tipos de autoscaling posibles
HPA y node autoscaling. El próximo fin de semana crearé esos documentos cuando tenga un par de horas libres para dedicarle a 
este portal.

### Instalando Kubernetes

Existen muchas maneras de lograr este objetivo. Este método es el que se me ocurrió para desplegar la versión actual, con automatic updates
y de la manera más sencilla posible. 

{: .note }
k3s o Lightweight Kubernetes es _**Production Ready**_ es la versión productiva de Kubernetes pero con los componentes justos
para un despliegue de alta disponibilidad en un ambiente productivo.

Para este cluster recomiendo dos maquinas con un SO de grado productivo. Esta documentación está escrita en base a pruebas realizadas
en mi _homelab_ con dos servidores Debian 12.

Se requiere un mínimo de dos maquinas para el cluster, donde una funciona como master/worker y el otro nodo como worker para balancear
la carga operativa.

## Obteniendo e instalando el nodo Master:

```
curl -sfL https://get.k3s.io | sh - 
sudo k3s kubectl get node 
```
Generar un token

```
sudo k3s kubectl config view --raw >> ~/config_k3s.yam
```

{: .important importante }
Proteger este archivo de acuerdo a las políticas de seguridad vigentes. Si no se protege, Kubernetes te recordará que
no estás siguiendo las buenas prácticas de admin que a esta altura ya deberías conocer y utilizar a diario. :-)

Agregar la variable KUBECONFIG (también se puede dejar fija en el .bashrc del usuario que correrá kubernetes)

```
export KUBECONFIG=~/config_k3s.yaml
```


### Instalando HELM CLI

Visitar [Este Repositorio](https://github.com/helm/helm/releases) para descargar la versión apropiada para tu arquitectura. En este documento estoy utilizando [AMD64](https://get.helm.sh/helm-v3.14.2-linux-amd64.tar.gz)

Descargar el archivo .tar.gz y extraerlo donde resulte conveniente

```mv helm-v3.14.2-linux-amd64.tar.gz /tmp; tar -xzvf helm-v3.14.2-linux-amd64.tar.gz```

En el directorio extraido, mover el binario helm a /usr/local/bin y darle permisos de ejecución globales
```
#Por ejemplo
sudo mv linux-amd64/helm /usr/local/bin 
chmod a+x /usr/local/bin/helm
```

### Instalar AWX Operator vía HELM.

```
helm repo add awx-operator https://ansible.github.io/awx-operator/

helm install ansible-awx-operator awx-operator/awx-operator -n awx --create-namespace

```
Ahora validaremos que el pod del operador --que luego instalará los componentes que necesitamos-- esté en estado _**Running**_

```
[alexia@andromeda ~] $ kubectl get pods -n awx
```

{: .box-note}

Debido al hecho que k3s viene con una clase de almacenamiento por defecto (default storage class) para crear volúmenes dentro de la maquina donde corre, el siguiente paso
nos permite definir un _**Persistent Volume Claim**_ (Como en OpenShift) y un _**Custom Resource Definition**_. 

Si deseamos explorar la lista completa de los crds que instaló AWX podemos hacerlo con el siguiente comando:

```
kubectl get crds awxs.awx.ansible.com -o yaml
```
Para nuestro caso de uso, haremos esto a través de un manifest en un yaml, de la siguiente manera:

```
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-13-ansible-awx-postgres-13-0
  namespace: awx
spec:
  storageClassName: local-path
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
---
apiVersion: awx.ansible.com/v1beta1
kind: AWX
metadata:
  name: ansible-awx
  namespace: awx
spec:
  service_type: nodeport
  postgres_storage_class: local-path
```
Y ahora la aplicamos contra el cluster, corriendo el siguiente comando:

```
kubectl apply -f awx_manifest_for_operator.yaml
```
Luego de unos instantes, el nuevo namespace **awx** debería tener los pods en ejecución. Para confirmarlo, ejecutamos:

```
sudo kubectl get pods -n awx
```

Que nos debería devolver este output:

```
[alexia@andromeda ~] $ sudo kubectl get pods -n awx
NAME                                               READY   STATUS    RESTARTS         AGE
ansible-awx-postgres-13-0                          1/1     Running   6 (4m25s ago)    39h
ansible-awx-web-7d458cd684-v458k                   3/3     Running   20 (4m25s ago)   39h
ansible-awx-task-6dfd5dcdb7-4fz7q                  4/4     Running   27 (4m25s ago)   39h
awx-operator-controller-manager-64df47d889-wkp5w   2/2     Running   19 (4m25s ago)   40h
[alexia@andromeda ~] $ 
```
Por último, exponemos el deployment de AWX

```
kubectl expose deployment ansible-awx-web --name ansible-awx-web-svc --type NodePort -n awx
```

Ahora necesitamos obtener el password de admin para un login inicial. 
el username será **admin** y el password lo obtenemos ejecutando el siguiente comando:

```
kubectl get secret ansible-awx-admin-password -o jsonpath="{.data.password}" -n awx | base64 --decode ; echo
```
Guardarlo en un lugar seguro y cambiarlo tan pronto como hayan entrado en la interfaz por algo aún más seguro. 

Ahora necesitamos obtener el puerto para la interfaz web. Esto se puede obtener de muchas maneras, pero como venimos trabajando con kubectl,
una manera rápida de hacerlo es consultando los servicios. 


```
[alexia@andromeda ~] $ sudo kubectl get svc -n awx ansible-awx-web-svc
NAME                  TYPE       CLUSTER-IP    EXTERNAL-IP   PORT(S)          AGE
ansible-awx-web-svc   NodePort   10.43.66.87   <none>        8052:30087/TCP   53m

```
En caso de tener más pods aparte de AWX y desear listar todos, se puede ejecutar el siguiente comando:

```
sudo kubectl get svc -A
```

Y eso es todo. 

Ahora podemos loguearnos a AWX a través de la interfaz web utilizando la IP del pod y el puerto. Recordar que esto funciona todo como HTTPS. 


![AWX Local Cluster]({{ '/assets/images/awx-cluster.png' | relative_url }})

## Agregar un nodo worker al cluster para distribuir mejor la carga

Los requisitos para esta tarea son similares que para desplegar un nodo master.

### Conseguir el token del nodo master

```
sudo cat /var/lib/rancher/k3s/server/node-token
```
También podemos obtener la IP del master corriendo el siguiente comando (en el nodo master)
```
sudo k3s kubectl config view --raw
```
### Instalando Kubernetes en el nodo Worker como Worker (jeje)

Esta vez, a diferencia de la vez anterior, instalaremos el nodo utilizando la IP del master y su token, con el siguiente comando:
```
curl -sfL https://get.k3s.io | K3S_URL=https://ip-del-master-server:6443 K3S_TOKEN="pegar el token que obtuvimos del master aqui" sh -
```
Luego configuramos el agente (worker) en systemd para que el start por defecto sea en modo worker y no master

```
sudo systemctl enable --now k3s-agent
```
Ahora volvemos al nodo master y verificamos que el nodo worker haya entrado al cluster

```
sudo kubectl get nodes
```
El output debería ser similar a este, donde refleja el nodo master (control-plane, master, en mi caso andromeda
y el nodo worker, en mi caso vulcano) Pertenecen a diferentes LANs pero al estar dentro de la misma red 
no hubo conflictos de firewall. En caso de existir, habilitar TCP/6443-6444 en iptables o ufw (debian) o SELinux (ecosistema RHEL)

```
[alexia@andromeda ~] $ sudo kubectl get nodes
NAME                      STATUS   ROLES                  AGE   VERSION
vulcano.lexi.intranet     Ready    <none>                 13m   v1.28.7+k3s1
andromeda.lcds.intranet   Ready    control-plane,master   43h   v1.28.7+k3s1
[alexia@andromeda ~] $ 

```
Alternativamente, el nodo worker puede ser inicializado manualmente a través del siguiente comando:

```
sudo k3s agent ---server https://ip-del-master:6443 --token "token del master aqui"
```

Y eso es todo para tener un cluster de kubernetes productivo en funcionamiento y el despliegue de AWX dentro. Espero que les resulte de utilidad este documento y sientanse libres de consultarme 
cualquier duda que puedan tener.

Alexia.
