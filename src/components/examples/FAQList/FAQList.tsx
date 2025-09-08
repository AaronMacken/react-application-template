import { useState, useEffect } from 'react';

import * as styles from './FAQList.scss';

type BaseFAQType = {
  id: number;
  question: string;
  answer: string;
};

const FAQS: BaseFAQType[] = [
  { id: 1, question: 'What is React?', answer: 'A UI library by Meta.' },
  {
    id: 2,
    question: 'What is JSX?',
    answer: 'A syntax extension for JavaScript.'
  },
  {
    id: 3,
    question: 'What are hooks?',
    answer:
      'Functions that let you use state and lifecycle in functional components.'
  }
];

type TransformedFAQ = BaseFAQType & {
  isCompleted: boolean;
};

// Goals
// 1. Each FAQ is a expandable / collapsable, expanding shows the answer to the question (answer shows beneath)
// 2. only one can be expanded at a time
// 3. expand all / collapse all

// ---- //

// Component Structure

// Expandable Items component
// input: question, answer, isExpanded, onClick

// Parent Component
// maps thru input to render components
// has a map of the expanded items state
// { id (1, 2, 3) - isExpanded (true / false)}

const getInitialState = (faqs: BaseFAQType[]) => {
  return faqs.map(({ id, question, answer }) => ({
    id,
    question,
    answer,
    isCompleted: false
  }));
};

const Answer = ({
  answer,
  isCompleted
}: {
  answer: string;
  isCompleted: boolean;
}) => {
  if (!isCompleted) {
    return null;
  }

  return <span>{answer}</span>;
};

const FAQ = ({
  id,
  isCompleted,
  question,
  answer,
  onClick
}: TransformedFAQ & { onClick: (id: number) => void }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button type="button" onClick={handleClick}>
        {question}
      </button>
      <Answer isCompleted={isCompleted} answer={answer} />
    </div>
  );
};

const FAQList = () => {
  const [faqs, setFaqs] = useState(getInitialState(FAQS));
  const setAllExpanded = (isExpanded: boolean) => {
    const updatedFaqs = faqs.map((faq) => ({
      ...faq,
      isCompleted: isExpanded
    }));

    setFaqs(updatedFaqs);
  };

  const expandQuestion = (id: number) => {
    const updatedFaqs = faqs.map((faq) => {
      if (id === faq.id) {
        return { ...faq, isCompleted: true };
      }

      return {...faq, isCompleted: false };
    });

    setFaqs(updatedFaqs);
  };

  const faqElements = faqs.map(({ question, answer, id, isCompleted }) => (
    <FAQ
      question={question}
      answer={answer}
      id={id}
      isCompleted={isCompleted}
      onClick={expandQuestion}
    />
  ));

  return (
    <>
      <h1>FAQ List</h1>
      <button type="button" onClick={() => setAllExpanded(true)}>
        expand all
      </button>
      <button type="button" onClick={() => setAllExpanded(false)}>
        collapse all
      </button>
      {faqElements}
    </>
  );
};

export default FAQList;
