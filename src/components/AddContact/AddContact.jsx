import React, { useState, useRef, useEffect } from "react";
import "./AddContact.css";
import Button from "../Button/Button";

import {
  validateEmail,
  validateDates,
  validateName,
  validatePhone,
} from "../../utils/validate";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function AddContact({ setShowContact, notify }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    notes: "",
    birthday: "",
    website: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [addedDateError, setAddedDateError] = useState("");
  const [notesError, setNotesError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const contactRef = useRef(null);

  const [notes, setNotes] = useState("");
  const maxChars = 255;

  const handleNotes = () => {
    if (formData.notes.length <= maxChars) {
      setNotes(formData.notes);
    }
  };

  const handleClickOutside = (event) => {
    if (contactRef.current && !contactRef.current.contains(event.target)) {
      setShowContact(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "notes") {
      handleNotes();
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setShowContact(false);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        validateName(formData.name) === true &&
        validateEmail(formData.email) === true &&
        validatePhone(formData.phone) === true
      ) {
        setIsLoading(true);
        const contactRef = collection(db, "contact");
        const docRef = await addDoc(contactRef, formData);

        notify("Contact added successfully!", "success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          address: "",
          birthday: "",
          dateAdded: "",
          notes: "",
        });

        setShowContact(false);
      } else {
        setIsLoading(false);
        const nameErr = validateName(formData.name);
        const emailErr = validateEmail(formData.email);
        const phoneErr = validatePhone(formData.phone);
        const dateAddedErr = validateDates(formData.dateAdded);

        if (nameError) {
          setNameError(nameErr);
        }
        if (emailError) {
          setEmailError(emailErr);
        }
        if (phoneErr) {
          setPhoneError(phoneErr);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={contactRef} className="add-contact">
      <div className="add-contact-container">
        <div className="header">
          <div>
            <h2 style={{ marginTop: "4px", fontSize: "24px", fontWeight: 500 }}>
              New Contact
            </h2>
            <span style={{ fontSize: "14px" }}>
              Add agencies/individuals to your contact list.
            </span>
          </div>
          <img
            onClick={() => setShowContact(false)}
            style={{ cursor: "pointer" }}
            src="/assets/icons/x.svg"
            alt="close"
          />
        </div>
        <span
          style={{
            display: "block",
            height: "1px",
            width: "100%",
            backgroundColor: "#dee2e6",
            margin: "10px 0",
          }}
        ></span>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type here"
              />
            </div>
            <div className="form-group-container-x2">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Type here"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="form-group-container-x2">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Type here"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">location</label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="form-group-container-x2">
              <div className="form-group">
                <label htmlFor="birthday">Birthday</label>
                <input
                  id="birthday"
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  placeholder="select"
                />
              </div>
              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                value={formData.notes}
                style={{
                  resize: "none",
                  height: "150px",
                  borderRadius: "8px",
                  padding: "8px 10px",
                  border: "1px solid #dee2e6",
                  outline: "none",
                }}
                id="notes"
                name="notes"
                onChange={handleChange}
                placeholder="Type here"
              >
                {notes}
              </textarea>
              <span style={{ color: "#000", fontSize: "13px" }}>
                {maxChars - notes.length} characters left
              </span>
            </div>

            <div style={{ display: "flex", gap: "4px" }}>
              <Button type="cancel" onclick={handleCancel} btnLight nfbtn>
                Cancle
              </Button>
              <Button
                loading={isLoading}
                type="submit"
                onclick={handleSubmit}
                nfbtn
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>

   
    </div>
  );
}
