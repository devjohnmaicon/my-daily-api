require('dotenv').config();
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './infra/routes/index';

import './infra/database';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

export { app };
