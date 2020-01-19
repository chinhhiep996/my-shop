const config  = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '3000',
    jwtSecret: process.env.JWT_SECRET || 'DSFSDFSDGSDFGUISADHFUISD348S7DSD78GSDAGSDSSGFSDDFDGF',
    mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + 
        (process.env.IP || 'localhost') + ':' + (process.env.MONGO_HOST || '27017') + 'my-shop'
}

export default config;
