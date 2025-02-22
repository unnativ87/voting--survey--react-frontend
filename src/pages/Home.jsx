import { useState, useEffect } from "react";
import styles from "./home.module.css";

const VotingCards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Sample test data
        const testData = [
            { id: 1, logo: "⭐", party: "Party ABC", votes: 120 },
            { id: 2, logo: "🏮", party: "Party DEF", votes: 90 },
            { id: 3, logo: "🪻", party: "Party GHI", votes: 200 },
            { id: 4, logo: "📗", party: "Party JKL", votes: 150 },
            { id: 5, logo: "💜", party: "Party MNO", votes: 50 },
        ];
        setData(testData);
    }, []);

    // Sorting the data in descending order of votes
    const sortedData = [...data].sort((a, b) => b.votes - a.votes);
    const maxVotes = sortedData.length > 0 ? sortedData[0].votes : 0;

    return (
        <>
        <div className={styles.disclaimer}>
            <p><strong>Voting Survey</strong> is a web-based application designed to facilitate the collection and analysis of voter preferences through digital surveys. The system allows users to participate in surveys related to elections, providing insights into public opinion. It ensures data integrity and transparency by storing responses securely.</p>
        </div>
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                {sortedData.map((party) => (
                    <div 
                        key={party.id} 
                        className={
                            party.votes === maxVotes 
                                ? styles.cardHighest 
                                : styles.card
                        }
                    >
                        <div className={styles.logo}>{party.logo}</div>
                        <h3 className={styles.partyName}>{party.party}</h3>
                        <p className={styles.votes}>Votes: {party.votes}</p>
                    </div>
                ))}
            </div>

        </div>
        </>
    );
};

export default VotingCards;
