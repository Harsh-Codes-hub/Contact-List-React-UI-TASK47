import CreateContact from "../components/CreateContact";

const FirstEntry = ({ setUser }) => {
  return (
    <main>
      <CreateContact
        headline={"Create My contact"}
        favBtn={false}
        setUser={setUser}
        mode={"user"}
      />
    </main>
  );
};

export default FirstEntry;
