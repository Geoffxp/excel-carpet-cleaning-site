import Link from "next/link"

import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h1>EXCEL CARPET CLEANING SERVICES</h1>
            <p>We appreciate your business, so give us a call or
                text us at 425-394-0404 for a free phone
                estimate, or same day service. Email us at
                excelcarpetcleaning@gmail.com</p>
            <Link href="/contact"><a>Contact Us</a></Link>
            <Link href="/contact"><a>About Us</a></Link>
        </div>
    )
}