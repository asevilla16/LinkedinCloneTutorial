import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets-article">
                <div className="widgets-article-left">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets-article-right">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );

    }

    return (
        <div className="widgets">
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Angelito se la rifo", "Nada para mostrar")}
            {newsArticle("Coronavirus: UK Updates", "Cars and auto - 200 readers")}
        </div>
        
    )
}

export default Widgets;
