import React, { useState } from 'react';
import FilterSortCSS from "./opportunitiesStyles/FilterSort.module.css";


const FilterSort = () => {
  const [university, setUniversity] = useState("");
  const [stage, setStage] = useState("");
  const [industry, setIndustry] = useState("");
  const [allFilters, setAllFilters] = useState("");
  const [sort, setSort] = useState("");

  const handleChange = event => {
    switch(event.target.name) {
      case 'university':
        setUniversity(event.target.value);
        break;
      case 'stage':
        setStage(event.target.value);
        break;
      case 'industry':
        setIndustry(event.target.value);
        break;
      case 'allFilters':
        setAllFilters(event.target.value);
        break;
      case 'sort':
        setSort(event.target.value);
        break;  
      default: 
        break;  
    } 

  };

  return (
    <div className={FilterSortCSS.mainDiv}>
      <select name="university" value={university} onChange={handleChange}>
        <option value="">University</option>
        <option value="university1">University 1</option>
        <option value="university2">University 2</option>
        <option value="university3">University 3</option>
      </select>

      <select name="stage" value={stage} onChange={handleChange}>
        <option value="">Stage</option>
        <option value="stage1">Stage 1</option>
        <option value="stage2">Stage 2</option>
        <option value="stage3">Stage 3</option>
      </select>

      <select name="industry" value={industry} onChange={handleChange}>
        <option value="">Industry</option>
        <option value="industry1">Industry 1</option>
        <option value="industry2">Industry 2</option>
        <option value="industry3">Industry 3</option>  
      </select>

      <select name="allFilters" value={allFilters} onChange={handleChange}>  
        <option value="">All Filters</option>  
        <option value="allFilters1">All Filters 1</option>  
        <option value="allFilters2">All Filters 2</option>  
        <option value="allFilters3">All Filters 3</option>  
      </select>

      <select name="sort" value={sort} onChange={handleChange}>  
          <img src='sortingImage' alt='sorting' />  //add the image source here 
          <option value="">Sort By</option>  //add the sorting options here 
       </select>

    </div>  

  );  

 };  

 export default FilterSort;