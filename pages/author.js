import React from "react";

//INTERNAL IMPORT
import {
  AuthorFive,
  AuthorFour,
  AuthorOne,
  AuthorThree,
  AuthorTwo,
} from "../PageComponents/AuthorPage";
import { Header, Footer, Copyright } from "../PageComponents/Components";

const author = () => {
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <AuthorOne />
      <AuthorTwo />
      <AuthorThree />
      <AuthorFour />
      <AuthorFive />
      <Footer />
      <Copyright />
    </div>
  );
};

export default author;
