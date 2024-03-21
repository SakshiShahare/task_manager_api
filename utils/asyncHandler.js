const asyncHandler = (fn) => async (req, res, next) =>{
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            sucess : false,
            message : error.message
        })
    }
}

//so basically what the function is trying to do is to try to run the function and await for it if the function fails then 
//error is thrown in the else case the function is resolve nothing else

export  {asyncHandler};
// promise approach 

// const asyncHandler = (requestHandler) =>{
//     (req, res, next)=>{
//         Promise.resolve(requestHandler()).catch((error)=>next(error));
//     }
// }