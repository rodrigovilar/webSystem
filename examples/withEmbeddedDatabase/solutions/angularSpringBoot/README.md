# Solution for Web systems with embedded database using Angular and Spring Boot

1. Open https://start.spring.io/
2. Fill the form with the following metadata:
 - Group: com.example.team
 - Artifact: exampleProject2
 - Name and Description: Example project 2
 - Package Name: com.example.team.exampleproject2
3. Generate the project
4. Extract the zip file 
5. Copy project code to [this folder](backend)
6. Run mvn springboot:run or the [Application main method](backend/src/main/java/com/example/team/exampleProject2/ExampleProject2Application.java)
7. Run ng generate example-project2
8. Rename example-project2 folder to [frontend](frontend)
9. Create a [Docker file](frontend/Dockerfile) for frontend using two stages:
 - The first to build the production Angular code in a Node image
 - The second to run the frontend using Nginx
10. Create a [Nginx configuration file](frontend/nginx/default.conf)
11. Create a [Docker file](backend/Dockerfile) for backend using two stages:
 - The first to build the Spring Boot app in a Maven image
 - The second to run the backend in a JRE image
12. Add JPA, JDBC and PostgreSQL dependencies in [Maven configuration file](backend/pom.xml)
13. Add H2 in [Application properties](backend/src/main/resources/application.properties)
14. Create a [Home component](frontend/src/app/home) to draw the app menu
15. Create an [App service](frontend/src/app/app.service.ts) to handle app notification messages
16. Implement CRUD layers and modules:
 - Data Access: [Entity model](backend/src/main/java/com/example/team/exampleproject2/model/Book.java) and [repository](backend/src/main/java/com/example/team/exampleproject2/repository/BookRepository.java)
 - Service: [Entity service](backend/src/main/java/com/example/team/exampleproject2/service/BookService.java) 
 - Controller: [Entity Controller](backend/src/main/java/com/example/team/exampleproject2/controller/BookController.java) and [Data Transfer Object](backend/src/main/java/com/example/team/exampleproject2/controller/BookDTO.java)
 - Global classes: [Util classes](backend/src/main/java/com/example/team/exampleproject2/util), [Controller utils](backend/src/main/java/com/example/team/exampleproject2/controller/RestMessageDTO.java) and [Business exception](backend/src/main/java/com/example/team/exampleproject2/service/BusinessException.java)
17. Implement frontend elements for CRUD:
 - Set up a [lazy load module route](frontend/src/app/app-routing.module.ts) and implement [the module](frontend/src/app/book/book.module.ts)
 - [Entity service](frontend/src/app/book/book.service.ts)
 - [Entity DTO](frontend/src/app/book/book.ts)
 - [Listing component](frontend/src/app/book/book-list)
 - [Editing component](frontend/src/app/book/book-edit)
 - [Viewing component](frontend/src/app/book/book-view)
 - Util classes for [routing](frontend/src/app/routes.util.ts) and [URLs](frontend/src/app/app.urls.ts)
18. Update [Nginx configuration](frontend/nginx/default.conf) to proxy all /api requests to backend
19. Create a [docker compose file](docker-compose.yml) to invoke frontend and backend Dockerfiles and connect these containers
20. Run docker-compose up to build and deploy the web system
