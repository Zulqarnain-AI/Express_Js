import mongoose from 'mongoose'

 const stafschema = mongoose.Schema({
    id:Number,
    name:String,
    age:Number
})
export default stafschema