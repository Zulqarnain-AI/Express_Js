import stafschema from '../schema/stafschema.js'
import mongoose from 'mongoose'

const studentmodel =mongoose.model("staf",stafschema)

export default studentmodel