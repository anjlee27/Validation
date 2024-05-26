import React from 'react';
import './TestCase.css';

function TestCase({ description, onYes, onNo, yesLabel = "Yes", noLabel = "No" }) {
    return (
        <div className="test-case">
            <div className="description">{description}</div>
            <div className="options">
                <button className="yes-option" onClick={onYes}>{yesLabel} ▶</button>
                <button className="no-option" onClick={onNo}>{noLabel} ▼</button>
            </div>
        </div>
    );
}

export default TestCase;
