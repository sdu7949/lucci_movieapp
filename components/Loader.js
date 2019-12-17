import React from "react";
import { ActivityIndicator } from "react-native";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";

const Container = styled.View`  
  flex: 1;
  background-color: ${BG_COLOR};
  justify-content: center;
`;
//RN의 flex는 전체 스크린 사이즈를 가짐
//모든 View는 자동으로 디폴트flex박스를 가지고 flexDirection: column 임

export default () => (
  <Container>
    <ActivityIndicator color={TINT_COLOR} />
  </Container>
);