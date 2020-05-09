import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  body: { type: String, max: 1000, required: true },
  date: { type: Date, default: Date.now },
});

//Building the messageSchema into a model
export default mongoose.model("Message", messageSchema);
