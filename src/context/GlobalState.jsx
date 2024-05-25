import React, { createContext, useReducer } from "react";
import axios from "axios"

const initialState = {
  news: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
};

const getNews = async () => {
    const res = await axios.get
};
