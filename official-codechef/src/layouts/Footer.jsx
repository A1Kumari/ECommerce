import React from "react";
import styles from "../styles/Footer.module.css";
import { MdLocationOn, MdCall } from "react-icons/md";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <hr className={styles.Bar} />
      <div className={styles.main}>
        <div className={styles.Container}>
          <div className={styles.TopContainer}>
            <div className={styles.Top}>
              <div className={styles.TopLeft}>
                <img
                  src="https://user-images.githubusercontent.com/86917304/222976499-a8a87f10-c223-45b5-992e-1c8e20d27c2d.png"
                  width={100}
                />
              </div>
              <div className={styles.TopRight}>
                <div className={styles.icon}>
                  <MdLocationOn size={25} color="#194EB1" />
                  FC-26, Shastri Park, New Delhi - 110 053
                </div>
                <div className={styles.icon}>
                  <MdCall size={25} color="#194EB1" />
                  (123) 456-7890
                </div>
                <div className={styles.mediaCon}>
                  <div className={styles.media}>
                    <p style={{ color: "#a3a7b1" }}>Social Media</p>
                    <div>
                      <AiFillFacebook size={20} color="#194EB1" />
                    </div>
                    <div>
                      <AiOutlineTwitter size={20} color="#194EB1" />
                    </div>
                    <div>
                      <AiFillLinkedin size={20} color="#194EB1" />
                    </div>
                    <div>
                      <AiFillYoutube size={20} color="#194EB1" />
                    </div>
                    <div>
                      <BsInstagram size={20} color="#194EB1" />
                    </div>
                    <div>
                      <AiOutlineGooglePlus size={20} color="#194EB1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Bottom}>
            <div className={styles.BottomLeft}>
              <div>ABOUT US</div>
              <div>CONTACT US</div>
              <div>PAST EVENTS</div>
              <div>OUR TEAM</div>
              <div>DISCLAIMER</div>
            </div>
            <div className={styles.BottomRight}>
              <p style={{ color: "#A3A7B1" }}>
                Copyright © 2022 • ABC Company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
