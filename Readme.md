// Backend Javascript using nodejs

This is a  video series on backend with javascript

-[Models Link], (https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

npm i -D nodemon  // dev dependencies
npm i dotenv express mongoose // dependencies

"nodemon -r dotenv/config src/ index.js" // in scripts - dev :
type all the extensions to the files imported always


import dotenv from 'dotenv';====== keep always on the top of all imports in index.js

immediately after all imports write this code -----
dotenv.config({
  path:'./env'
})
