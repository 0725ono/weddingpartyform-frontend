import React from "react";
import "./Confirmation.css";

const Confirmation = ({
  attendance,
  name,
  postalcode,
  address,
  email,
  tel,
  allergy,
  country,
  drivingMusic,
  tobeinto,
  thingstowant,
  onEdit,
  handleSubmit,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="confirmationForm">
      <div className="contactTop">
        <h2 className="sectionTitle">入力内容の確認</h2>
        <p>下記の内容でよろしいでしょうか？</p>
      </div>
      <div className="formContantContainer">
        <div className="formConfirm">
          <p className="item">出席: </p>
          <p className="answer">{attendance === "attend" ? "出席" : "欠席"}</p>
        </div>
        <div className="formConfirm">
          <p className="item">名前: </p>
          <p className="answer">{name}</p>
        </div>
        <div className="formConfirm">
          <p className="item">郵便番号:</p>
          <p className="answer"> {postalcode}</p>
        </div>
        <div className="formConfirm">
          <p className="item">住所:</p>
          <p className="answer"> {address}</p>
        </div>
        <div className="formConfirm">
          <p className="item">メールアドレス:</p>
          <p className="answer"> {email}</p>
        </div>
        <div className="formConfirm">
          <p className="item">電話番号:</p>
          <p className="answer"> {tel}</p>
        </div>
        <div className="formConfirm">
          <p className="item">アレルギーなど:</p>
          <p className="answer"> {allergy}</p>
        </div>
        <div className="formConfirm">
          <p className="item">行ってみたい国:</p>
          <p className="answer"> {country}</p>
        </div>
        <div className="formConfirm">
          <p className="item">おすすめのドライブソング:</p>
          <p className="answer"> {drivingMusic}</p>
        </div>
        <div className="formConfirm">
          <p className="item">最近ハマっているもの:</p>
          <p className="answer"> {tobeinto}</p>
        </div>
        <div className="formConfirm">
          <p className="item">ズバリ、今欲しいもの:</p>
          <p className="answer"> {thingstowant}</p>
        </div>
      </div>

      <div className="btn-container">
        <button onClick={onEdit} className="modifyBtn">
          修正する
        </button>
        <button type="submit" className="submitBtn">
          送信
        </button>
      </div>
    </form>
  );
};

export default Confirmation;
