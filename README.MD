# Frontend - Backend

#### Description
This application was created for a better understanding of kubernetes services and pods communication

## Requirements
- Minikube
- Kubectl
- Docker
- Node.js & npm
- MongoDB Docker Image

### How to run locally

In the `backend` directory run `node index.js`

In the `frontend` directory run `npm start`

Open `http://localhost:3000/` and you will see your frontend running and connected to the backend.

### How to run on kubernetes

In the `backend` directory run `docker build -t backend-app .`

In the `frontend` directory run `docker build -t frontend-app .`

Make sure that you have the minikube setup running

From the main directory:

`kubectl apply -f backend.yaml`

`kubectl apply -f frontend.yaml`

Run `minikube service frontend-service`

Your web app should open and you should see the message from the backend.
