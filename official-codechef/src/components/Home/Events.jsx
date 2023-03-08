import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./UpcomingEvents";
import styles from "../../styles/Home.module.css";

const Events = () => {
  return (
    <div className={styles.Events}>
      <PastEvents />
      <UpcomingEvents />
    </div>
  );
};

export default Events;
