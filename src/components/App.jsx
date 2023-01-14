import React from 'react';
import { Statistics } from 'components/FeedbackComponents/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackComponents/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/FeedbackComponents/Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleBtnClick = event => {
    const value = event.target.value;

    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        console.log('there is no handler for such option');
    }
  };

  const countTotalFeedback = () => {
    const totalAmount = good + neutral + bad;
    return totalAmount;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return `${Math.ceil((good / total) * 100)}%`;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleBtnClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statisctics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback 🍆"></Notification>
        )}
      </Section>
    </>
  );
};
