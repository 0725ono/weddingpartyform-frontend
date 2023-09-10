import React, { useEffect, useRef } from "react";
import "./PageTop.css";

const PageTop = () => {
  const targets = useRef([]);
  const addToTargets = (el) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inview");
        }
      });
    });
    targets.current.forEach((target) => {
      observer.observe(target);
    });
  }, []);
  return (
    <>
      <div className="mobileMain">
        <div id="pagetop" className="pagetop_background">
          <div className="topRightAnimationContainer">
            <img
              src="./images/topright2.png"
              alt="トップ画像右上に丸型のロゴ"
              className="toprightBg"
            />
            <p className="toprightwords">
              <span className="topwords">WEDDING</span>
              <br />
              <span>INVITATION</span>
            </p>
          </div>
        </div>

        <div className="greeting">
          <span className="greetings">GREETINGS</span>
          <div className="animate-title">
            <h1 className="sectionTitle" ref={addToTargets}>
              <span className="char">ご</span>
              <span className="char">あ</span>
              <span className="char">い</span>
              <span className="char">さ</span>
              <span className="char">つ</span>
            </h1>
          </div>

          <div className="greetMessege" ref={addToTargets}>
            <p className="grtText">この度私たちはささやかな</p>
            <br />
            <p className="grtText">結婚パーティーを開催する運びとなりました</p>
            <br />
            <p className="grtText">
              普段の私たちらしく日頃お世話になっている方々と
            </p>
            <br />
            <p className="grtText">自然体で開催したいという想いから</p>
            <br />
            <p className="grtText">「日常と旅」をコンセプトに</p>
            <br />
            <p className="grtText">一から準備を進めてまいりました</p>
            <br />
            <p className="grtText">旅行に来たような特別な空間で</p>
            <br />
            <p className="grtText">日常のようにリラックスできる</p>
            <br />
            <p className="grtText">良き日になれば幸いです</p>
            <br />
            <p className="grtText">遠い旅の記憶のように後日ふとした瞬間に</p>
            <br />
            <p className="grtText">あ、なんかあの時間ちょっと良かったな</p>
            <br />
            <p className="grtText">と思えるような思い出になることを願って。</p>
          </div>
          <span className="greetName">小野正博　未唯</span>
        </div>

        <div className="space1"></div>

        <div className="infoSection">
          <div className="information">
            <h2 className="infoTitle" ref={addToTargets}>
              <span className="char">I</span>
              <span className="char">N</span>
              <span className="char">F</span>
              <span className="char">O</span>
              <span className="char">R</span>
              <span className="char">M</span>
              <span className="char">A</span>
              <span className="char">T</span>
              <span className="char">I</span>
              <span className="char">O</span>
              <span className="char">N</span>
            </h2>
            <img
              src="./images/doglogo.png"
              alt="犬のイラスト"
              className="infoImage"
            />
          </div>
          <div className="infoDesc">
            <div className="date">
              <h2>
                2023.<span className="day">11.11</span> sat
              </h2>
              <h3>
                15:00〜18:00
                <span className="reception_time">（受付:14:30〜）</span>
              </h3>
            </div>
            <hr className="hr" />
            <div className="place">
              <h2>in SPINING MILL</h2>
              <p>〒590-0912 大阪府堺市堺区並松町45</p>
              <p>
                南海本線 七道駅から徒歩7分
                <br />
                阪堺電車 高須神社駅から徒歩5分
                <br />
                ※駐車場はございませんので、
                <br />
                &nbsp;近隣のコインパーキングをご利用ください。
                <br />
              </p>
              <div className="map">
                <img
                  src="./images/map.png"
                  alt="SPINING MILL付近のマップ"
                  className="mapImg"
                />
              </div>
              <img
                src="./images/flower.png"
                alt="花のイラスト"
                className="flower"
              />
            </div>
          </div>
        </div>

        <div className="space2"></div>
      </div>
    </>
  );
};

export default PageTop;
