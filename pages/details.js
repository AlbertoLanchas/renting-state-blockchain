import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../PageComponents/Components";
import {
  DetailEight,
  DetailFive,
  DetailFour,
  DetailOne,
  DetailSeven,
  DetailSix,
  DetailThree,
  DetailTwo,
} from "../PageComponents/DetailsPage";

const details = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <DetailOne />
      <DetailTwo />
      <DetailThree />
      <DetailFour />
      <DetailFive />
      <DetailSix />
      <DetailSeven />
      <DetailEight />
      <Footer />
      <Copyright />
    </div>
  );
};

export default details;
