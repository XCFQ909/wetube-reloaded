import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controller/userController";
import { recommended, search } from "../controller/videoController";

const rootRouter = express.Router();

rootRouter.get("/", recommended);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
