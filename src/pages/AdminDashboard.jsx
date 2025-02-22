import style from "./adminDashboard.module.css"
import ActiveElection from "../component/activeConstituencyElection/ActiveElection";
import PartyRegister from "../component/party/PartyRegister";
import PartyCard from "../component/partyCard/PartyCard";
import ActiveParty from "../component/activeConstituencyParty/ActiveParty";

const AdminDashboard = () => {
    return (
        <div className={style.container}>
            <h1>Admin Dashboard</h1>
            <div className={style.component}><PartyRegister /></div>
            <div className={style.component}><ActiveElection /></div>
            <div className={style.component}><PartyCard/></div>
            <div className={style.component}><ActiveParty/></div>
            
        </div>
    );
};

export default AdminDashboard;
