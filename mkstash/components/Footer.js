import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.contents}>
                <div className={`row justify-content-md-center ${styles.details}`}>
                    <div className={`col-sm ${styles.company}`}>
                        <Image src="/images/MkStash-White.svg" width={125} height={40} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        <div className={`row ${styles.socialsContainer}`}>
                            <div className={`col-sm`}>
                                <Link href="https://facebook.com/">
                                    <Image src="/images/facebook.svg" width={25} height={25} />
                                </Link>
                            </div>
                            <div className={`col-sm`}>
                                <Link href="https://twitter.com/">
                                    <Image src="/images/twitter.svg" width={25} height={25} />
                                </Link>
                            </div>
                            <div className={`col-sm`}>
                                <Link href="https://www.instagram.com/">
                                    <Image src="/images/instagram.svg" width={25} height={25} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`col-sm ${styles.contact}`}>
                        <h3>Contact Us</h3>
                        <div>
                            <Image src="/images/map-pin.svg" width={20} height={20} />
                            <p>Mankato Mississippi 96522</p>
                        </div>
                        <div>
                            <Image src="/images/phone.svg" width={20} height={20} />
                            <p>(257) 563-7401</p>
                        </div>
                        <div>
                            <Image src="/images/mail.svg" width={20} height={20} />
                            <p>loremipsum@mkstash.com</p>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-sm-10">
                        <p>Copyright &copy;2022 MK Stash. All rights reserved.</p>
                    </div>
                    <div className={`col-sm-2 ${styles.links}`}>
                        <Link href="/policy"> Privacy </Link>
                        <Link href="/terms"> Terms </Link>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Footer