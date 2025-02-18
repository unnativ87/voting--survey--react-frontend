import styles from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Left Section */}
                <div className={styles.section}>
                    <h3>Election Commission of India</h3>
                    <p>The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India.</p>
                    <p>📍 Nirvachan Sadan, Ashoka Road, New Delhi 110001</p>
                    <div className={styles.socialIcons}>
                        <Link to="#" className={styles.icon}>📷</Link>
                        <Link to="#" className={styles.icon}>📘</Link>
                        <Link to="#" className={styles.icon}>▶</Link>
                    </div>
                </div>

                {/* Center Section */}
                <div className={styles.section}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="https://www.eci.gov.in/">About ECI</Link></li>
                        <li><Link to="https://www.eci.gov.in/">Apply for Voter Card</Link></li>
                        <li><Link to="https://www.eci.gov.in/">Download cVIGIL</Link></li>
                        <li><Link to="https://www.eci.gov.in/">Political Parties Registration</Link></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className={styles.section}>
                    <h3>ECI Apps Links</h3>
                    <div className={styles.appIcons}>
                        <img src="/voterhelp.png" alt="Voter App" />
                        <img src="/SakshamApp.png" alt="Saksham App" /> <br /> <br />
                        <img src="/KYCApp.png" alt="KYC App" />
                        <img src="/cVIGILCitizenApp.png" alt="Location App" />
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy; Copyright Election Commission of India 2024</p>
            </div>
        </footer>
    );
}

export default Footer;
