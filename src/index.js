//require ('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import {DB_NAME} from "./constants.js";
import connectDB from './db/dbConfig.js';

dotenv.config({
  path:'./env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("Mongodb connection failed !!!",err);
})















// (async () => {
//   try {
//     mongoose.connect()
//   } catch (error) {
//     console.error("Error :" + error)
//     throw err
//   }
// })