import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLocation } from "../../store";
import {
  ModalBackground,
  ModalWrapper,
  ModalContent,
  InputWrapper,
  TextInput,
  ModalText,
  CloseModalButton,
  SuggestionLocationWrapper,
  Suggestion,
  SuggestionTextWrapper,
  MainText,
  SubText,
  SuggestionIcon,
} from "./LocationModalElements";

const LocationModal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const [suggestion, setSuggestion] = useState([]);
  // eslint-disable-next-line
  const [locations, setLocation] = useState([
    ["Kulina", "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru"],
    [
      "Pancoran Riverside Appartement",
      "RT.6/RW.1, Pengadengan, Pancoran, South Jakarta",
    ],
    [
      "Jalan Tulodong Atas 28",
      "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru",
    ],
    [
      "Block71 Jakarta",
      "Ariobimo Sentral, South Jakarta, RT.9/RW.4, East Jakarta",
    ],
  ]);

  const findSuggestion = (text) => {
    if (text.length >= 3) {
      let match = locations.filter((location) => {
        const regex = new RegExp(`${text}`, "gi");
        return location[0].match(regex) || location[1].match(regex);
      });
      setSuggestion(match);
    } else {
      setSuggestion([]);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeLocation(suggestion[0][0]));
    setShowModal((prev) => !prev);
    setSuggestion([]);
  };

  return (
    <>
      {showModal ? (
        <ModalBackground onClick={() => setShowModal(false)}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <ModalText>Cek Makanan yang tersedia di lokasi kamu!</ModalText>
              <InputWrapper>
                <span
                  className="material-icons"
                  style={{ marginLeft: "16px", color: "#f9234a" }}
                >
                  location_on
                </span>
                <TextInput onChange={(e) => findSuggestion(e.target.value)} />
              </InputWrapper>
              <SuggestionLocationWrapper>
                {suggestion &&
                  suggestion.map((location, index) => (
                    <Suggestion key={index} onClick={handleClick}>
                      <SuggestionIcon>
                        <span
                          className="material-icons"
                          style={{ color: "#6e7679" }}
                        >
                          location_on
                        </span>
                      </SuggestionIcon>
                      <SuggestionTextWrapper>
                        <MainText>{location[0]}</MainText>
                        <SubText>{location[1]}</SubText>
                      </SuggestionTextWrapper>
                    </Suggestion>
                  ))}
              </SuggestionLocationWrapper>
            </ModalContent>
            <CloseModalButton
              className="material-icons"
              aria-label="Close Modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              close
            </CloseModalButton>
          </ModalWrapper>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default LocationModal;
