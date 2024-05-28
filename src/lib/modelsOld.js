import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  memberType: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);

const sessionSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    expires_at: {
      type: Date,
      required: true,
    },
  },
  { _id: false }
);

export const Session =
  mongoose.models?.Session ?? mongoose.model("Session", sessionSchema);

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
export const Book = mongoose.models?.Book ?? mongoose.model("Book", bookSchema);

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

export const BookStatus =
  mongoose.models?.BookStatus ?? mongoose.model("BookStatus", bookStatusSchema);
