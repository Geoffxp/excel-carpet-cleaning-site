import Script from "next/script"

import styles from "../styles/Acuity.module.css";

export default function Acuity() {
    return (
        <div className={styles.container}>
            <Script 
                src="https://embed.acuityscheduling.com/js/embed.js" 
                type="text/javascript" />
            <iframe 
                className={styles.content}
                src="https://app.squarespacescheduling.com/schedule.php?owner=20895810" 
                title="Schedule Appointment" 
                width="100%" 
                height="1000px" 
                frameBorder="0" />
        </div>
    )
}