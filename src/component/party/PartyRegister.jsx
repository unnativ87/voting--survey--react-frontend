import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import style from "./partRegister.module.css";

function PartyRegister() {
    const [formData, setFormData] = useState({
        name: "",
        candidateName: "",
        img: "",
        candidateImg: "",
        constituency: { id: "" }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "constituency") {
            setFormData({
                ...formData,
                constituency: { id: value }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8090/api/party", formData);
            console.log("Form Data Submitted Successfully:", response.data);
            toast.success("Party registered successfully!");
            setFormData({ name: "", candidateName: "", img: "", candidateImg: "", constituency: { id: "" } });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to register party.");
        }
    };

    return (
        <div className={style.container}>
            <Toaster />
            <h1>Party Registration Form</h1>
            <form onSubmit={handleSubmit} className={style.form}>
                <label>Party Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                
                <label>Candidate Name:</label>
                <input type="text" name="candidateName" value={formData.candidateName} onChange={handleChange} required />
                
                <label>Party Symbol (Image URL):</label>
                <input type="text" name="img" value={formData.img} onChange={handleChange} required />
                
                <label>Candidate Image (URL):</label>
                <input type="text" name="candidateImg" value={formData.candidateImg} onChange={handleChange} required />
                
                <label>Constituency Number:</label>
                <input type="number" name="constituency" value={formData.constituency.id} onChange={handleChange} required />
                
                <button type="submit">Register Party</button>
            </form>
        </div>
    );
}

export default PartyRegister;

