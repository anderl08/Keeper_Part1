import React from "react";

function Footer() {
  var date = new Date();
  var anno = date.getFullYear();
  console.log(anno);

  let rechte = "copyright";
  return (
    <footer>
      <p>
        {rechte} {anno}
      </p>
    </footer>
  );
}

export default Footer;
