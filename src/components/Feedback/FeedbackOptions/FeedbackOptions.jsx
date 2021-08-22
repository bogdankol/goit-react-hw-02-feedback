import PropTypes from "prop-types";
import { Component } from "react";
import s from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func,
  };
  createArray(data) {
    const array = [];
    for (const key in data) {
      array.push({ [key]: data[key] });
    }
    return array;
  }
  render() {
    const { options, onLeaveFeedback } = this.props;
    const array = this.createArray(options);
    return (
      <div className={s.feedbackDiv}>
        {array.map((el) => {
          const key = Object.keys(el);
          return (
            <button
              type="button"
              name={key}
              onClick={onLeaveFeedback}
              key={key}
              className={s[key]}
            >
              {key}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
