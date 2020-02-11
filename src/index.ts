import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typedi";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { responseHandler } from "./middlewares/responseHandler";

//Connects to the Database -> then starts the express
useContainer(Container);
createConnection()
  .then(async connection => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    //Set all routes from routes folder
    useContainer(Container);
    app.use("/", routes);
    app.use(responseHandler);
    app.use(errorHandler);

    app.listen(3200, () => {
      console.log("Server started on port 3200!");
    });
    
  })
  .catch(error => console.log(error));