import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: "customer",
        enum: ["admin", "customer"]
    }
}, { timestamps: true })

export default mongoose.model("user", userSchema)