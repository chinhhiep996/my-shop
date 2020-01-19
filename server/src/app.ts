import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as sequelize from 'sequelize';
import * as tedious from 'tedious';

import connectionString from './../../config/connection-string';
import Template from './template';

class App {
    public app: express.Application;
    public connection: tedious.Connection;
    public sqlServerUrl: string;
    public sqlServerUser: string;
    public sqlServerPass: string;

    constructor() {
        const path = `${__dirname}/../.env.${process.env.NODE_ENV}`;

        dotenv.config({ path: path });

        this.app = express();

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        this.app.use(cookieParser());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());

        this.connection = new tedious.Connection(connectionString);
        this.connection.on('connect', (err: Error) => {
            if(err) {
                console.error(err);
            }
            console.log('Connected');
        });

        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.status(200).send(Template());
        });
    }
}

export default new App().app