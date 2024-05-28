import Image from "next/image";
import { findBooks } from "@/api/book";
import { BooksItem } from "@/components";

const BookList = async ({ query }) => {
  let books = await findBooks(query);

 
  books = books.map(book=>{
 
 
   const convertedBook = JSON.parse(JSON.stringify(book));
  
   return convertedBook ;
 
  })

  return (
    <>
      {books.length === 0 && (
        <p className="flex justify-center items-center mt-[20%] text-3xl font-bold ">
          Sorry! No Book Found
        </p>
      )}
      <BooksItem books={books} />
    </>
  );
};

export default BookList;
