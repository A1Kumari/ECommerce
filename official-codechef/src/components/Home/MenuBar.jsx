import React from "react";
import styles from "../../styles/MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Container}>
        <div>About</div>
        <div>Departments</div>
        <div>Our Team</div>
        <div>Past Events</div>
        <div>Upcoming Events</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default MenuBar;
