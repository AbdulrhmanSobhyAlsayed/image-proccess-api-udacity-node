import express from "express";
import { resizeController } from "../controllers";

const routes = express.Router();

routes.get("/resize", resizeController);

export default routes;
