import styles from "./home.module.css";

function Home() {
    return (
        <div className={styles.container}>
            {/* Header */}
            {/* <header className={styles.header}>
                <div className={styles.logoSection}>
                    <img src="/eci-logo.png" alt="ECI Logo" className={styles.logo} /> 
                    <h2>भारत निर्वाचन आयोग</h2>
                    <h3>Election Commission of India</h3>
                </div>
                <div className={styles.navbar}>
                    <button>🏠 Home</button>
                    <button>🌐 Hindi</button>
                    <button>🔄 Refresh</button>
                </div>
            </header> */}

            {/* By-Election Notice */}
            {/* <div className={styles.electionBanner}> */}
                {/* <strong>Voting Survey</strong> */}
                {/* <p>Milkipur (Uttar Pradesh) / Erode (East) (Tamil Nadu)</p> */}
            {/* </div> */}

            {/* Disclaimer */}
            <div className={styles.disclaimer}>
                <p><strong>Voting Survey</strong> is a web-based application designed to facilitate the collection and analysis of voter preferences through digital surveys. The system allows users to participate in surveys related to elections, providing insights into public opinion. It ensures data integrity and transparency by storing responses securely.</p>
            </div>

            {/* Main Content */}
            <main className={styles.main}>
                <h2>General Election to Assembly Constituencies: Trends & Results February-2025</h2>
                <h3 className={styles.nctTitle}>NCT of <span>Delhi</span></h3>

                {/* Party-wise results */}
                <div className={styles.resultsContainer}>
                    <div className={styles.partyResult}>
                        <h3>BJP</h3>
                        <p className={styles.voteCount}>48</p>
                    </div>
                    <div className={styles.partyResultBlue}>
                        <h3>AAAP</h3>
                        <p className={styles.voteCount}>22</p>
                    </div>
                </div>

                {/* Tables and Dropdown */}
                <div className={styles.tableContainer}>
                    {/* <div className={styles.table}>
                        <h3>Party Wise Results</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Party</th>
                                    <th>Won</th>
                                    <th>Leading</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bharatiya Janata Party - BJP</td>
                                    <td>48</td>
                                    <td>0</td>
                                    <td>48</td>
                                </tr>
                                <tr>
                                    <td>Aam Aadmi Party - AAAP</td>
                                    <td>22</td>
                                    <td>0</td>
                                    <td>22</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}

                    {/* <div className={styles.dropdownContainer}>
                        <h3>Constituency Wise Results</h3>
                        <select>
                            <option>Select Constituency</option>
                            <option>Chandni Chowk</option>
                            <option>New Delhi</option>
                            <option>South Delhi</option>
                        </select>
                    </div> */}
                </div>
            </main>
        </div>
    );
}

export default Home;
