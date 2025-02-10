import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ title: "fecting all users" }));

userRouter.get("/:id", (req, res) => res.send({ title: "fecting a user" }));

userRouter.post("/", (req, res) => res.send({ title: "creating a user" }));

userRouter.put("/:id", (req, res) => res.send({ title: "updating a user" }));

userRouter.delete("/:id", (req, res) => res.send({ title: "deleting a user" }));


export default userRouter;
