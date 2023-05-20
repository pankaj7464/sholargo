import React from 'react';
import '../css/FAQ.css';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is ScholarGo?',
      answer: 'ScholarGo is an online platform connecting students to vetted scholarship opportunities through data-based matching. Our comprehensive database includes ScholarGo-exclusive scholarships and scholarships from leading non-profits, companies, etc.'
    },
    {
      question: 'How will ScholarGo help me?',
      answer: 'ScholarGo helps students save time and money in the process of paying for college by matching you to relevant scholarships that are currently accepting applications.'
    },
    {
      question: 'Is ScholarGo really free?',
      answer: 'Yes, ScholarGo is 100% free for students.'
    },
    {
      question: 'Is ScholarGo open to international students?',
      answer: 'The ScholarGo app matches students in the U.S. and Canada to relevant scholarship opportunities. We offer some resources for international students, which you can explore on our website.'
    }
  ];

  return (
    <div className="faq">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div className="question-answer-row" key={index}>
            <h3 className="question-heading">{faq.question}</h3>
            <p className="question-answer">{faq.answer}</p>
          
        </div>
      ))}
    </div>
  );
};

export default FAQ;
