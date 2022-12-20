import OpportunitiesCSS from "./styles/Opportunities.module.css";
import SearchOpportunities from "../components/Opportunities/SearchOpportunities";
import StartupOpportunities from "../components/Opportunities/StartupOpportunities";
import StartupDisplay from "../components/Opportunities/StartupDisplay";


function Opportunities() {
    return (
        <>
        
        <div className={OpportunitiesCSS.container}>
            <div className={OpportunitiesCSS.left}>
                <SearchOpportunities/>
                <StartupOpportunities />
            </div>
            <div className={OpportunitiesCSS.right}>
                <StartupDisplay />
            </div>
        </div>
        </>
    )
}

export default Opportunities