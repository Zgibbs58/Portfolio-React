import { useState } from "react";

import { validateEmail } from "../utils/helper";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e, inputName) => {
    console.log(e);
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
    // Checking on every change to the inputs and displaying an error message if empty or not valid

    if (!document.getElementById(`${inputName}`).value) {
      document.getElementById(`${inputName}Error`).textContent = "This is a required field.";
    } else {
      document.getElementById(`${inputName}Error`).textContent = "";
    }
    if (!email) {
      document.getElementById(`emailError`).textContent = "";
    } else if (!validateEmail(email)) {
      document.getElementById(`emailError`).textContent = "Please enter a valid email.";
    }
  };

  //   Checking everytime the cursor leaves the input to see if it is empty and displaying a required message if so
  const handleBlur = (inputName) => {
    if (!document.getElementById(`${inputName}`).value) {
      document.getElementById(`${inputName}Error`).textContent = "This is a required field.";
    } else {
      document.getElementById(`${inputName}Error`).textContent = "";
    }
  };
  // Checking to confirm email entry and validate email
  const handleEmailBlur = () => {
    if (!email) {
      document.getElementById(`emailError`).textContent = "This is a required field.";
    } else if (!validateEmail(email)) {
      document.getElementById(`emailError`).textContent = "Please enter a valid email.";
    } else {
      document.getElementById(`emailError`).textContent = "";
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
    alert(`Thanks for your submission, ${firstName}`);

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
          <p className="text-red-500 text-s italic pb-6">{errorMessage}</p>
          <div className="flex flex-wrap mx-3 pb-6">
            <div className="w-full md:w-1/2 px-3 pb-6 md:pb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold pb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="firstName"
                type="text"
                placeholder="Jane"
                name="firstName"
                value={firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
                onBlur={() => handleBlur("firstName")}
              />
              <p id="firstNameError" className="text-red-500 text-xs italic"></p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold pb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                type="text"
                placeholder="Doe"
                name="lastName"
                value={lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
                onBlur={() => handleBlur("lastName")}
              />
              <p id="lastNameError" className="text-red-500 text-xs italic"></p>
            </div>
          </div>
          <div className="flex flex-wrap mx-3 pb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold pb-2" htmlFor="grid-password">
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                placeholder="user@gmail.com"
                type="email"
                value={email}
                name="email"
                onChange={(e) => handleInputChange(e, "email")}
                onBlur={handleEmailBlur}
              />
              <p id="emailError" className="text-red-500 text-xs italic"></p>
            </div>
          </div>
          <div className="flex flex-wrap mx-3 pb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold pb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="message"
                value={message}
                onChange={(e) => handleInputChange(e, "message")}
                onBlur={() => handleBlur("message")}
              ></textarea>
              <p id="messageError" className="text-red-500 text-xs italic"></p>
            </div>
          </div>
          <button
            className="px-4 py-3 mb-10 bg-slate-900 text-slate-200 text-s font-semibold rounded hover:bg-slate-200 hover:text-slate-900 transition ease-in-out delay-100"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
