import ProfileToolbar from "./ProfileToolbar";
import UserAvatar from "./UserAvatar";

const ContactProfile = ({ contact, onClose, onDelete, selectedIsUser }) => {
  return (
    <article className="h-full w-75 px-1 py-2 mx-auto">
      <header className="flex items-center text-2xl">
        <button type="button" className="mr-auto" onClick={onClose}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        {!selectedIsUser && (
          <button
            type="button"
            className="mr-4"
            onClick={() => onDelete(contact.id)}
          >
            <i className="ri-delete-bin-line"></i>
          </button>
        )}
        <button type="button" className="">
          <i className="ri-share-line"></i>
        </button>
      </header>
      <main className="flex flex-col items-center mt-2 justify-center">
        {contact.imageURL ? (
          <img
            src={contact.imageURL}
            alt="Contact-image"
            className="rounded-full border-0 outline-0 h-40"
          />
        ) : (
          <UserAvatar
            name={contact.firstName}
            imageHeight={40}
            textSize={"text-6xl"}
          />
        )}
        <div className="mt-4 flex flex-col items-center justify-center gap-1">
          {contact.purpose ? <h6>{contact.purpose}</h6> : ""}
          <h2 className="text-2xl font-semibold">{`${contact.firstName} ${contact.surname}`}</h2>
        </div>

        <ProfileToolbar />

        <section className="flex items-center gap-2 border w-65 px-2 py-1 rounded-xl border-slate-300 mt-4">
          <button type="button" className="text-4xl">
            <i className="ri-phone-fill"></i>
          </button>
          <div className="text-xs mr-auto">
            <p>{contact.phNo}</p>
            <p>Contact Number</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <button type="button">
              <i className="ri-video-on-fill"></i>
            </button>
            <button type="button">
              <i className="ri-chat-1-fill"></i>
            </button>
          </div>
        </section>

        <section className="flex items-center gap-2 border w-65 px-2 py-1 rounded-xl border-slate-300 mt-2">
          <button type="button" className="text-4xl">
            <i className="ri-mail-fill"></i>
          </button>
          <div className="text-xs mr-auto">
            <p>{contact.email}</p>
            <p>Email</p>
          </div>
        </section>
      </main>
      <hr className="my-8 w-full mx-auto" />
      <footer className="flex items-center justify-center">
        <h6>Help & Feedback</h6>
      </footer>
    </article>
  );
};

export default ContactProfile;
