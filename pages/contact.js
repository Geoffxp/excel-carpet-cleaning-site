import Link from "next/link";
import Image from "next/image";
import fb from "../assets/images/fbicon.png";

import styles from "../styles/Contact.module.css";

export default function Contact() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>CONTACT US</h1>
                <p>excelcarpetcleaning@gmail.com</p>
                <p>(425) 394-0404</p>
                <p>26828 Maple Valley Hwy, Suite 194, Maple Valley, WA 98038</p>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.facebook.com/excelcarpetcleaninginc"
                >
                    <div className={styles.icon}>
                        <Image src={fb} alt="fbicon"/>
                    </div>
                </a>
            </div>
            <div className={styles.col}>
                <form target="_blank" action="https://formsubmit.co/excelcarpetcleaning@gmail.com" method="POST">
                    <p>Name *</p>
                    <div className={styles.formRow}>
                        <div className={styles.col}>
                            <input type="text" name="firstName" required />
                            <p className={styles.label}>First Name</p>
                        </div>
                        <div className={styles.col}>
                            <input type="text" name="lastName" />
                            <p className={styles.label}>Last Name</p>
                        </div>
                    </div>
                    <p>Email *</p>
                    <div className={styles.formRow}>
                        <input type="email" name="email" required />
                    </div>
                    <p>Message *</p>
                    <div className={styles.formRow}>
                        <textarea name="message" rows="10" required></textarea>
                    </div>
                    <button type="submit" className={styles.btn}>Send</button>
                </form>
            </div>
            
            
        </div>
        </>
    )
}