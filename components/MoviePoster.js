import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";

const Image = styled.Image`
  width: 120px;
  height: 190px;
  border-radius: 2.5px;
`;

const MoviePoster = ({ path }) => (
  <Image source={{ uri: makePhotoUrl(path) }} />
);

MoviePoster.propTypes = {
  path: PropTypes.string
};

export default MoviePoster;