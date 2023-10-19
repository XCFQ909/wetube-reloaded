import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 3000;

const app = express();

// 앱을 설정하기

const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// 앱 설정 끝

const handleListen = () =>
  console.log(`server listening on port http://localhost:${PORT}!`);

app.listen(PORT, handleListen);
