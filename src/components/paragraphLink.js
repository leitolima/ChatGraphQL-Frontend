import React from 'react';
import { Link } from 'react-router-dom';

const ParagraphLink = ({text, href, linkText}) => {
    return (
        <p className="text-sm font-semibold text-gray mt-4">
            {text} &nbsp; 
            <span className="text-lightblue">
                <Link to={href}>{linkText}</Link>
            </span>
        </p>
    )
}

export default ParagraphLink
