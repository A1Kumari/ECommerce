import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import MenuBar from "../components/Home/MenuBar";

const Navbar = () => {
  const [show, setshow] = useState(true);
  return (
    <>
      <div className={styles.Nav}>
        <div className={styles.NavbarContainer}>
          <div>
            <img
              width={80}
              src="https://user-images.githubusercontent.com/86917304/222976499-a8a87f10-c223-45b5-992e-1c8e20d27c2d.png"
            />
          </div>
          <div hidden={show} style={{ zIndex: "999" }}>
            <MenuBar />
          </div>
          <div className={styles.NavRight}>
            <div className={styles.RightButton}>Become a Member</div>
            <div onClick={() => setshow(!show)}>
              <HiOutlineBars3 style={{ cursor: "pointer" }} size={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
