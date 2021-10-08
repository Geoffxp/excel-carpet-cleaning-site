import Link from "next/link";
import Image from "next/image";
import banner from "../assets/images/Banner+bold.png";

import styles from "../styles/Nav.module.css"
import { useState } from "react";

export default function Nav() {
    const [tab, setTab] = useState(-1);
    const [open, setOpen] = useState(false);
    const handleTab = ({ target }) => {
        setTab(target.value)
        setOpen(false)
    }

    return (
        <>
            <nav className={open ? styles.openNav : styles.nav}>
                <div className={open ? styles.bannerOpen : styles.bannerContainer}>
                    <Link href="/" passHref={true}><Image 
                        onClick={handleTab}
                        className={styles.banner} 
                        src={banner}
                        alt="banner"
                        layout="fill"
                        objectFit="contain"/></Link>
                </div>
                <h1 onClick={() => setOpen(!open)} className={styles.menu}>{open ? "CLOSE" : "MENU"}</h1>
                <div className={open ? styles.open : styles.closed}>
                    <Link href="/scheduling" passHref={true}>
                        <h3 onClick={handleTab} value={1} className={tab === 1 ? styles.active : null}>
                            SCHEDULING
                        </h3>
                    </Link>
                    <Link href="/about" passHref={true}>
                        <h3 onClick={handleTab} value={2} className={tab === 2 ? styles.active : null}>
                            ABOUT US
                        </h3>  
                    </Link> 
                    <Link href="/services" passHref={true}>
                        <h3 onClick={handleTab} value={3} className={tab === 3 ? styles.active : null}>
                            SERVICES / PRICING
                        </h3>
                    </Link>
                    <Link href="/contact" passHref={true}>
                        <h3 onClick={handleTab} value={4} className={tab === 4 ? styles.active : null}>
                            CONTACT US
                        </h3>
                    </Link> 
                    <Link href="/faq" passHref={true}>
                        <h3 onClick={handleTab} value={5} className={tab === 5 ? styles.active : null}>
                            FAQ
                        </h3>
                    </Link>   
                    <Link href="/gallery" passHref={true}>
                        <h3 onClick={handleTab} value={6} className={tab === 6 ? styles.active : null}>
                            GALLERY
                        </h3>  
                    </Link> 
                </div>
                <ul>
                    <Link href="/scheduling" passHref={true}>
                        <li onClick={() => setTab(1)} className={tab === 1 ? styles.active : null}>
                            <h3>SCHEDULING</h3>
                        </li>
                    </Link>
                    <Link href="/about" passHref={true}>
                        <li onClick={() => setTab(2)} className={tab === 2 ? styles.active : null}>
                        <h3>ABOUT US</h3>  
                        </li>
                    </Link> 
                    <Link href="/services" passHref={true}>
                        <li onClick={() => setTab(3)} className={tab === 3 ? styles.active : null}>
                            <h3>SERVICES / PRICING</h3>    
                        </li>
                    </Link>
                    <Link href="/contact" passHref={true}>
                        <li onClick={() => setTab(4)} className={tab === 4 ? styles.active : null}>
                            <h3>CONTACT US</h3>  
                        </li>
                    </Link> 
                    <Link href="/faq" passHref={true}>
                        <li onClick={() => setTab(5)} className={tab === 5 ? styles.active : null}>
                            <h3>FAQ</h3>
                        </li>
                    </Link>   
                    <Link href="/gallery" passHref={true}>
                        <li onClick={() => setTab(6)} className={tab === 6 ? styles.active : null}>
                            <h3>GALLERY</h3>  
                        </li>
                    </Link> 
                </ul>
            </nav>
        </>
    )
}