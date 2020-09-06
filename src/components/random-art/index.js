import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { PATHS } from "../../constants";
import { toSlug } from "../../utils";
//import RandomAr from './art';

class RandomArt extends Component {
  constructor(props) {
    super(props);

    this.element = null;
    this.setCanvasRef = (el) => {
      this.element = el;
    };
  }

  componentDidMount() {
    //const art = new RandomAr(this.element);
  }

  render() {
    const { category } = this.props;

    return (
      <div>
        <p className="h4">{category || "Post"}</p>
        <div className="art" ref={this.setCanvasRef}></div>
      </div>
    );
  }
}

export default RandomArt;
