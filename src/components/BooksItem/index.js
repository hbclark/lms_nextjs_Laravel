"use client"
import Image from "next/image";
import { useId } from "react";
import {motion,useAnimate} from "framer-motion";

const BooksItem = ({ books }) => {
  const id = useId();
  return (
    <motion.ul className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(230px,300px))] grid-rows-[repeat(6,minmax(0,300px)]"
    
    >
      {books.map((book,i) => (
        <motion.li initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5,ease:"linear",delay:i*0.3}}
        
          key={book.id + id}
          className="grid p-4 border  border-solid border-gray-400 rounded-xl grid-rows-subgrid row-span-6
            gap-0 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
            "
        >
          <Image
            src={book.cover}
            alt={book.title}
            width={200}
            height={300}
            priority
          />
          <h1 className="mt-2 text-xl font-bold text-teal-700">
            <span className="capitalize">{book.title}</span>
          </h1>
          <p>
            <span className="font-semibold">Author: </span>
            <span className="text-gray-800 capitalize"> {book.author}</span>
          </p>
          <p>
            <span className="mr-1 font-semibold text-nowrap">Publisher:</span>
            <span className="capitalize">{book.publisher}</span>
          </p>
          <p>
            <span className="font-semibold text-nowrap mr-1 ">Language:</span>
            <span className="capitalize"> {book.language}</span>
          </p>
          <p>
            <span className="font-semibold text-nowrap mr-1 ">Category:</span>
            <span className="capitalize">{book.category}</span>
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default BooksItem;
