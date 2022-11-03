import PropTypes from 'prop-types';
import s from './style.module.css';

const Statistics = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  TotalFeedback,
  PositiveFeedbackPercentage,
}) => (
  <ul className={s.Feedback__counter}>
    <li>Good: {goodFeedback}</li>
    <li>Neutral: {neutralFeedback}</li>
    <li>Bad: {badFeedback}</li>
    <li>Total: {TotalFeedback}</li>
    <li>Positive feedback: {PositiveFeedbackPercentage}%</li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  goodFeedback: PropTypes.number.isRequired,
  neutralFeedback: PropTypes.number.isRequired,
  badFeedback: PropTypes.number.isRequired,
  TotalFeedback: PropTypes.number.isRequired,
  PositiveFeedbackPercentage: PropTypes.number.isRequired,
};
