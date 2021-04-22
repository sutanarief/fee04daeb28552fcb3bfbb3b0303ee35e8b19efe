import React, { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import {
  ButtonWrapper,
  RadioButton,
  InputLabel,
} from "./ButtonLunchDinnerElements";

const ButtonLunchDinner = () => {
  const [show, setShow] = useState(false);
  const { scrollY } = useViewportScroll();

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setShow(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setShow(true);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
    // eslint-disable-next-line
  }, []);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, x: -10000 },
  };

  return (
    <motion.div
      className="actions"
      variants={variants}
      animate={show ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }}
    >
      <ButtonWrapper id="button-lunch-dinner">
        <RadioButton defaultChecked type="radio" name="time" id="Lunch" />
        <InputLabel
          htmlFor="Lunch"
          id="LunchLabel"
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        >
          Lunch
        </InputLabel>
        <RadioButton type="radio" name="time" id="Dinner" />
        <InputLabel
          htmlFor="Dinner"
          id="DinnerLabel"
          style={{
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          Dinner
        </InputLabel>
      </ButtonWrapper>
    </motion.div>
  );
};

export default ButtonLunchDinner;
