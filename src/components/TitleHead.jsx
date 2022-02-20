import PropTypes from "prop-types";

const TitleHead = ({ title }) => {
  document.title = title + " - iKo";
  return false;
};

TitleHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleHead;
