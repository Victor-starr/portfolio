import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectDisplay({
  image,
  title,
  description,
  demo,
  github,
}) {
  return (
    <section className="container projectInformation">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <Link to={demo} target="_blank">
          Visit Demo
        </Link>
        <Link to={github} target="_blank" className="fa fa-github"></Link>
      </div>
    </section>
  );
}
ProjectDisplay.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  demo: PropTypes.string,
  github: PropTypes.string,
};
