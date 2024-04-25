import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be of at least 3 Characters."],
        maxLength: [30, "First name cannot exceed 30 Characters."],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be of at least 3 Characters."],
        maxLength: [30, "Last name cannot exceed 30 Characters."],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 Digits."],
        maxLength: [10, "Phone number must contain 10 Digits."],
    },
    sweetname: {
        type: String,
        required: true,
        minLength: [3, "First name must be of at least 3 Characters."],
        maxLength: [30, "First name cannot exceed 30 Characters."],
    },
    qunatity: {
        type: String,
        required: true,
        minLength: [20, "Must be atleast 20 kgs"],

    },
    street: {
        type: String,
        required: true,
        minLength: [3, "Street name must be of at least 3 Characters."],

    },
    city: {
        type: String,
        required: true,
        minLength: [3, "City name must be of at least 3 Characters."],

    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);