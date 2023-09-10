import { useState } from "react";

import { validateEmail } from "../utils/helper";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, firstName, lastName, and message.
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "firstName") {
      setFirstName(inputValue);
    } else if (inputType === "lastName") {
      setLastName(inputValue);
    } else {
      setMessage(inputValue);
    }
    // Checking on every change to the email input and displaying an error message if not valid
    if (!validateEmail(email)) {
      console.log("trigger");
      document.getElementById(`emailError`).textContent = "Please enter a valid email.";
    } else {
      document.getElementById(`emailError`).textContent = "";
    }
  };

  //   Checking everytime the cursor leaves the input to see if it is empty and displaying a required message if so
  const handleBlur = (inputName) => {
    if (!document.getElementById(`${inputName}`).value) {
      document.getElementById(`${inputName}Error`).textContent = "This is a required field.";
    } else if (!validateEmail(email)) {
      console.log("trigger");
      document.getElementById(`emailError`).textContent = "Please enter a valid email.";
    } else {
      document.getElementById(`${inputName}Error`).textContent = "";
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    //   We check to see if an input is empty and set the errorMessage to say it's a required field.
    if (!firstName || !lastName || !email || !message) {
      setErrorMessage("Please complete all required sections of the form.");
      return;
    }
    alert(`Hello ${firstName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <h1 className="pt-8 text-5xl font-bold text-slate-900">Contact</h1>
      <div className="flex justify-center pt-8">
        <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
          <p className="text-red-500 text-s italic mb-6">{errorMessage}</p>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="firstName"
                type="text"
                placeholder="Jane"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                onBlur={() => handleBlur("firstName")}
              />
              <p id="firstNameError" className="text-red-500 text-xs italic"></p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                type="text"
                placeholder="Doe"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                onBlur={() => handleBlur("lastName")}
              />
              <p id="lastNameError" className="text-red-500 text-xs italic"></p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={() => handleBlur("email")}
              />
              <p id="emailError" className="text-red-500 text-xs italic"></p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
                value={message}
                onChange={handleInputChange}
                onBlur={() => handleBlur("message")}
              ></textarea>
              <p id="messageError" className="text-red-500 text-xs italic"></p>
            </div>
          </div>
          <button
            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
