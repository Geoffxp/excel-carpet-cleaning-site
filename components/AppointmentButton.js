import Link from "next/link"
import styles from "../styles/AppointmentButton.module.css";

export default function AppointmentButton() {
    return (
        <div className={styles.container}>
            <Link href="/scheduling"><button className={styles.btn}>Click here to schedule an appointment!</button></Link>
        </div>
    )
}