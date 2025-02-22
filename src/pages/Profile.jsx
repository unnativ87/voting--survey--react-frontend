import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./profile.module.css";

function Profile() {

    const data = [
        {
            id: 1,
            name: "Election 2025",
            candidateName: "ABX",
            numberOfVotes: 15000,
            img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
            constituency: {
                id: 101,
                name: "New Delhi"
            }
        },
        {
            id: 2,
            name: "Election 2025",
            candidateName: "HGD",
            numberOfVotes: 18000,
            img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
            constituency: {
                id: 102,
                name: "Mumbai South"
            }
        },
        {
            id: 3,
            name: "Election 2025",
            candidateName: "DFG",
            numberOfVotes: 20000,
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
            constituency: {
                id: 103,
                name: "Bangalore Central"
            }
        },
        {
            id: 4,
            name: "Election 2025",
            candidateName: "DJNFK",
            numberOfVotes: 22000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHs69kWak7vyxH7KKh6Gg1kdGPqEkNE2rwlecT0hdjM3B7OmjE2zX2YTB4IbD703l3alc&usqp=CAU",
            constituency: {
                id: 104,
                name: "Chennai North"
            }
        },
        {
            id: 5,
            name: "Election 2025",
            candidateName: "ROUOW",
            numberOfVotes: 17000,
            img: "https://t3.ftcdn.net/jpg/04/77/87/44/360_F_477874414_kSQ9ip26804g8B3ItYsh5XsjNRgqf693.jpg",
            constituency: {
                id: 105,
                name: "Kolkata South"
            }
        }
    ];






    const [user, setUser] = useState(null);
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get voterId from session storage
    const voterId = sessionStorage.getItem("voterId");

    useEffect(() => {
        if (!voterId) {
            alert("No voter ID found. Please log in.");
            return;
        }

        // Fetch user details by voterId
        axios.get(`http://localhost:8090/api/user/voterId/${voterId}`) // Change API URL
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching user data:", error));

        // Fetch candidates list
        axios.get("http://localhost:8080/api/candidates") // Change API URL
            .then(response => setCandidates(response.data))
            .catch(error => console.error("Error fetching candidates:", error));
    }, [voterId]);

    const handleVote = async (candidateId) => {
        if (!user || user.hasVoted) return;

        try {
            const response = await axios.post("http://localhost:8080/api/vote/check", {
                voterId: user.voterId
            });

            if (response.data.alreadyVoted) {
                alert("You have already voted!");
                return;
            }

            // Cast vote
            await axios.post("http://localhost:8080/api/vote/cast", {
                voterId: user.voterId,
                candidateId: candidateId
            });

            alert("Vote cast successfully!");
            setUser(prevUser => ({ ...prevUser, hasVoted: true }));
            sessionStorage.setItem("hasVoted", "true"); // Update session
        } catch (error) {
            console.error("Error casting vote:", error);
        }
    };

    if (loading) return <h2>Loading...</h2>;
    console.log(candidates); // error handling

    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                
                {/* User Profile Section (25%) */}
                <div className={styles.userCard}>
                    <img src="./img/user.png" alt="User" className={styles.profileImage} />
                    <h3>{user.name}</h3>
                    <p><strong>Voter ID:</strong> {user.voterId}</p>
                    <p><strong>Status:</strong> {user.hasVoted ? "Voted" : "Not Voted"}</p>
                </div>

                {/* Candidate List Section (75%) */}
                <div className={styles.candidatesContainer}>
                    {data.map(candidate => (
                        // {candidates.map(candidate => (
                        <div key={candidate.id} className={styles.candidateCard}>
                            {/* <img src={candidate.img} alt="Party Logo" className={styles.partyLogo} />
                            <img src="./img/party.png" alt="Candidate" className={styles.candidateImage} /> */}
                            <img src="./img/party.png" alt="Candidate" className={styles.partyLogo} />
                            <img src={candidate.img} alt="Party Logo" className={styles.candidateImage} />
                            <h3>{candidate.candidateName}</h3>
                            <button
                                className={styles.voteButton}
                                onClick={() => handleVote(candidate.id)}
                                disabled={user.hasVoted}
                            >
                                {user.hasVoted ? "Voted" : "Vote"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
