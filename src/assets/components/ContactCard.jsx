import UserAvatar from "./UserAvatar";

const ContactCard = ({ firstName, surname, imageURL, phNo, onClick }) => {
  return (
    <article
      className="border border-slate-400 p-2 gap-4 rounded-xl flex items-center"
      onClick={onClick}
    >
      {imageURL ? (
        <img
          src={imageURL}
          alt={`${firstName} profile`}
          className="aspect-square h-8 rounded-full object-center object-cover"
        />
      ) : (
        <UserAvatar name={firstName} imageHeight={8} />
      )}
      <div className="mr-auto flex flex-col">
        <h2 className="text-nowrap">{`${firstName} ${surname}`}</h2>
        <h3 className="text-sm text-slate-300">{phNo}</h3>
      </div>
      <button type="button" className="">
        <i className="ri-share-line"></i>
      </button>
    </article>
  );
};

export default ContactCard;
