import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PATHS } from "../../constants";
import { toSlug } from "../../utils";

class WorkLink extends Component {
  render() {
    const { title, description, image, category } = this.props;

    return (
      <Link to={PATHS.WORK + "/" + toSlug(title)}>
        {image && (
          <div className={"image"}>
            <img src={image} alt={title} />
          </div>
        )}
        <div className="sads">
          <h3 dangerouslySetInnerHTML={{ __html: `${title}` }} />
          <p
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: `${description}` }}
          />
        </div>
      </Link>
    );
  }
}

WorkLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default WorkLink;
