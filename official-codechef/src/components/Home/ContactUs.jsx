import React from 'react'
import styles from "../../styles/ContactUs.module.css";
import Image from 'next/image';
import Map from "../../../public/assets/map.png"
import { MdLocationOn} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import {BsTelephoneFill} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Link from 'next/link';
const ContactUs = () => {
  return (
    <IconContext.Provider value={{color:"white", }}>
    <div className={styles.contact}>
        <div className={styles.head}>
        <p className={styles.heading}> Get In Touch!</p>
        <p className={styles.sub_heading}>Contact us for any queries.</p>
        </div>
        <div className={styles.main}>
            <div className={styles.left}>
                <p className={styles.lefthead}>Contact Information</p>
                <Link href="https://maps.app.goo.gl/yGUXSmzyvBqqkneS9"><Image
            className={styles.img}
            src={Map}
            alt="Picture of the map"
            width={230}
            height={160}
            /></Link>
            <div className={styles.bottomcontent}>
            <div className={styles.icons}>
            <p><MdLocationOn /></p><p className={styles.icontext}>FC-26, Shastri Park, New Delhi - 110 053</p>
            </div>
            <div className={styles.icons}>
            <p><BsTelephoneFill/></p><p className={styles.icontext}>(123) 456-7890</p>
            </div>
            <div className={styles.icons}>
            <p> <MdEmail/></p><p className={styles.icontext}>codechefadgitm@gmail.com</p>
            </div>
            </div>
            </div>

            <div className={styles.right}>
                <div className={styles.input1}>
                    <div className={styles.input1a}>
                <label htmlFor="name">Your Name</label>
                <div>
                <input type="text" id="name" name="name" />
                </div>
                </div>
                <div className={styles.input1a}>
                <label htmlFor="email">Your Email</label>
                <div>
                <input type="text" id="email" name="email" />
                </div>
                </div>
                </div>
                <div className={styles.input2}>
                <label htmlFor="msg">Your Message</label><br/>
                <p>Write your message here</p>
                <div>
                <input type="text"  id='msg' name='msg'/>
                </div>
                </div>
                <Link href=""><button className={styles.btn}>Send Message</button></Link>
            </div>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default ContactUs