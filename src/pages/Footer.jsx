import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mobileMain">
      <div className="footer_top">
        <div className="footer_left">
          <img
            src="./images/logo.png"
            alt="life ist journeyのロゴ"
            className="footerLogo"
          />
        </div>
        <div className="footer_center">
          <p>主催　実行委員会　小野・今宿</p>
          <p>協力　国土交通省（ウソ）</p>
          <p>　　　セレッソ大阪（ウソ）</p>
          <p>後援　一般社団法人小野観光局</p>
        </div>
        <div className="footer_right">
          <h3>Life and Journey</h3>
        </div>
        <img
          src="./images/footerImg.png"
          alt="フッターの花瓶とお花"
          className="footerFlower"
        />
      </div>
      <div className="footer_bottom">
        <p className="footer_bottom_text">
          Design by Miyu Imashuku, coded by Masahiro Ono
        </p>
      </div>
    </footer>
  );
};

export default Footer;
