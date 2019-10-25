import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import {router} from "./routes"
const app = express();
const server = http.createServer(app);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router)
server.listen(5002,"127.0.0.1",() =>{
    console.log("server running")
});

import db from "../Node_angular/config/common/mongoose"

db.then(()=>{
    console.log("mongodb connected");
},err => {console.log("error in connection")}
);