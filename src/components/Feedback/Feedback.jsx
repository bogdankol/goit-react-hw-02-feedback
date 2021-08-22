import PropTypes from "prop-types";
import { Component } from "react";
import s from "./Feedback.module.css";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static propTypes = {
    good: PropTypes.string,
  };
  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(callback, { good, neutral, bad }) {
    return Math.round((good / callback({ good, neutral, bad })) * 100);
  }
  onLeaveFeedback = (e) => {
    const target = e.target.name;
    this.setState((prevState) => ({
      [target]: prevState[target] + 1,
    }));
  };

  render() {
    const { state } = this;
    const { good, neutral, bad, total } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onLeaveFeedback,
      } = this;

    return (
      <div className={s.div}>
        <Section title="Please leave feedback!">
          <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback(state) === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(state)}
              positivePercentage={countPositiveFeedbackPercentage(
                countTotalFeedback,
                state
              )}
            />
          )}
        </Section>
      </div>
    );
  }
}
export default Feedback;
