import React, { useState } from "react";
import FiltersCSS from "./StartupsStyles/Filters.module.css";

const Filters = () => {
  const [searchVisible, setSearchVisible] = useState(true);
  const [universityVisible, setUniversityVisible] = useState(true);
  const [stageVisible, setStageVisible] = useState(true);
  const [industryVisible, setIndustryVisible] = useState(true);

  return (
    <div className={FiltersCSS.container}>
      <div className="section heading">
        <h2>Filters</h2>
      </div>
      <div className="section search">
        <div className="section-header">
          <h3>Search</h3>
          <button onClick={() => setSearchVisible(!searchVisible)}>
            {searchVisible ? "▼" : "▶"}
          </button>
        </div>
        {searchVisible && <input type="text" placeholder="Search..." />}
      </div>
      <div className="section university">
        <div className="section-header">
          <h3>University</h3>
          <button onClick={() => setUniversityVisible(!universityVisible)}>
            {universityVisible ? "▼" : "▶"}
          </button>
        </div>
        {universityVisible && (
          <input type="text" placeholder="Search Universities..." />
        )}
      </div>
      <div className="section stage">
        <div className="section-header">
          <h3>Stage</h3>
          <button onClick={() => setStageVisible(!stageVisible)}>
            {stageVisible ? "▼" : "▶"}
          </button>
        </div>
        {stageVisible && (
          <div>
            <input type="checkbox" id="seedling" />
            <label for="seedling">Seedling</label>
            <br />
            <input type="checkbox" id="tree" />
            <label for="tree">Tree</label>
            <br />
            <input type="checkbox" id="other-level" />
            <label for="other-level">Other Level</label>
          </div>
        )}
      </div>
      <div className="section industry">
        <div className="section-header">
          <h3>Industry</h3>
          <button onClick={() => setIndustryVisible(!industryVisible)}>
            {industryVisible ? "▼" : "▶"}
          </button>
        </div>
        {industryVisible && (
          <div>
            <input type="checkbox" id="tech" />
            <label for="tech">Tech</label>
            <br />
            <input type="checkbox" id="biotech" />
            <label for="biotech">Bio Tech</label>
            <br />
            <input type="checkbox" id="finance" />
            <label for="finance">Finance</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
