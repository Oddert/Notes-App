# Oddert Cloud Notes App

A simple auto saving note taking app with 3rd party Oath.

Front end built with React / Redux, backend built with express, MongoDB / Mongoose for storage, Socket.io for websocket implamentation.

## Live Demo
[https://oddert-chess-game-1.glitch.me/](https://oddert-chess-game-1.glitch.me/)

## Installation
You will need to setup a mongodb server and connect it via an .env file
```
$ git clone https://github.com/Oddert/chess-game.git
$ cd chess-game/client
$ npm run install-client
$ npm i
```
### For development
```
$ npm run dev
```
### For a production build
```
$ npm run build
$ npm start
```

## Scripts
| script | command                                        | action
|--------|------------------------------------------------|------------------------------------------------|
| start  | node app.js                                    | runs the server                                |
| server | nodemon app.js                                 | runs the server with auto restart              |
| client | cd client && npm start                         | starts the development server for the client   |
| dev    | concurrently "npm run server" "npm run client" | run both the client and server for development |
| install-client | cd client && npm install | install the client development envirnoment |