import app from './app';
import config from './../../config/config';

app.listen(config.port, (err: Error) => {
    if(err) {
        console.log(err);
    }
    console.info('Server stared on port %s.', config.port);
});
