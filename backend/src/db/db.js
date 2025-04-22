import mongoose from 'mongoose'
import config from '../config/config.js'

const connectDB = async () => {
    return mongoose.connect(config.MONGO_URI)
}

export default connectDB