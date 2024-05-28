"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchVoice() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    // replace the current url with the new search term in the query
    // without rendering the current pag e
    //
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-1/2 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="search"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-[18px] h-[18px] text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
