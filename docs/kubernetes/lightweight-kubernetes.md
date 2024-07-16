---
layout: default
title: Installing Kubernetes
parent: Kubernetes
has_children: true
nav_order: 1
---

### Installing Lightweight Kubernetes

There are many different ways to achieve this. The way I would normally deploy the latest version is by using the following command

```
curl -sfL https://get.k3s.io | sh - 
sudo k3s kubectl get node 
```
Generating a token:

```
sudo k3s kubectl config view --raw >> ~/config_k3s.yam
```

{: .box-warning}
Protect this file accordingly or kubernetes will remind you of the admin good practises you should know about already.

Adding a variable (You can leave this default too)
```
export KUBECONFIG=~/config_k3s.yaml
```


### Installing HELM CLI

Please visit [This repository](https://github.com/helm/helm/releases) to download the apropriate version for your architecture. In this document I am using [AMD64](https://get.helm.sh/helm-v3.14.2-linux-amd64.tar.gz)

Download the tar gzipped file and extract anywhere convenient

```mv helm-v3.14.2-linux-amd64.tar.gz /tmp; tar -xzvf helm-v3.14.2-linux-amd64.tar.gz```

In the extracted directory look for the helm binary file, make sure it has executable permissions and place it in /usr/local/bin

```
#For example:
sudo mv linux-amd64/helm /usr/local/bin 
chmod a+x /usr/local/bin/helm
```

Alexia.
