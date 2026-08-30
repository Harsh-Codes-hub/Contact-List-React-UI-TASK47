import { useState } from "react";
import ContactCard from "../components/ContactCard";
import ContactList from "../components/ContactList";

const NormalEntry = ({ user }) => {
  const [searchInput, setSearchInput] = useState("");
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };
  console.log(user);

  const fav = [];
  const sort = [
    {
      headline: "a",
      users: [1, 2, 3]
    },
    {
      headline: "b",
      users: [1, 2, 3]
    },
    {
      headline: "c",
      users: [1, 2, 3]
    },
  ]

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
            className="h-8 aspect-square rounded-full border-2 border-blue-300 object-center object-cover"
          />
        </div>
        <button
          type="button"
          className="border border-slate-400 w-full rounded-md mt-2 text-lg py-1"
        >
          Create Contact
        </button>
      </header>
      <main className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between px-2">
          <h1 className="flex items-center gap-1">
            All contacts <i className="ri-arrow-down-s-line"></i>
          </h1>
          <button type="button">
            <i className="ri-menu-4-line"></i>
          </button>
        </div>
        <ContactCard {...user} />
        <ContactList headline={"Favorite"} users={fav} />
        <div>
          {sort.map((list, idx) => {
            return <ContactList key={`list-${idx}`} {...list} />
          }) }
        </div>
      </main>
    </section>
  );
};

export default NormalEntry;
