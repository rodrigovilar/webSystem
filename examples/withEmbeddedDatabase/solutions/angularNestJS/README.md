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
8. Add GraphQL and in-memory-db dependencies in [backend folder](backend) using:
- `npm i --save @nestjs/graphql apollo-server-express graphql-tools graphql @nestjs-addons/in-memory-db`

9. Create a [Home component](frontend/src/app/home) to draw the app menu
10. Create an [App service](frontend/src/app/app.service.ts) to handle app notification messages
11. Implement CRUD layers and modules:
 - Data Access: [Entity model](backend/src/book/model/book.entity.ts)
 - Service: [Entity service](backend/src/book/book.service.ts) 
 - Resolver: [Entity resolver](backend/src/book/book.resolver.ts), [Object Type](backend/src/book/dto/book.dto.ts), [Object Create Input](backend/src/book/dto/createBook.input.ts) and [Object Update Input](backend/src/book/dto/updateBook.input.ts)
12. Implement frontend elements for CRUD:
 - Set up a [lazy load module route](frontend/src/app/app-routing.module.ts) and implement [the module](frontend/src/app/book/book.module.ts)
 - [Entity service](frontend/src/app/book/book.service.ts)
 - [Entity DTO](frontend/src/app/book/book.ts)
 - [Listing component](frontend/src/app/book/book-list)
 - [Editing component](frontend/src/app/book/book-edit)
 - [Viewing component](frontend/src/app/book/book-view)
 - Util classes for [routing](frontend/src/app/routes.util.ts) and [URLs](frontend/src/app/app.urls.ts)
13. Update [Nginx configuration](frontend/nginx/default.conf) to proxy all /api requests to backend
14. Create a [docker compose file](docker-compose.yml) to invoke frontend and backend Dockerfiles and connect these containers
15. Run docker-compose up to build and deploy the web system
