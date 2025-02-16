const asyncHandler = ()=>{
  (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next))
    .catch((err) => next(err))
  }
}

export { asyncHandler }; 





// const asyncHandler=() =>{}
// const asynhandler = (func) =>() =>{}
// const asynhandler = (func) => async() =>{}

// const asynchandler =(fn) =>async(req,res,next) => {
//   try {
//     await fn(req,res,next)  

//   } catch (error) {
//     res.status(error.code|| 500).json({
//       success:false,
//       message:error.message||"An unknown error occured"})  
//   }
// }