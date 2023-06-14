"use client"

import { useState } from "react";


const SubmitForm = () => {

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e, fieldName) => {
    setFormValues({
      ...formValues,
      [fieldName]: e.target.value
    })
  }

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
  }

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordPattern.test(password)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let errors = {
      email: "",
      password: ""
    }

    let validEmail = validateEmail(formValues.email)
    if (validEmail === false) {
      errors.email = 'Invalid email'
    }

    let validPassword = validatePassword(formValues.password)
    if (validPassword === false) {
      errors.password = 'Invalid password'
    }

    if (validEmail && validPassword) {
      console.log('valid')
    } else {
      console.log('invalid')
      setFormErrors(errors)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="border flex flex-col gap-4 items-center w-fit rounded p-8">
        <div className="flex gap-1 flex-col p-2 hover:bg-indigo-100 rounded-xl">
          <label>First name</label>
          <input onChange={(e) => handleChange(e, 'firstName')} type="text" className="hover:border-indigo-500 w-auto border h-8" />
          <p className="text-red-500">{formErrors.firstName}</p>
        </div>
        <div className="flex gap-1 flex-col p-2 hover:bg-indigo-100 rounded-xl">
          <label>Last name</label>
          <input onChange={(e) => handleChange(e, 'lastName')} type="text" className="hover:border-indigo-500 w-auto border h-8" />
          <p className="text-red-500">{formErrors.lastName}</p>
        </div>
        <div className="flex gap-1 flex-col p-2 hover:bg-indigo-100 rounded-xl">
          <label>Username</label>
          <input onChange={(e) => handleChange(e, 'username')} type="text" className="hover:border-indigo-500 w-auto border h-8" />
          <p className="text-red-500">{formErrors.username}</p>
        </div>
        <div className="flex gap-1 flex-col p-2 hover:bg-indigo-100 rounded-xl">
          <label>Email address</label>
          <input onChange={(e) => handleChange(e, 'email')} type="email" className="hover:border-indigo-500 w-auto border h-8" />
          <p className="text-red-500">{formErrors.email}</p>
        </div>
        <div className="flex gap-1 flex-col p-2 hover:bg-indigo-100 rounded-xl">
          <label>Password</label>
          <input onChange={(e) => handleChange(e, 'password')} type="password" className="hover:border-indigo-500 w-auto border h-8" />
          <p className="text-red-500">{formErrors.password}</p>
        </div>
        <button type="submit" className="bg-indigo-500 rounded text-white px-4 py-2 mt-2">
          Submit
        </button>
      </form>
      {formValues.email}
      {formValues.password}
    </>
  );

}

export default SubmitForm;


