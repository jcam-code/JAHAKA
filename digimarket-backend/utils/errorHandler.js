const errorhandling = (res, error, message = null) => {
    let message = customMessage || error.message || 'Server Error';
    let statusCode = error.statusCode || 500;

    //mangoose Bad ObjectID
    if(error.name == 'CastError') 
    {
        message = 'Resource not found';
        statusCode = 404;
    }

    //mangoose duplicate key
    if(error.code == 11000)
    {
        message = 'Duplicate field value entered';
        statusCode = 400;
    }
}
