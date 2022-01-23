import express from "express";
import { ValidatePassedParameters } from "./middlewares";
import routes from "./routes";

const app = express();

const PORT = 3000;

app.use(ValidatePassedParameters);

app.use("/", routes);

app.listen(PORT, (): void => {
  console.log(`Server is starting on port:${PORT}`);
});

export default app;
