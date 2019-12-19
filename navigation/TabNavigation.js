import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer } from "react-navigation";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import { Platform } from "react-native";
import {createStack} from "./config";

   

const TabNavigation = createBottomTabNavigator(
    {
        Movie: {
            screen: createStack(MoviesScreen, "Movies"),
            navigationOptions: {
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                />
              )
            }
          },
          TV: {
            screen: createStack(TVScreen, "TV"),
            navigationOptions: {
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
                />
              )
            }
          },
          Search: {
            screen: createStack(SearchScreen, "Search"),
            navigationOptions: {
              tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                />
              )
            }
          }
    },
    {
      initialRouteName: "Search",  //search 작업하려고 맨 처음 뜨는 화면이 search인거지, 작업 끝나면 지우면 됨
        tabBarOptions : {
            showLabel : false, //아이콘 넣을 거라 레이블(글자) 를 꺼두는 거임
            style:{
                backgroundColor : BG_COLOR
            }
        }
    }
);

export default createAppContainer (TabNavigation);