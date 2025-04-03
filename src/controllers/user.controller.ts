import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const user = await userService.createUser(name, email);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
