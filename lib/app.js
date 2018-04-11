import bodyParser from 'body-parser';
import express from 'express';

import scrambles from './routes/v1/scrambles';

import { cors } from './middleware';

const app = express();
const middleware = [cors];
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', middleware, router);

router.use('/v1/scrambles', scrambles);

app.listen(port, () => console.log(`Rubik's Cube Timer API Running on port ${port}`));

export default app;
