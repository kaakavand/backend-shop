import mongoose from "mongoose";

const Schema = mongoose.Schema;

const category = new Schema({
  title: {type : String , required : true},
  description: {type : String},
})

export default mongoose.model('Category', category, 'Category')