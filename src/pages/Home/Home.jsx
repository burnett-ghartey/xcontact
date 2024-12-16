import "./Home.css";
import React from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import logo from "../../assets/images/logo.png"

export default function Home() {
  //  Add a Document to a Firestore Collection
  const addContact = async () => {
    try {
      const contactRef = collection(db, "contact");
      const docRef = await addDoc(contactRef, {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123 Elm Street",
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  const updateContact = async (contactId, updatedData) => {
    try {
      // reference the specific document
      const contactRef = collection(db, "contact", contactId);

      // update the document
      await updateDoc(contactRef, updatedData);

      console.log("Document updated successfully");
    } catch (error) {
      console.log("Error updating document", error);
    }
  };

  //  Fetch Data from Firestore Using getDocs
  const fetchContacts = async () => {
    try {
      const contactRef = collection(db, "contact");

      const querySnapshot = await getDocs(contactRef);

      const contacts = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        ...doc.data(), // Document fields
      }));

      console.log("contacts", contacts);
    } catch (error) {
      console.log("Error fetching contacts", error);
    }
  };

  const deleteContact = async (contactId) => {
    try {
      const contactRef = doc(db, "contact", contactId);

      await deleteDoc(contactRef);

      console.log(`Document with ID ${contactId} deleted successfully.`);
    } catch (error) {
      console.log("Error deleting document");
    }
  };

  const getContactsbyName = async (name) => {
    try {
      const contactRef = collection(db, "contact");

      const q = query(contactRef, where("name", "===", name));

      const querySnapshot = await getDocs(q);

      const contacts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("filtered contacts", contacts);
    } catch (error) {
      console.log("");
    }
  };

  //  Combining Equality and Inequality Filters
  const queryMultiple = () => {
    try {
      const query = collection(db, "contact")
        .where("name", "==", "John Doe")
        .where("email", "==", "john@example.com");
      query.get().then((snapshot) => {
        snapshot.foreach((doc) => console.log(doc.data()));
      });
    } catch (error) {}
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" width="80px"/>
          </div>
          <div className="nav"></div>
          <div className="account"></div>
        </div>
        <div className="home_layout">
          <div className="left">1</div>
          <div className="middle"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}
