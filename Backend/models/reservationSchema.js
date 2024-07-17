import mongoose, {Schema} from "mongoose";
import validator from "validator";



const reservationSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 characters"],
        maxLength: [30, "First name cannot exceed 30 characters"],

    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain atleast 3 characters"],
        maxLength: [30, "Last name cannot exceed 30 characters"],

    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide a valid Email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number contain only 10 digits"],
        maxLength: [10, "Phone Number contain only 10 digits"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

export const Reservation = mongoose.model("Reservation",reservationSchema); 