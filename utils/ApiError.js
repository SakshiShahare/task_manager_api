class ApiError extends Error{
    constructor(
        statusCode,
        message ="SOmething went wrong",
        stack ="",
        errors  = []
    ){
        this.statusCode = statusCode
        super(message)
        this.errors = errors
        this.success = false
        this.data = null
        this.message = message

        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError};