import styles from "../styles/Intro.module.css"

export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.col}>
                <div className={styles.aspectRatio}>
                    <iframe src="https://www.youtube.com/embed/wEY7PDlzde4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className={styles.col}>
                <h1>PROFESSIONAL CARPET CLEANING SERVICES</h1>
                <h2>Our goal in business is to provide our customers the best quality service at a fair price.</h2>
                <p>Excel Carpet Cleaning, locally owned since 1991, is your full service resource for carpet, upholstery, tile, hardwood floor and air duct cleaning.</p>
                <p>We use state-of-the-art truck mounted HydraMaster steam cleaning equipment, with drying times as little as 2-3 hours!</p>
                <p className={styles.important}>For Residential and Commercial cleaning, we can meet your needs and exceed your expectations!</p>
            </div>

        </div>
    )
}