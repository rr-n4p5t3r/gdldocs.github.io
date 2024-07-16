---
layout: default
title: Adding a Worker Node
parent: Kubernetes
has_children: true
nav_order: 3
---

### Adding a worker node to your cluster to distribute the load

The requirement for this is the same as above. Another OS installation within the same network

## Get the token from the master node

```
sudo cat /var/lib/rancher/k3s/server/node-token
```

You can also get the master's IP by running the following command in the master node: 
```
sudo k3s kubectl config view --raw
```
## Installing Lightweight Kubernetes as a worker node in your worker node (heh)

This time, however, we will install the node using the IP of the master and the token
```
curl -sfL https://get.k3s.io | K3S_URL=https://ip-of-your-master-server:6443 K3S_TOKEN="paste the token obtained in the master node here" sh -
```

Set Agent (worker) as default start instead of Master

```
sudo systemctl enable --now k3s-agent
```
Now you should be able to see the worker node within the cluster

```
sudo kubectl get nodes
```
The result should read:

```
[alexia@andromeda ~] $ sudo kubectl get nodes
NAME                      STATUS   ROLES                  AGE   VERSION
vulcano.lexi.intranet     Ready    <none>                 13m   v1.28.7+k3s1
andromeda.lcds.intranet   Ready    control-plane,master   43h   v1.28.7+k3s1
[alexia@andromeda ~] $ 

```
Alternatively, the worker node could be initiated by using the following command:

```
sudo k3s agent ---server https://your-master-server-ip:6443 --token "your-token-here"
```

I hope you enjoyed these tutorials. If you have any further questions feel free to contact me.

Alexia <alexiarstein@aol.com>
