import React from "react";
import Header from "../components/Header";
import Characters from "../components/RickAndMorty/Characters";
import { RickContextProvider } from "../components/RickAndMorty/RickContext";
const index = () => {
  return (
    <div>
      <Header />
      <RickContextProvider>
        <Characters />
      </RickContextProvider>
    </div>
  );
};
export default index;
