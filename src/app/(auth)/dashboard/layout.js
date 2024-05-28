import { verifyAuth } from "@/lib/auth";

import { redirect } from "next/navigation";

import { SearchBook, SideBar } from "@/components";

export default async function Page({ children }) {
  /*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const result = await verifyAuth();
  if (!result.user) {
    redirect("/login");
  }
  return (
    <div className="flex mx-auto w-full">
      <SideBar />

      <div className="px-4 flex-1 flex-col ">
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
}
