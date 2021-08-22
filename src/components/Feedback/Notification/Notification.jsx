import PropTypes from "prop-types";
import { Component } from "react";
import s from "./Notification.module.css";

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
    };

    render() {
        const { message } = this.props;
        return <p>{message}</p>;
    }
}

export default Notification;
