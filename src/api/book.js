"use server";
import { Book, BookStatus } from "@/lib/models";


export async function getAllBooks() {
  
  const books = await Book.find({});
  return books;
}
export async function findBooks(query) {
  //if query is empty, return all books
  if (!query) {
    return getAllBooks();
  }
  const books = await Book.find({
    $or: [
      {
        title: { $regex: query },
      },
      { author: { $regex: query } },
      { publisher: { $regex: query } },
      { language: { $regex: query } },
      { category: { $regex: query } },
    ],
  });
  return books;
}
