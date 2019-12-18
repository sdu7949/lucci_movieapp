import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";

import ViewPager from '@react-native-community/viewpager';
import { StyleSheet, View } from "react-native";



const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.5;
  position: absolute;
`;

// const Content = styled.View`
//   flex: 1;
//   flex-direction: row;
//   align-items: center;
//   /* padding-horizontal: 30px; */
//   justify-content: space-between;
// `;

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        height: 500,
    },
});

const MovieSlide = ({
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview
}) => {
    return (
        <ViewPager style={styles.viewPager} initialPage={0}>
            <View>
                <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
                <View>
                    <MoviePoster path={posterPhoto} />
                </View>
            </View>
        </ViewPager>
    );
};


MovieSlide.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default MovieSlide;








