import mongoose from "mongoose";
// creating schema 

const flight_schema = new mongoose.Schema({
    service_provider: {
            type:String,
            required:[true]
    },
    flight_nomber: {
        type:String,
        required:[true]
},
source_city: {
    type:String,
    required:[true]
},
dest_city: {
    type:String,
    required:[true]
},
start_time: {
    type:String,
    required:[true]
},
end_time: {
    type:String,
    required:[true]
},
created_date :{
    type:Date,
    default:Date.now()
}
});


export const flightModel = mongoose.model("flightdetails",flight_schema);
