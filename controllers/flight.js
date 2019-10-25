import dbModels from '../models';

const { flightModel } = dbModels;
console.log(flightModel)
export const createFlight = (req,res) =>{
    console.log("creating");
    const {service_provider,flight_nomber,source_city,dest_city,start_time,end_time} = req.body;
    console.log("creating");

    flightModel.create({service_provider,flight_nomber,source_city,dest_city,start_time,end_time}).then(flightOBJ => res.status(201)
    .send({
        success:true,
        message:"flightdetails created",
        flightOBJ
    }))
    .catch(err=>res.status(400)
        .send({
            success:false,
            message:"not created",
            err
        }));
}

export const flightlist = (req,res)=>{
    console.log("GET => Users LIST");

    flightModel.find({}).then(flightList => res.status(200)
.send({
    success:true,
    flightList
}))
.catch(err => res.status(400).send({
    success:false,
    message:"unable to fetch users data",
    err
}));
};