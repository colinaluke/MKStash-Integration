import styles from '../../styles/shop.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {

    return (
        <div className={`${styles['footer']}`}>
            <div className={`container py-4`} style={{'paddingBottom':'0px !important'} }>
                <div className="row">
                    <div className={`${styles['footerleft']} col`}>
                        <div className={`${styles["marginbot"]}`}>
                            <Image src="/images/MKStash-White.svg" height={40} width={135}></Image>
                        </div>
                        <div className={`${styles['footerleft']}`}>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </p>                    
                        </div>
                        <div>
                            <a href="https://www.facebook.com/"><i className={`bi bi-facebook ${styles['footericons']}`}></i></a>
                            <a href="https://twitter.com/"><i className={`bi bi-twitter ${styles['footericons']}`}></i></a>
                            <a href="https://www.instagram.com/"><i className={`bi bi-instagram ${styles['footericons']}`}></i></a>
                        </div>
                    </div>
                    <div className={`col ${styles["footerright"]}`}>
                        <div className={`${styles['footerfloat']}`}>
                            <p><b>Contact Us</b></p>
                            <p><i className={`bi bi-geo-alt ${styles['footercontact']}`}></i>Mankato Mississippi 96522</p>
                            <p><i className={`bi bi-telephone ${styles['footercontact']}`}></i>(257) 563-7401(257) 563-7401</p>
                            <p><i className={`bi bi-envelope ${styles['footercontact']}`}></i>loremipsum@mkstash.com</p>
                        </div>
                    </div>
                    <div>
                        <hr className={`${styles['margintop']}`}></hr>
                        <div className={`${styles['footerbar']} row`}>
                            <div className="col">
                                <p>Copyright &copy;2022 MK Stash. All rights reserved.</p>
                            </div>
                            <div className={`col ${styles['footerend']}`}>
                                <Link href="/"><span className={`${styles['footerlink']}`}> Privacy</span></Link>
                                <Link href="/"><span className={`${styles['footerlink']}`}>Terms</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer 