import express, {Request, Response, NextFunction, json} from 'express';
import userRoute from './routes/users.route';
import statusRoute from './routes/status.route';
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(userRoute);
app.use(statusRoute);

app.listen(3000, () => {
    console.log('Server is Running')
})