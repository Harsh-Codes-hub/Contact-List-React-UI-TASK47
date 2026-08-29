const inputData = [
  {
    inputName: "firstName",
    inputType: "text",
    inputPlaceHolder: "First Name",
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  {
    inputName: "surname",
    inputType: "text",
    inputPlaceHolder: "Surname",
    minLength: 0,
    maxLength: 50,
    required: false,
  },
  {
    inputName: "imageURL",
    inputType: "text",
    inputPlaceHolder: "Image URL",
    minLength: 0,
    maxLength: 273,
    required: false,
  },
  {
    inputName: "purpose",
    inputType: "text",
    inputPlaceHolder: "Purpose",
    minLength: 0,
    maxLength: 273,
    required: false,
  },
  {
    inputName: "phNo",
    inputType: "tel",
    inputPlaceHolder: "Phone Number",
    minLength: 10,
    maxLength: 10,
    required: true,
  },
  {
    inputName: "email",
    inputType: "email",
    inputPlaceHolder: "Email",
    minLength: 8,
    maxLength: 273,
    required: false,
  },
];

export default inputData;
