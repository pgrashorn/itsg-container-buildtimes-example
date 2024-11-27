# Docker and S2I Build Examples

This project demonstrates different approaches to building Docker images 
for a Node.js application (e.g., Express.js),
using **classic Docker builds**, **multi-stage Docker builds**, and **Source-to-Image (S2I)**.

---

## Prerequisites
Ensure the following tools are installed:
- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **S2I (Source-to-Image)**: [Install S2I](https://github.com/openshift/source-to-image)

---

## 1. Classic Docker Build

Create a Docker image using the `Dockerfile`.

### Build Command:
```bash
docker build -f Dockerfile -t itsg-docker-example ./app
```
### Run Command:
```bash
docker run -p 3000:3000 itsg-docker-example
```

## 2. Staged Docker Build

Create a Docker image using the `Dockerfile`.

### Build Command:
```bash
docker build -f Dockerfile.staged -t itsg-docker-example-staged ./app
```
### Run Command:
```bash
docker run -p 3000:3000 itsg-docker-example-staged
```

## 3. Source 2 Image Docker Build

Create a Docker image using the `Source 2 Image`.

### Build Command:
```bash
s2i build -c ./app registry.access.redhat.com/ubi9/nodejs-20:1-44.1716477801 itsg-docker-example-s2i --incremental --loglevel 1
```

### Run Command:
```bash
docker run -p 3000:3000 itsg-docker-example-s2i
```

