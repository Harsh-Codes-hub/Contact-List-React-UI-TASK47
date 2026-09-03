const ContactProfile = ({contact , onClose}) => {

  console.log(contact); 

  return (
    <article className="h-full w-75 px-4 py-2">
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
      <main className="border">
        <img src="" alt="" />
      </main>
    </article>
  )
}

export default ContactProfile
