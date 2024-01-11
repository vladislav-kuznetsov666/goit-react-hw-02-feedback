import PropTypes from 'prop-types';

export function Statistics({
  good,
  bad,
  neutral,
  title,
  totalFeedback,
  feedbackPercentage,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {feedbackPercentage} %</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  title: PropTypes.string,
  totalFeedback: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};