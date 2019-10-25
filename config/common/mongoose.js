import mongoose from 'mongoose';

const database = "airlines";
const host = "127.0.0.1";
const dialect = "mongodb";
const port = 27017;

const connectdburl = `${dialect}://${host}:${port}/${database}`;


export default mongoose.connect(connectdburl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})