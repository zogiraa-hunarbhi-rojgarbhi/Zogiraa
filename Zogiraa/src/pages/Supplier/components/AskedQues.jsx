import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './AskedQues.css';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { question: "How do I Sell product?", answer: "To sell on Zogiraa, simply register as a supplier, list your products with pricing, and start receiving orders from verified buyers." },
    { question: "How do i get receipt ?", answer: "All transaction receipts and invoices are available for download directly from your Smart Seller Dashboard." }
  ];

  return (
    <div className="page-wrapper">
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="subtitle">Get answers to common questions</p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question" 
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                {faq.question}
                <ChevronDown className={activeFaq === index ? 'rotate' : ''} />
              </button>
              {activeFaq === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>      
    </div>
  );
};

export default Home;