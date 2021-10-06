import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>ABOUT US</h1>
            </div>
            <div className={styles.row}>
                <div className={styles.decoBox}>
                    <div className={styles.deco}>
                        <div className={styles.box1} />
                        <div className={styles.box2} />
                        <div className={styles.box3} />
                        <div className={styles.box2} />
                        <div className={styles.box2} />
                        <div className={styles.box3} />
                        <div className={styles.box3} />
                        <div className={styles.box3} />
                        <div className={styles.box4} />
                    </div>
                </div>
                <h2 className={styles.left}>BUSINESS</h2>
                <div className={styles.right}>
                    <p>Excel Carpet Cleaning, locally owned since 1991,
                        is your full service resource for carpet,
                        upholstery and tile cleaning.</p>

                    <p>We use state-of-the-art truck mounted
                        Hydramaster steam cleaning equipment, with
                        drying times in as little as 2 to 3 hours!</p>

                    <p>We appreciate your business, so give us a call
                        for a free phone estimate, or same day service
                        at 425-394-0404</p>

                    <p>Our service area covers the entire Eastside,
                        Pierce and South King County</p>

                    <p>All other areas by special request only.</p>
                </div>
            </div>
            <div className={styles.row}>
                <h2 className={styles.left}>PRODUCTS</h2>
                <div className={styles.right}>
                    <p>We use state-of-the-art products made by
                        Bridgepoint Systems that are environmentally
                        gentle, with a mild Ph to be kid and pet friendly!</p>
                </div>
                <div className={styles.decoBox}>
                    <div className={styles.deco}>
                        <div className={styles.box1} />
                        <div className={styles.box2} />
                        <div className={styles.box3} />
                        <div className={styles.box2} />
                        <div className={styles.box2} />
                        <div className={styles.box3} />
                        <div className={styles.box3} />
                        <div className={styles.box3} />
                        <div className={styles.box4} />
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <h2 className={styles.left}>STAFF</h2>
                <div className={styles.right}>
                    <p>Our carpet cleaning technicians are IICRC trained and use the very best
                        products and cleaning methods to insure the absolutely best results!</p>
                </div>
                <div className={styles.decoBox}>
                    <div className={styles.deco}>
                        <div className={styles.box1} />
                        <div className={styles.box2} />
                        <div className={styles.box3} />
                        <div className={styles.box2} />
                        <div className={styles.box2} />
                        <div className={styles.box3} />
                        <div className={styles.box3} />
                        <div className={styles.box3} />
                        <div className={styles.box4} />
                    </div>
                </div>
            </div>
        </div>
    )
}