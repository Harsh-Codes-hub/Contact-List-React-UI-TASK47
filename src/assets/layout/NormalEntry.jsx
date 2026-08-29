import { useState } from "react";

const NormalEntry = ({user}) => {
  const [searchInput, setSearchInput] = useState("");
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <section className="w-75 mx-auto py-1 px-2">
      <header>
        <div className="flex items-center border px-2 rounded-full py-1">
          <i className="ri-search-line text-xl"></i>
          <input
            type="text"
            name="searchContacts"
            id="searchContacts"
            placeholder="Search contacts"
            className="mr-auto ml-2 outline-0"
            value={searchInput}
            onChange={searchInputHandler}
          />
          <img
            src={user.imageURL}
            alt="userImage"
            className="h-8 aspect-square rounded-full border-2 border-blue-300"
          />
        </div>
        <button
          type="button"
          className="border border-slate-400 w-full rounded-md mt-2 text-lg py-1">
            Create Contact
        </button>
      </header>
      <main>
        
      </main>
    </section>
  );
};

export default NormalEntry;
