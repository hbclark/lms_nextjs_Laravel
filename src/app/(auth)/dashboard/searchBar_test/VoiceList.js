import Image from "next/image";
import { findBooks } from "@/api/book";

const BookList = async ({ query }) => {
  let books = await findBooks(query);

  return (
    <>
      {books.length === 0 && (
        <p className="flex justify-center items-center mt-[20%] text-3xl font-bold ">
          Sorry! No Book Found
        </p>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((book) => (
          <li
            key={book.id}
            className="p-4 border w-[230px] border-solid border-gray-400 rounded-xl"
          >
            <Image
              src={book.cover}
              alt={book.title}
              width={200}
              height={300}
              priority
            />
            <h1 className="text-xl bold">{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.publisher} </p>
            <p>{book.language}</p>
            <p>{book.category}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
