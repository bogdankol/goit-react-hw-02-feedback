import PropTypes from "prop-types";
import { Component } from "react";
import s from "./Section.module.css";

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}
export default Section;