//require ('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import {DB_NAME} from "./constants.js";
import connectDB from './db/dbConfig.js';

dotenv.config({
  path:'./env'
})

connectDB()














// (async () => {
//   try {
//     mongoose.connect()
//   } catch (error) {
//     console.error("Error :" + error)
//     throw err
//   }
// })