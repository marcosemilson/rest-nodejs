import {Router, Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes'

const userRoute = Router();

userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Marcos'}];
    res.status(StatusCodes.OK).send(users);
});

userRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    
    res.status(StatusCodes.OK).send(uuid);
});

userRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser=req.body;
    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
});
userRoute.put("/users/:uuid", (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid
    const modifyUser = req.body
    modifyUser.uuid = uuid 
    res.status(StatusCodes.OK).send(modifyUser)
})

userRoute.delete("/users/:uuid", (req: Request, res: Response, next: NextFunction) =>{
    res.sendStatus(StatusCodes.OK)
})

export default userRoute;