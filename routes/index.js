import {Router} from 'express';
import * as flight from "../controllers/flight";
export const router = Router();
console.log("hello routes")
router.route("/create")
        .post(flight.createFlight);
router.route("/flightdetails")
        .get(flight.flightlist)
