'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BookSchema = new schema({
    name: {
        type: String,
        required: true
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});
module.exports = mongoose.model("Books", BookSchema);