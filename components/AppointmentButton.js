import styles from "../styles/AppointmentButton.module.css";

export default function AppointmentButton() {
    return (
        <div className={styles.container}>
            <button className={styles.btn}>Click here to schedule an appointment!</button>
        </div>
    )
}