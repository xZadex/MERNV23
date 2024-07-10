const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: [true, "Pirate name is required"],
    },
    Image:{
        type: String,
        required: [true, "Image of the pirate is required"]
    },
    Chests:{
        type: Number,
        required: [true, "Number of Treasure Chests are required"]
    },
    CatchPhrase:{
        type: String,
        required: [true, "Please include a catch phrase"]
    },
    CrewPosition:{
        type: String,
        required: [true, "Please pick a position"]
    },
    PegLeg:{
        type: Boolean,
        default: true,
    },
    EyePatch:{
        type: Boolean,
        default: true,
    },
    HookHand:{
        type: Boolean,
        default: true,
    }
}, {timestamps: true})

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;