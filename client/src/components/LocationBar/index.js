import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart";
import LocationModal from "../LocationModal";
import {
  LocationButton,
  LocationBarWrapper,
  LocationSubText,
  LocationText,
  LocationBarContent,
} from "./LocationBarElements";

const LocationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useSelector((state) => state.location);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <LocationBarWrapper>
        <div style={{ margin: "24px 0px 16px 16px" }}>
          <span
            className="material-icons"
            style={{
              fontSize: "35px",
              cursor: "pointer",
              color: "#424749",
            }}
          >
            arrow_back
          </span>
        </div>
        <LocationBarContent>
          <LocationSubText>ALAMAT PENGANTARAN</LocationSubText>
          <LocationButton onClick={openModal}>
            <LocationText style={{ color: "#424749", backgroundColor: "#fff" }}>
              {location || "Select Location"}
            </LocationText>
            <span
              className="material-icons"
              style={{ color: "#f9423a", backgroundColor: "#fff" }}
            >
              keyboard_arrow_down
            </span>
          </LocationButton>
          <LocationModal showModal={showModal} setShowModal={setShowModal} />
        </LocationBarContent>
        <Cart />
      </LocationBarWrapper>
    </div>
  );
};

export default LocationBar;
