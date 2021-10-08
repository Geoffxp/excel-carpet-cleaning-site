import carpet from "../assets/images/carp.png"
import upholstery from "../assets/images/upholstery.png"
import tile from "../assets/images/brtiles.png"
import commercial from "../assets/images/commercial.png"
import pet from "../assets/images/pet.png"
import scotch from "../assets/images/scotch.png"
import wood from "../assets/images/wood.png"
import duct from "../assets/images/duct.PNG"
import rug from "../assets/images/offsiterug.png"

import Image from "next/image"
import styles from "../styles/Services.module.css"

export default function ServiceGrid() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.gridItem}>
                        <h1>CARPET</h1>
                        <div className={styles.imgContainer}><Image src={carpet} alt="carpet" layout="fill" objectFit="cover" /></div>
                        <h2>Any 5 Rooms/Areas only $249.00</h2>
                        <h3>Minimum Charge: $169.00</h3>
                        <p>(Up to 3 Rooms/Areas )</p>
                        <h3>Additional Rooms/Areas / Area Rugs: $40.00 (Each)</h3>
                        An area is defined as a room, staircase or hallway.
                        Living room and dining room combos  and large bonus rooms equal two areas.
                        Max 14x14 ft per room/area.
                    </div>
                    <div className={styles.gridItem}>
                        <h1>UPHOLSTERY</h1>
                        <div className={styles.imgContainer}><Image src={upholstery} alt="upholstery" layout="fill" objectFit="cover" /></div>
                        <h2>Couch &amp; Loveseat Special! $199</h2>
                        <h3>Sofa/Couch: $129.00</h3>
                        <h3>Loveseat: $99.00</h3>
                        <h3>Chair: $59.00</h3>
                        <h3>Sectional: $20.00 per linear foot</h3>

                    </div>
                    <div className={styles.gridItem}>
                        <h1>TILE</h1>
                        <div className={styles.imgContainer}><Image src={tile} alt="tile" layout="fill" objectFit="cover" /></div>
                        <h2>Floor Tile &amp; Grout</h2>
                        <h3>Cleaning: $1.00 (Per sq ft)</h3>
                        <h3>Sealant: $.50  (Per Sq Ft)</h3>
                    </div>
                    <div className={styles.gridItem}>
                        <h1>COMMERCIAL CARPET</h1>
                        <div className={styles.imgContainer}><Image src={commercial} alt="commercial" layout="fill" objectFit="cover" /></div>
                        <h2>$.20* to .30 Per Sq Ft</h2>
                        <h3>($199.00 Minimum Charge)</h3>
                        <p>(*Larger sq ft = Larger Discount)</p>
                        <h3>We clean office buildings,
                            banks, credit unions, medical
                            offices, restaurants etc.</h3>

                        <h3>Day or evening cleaning
                            available, Monday to Saturday</h3>

                        <p>Commercial carpets will be
                            clean and dry in 2 to 3 hours.
                            Some of our valued customers
                            are Anthony&apos;s Homeport, Helac
                            Corporation, White River CU,
                            and Sammamish Bluff Condos.</p>
                    </div>
                    <div className={styles.gridItem}>
                        <h1>PET TREATMENT</h1>
                        <div className={styles.imgContainer}><Image src={pet} alt="pet" layout="fill" objectFit="cover" /></div>
                        <h2>$20.00 Per Area*</h2>
                        <h3>(2 Area Minimum)</h3>
                        <p>*Must include purchase of carpet cleaning</p>

                        <h2>Our 3 step process will
                            remove urine, odor and stain
                            from your carpets leaving
                            them clean and smelling fresh.</h2>

                        <h3>Our method dissolves the
                            urine salts and suspends them
                            for extraction.We then treat
                            any stain and odor left on the
                            carpet after the cleaning is
                            finished.</h3>
                    </div>
                    <div className={styles.gridItem}>
                        <h1>SCOTCHGARD</h1>
                        <div className={styles.imgContainer}><Image src={scotch} alt="scotch" layout="fill" objectFit="cover" /></div>
                        <h2>$15.00 Per Area*</h2>
                        <h3>(2 Area Minimum)</h3>
                        <p>*Must include purchase of carpet cleaning</p>

                        <h3>Scotchgard will be applied
                            after cleaning, on all traffic
                            areas that have been cleaned.</h3>

                        <h2>Over 1 billion pounds of carpet
                            are thrown away every year.
                            Protect your investment and
                            keep your carpets looking
                            fresh longer by having them
                            cleaned regularly and treated
                            with Scotchgard protectant.</h2>
                    </div>
                    <div className={styles.gridItem}>
                        <h1>HARDWOOD FLOOR</h1>
                        <div className={styles.imgContainer}><Image src={wood} alt="wood" layout="fill" objectFit="cover" /></div>
                        <h2>$1.00 (per sq ft)</h2>
                        <h2>Includes sealant!</h2>
                        <h3>Our state of the art wood floor cleaning machine
                            will bring the life back to your floors, and with no risk
                            of swelling or scratching!</h3>
                    </div>
                    <div className={styles.gridItem}>
                        <h1>AIR DUCTS</h1>
                        <div className={styles.imgContainer}><Image src={duct} alt="duct" layout="fill" objectFit="cover" /></div>
                        <a href="https://www.youtube.com/watch?v=aYjLtgu4Zo4" target="_blank" rel="noreferrer"><h1>&rarr;RAMAIR DEMO VIDEO&larr;</h1></a>
                        <h2>Vent Cleaning Special! $299.00</h2>
                        <h4>(2 returns and 12 vents)</h4>

                        <h2>Additional Vents</h2>
                        <h3>$20.00 per floor vent / $30.00 per ceiling vent</h3>

                        <h2>Dryer Vent Cleaning</h2>
                        <h3>$129.00 per dryer vent</h3>

                        <h2>Cold Air Return</h2>
                        <h3>$40.00 per air return</h3>

                        
                        <h4>RamAir is a revolutionary duct cleaning process that allows for state-of-the-art 
                        forced air cleaning with no mess or debris, and it won’t harm duct surfaces!</h4>

                        The patented RamAir ClearView Duct Cleaning System is the most effective system to date, as well as being the first system ever created that allows the homeowner to actually see all the dust and debris as it is being removed from the duct system by way of a clear polycarbonate viewing box.This revolutionary new system has been quickly gaining recognition and praise worldwide.
                    </div>
                    <div className={styles.gridItem}>
                        <h1>RUGS</h1>
                        <div className={styles.imgContainer}><Image src={rug} alt="rug" layout="fill" objectFit="cover" /></div>
                        <h1>Inquire by phone!</h1>
                        <h2>Offsite deep water bath!</h2>
                        <h2>Urine Removal Specialists!</h2>
                    </div>
                </div>
            </div>
        </>
    )
}