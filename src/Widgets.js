import React from "react";
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  
 
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is cool", "Top news - 9089 readers")}
      {newsArticle("Top 5 programming Lanaguage", "Top news - 884 readers")}
      {newsArticle("Top Js Framework", "Top news - 998 readers")}
      {newsArticle("Is Redux too good", "Code - 124 readers")}
      {newsArticle("Which one is best Angular or React", "code - 998 readers")}
      {newsArticle("Is Java still use", "Top news - 998 readers")}
    </div>

  );
}

export default Widgets;
