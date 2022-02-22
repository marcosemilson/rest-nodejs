import express, {Request, Response, NextFunction, json} from 'express';
import userRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error-handler.middleware'
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(userRoute);
app.use(statusRoute);

app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server is Running')
})