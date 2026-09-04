import ContactCard from "./ContactCard";

const ContactList = ({ headline, users, onContactClick }) => {
  return (
    <section>
      <h3 className="my-1">{headline}</h3>

      <ul className="flex flex-col gap-2">
        {users.length ? (
          users.map((user) => (
            <li key={user.id}>
              <ContactCard {...user} onClick={() => onContactClick(user)} />
            </li>
          ))
        ) : (
          <h1 className="text-center">No Contacts</h1>
        )}
      </ul>
    </section>
  );
};

export default ContactList;
