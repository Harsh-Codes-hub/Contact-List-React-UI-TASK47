import { useEffect, useState } from "react";
import { getContacts, saveContacts } from "../utils/storage";

import ContactCard from "../components/ContactCard";
import ContactList from "../components/ContactList";
import CreateContact from "../components/CreateContact";
import ContactProfile from "../components/ContactProfile";

const NormalEntry = ({ user }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [allContacts, setAllContacts] = useState(getContacts());
  const [showCreateContact, setShowCreateContact] = useState(false);
  const [descending, setDescending] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedIsUser, setSelectedIsUser] = useState(false);

  const saveNewContact = (contact) => {
    const newContact = {
      ...contact,
      id: crypto.randomUUID(),
    };

    const updatedContacts = [...allContacts, newContact];

    setAllContacts(updatedContacts);
    saveContacts(updatedContacts);
  };

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const getGroup = (firstName) => {
    const firstChar = firstName.trim().charAt(0).toUpperCase();

    if (/^[A-Z]$/.test(firstChar)) {
      return firstChar;
    }

    if (/^[0-9]$/.test(firstChar)) {
      return firstChar;
    }

    return "#";
  };

  useEffect(() => {}, [allContacts]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const fav = allContacts.filter((contact) => contact.fav);
  const filteredContacts = allContacts.filter((contact) => {
    const fullName = `${contact.firstName} ${contact.surname}`.toLowerCase();

    return (
      fullName.includes(searchQuery) ||
      contact.phNo.includes(searchQuery) ||
      contact.email.toLowerCase().includes(searchQuery)
    );
  });
  const groupedContacts = {};

  allContacts.forEach((contact) => {
    const group = getGroup(contact.firstName);

    if (!groupedContacts[group]) {
      groupedContacts[group] = [];
    }

    groupedContacts[group].push(contact);
  });

  const groupOrder = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", ..."0123456789"];

  const sortedGroups = Object.keys(groupedContacts).sort((a, b) => {
    const aIndex = groupOrder.indexOf(a);
    const bIndex = groupOrder.indexOf(b);

    return descending ? bIndex - aIndex : aIndex - bIndex;
  });

  const sortHandler = () => {
    setDescending((prev) => !prev);
  };

  const deleteContact = (targetId) => {
    let choice = confirm("Are you sure?");
    if (choice) {
      const updatedContacts = allContacts.filter(
        (contact) => contact.id !== targetId,
      );
  
      setAllContacts(updatedContacts);
      saveContacts(updatedContacts);
      alert("Contact Deleted.")
      setSelectedContact(null);
    } else {
      alert("Contact not deleted.")
    }
  };

  return (
    <section className="w-75 md:w-200 mx-auto py-1 px-2">
      {showCreateContact && (
        <div className="fixed inset-0 z-50 bg-gray-950 scrollbar-none">
          <CreateContact
            headline="Create Contact"
            favBtn={true}
            mode="contact"
            onClose={setShowCreateContact}
            saveContact={saveNewContact}
          />
        </div>
      )}

      {selectedContact && (
        <div className="fixed inset-0 z-50 bg-gray-950">
          <ContactProfile
            contact={selectedContact}
            onClose={() => setSelectedContact(null)}
            onDelete={deleteContact}
            selectedIsUser={selectedIsUser}
          />
        </div>
      )}

      <header>
        <div className="flex items-center border px-2 rounded-full py-1">
          <i className="ri-search-line text-xl"></i>

          <input
            type="text"
            name="searchContacts"
            id="searchContacts"
            placeholder="Search contacts"
            className="mr-auto ml-2 outline-0 w-full"
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
          onClick={() => setShowCreateContact(true)}
        >
          Create Contact
        </button>
      </header>

      <main className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between px-2">
          <h1 className="flex items-center gap-1">
            All contacts <i className="ri-arrow-down-s-line"></i>
          </h1>

          <button type="button" onClick={sortHandler}>
            <i className="ri-menu-4-line"></i>
          </button>
        </div>

        <ContactCard
          {...user}
          onClick={() => {
            setSelectedContact(user);
            setSelectedIsUser(true);
          }}
        />

        <ContactList
          headline="Favorite"
          users={fav}
          onContactClick={(contact) => {
            setSelectedContact(contact);
            setSelectedIsUser(false);
          }}
        />

        <div>
          <h2 className="my-1">All Contacts</h2>

          {allContacts.length === 0 ? (
            <p className="text-center py-8 text-slate-100">No Contacts</p>
          ) : searchQuery ? (
            filteredContacts.length === 0 ? (
              <p className="text-center py-8 text-slate-100">
                No Contacts Found
              </p>
            ) : (
              <ContactList
                headline="Search Results"
                users={filteredContacts}
                onContactClick={(contact) => {
                  setSelectedContact(contact);
                  setSelectedIsUser(false);
                }}
              />
            )
          ) : (
            sortedGroups.map((group) => (
              <ContactList
                key={group}
                headline={group}
                users={groupedContacts[group]}
                onContactClick={(contact) => {
                  setSelectedContact(contact);
                  setSelectedIsUser(false);
                }}
              />
            ))
          )}
        </div>
      </main>
    </section>
  );
};

export default NormalEntry;
