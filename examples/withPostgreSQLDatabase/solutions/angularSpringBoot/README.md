# Solution for Web systems with DBMS (PostgreSQL) using Angular and Spring Boot

1. Open https://start.spring.io/
2. Fill the form with the following metadata:
 - Group: com.example.team
 - Artifact: exampleProject3
 - Name and Description: Example project 3
 - Package Name: com.example.team.exampleproject3
3. Generate the project
4. Extract the zip file 
5. Copy project code to [this folder](backend)
6. Run mvn springboot:run or the [Application main method](backend/src/main/java/com/example/team/exampleProject3/ExampleProject3Application.java)
7. Run ng generate example-project1
8. Rename example-project1 folder to [frontend](frontend)
9. Create a [Docker file](frontend/Dockerfile) for frontend using two stages:
 - The first to build the production Angular code in a Node image
 - The second to run the frontend using Nginx
10. Create a [Nginx configuration file](frontend/nginx/default.conf)
11. Create a [Docker file](backend/Dockerfile) for backend using two stages:
 - The first to build the Spring Boot app in a Maven image
 - The second to run the backend in a JRE image
12. Create a [Hello world controller](backend/src/main/java/com/example/team/exampleProject3/HelloWorldController.java)
13. Create a [DTO](backend/src/main/java/com/example/team/exampleProject3/MessageDTO.java) to produce the JSON backend response body 
14. Create a [frontend service](frontend/src/app/message.service.ts) to invoke backend
15. Update [Nginx configuration](frontend/nginx/default.conf) to proxy all /api requests to backend
16. Create a [docker compose file](docker-compose.yml) to invoke frontend and backend Dockerfiles and connect the containers 
17. Run docker-compose up to build and deploy the web system

