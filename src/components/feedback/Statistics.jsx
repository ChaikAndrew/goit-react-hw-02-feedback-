const Statistics = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <ul className="Feedback__counter">
    <li>Good: {goodFeedback}</li>
    <li>Neutral: {neutralFeedback}</li>
    <li>Bad: {badFeedback}</li>
    <li>Total: {countTotalFeedback}</li>
    <li>Positive feedback: {countPositiveFeedbackPercentage}%</li>
  </ul>
);

export default Statistics;
