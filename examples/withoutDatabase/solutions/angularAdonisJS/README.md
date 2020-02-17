# Solution for Web systems without database using Angular and AdonisJS

1. Install the _Node_ and _NPM_. The best way is to use the _nvm project_.

- [nvm for Linux](https://github.com/nvm-sh/nvm)
- [nvm for Windows](https://github.com/coreybutler/nvm-windows)

Install the LTS version of the Node. Replace "@" with the version.

`$ nvm install v@@.@@.@`

Check the installation

`$ node -v` and `npm -v`

2. Install the Adonis Framework command line

`$ npm install --global @adonisjs/cli`

Check the installation

`$ adonis --version`

3. Crie uma nova pasta, entre nela e create a new adonis project only api

`$ mkdir backend && cd backend` 

`$ adonis new projectName --api-only`

4. Crie um novo controlador do tipo HTTP

`$ adonis make:controller controllerName --type http`

No arquivo `backend/app/Controllers/Http/ControllerName.js` crie uma função sem parametros que retorne uma mensagem

5. Em `backend/start/routes.js` crie que chamará o controlador

6. Levante o servidor usando o seguite comando, na raiz do projeto

`$ npm start`