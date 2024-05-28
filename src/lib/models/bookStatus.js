import mongoose from "@/lib/db";

const bookStatusSchema = new mongoose.Schema({
    book_id: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    appliedDate: {
      type: Date,
      required: true,
    },
    memberId: {
      type: String,
      required: true,
    },
  });
  
   const BookStatus =
    mongoose.models?.BookStatus ?? mongoose.model("BookStatus", bookStatusSchema);

    export default BookStatus;
  