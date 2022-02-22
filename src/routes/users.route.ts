import {Router, Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes'
import userRepository from '../repositories/user.Repository';
import UserRepository from '../repositories/user.Repository'

const userRoute = Router();

userRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

userRoute.get('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const user = await UserRepository.findById(uuid)
    res.status(StatusCodes.OK).send(user);
});

userRoute.post('/users', async(req: Request, res: Response, next: NextFunction) => {
    const newUser=req.body;
    const uuid = await UserRepository.create(newUser)
    res.status(StatusCodes.CREATED).send(uuid);
});
userRoute.put("/users/:uuid", async (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid
    const modifiedUser = req.body
    modifiedUser.uuid = uuid 
    await userRepository.update(modifiedUser);

    res.status(StatusCodes.OK).send();
})

userRoute.delete("/users/:uuid", async (req: Request, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
})

export default userRoute;