import React, { useEffect, useState } from "react";
import Image from "next/image";
import media from "../assets/gallery/index";
import styles from "../styles/Carousel.module.css"

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const [deck, setDeck] = useState([]);
  const [full, setFull] = useState(false);
  useEffect(() => {
    let tempDeck = []
    if (currentImage <= 2) {
      setDeck([0,1,2,3,4]);
    }
    if (currentImage > 2) {
      for(let i = currentImage - 3; i < currentImage + 2; i++) {
        console.log(tempDeck)
        tempDeck.push(i+1)
      }
      setDeck(tempDeck);
      tempDeck = [];
    }
    if (currentImage > 19) {
      setDeck([18,19,20,21,22]);
    }
    
    
  }, [currentImage]);
  const handleTab = ({ target }) => {
    console.log(target.name)
    setCurrentImage(parseInt(target.name))
  }
  const increment = () => {
    if (currentImage <= 21) {
      setCurrentImage(currentImage + 1)
    }
  }
  const decrement = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1)
    }
  }
  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.caroConsole}>
          <div className={styles.btnBox}>
            <div className={styles.leftBtn} onClick={decrement}/>
          </div>
          <div className={full ? styles.fullSize : styles.main}>
            <div className={full ? styles.closeBtn : styles.expandBtn} onClick={() => setFull(!full)}/>
            <Image src={media[currentImage]} alt={currentImage} />
          </div>
          <div className={styles.btnBox}>
            <div className={styles.rightBtn}  onClick={increment}/>
          </div>
        </div>
        <div className={styles.deck} onClick={handleTab}>
          {deck && deck.map(itemNumber => {
            return (
              <>
                <div key={itemNumber} className={itemNumber == currentImage ? styles.active : styles.inactive}>
                  <Image 
                    src={media[itemNumber]} 
                    name={itemNumber} 
                    layout="fill"
                    objectFit="cover"
                    alt={itemNumber} 
                    onClick={handleTab} />
                </div>
              </>
            )})}
        </div>
      </div>
    </>
  )
}
