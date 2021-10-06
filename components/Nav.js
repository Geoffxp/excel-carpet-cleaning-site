import Link from "next/link";
import Image from "next/image";
import banner from "../assets/images/Banner+bold.png";

import styles from "../styles/Nav.module.css"
import { useState } from "react";

export default function Nav() {
    const [tab, setTab] = useState(-1)
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.bannerContainer}>
                    <Link href="/"><Image 
                        onClick={() => setTab(-1)}
                        className={styles.banner} 
                        src={banner} 
                        alt="banner"
                        layout="fill"
                        objectFit="contain"/></Link>
                </div>
                <ul>
                    <Link href="/scheduling">
                        <li onClick={() => setTab(1)} className={tab === 1 ? styles.active : null}>
                            <h3>SCHEDULING</h3>
                        </li>
                    </Link>
                    <Link href="/about">
                        <li onClick={() => setTab(2)} className={tab === 2 ? styles.active : null}>
                        <h3>ABOUT US</h3>  
                        </li>
                    </Link> 
                    <Link href="/services">
                        <li onClick={() => setTab(3)} className={tab === 3 ? styles.active : null}>
                            <h3>SERVICES / PRICING</h3>    
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li onClick={() => setTab(4)} className={tab === 4 ? styles.active : null}>
                            <h3>CONTACT US</h3>  
                        </li>
                    </Link> 
                    <Link href="/faq">
                        <li onClick={() => setTab(5)} className={tab === 5 ? styles.active : null}>
                            <h3>FAQ</h3>
                        </li>
                    </Link>   
                    <Link href="/gallery">
                        <li onClick={() => setTab(6)} className={tab === 6 ? styles.active : null}>
                            <h3>GALLERY</h3>  
                        </li>
                    </Link> 
                </ul>
            </nav>
        </>
    )
}