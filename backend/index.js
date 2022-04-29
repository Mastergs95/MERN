import express from 'express';
import bodyParser from 'body-parser';
import coursesRoutes from './routes/courses';
import userRoutes from './routes/users';
import db from './db/db';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port= 80;

coursesRoutes(app);
userRoutes(app);

app.listen(port, () =>
    console.log(`Express is listening on port ${port}!`)
    );