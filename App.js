import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐": "annoyance",
  "๐": "Sunrise",
  "โค๏ธ": "Heart",
  "๐ฅ": "Fire",
  "โจ": "Sparkles",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Crescent Moon",
  "๐ ": "Winking Face",
  "๐": "Slightly Smiling Face",
  "๐ค ": "Zipper-Mouth Face",
  "๐คจ ": "Face with Raised Eyebrow",
  "๐ ": "Neutral Face",
  "๐ ": "Expressionless Face",
  "๐ ": "Unamused Face",
  "๐ ": "Face with Rolling Eyes",
  "๐": "Relieved Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Opps try another emoji";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          color: "black",
          backgroundColor: "orangered",
          display: "block",
          border: "solid black 1px",
          padding: "1rem",
          borderRadius: "0.5rem"
        }}
      >
        How are you today?
      </h1>
      <input
        placeholder="put an emoji"
        style={{ width: "68%", padding: "0.7rem" }}
        onChange={changeEventHandler}
      ></input>
      <h1 style={{ color: "green" }}>{meaning} </h1>

      <p>Hello</p>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              maxWidth: "400px",
              display: "blob",
              padding: "0.5 rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
