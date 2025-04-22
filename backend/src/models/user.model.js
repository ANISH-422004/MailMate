import mongoose from 'mongoose'
import cryptoJs from 'cryptojs'
import config from '../config/config';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    token: {
        type: String,
        required: true,
        default: null
    },

})


userSchema.post('save', async function (next) {
    // encrypt token 
    if ( this.token && this.token.isModified() ) {
        this.token = cryptoJs.AES.encrypt(this.token, config.TOKEN_SECRET).toString()
        await this.save()
    }
    next()
})


const userModel = mongoose.model('User', userSchema)
export default userModel