import PropTypes from 'prop-types';
import { Button } from './FeedbackOption.styled';

export function FeedbackOption({ options, addFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button key={option} name={option} onClick={addFeedback} className={option}>
          {option}
        </Button>
      ))}
    </div>
  );
}

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFeedback: PropTypes.func.isRequired,
};