import React, { useState } from 'react';
import TestCase from './TestCase';
import './FlowChart.css';

function FlowChart() {
    const [step, setStep] = useState(1);

    const nextStep = (next) => {
        setStep(next);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <TestCase 
                        description="1) Authentication Bypass" 
                        onYes={() => nextStep(11)}
                        onNo={() => nextStep(2)}
                    />
                );
            case 11:
                return (
                    <TestCase 
                        description="Write about Authentication Bypass"
                        yesLabel="Done"
                        onYes={() => nextStep(2)}
                    />
                );
            case 2:
                return (
                    <TestCase 
                        description="2) No Multifactor Authentication" 
                        onYes={() => nextStep(21)}
                        onNo={() => nextStep(3)}
                    />
                );
            case 21:
                return (
                    <TestCase 
                        description="Write about No Multifactor Authentication"
                        yesLabel="Done"
                        onYes={() => nextStep(3)}
                    />
                );
            case 3:
                return (
                    <TestCase 
                        description="2a) Test if Username is verifiable through errors" 
                        onYes={() => nextStep(31)}
                        onNo={() => nextStep(4)}
                    />
                );
            case 31:
                return (
                    <TestCase 
                        description="Write about Username Verifiable through Errors"
                        yesLabel="Done"
                        onYes={() => nextStep(4)}
                    />
                );
            case 4:
                return (
                    <TestCase 
                        description="Test if password can be changed for current logged in user without providing current password"
                        yesLabel="Continue"
                        onYes={() => nextStep(5)}
                    />
                );
            default:
                return <div>All test cases completed!</div>;
        }
    };

    return (
        <div className="flow-chart">
            {renderStep()}
        </div>
    );
}

export default FlowChart;
