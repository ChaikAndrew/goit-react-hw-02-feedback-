import React from 'react';
import Controls from './Controls';
import Statistics from './Statistics';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedback = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedback = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let countTotalFeedback = Math.ceil(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return isNaN(countTotalFeedback) ? 0 : countTotalFeedback;
  };

  render() {
    return (
      <section className="Feedback__section">
        <p>Please leave feedback</p>
        <Controls
          onGood={this.goodFeedback}
          onNeutral={this.neutralFeedback}
          onBad={this.badFeedback}
        />
        <p>Statistics</p>
        <Statistics
          goodFeedback={this.state.good}
          neutralFeedback={this.state.neutral}
          badFeedback={this.state.bad}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}

export default Feedback;
