import React from "react";

//INTERNAL IMPORT
import { CreatorOne } from "../PageComponents/CreatorsPage";
import { Header, Footer, Copyright } from "../PageComponents/Components";

const creator = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <CreatorOne />
      <Footer />
      <Copyright />
    </div>
  );
};

export default creator;
