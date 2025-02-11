import mongoose from "mongoose";


const subSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subscription name is required"],
        trim: true,
        minLenght: 3,
        maxLenght: 90,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be greater than 0"],
        max: [100000, "Price must be less than 100000"],
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "INR"],
        default: "USD",
        required: [true, "Currency is required"],
        trim: true,
        minLenght: 3,
        maxLenght: 3,
    },
    frequency: {
        type: String,
        enum: ["monthly", "yearly", "weekly"],
        default: "monthly",
    },
    catagory: {
        type: String,
        enum: ["sports", "entertainment", "politics", "lifestyle", "technology"],
        required: [true, "Catagory is required"],
    },
    paymentMethod: {
        type: String,
        trim: true,
        required: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive", "cancelled"],
        default: "active",
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start date must be in the past"
        }
    },
    renewlDate: {
        type: Date,
        validate: {
            validator: function(value) {
                return value > this.startDate();
            },
            message: "Renew date must be after the start date",
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    }
}, { timestamps: true })


subSchema.pre('save', function(next) {
    if (!this.renewlDate) {
        const renwalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };
        this.renewlDate = new Date(this.startDate);
        this.renewlDate.setDate(this.renewlDate.getDate() + renwalPeriods[this.frequency])
    }
    if (this.renewlDate < this.startDate) {
        this.status = "expired";
    }

    next();
})


const Subscription = mongoose.model("Subscription", subSchema);

export default Subscription;
