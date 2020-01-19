const connectionString = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: '123'
        }
    },
    options: {
        encrypt: true,
        database: 'my-shop'
    }
};

export default connectionString;
