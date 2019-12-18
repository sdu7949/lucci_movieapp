import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import MovieSlide from "./MovieSlide";

import ViewPager from '@react-native-community/viewpager';
import { StyleSheet, View } from "react-native";

const SWIPER_HEIGHT = Layout.height / 3;

// const View = styled.View`
//   background-color: red;
//   height: ${SWIPER_HEIGHT};
// `;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    height: 500,
  },
});


  
const MovieSlider = ({movies}) =>{
  return (
    movies ? (
      <ViewPager style={styles.viewPager} initialPage={0}>
        
          {movies
            .filter(movie => movie.backdrop_path !== null)
            .map(movie => (
              <View key={movie.id}>
                <MovieSlide
                  overview={movie.overview}
                  voteAvg={movie.vote_average}
                  title={movie.title}
                  id={movie.id}
                  backgroundPhoto={movie.backdrop_path}
                  posterPhoto={movie.poster_path}
                />
              </View>
            ))}
      </ViewPager>
  
    ) : null)
  
}


MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;