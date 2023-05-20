import React from 'react';
import '../css/expert-advice.css';
import expert_1  from "../images/expert-1.jpg"
import expert_2  from "../images/expert-2.jpg"
import expert_3  from "../images/expert-3.jpg"
import expert_4  from "../images/expert-4.jpg"

const ExpertAdvice = () => {
    const steps = [
        {
            title: 'Scholarships',
            description: 'Get help finding the best scholarships, as well as advice and tips to win them!',
            image: expert_1
        },
        {
            title: 'Financial Aid',
            description: 'Tools, advice, and resources to pay for college.',
            image: expert_2
        },
        {
            title: 'Student Loans',
            description: 'Compare student loan rates or find the right repayment plan.',
            image:expert_3
        },
        {
            title: 'College Admissions',
            description: 'Step-by-step expert guidance for every step of the college admissions process.',
            image: expert_4
        }
    ];

    return (
        <section className="expert-advice-container">
            <h1>EXPERT ADVICE FOR EVERY STEP OF YOUR JOURNEY</h1>
            <div className="expert-advice">
            {steps.map((step, index) => (
                <div className="expert-cards">
                    <img src={step.image} alt={`Expert ${index + 1}`} />
                    <div className="expert-text" key={index}>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
};

export default ExpertAdvice;
