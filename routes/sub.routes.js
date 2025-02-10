import { Router } from "express";

const subRouter = Router();

subRouter.get("/", (req, res) => res.send({ title: "fecting all subs" }));

subRouter.get("/:id", (req, res) => res.send({ title: "fecting a sub" }));

subRouter.post("/", (req, res) => res.send({ title: "creating a sub" }));

subRouter.put("/:id", (req, res) => res.send({ title: "updating a sub" }));

subRouter.delete("/:id", (req, res) => res.send({ title: "deleting a sub" }));

subRouter.get("/user/:id", (req, res) => res.send({ title: "fection all user subs" }));

subRouter.put("/:id/cancel", (req, res) => res.send({ title: "canceling a sub" }));

subRouter.get("/upcoming-renewals", (req, res) => res.send({ title: "upcoming sub" }));

export default subRouter;
