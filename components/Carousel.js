import React, { useEffect, useState } from "react";
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
// import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import media from "../assets/gallery/index";

import styles from "../styles/Carousel.module.css"

// export default function Carousel() {
//   const [viewportRef, embla] = useEmblaCarousel({
//     dragFree: false,
//     containScroll: "trimSnaps"
//   });
//   const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
//   const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
//   const slides = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
//   const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
//   const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
//   const onSelect = useCallback(() => {
//     if (!embla) return;
//     setPrevBtnEnabled(embla.canScrollPrev());
//     setNextBtnEnabled(embla.canScrollNext());
//   }, [embla]);

//   useEffect(() => {
//     if (!embla) return;
//     embla.on("select", onSelect);
//     onSelect();
//   }, [embla, onSelect]);

//   return (
//     <div className={styles.embla}>
//       <div className={styles.embla__viewport} ref={viewportRef}>
//         <div className={styles.embla__container}>
//           {media.map((slide, index) => (
//             <div className={styles.embla__slide} key={index}>
//               <div className={styles.embla__slide__inner}>
//                 <Image src={slide} layout="fixed" objectFit="cover" alt={index} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
//       <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
//     </div>
//   );
// };

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
            <div className={styles.leftBtn} onClick={decrement}/>
            <div className={full ? styles.fullSize : styles.main}>
              <div className={full ? styles.closeBtn : styles.expandBtn} onClick={() => setFull(!full)}/>
              <Image src={media[currentImage]} alt={currentImage} />
              </div>
            <div className={styles.rightBtn}  onClick={increment}/>
        </div>
        <div className={styles.deck} onClick={handleTab}>
          {deck && deck.map(itemNumber => <Image 
            className={itemNumber == currentImage ? styles.active : styles.inactive}
            key={itemNumber} 
            width="100px" 
            height="100px" 
            src={media[itemNumber]} 
            name={itemNumber} 
            alt={itemNumber} 
            onClick={handleTab} />)}
        </div>
      </div>
    </>
  )
}
