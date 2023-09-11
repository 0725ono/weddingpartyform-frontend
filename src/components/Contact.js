import React, { useState, useContext } from "react";
import Confirmation from "./Confirmation";
import "./Contact.css";
import { Context } from "../App";
import axios from "axios";

const Contact = () => {
  // 各入力内容の情報の保持
  // const [attendance, setAttendance] = useState("attend");
  // const [name, setName] = useState("");
  // const [postalcode, setPostalCode] = useState("");
  // const [address, setAddress] = useState("");
  // const [email, setEmailAddress] = useState("");
  // const [tel, setTel] = useState("");
  // const [allergy, setAllergy] = useState("");

  // const [showConfirmation, setShowConfirmation] = useState(false);
  // 確認画面遷移のためのタグ
  const { showConfirmation, setShowConfirmation, formData, setFormData } =
    useContext(Context);

  // 確認画面へ移行するハンドラー
  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  // 修正するハンドラー
  const handleEdit = () => {
    setShowConfirmation(false);
  };

  // フォームの送信状態を判断する
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // 送信するハンドラー
  const handleSubmit = async (e) => {
    e.preventDefault();
    // フォームの送信処理を実装する
    // データベースへの送信などを行う
    try {
      // const url = "http://localhost:3001/api/v1/send";
      const url = process.env.REACT_APP_PUBLIC_API_URL;
      //  || "http://localhost:3001/api/v1/send";
      console.log(url);
      const newForm = formData;
      const response = await axios.post(url, newForm);
      if (response.status === 200) {
        setIsFormSubmitted(true);
      } else {
        console.error("フォームの送信に失敗しました");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {isFormSubmitted ? (
        // 最終的に送信が成功した場合の処理について記述す
        <div className="mobileMain">
          <div className="submitFinished">
            <h1>送信が完了しました！</h1>
            <p className="FinishedText">
              この画面は閉じていただいて
              <br />
              問題ありません。
              <br />
              近日中に案内のお手紙を
              <br />
              送らせていただきます。
            </p>
          </div>
        </div>
      ) : showConfirmation ? (
        // 確認画面の提示
        <>
          <div className="contact">
            <Confirmation
              attendance={formData.attendance}
              name={formData.name}
              postalcode={formData.postalcode}
              address={formData.address}
              email={formData.email}
              tel={formData.tel}
              allergy={formData.allergy}
              country={formData.country}
              drivingMusic={formData.drivingMusic}
              tobeinto={formData.tobeinto}
              thingstowant={formData.thingstowant}
              onEdit={handleEdit}
              handleSubmit={handleSubmit}
            />
          </div>
        </>
      ) : (
        // はじめに出ているフォーム画面
        <>
          <div className="contact mobileMain">
            <div className="contactTop">
              <h2 className="contactTitle">ご質問</h2>
              <span className="en">Questions</span>
              <p className="contactText">
                以下のフォームに入力をお願いします。
              </p>
            </div>
            <div className="contactBox">
              <div className="attendance">
                <label>
                  <span>出席</span>
                  <input
                    type="radio"
                    name="attendance"
                    value="attend"
                    checked={formData.attendance === "attend"}
                    onChange={handleChange}
                  />
                </label>
                <span>・</span>
                <label>
                  <span>欠席</span>
                  <input
                    type="radio"
                    name="attendance"
                    value="absence"
                    checked={formData.attendance === "absence"}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="container">
                <label className="name">
                  <span>お名前</span>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="postal-code">
                  <span>郵便番号</span>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="postalcode"
                      value={formData.postalcode}
                      autoComplete="postal-code"
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="address">
                  <span>住所</span>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="email">
                  <span>メールアドレス</span>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      autoComplete="email"
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="tel">
                  <span>電話番号</span>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      name="tel"
                      value={formData.tel}
                      autoComplete="tel"
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="allergy">
                  <span>アレルギーなど</span>
                  <div className="input-wrapper">
                    <textarea
                      type="text"
                      name="allergy"
                      value={formData.allergy}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="country">
                  <span>行ってみたい国</span>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="country"
                      placeholder="例/ドイツ"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="music">
                  <span>おすすめのドライブソングは？</span>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="drivingMusic"
                      placeholder="例/生命体 星野源"
                      value={formData.drivingMusic}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="tobeinto">
                  <span>最近ハマっているものは？</span>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="tobeinto"
                      value={formData.tobeinto}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <div className="container">
                <label className="want">
                  <span>ズバリ、今欲しいものは？</span>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="thingstowant"
                      value={formData.thingstowant}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>

              <button onClick={handleConfirmation} className="confirm-btn">
                確認画面へ
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
