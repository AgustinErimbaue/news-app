import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
  news: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c15e9aeb3ae449bda21d99e118e622bb"
      );
      dispatch({
        type: "GET_NEWS",
        payload: res.data.articles,
      });
    } catch (error) {
      console.error("Error fetching news: ", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        getNews,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
