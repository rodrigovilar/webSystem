# Solution for Web systems with embedded database using Angular and Nest.js

1. To get install, you need install Nest CLI using ```npm i -g @nestjs/cli```
2. After, using ```nest new backend``` to  create a new project directory, [this folder](backend)
3. Run ng generate example-project2
4. Rename example-project2 folder to [frontend](frontend)
5. Create a [Docker file](frontend/Dockerfile) for frontend using two stages:
 - The first to build the production Angular code in a Node image
 - The second to run the frontend using Nginx
6. Create a [Nginx configuration file](frontend/nginx/default.conf)
7. Create a [Docker file](backend/Dockerfile) for backend using one stage:
 - The first to build the Nest.JS app in a Node image
8. Add GraphQL dependency in [backend folder](backend) using:
- `npm i --save @nestjs/graphql apollo-server-express graphql-tools graphql`

11. Create a [Message Graphql File](backend/src/message/message.graphql)
12. Create a [Message resolver](backend/src/message/message.resolver.ts)
13. Update [Nginx configuration](frontend/nginx/default.conf) to proxy all /api requests to backend
14. Create a [docker compose file](docker-compose.yml) to invoke frontend and backend Dockerfiles and connect these containers
15. Run docker-compose up to build and deploy the web system
