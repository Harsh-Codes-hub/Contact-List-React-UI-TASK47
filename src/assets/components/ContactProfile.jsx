import ProfileToolbar from "./ProfileToolbar";
import UserAvatar from "./UserAvatar";

const ContactProfile = ({contact , onClose}) => {

  console.log(contact); 

  return (
    <article className="h-full w-75 px-x py-2 mx-auto">
      <header className="flex items-center text-2xl">
        <button
          type="button"
          className="mr-auto"
           onClick={onClose}
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button
          type="button"
          className="mr-4"
        >
          <i className="ri-delete-bin-line"></i>
        </button>
        <button
          type="button"
          className=""
        >
          <i className="ri-share-line"></i>
        </button>
      </header>
      <main className="flex flex-col items-center mt-2 gap-4 justify-center">
        {contact.imageURL ? (
          <img
            src={contact.imageURL}
            alt="Contact-image"
            className="rounded-full border-0 outline-0 h-40"
          />
        ) : (<UserAvatar name={contact.firstName} imageHeight={40} textSize={"text-6xl"} />) }

        <h2 className="mt-2 text-2xl font-semibold">{`${contact.firstName} ${contact.surname}`}</h2>

        <ProfileToolbar />



      </main>
    </article>
  )
}

export default ContactProfile
