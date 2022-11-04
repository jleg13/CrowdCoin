import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "semantic-ui-react";

const Layout = (props) => {
  return (
    <Container>
      <div className="Wrapper">
        <Header></Header>
        {props.children}
        <hr />
        <Footer></Footer>
      </div>
    </Container>
  );
};
export default Layout;
