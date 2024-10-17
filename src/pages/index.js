import React from "react";
import Layout from "../components/layout";
import TravelForm from "../components/TravelForm/TravelForm"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "../components/features/Users";
import BannerImage from "../components/BannerImage/BannerImage";

const IndexPage = () => {

  const store = configureStore({
    reducer: {
      users: usersReducer,
    },
  });

  return(
    <Layout>
      <BannerImage/>
      <Provider store={store}>
        <TravelForm/>
      </Provider>
    </Layout>
  )
}

export default IndexPage