import style from "./adminDashboard.module.css"
import ActiveElection from "../component/activeConstituencyElection/ActiveElection";
import PartyRegister from "../component/party/PartyRegister";
import PartyCard from "../component/partyCard/PartyCard";
import ActiveParty from "../component/activeConstituencyParty/ActiveParty";
import LiveAgainElection from "../component/liveAgain/LiveAgainElection";
import ConstituencyTable from "../component/constituencyTableAndParty/ConstituencyTable";

const AdminDashboard = () => {
    return (
        <>
        <div className={style.container}>
            <h1>Admin Dashboard</h1>
            <div className={style.component}><PartyRegister /></div>
            <div className={style.component}><ActiveElection /></div>
            <div className={style.component}><PartyCard/></div>
            <div className={style.component}><ActiveParty/></div>
        </div>
            <div className={style.component}><LiveAgainElection/></div>
            <div className={style.component}><ConstituencyTable/></div>
        </>
    );
};

export default AdminDashboard;
