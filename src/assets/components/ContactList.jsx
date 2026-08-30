import ContactCard from "./ContactCard";

const ContactList = ({ headline, users }) => {
  return (
    <section>
      <h3>{headline}</h3>

      <ul className="flex flex-col gap-2">
        {users.length ? (
          users.map((user, idx) => (
            <li key={idx}>
              <ContactCard {...user} />
            </li>
          ))
        ) : (
          <h1 className="text-center">Empty List</h1>
        )}
      </ul>
    </section>
  );
};

export default ContactList;
