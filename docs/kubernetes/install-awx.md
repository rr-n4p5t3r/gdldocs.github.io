---
layout: default
title: Deploy AWX in the Cluster
parent: Kubernetes
has_children: true
nav_order: 2
---
### Installing AWX Operator

```
helm repo add awx-operator https://ansible.github.io/awx-operator/
```

### Installing the operator within our cluster via **_helm_**

```
helm install ansible-awx-operator awx-operator/awx-operator -n awx --create-namespace
```

Now let us validate that the operator pod --which will later install the components that we need-- is in _**Running**_ state:

```
[alexia@andromeda ~] $ kubectl get pods -n awx
```

{: .box-note}

Due to the fact that k3s comes with a default storage class for creating volumes within the machine where it runs, the following step is used to define a _**Volume Claim**_ and a _**Custom Resource Definition**_.
If we would like to explore the complete list of installed AWX's crds we could run
```
kubectl get crds awxs.awx.ansible.com -o yaml
```
For our use case we will do this by creating a .yaml file. For example awx_manifest_for_operator.yaml

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
Now it can be applied against the cluster running:

```
kubectl apply -f awx_manifest_for_operator.yaml
```
After a moment, the awx namespace should have the pods being excecuted

```
[alexia@andromeda ~] $ sudo kubectl get pods -n awx
NAME                                               READY   STATUS    RESTARTS         AGE
ansible-awx-postgres-13-0                          1/1     Running   6 (4m25s ago)    39h
ansible-awx-web-7d458cd684-v458k                   3/3     Running   20 (4m25s ago)   39h
ansible-awx-task-6dfd5dcdb7-4fz7q                  4/4     Running   27 (4m25s ago)   39h
awx-operator-controller-manager-64df47d889-wkp5w   2/2     Running   19 (4m25s ago)   40h
[alexia@andromeda ~] $ 
```
Lastly, we expose the deployment of AWX

```
kubectl expose deployment ansible-awx-web --name ansible-awx-web-svc --type NodePort -n awx
```

We need to obtain the admin password for initial login (If you are not using domain credentials via LDAP et al)

Username will be **admin**, and the password can be obtained by excecuting the following command:

```
kubectl get secret ansible-awx-admin-password -o jsonpath="{.data.password}" -n awx | base64 --decode ; echo
```
Store it somewhere safe, and change it once you have logged in.

We need to obtain the port for the web interface. We can look this up in several ways, but since we're working with kubectl, a quick way would be
just by listing the svc:

```
[alexia@andromeda ~] $ sudo kubectl get svc -n awx ansible-awx-web-svc
NAME                  TYPE       CLUSTER-IP    EXTERNAL-IP   PORT(S)          AGE
ansible-awx-web-svc   NodePort   10.43.66.87   <none>        8052:30087/TCP   53m
```
And that's really it. 
We can now login to AWX via web interface and start to migrate or setup our awx cluster.


![AWX Local Cluster]({{ '/assets/images/awx-cluster.png' | relative_url }})

