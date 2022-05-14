import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      Copyright @{currentYear} || Developed by{" "}
      <a style={{color:'orange'}} color="orange" href="" target="_blank">
        team
      </a>
      <br />
      You can find us on{" "}
      <a style={{color:'orange'}} color="orange" href="" target={"_blank"}>
        Instagram
      </a>
    </footer>
  );
};

export default Footer;
