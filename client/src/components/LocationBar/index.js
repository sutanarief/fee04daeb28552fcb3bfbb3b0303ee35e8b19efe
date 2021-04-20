import React, { useState } from "react";
import { useSelector } from "react-redux";
import LocationModal from "../LocationModal";
import {
  LocationButton,
  LocationBarWrapper,
  LocationSubText,
  LocationBarContent,
} from "./LocationBarElements";

const LocationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useSelector((state) => state.location);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
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
            <span style={{ color: "#424749", backgroundColor: "#fff" }}>
              {location || "Select Location"}
            </span>
            <span
              className="material-icons"
              style={{ color: "#f9423a", backgroundColor: "#fff" }}
            >
              keyboard_arrow_down
            </span>
          </LocationButton>
          <LocationModal showModal={showModal} setShowModal={setShowModal} />
        </LocationBarContent>
      </LocationBarWrapper>
    </>
  );
};

export default LocationBar;
