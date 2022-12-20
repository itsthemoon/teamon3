import SearchOpportunitiesCSS from "./opportunitiesStyles/SearchOpportunities.module.css";
import searchIcon from "../../images/search.png";
import FilterSort from "./FilterSort.js";

function SearchOpportunities() {
    return (
        <>
        {/* Search Bar */}
        <div className={SearchOpportunitiesCSS.searchDiv}>
            <form className={SearchOpportunitiesCSS.searchForm}>
            <div className={SearchOpportunitiesCSS.formDiv}>
                <img src={searchIcon} className={SearchOpportunitiesCSS.searchIcon}/>
                <input className={SearchOpportunitiesCSS.searchInput} type="text" placeholder="Search..." />
            </div>
            </form>

            {/* Row of filters */}
            <FilterSort />
        </div>

        
        </>
    )
}

export default SearchOpportunities;