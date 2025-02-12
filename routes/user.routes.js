import { Router } from "express";
import { getUser, getUsers } from "../controlles/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", (req, res) => res.send({ title: "creating a user" }));

userRouter.put("/:id", (req, res) => res.send({ title: "updating a user" }));

userRouter.delete("/:id", (req, res) => res.send({ title: "deleting a user" }));


export default userRouter;
