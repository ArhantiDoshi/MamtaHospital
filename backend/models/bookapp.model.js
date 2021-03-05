const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookappSchema = new Schema({
 firstname: {type: String, required: true,unique: true, trim: true},
lastname: {type: String,required:true },
contact:{type:Number,required:true},
reason:{type:String},
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Appointment = mongoose.model('Appointment',bookappSchema);

module.exports = Appointment;