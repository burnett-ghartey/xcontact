import "./Home.css";
import React from "react";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import AddContact from "../../components/AddContact/AddContact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const menus = [
  { name: "Dashboard", url: "notifications", src: "notifications.svg" },
  { name: "Recent", url: "notifications", src: "notifications.svg" },
  { name: "Notifications", url: "notifications", src: "notifications.svg" },
  { name: "Trash", url: "notifications", src: "notifications.svg" },
  { name: "Settings", url: "notifications", src: "notifications.svg" },
];

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  const notify = (message, type = "success") => toast(message, { type });

  return (
    <div className="home">
      {showContact && (
        <AddContact setShowContact={setShowContact} notify={notify} />
      )}
      <div className="home-container">
        <div className="header">
          <div className="logo h-block">
            <img src={logo} alt="logo" width="80px" />
          </div>
          <div className="nav h-block">
            <ul
              className="home-nav-items"
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                listStyleType: "none",
              }}
            >
              <li className="selected">Contacts</li>
              <li>Favourites</li>
              <li>Groups</li>
            </ul>
          </div>
          <div
            className="account h-block"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              style={{ cursor: "pointer" }}
              src="/assets/icons/315813_moon_half_icon.png"
              alt="theme"
              width="55px"
            />
            <img
              style={{
                borderRadius: "50%",
                border: "2px solid #000B58",
                cursor: "pointer",
              }}
              src="/assets/images/uifaces-popular-image.jpg"
              alt="user"
              width="35px"
            />
          </div>
        </div>
        <div className="home_layout">
          <div className="left">
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                cursor: "pointer",
              }}
            >
              {menus.map((menu, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "2px", color: "#5f6c7b" }}
                >
                  <img src={menu.src} width="40px" />
                  {menu.name}
                </li>
              ))}
            </ul>
            <div className="add-contact-wrap">
              <button
                onClick={() => setShowContact(true)}
                className="addcontact-btn"
              >
                Add contact
              </button>
            </div>
          </div>
          <div className="middle">middle</div>
          <div className="right">right</div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
