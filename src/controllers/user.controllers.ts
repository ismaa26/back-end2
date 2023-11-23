import { Request, Response } from 'express';
import { User } from '../entities/User';

export const createUser = async (req: Request, res: Response) => {

    try {
        const { firstname, lastname } = req.body;

        const user = new User();
        user.firstname = firstname;
        user.lastname = lastname;

        await user.save();

        return res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }

}

export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }
}