import PropTypes from "prop-types";
import { Component } from "react";
import s from "./Statistics.module.css";

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  }
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
      return good + neutral + bad === 0 ? (
        <p className={s.text}>There are no feedbacks yet! Yours could be first!</p>
      ) : (
        <>
          <p className={s.text}>Good: {good}</p>
          <p className={s.text}>Neutral: {neutral}</p>
          <p className={s.text}>Bad: {bad}</p>
          <p className={s.text}>Total: {total}</p>
          <p className={s.text}>
            Positive feedback:
            {positivePercentage}%
          </p>
        </>
      );
  }
}

export default Statistics;
