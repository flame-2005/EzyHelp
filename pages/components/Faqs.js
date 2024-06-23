import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col border-2 bg-black border-black justify-between w-full py-4 pl-4 pr-3 mb-3 transition-all text-black rounded-xl shadow-md duration-300">
            <div className="flex items-center text-black justify-between cursor-pointer " onClick={toggleAnswer}>
                <span className="font-bold text-white">{question}</span>
                <div className={`p-2 bg-white rounded-full transform rotate-${isOpen ? '0' : '180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-black" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="mt-1 text-sm text-white answer">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FaqSection = () => {
    const faqData = [
        {
            question: 'What services does EzyHelp offer?',
            answer: 'EzyHelp connects you with skilled professionals across various trades, including plumbing, electrical work, carpentry, general labor, and more. Our vetted workers are ready to assist with home repairs, renovations, and routine maintenance.',
        },
        {
            question: 'How does EzyHelp ensure the reliability of its professionals?',
            answer: 'We meticulously vet all our professionals through background checks, reference verification, and skill assessments to ensure they meet our high standards of reliability, safety, and expertise.',
        },
        {
            question: 'How do I book a service through EzyHelp?',
            answer: 'Booking a service with EzyHelp is easy. Simply visit our website, choose the type of service you need, and provide some details about your project. We will match you with a qualified professional who fits your requirements.',
        },
        {
            question: 'What if I am not satisfied with the service provided?',
            answer: 'At EzyHelp, customer satisfaction is our top priority. If you are not satisfied with the service provided, please contact our customer support team, and we will address your concerns promptly to ensure your satisfaction.',
        }
    ];

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation once
        threshold: 0.2, // Trigger when 50% of section is in view
    });

    return (
        <section ref={ref} id='faq' className={`ont-poppins ${inView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'} `}>
            <div className="py-24 mb-10 lg:block">
                <div className="max-w-4xl mx-auto mb-14">
                    <h1 className="mb-4 text-3xl font-bold text-center text-black">FAQs - Frequently Asked Questions</h1>
                    <p className="text-center mb-7 mx-auto text-gray-500">

                        EzyHelp is your go-to technological solution revolutionizing home services, providing a seamless digital platform that enhances convenience and reliability for homeowners, skilled workers, and the entire community.
                    </p>
                </div>
            </div>

            <div className={`max-w-4xl mx-auto `}>
                <div className="w-full p-4 py-0 rounded-md shadow-lg -mt-36 lg:full ">
                    <div className="flex-1">
                        {faqData.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
