import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer>{`Copyright © Crowd Coin ${year}`}</footer>;
};
export default Footer;
