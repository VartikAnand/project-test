"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactusSection: React.FC = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = formData;

    try {
      const response = await axios.post("/api/user", values);
      if (response.status === 200) {
        toast("We Will contact you soon!");
        // Clear form data upon successful submission
        setFormData(initialFormData);
      } else {
        toast.warn("Something Went Wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again later.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Let's Talk
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Feature request? Suggestion? or maybe you'd like to be our critic!
          Here's a form just for that.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-
900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                placeholder="Your First Name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-
900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-
900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                placeholder="Your Last Name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-
900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-
900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                placeholder="Your Company Name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-
gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-
inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-
900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your Email Address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-
gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-
inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-
900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="Your
Phone Number"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-
600 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-
900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Share your thoughts..."
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset
ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm
sm:leading-6"
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-sm py-2 w-full
block"
          >
            Submit →
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactusSection;
