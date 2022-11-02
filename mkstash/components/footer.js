import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return(
        <div className={styles.container}>
            
        <div className={styles.contain}>
            <div className={styles.left}>
            <Image src="/images/MkStash-White.svg" width={125} height={40} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
                <div className={styles.icons}>
                    <Link href="https://facebook.com/"><Image src="/images/facebook.png" width={20} height={20} /></Link>
                    <Link href="https://twitter.com/"><Image src="/images/twitter.png" width={21} height={21} /></Link>
                    <Link href="https://instagram.com/"><Image src="/images/instagram.png" width={21} height={21} /></Link>
                </div>
            </div>
            <div className={styles.contact}>
                <p><b>Contact Us</b></p>
                <p><i class="bi bi-geo-alt"></i> Mankato Mississippi 96522</p>
                <p><i class="bi bi-telephone"></i> (257) 563-7401</p>
                <p><i class="bi bi-envelope"></i>  loremipsum@mkstash.com</p>
            </div>
        </div>

        <br/>
        <br/>

        <hr/>

        <div className={styles.contain}>
            <p>Copyright ©2021 MK Stash. All rights reserved.</p>
            <div className={styles.right}>
                <Link href="/policy"><p>Privacy</p></Link>
                <Link href="/terms"><p>Terms</p></Link>
            </div>
        </div>
        </div>
    )
}

export default Footer;