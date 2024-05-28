
import mongoose from "@/lib/db";

const bookSchema = new mongoose.Schema(
    {
      book_id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      publisher: {
        type: String,
        required: true,
      },
      language: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      cover: {
        type: String,
        required: true,
      },
    },
    { _id: false }
  );
  const Book = mongoose.models?.Book ?? mongoose.model("Book", bookSchema);

  export default Book;