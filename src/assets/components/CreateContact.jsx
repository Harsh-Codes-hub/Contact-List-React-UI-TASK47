import { useState } from "react";
import Input from "./Input";
import inputData from "../data/inputData";
import { saveUser } from "../utils/storage";

const CreateContact = ({ headline, favBtn, setUser }) => {
  const initialFormData = {
    firstName: "",
    surname: "",
    imageURL: "",
    purpose: "",
    phNo: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phNo" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetHandler = () => {
    setFormData(initialFormData);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    saveUser(formData);
    setUser(formData);

    setFormData(initialFormData);
  };

  return (
    <form className="h-dvh w-75 mx-auto py-2" onSubmit={submitHandler}>
      <header className="flex items-center">
        <button type="button" className="mr-2 text-2xl">
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <h1 className="mr-auto text-md font-medium">{headline}</h1>
        {favBtn ? (
          <button type="button" className="mr-2 text-md">
            <i className="ri-star-line"></i>
          </button>
        ) : (
          <></>
        )}
      </header>
      <section className="flex flex-col gap-2 mt-40">
        {inputData.map((e, idx) => (
          <Input
            key={`input${idx}`}
            {...e}
            value={formData[e.inputName]}
            onChange={handleChange}
          />
        ))}
        <div className="flex gap-2 mt-4">
          <button
            type="reset"
            className="w-1/2 border rounded-lg px-2 text-md py-1 active:bg-red-400 active:text-black border-slate-600"
            onClick={resetHandler}
          >
            Reset
          </button>
          <button
            type="submit"
            className="w-1/2 border rounded-lg px-2 text-md py-1 active:bg-green-400 active:text-black border-slate-600"
          >
            Save
          </button>
        </div>
      </section>
    </form>
  );
};

export default CreateContact;
