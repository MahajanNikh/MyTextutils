import React, { useState } from "react";

export default function TextFrom(props) {
  
  const handleupClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handlelowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleclearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCamelClick = () => {
    const words = text.split(" ");
    const camelCaseWords = words.map((word, index) => {
      if (index + 1 === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    setText(camelCaseWords.join(" "));
    props.showAlert("Converted to CamelCase!", "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  let backgroundColor, textColor;
  if (props.mode === "dark") {
    backgroundColor = "grey";
    textColor = "white";
  } else if (props.mode === "green") {
    backgroundColor = "#abfa6b";
    textColor = "black";
  } else {
    backgroundColor = "white";
    textColor = "black";
  }

  
  function countWords(str) {
    str = str.trim();
    if (str === "") {
      return 0; // Return 0 words for empty string
    }
    const words = str.split(/\s+/);
    return words.length;
  }
  const wordCount = countWords(text);

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            curs
            value={text}
            onChange={handleOnchange}
            style={{
              // backgroundColor: props.mode === "dark" ? "grey" : "white",
              // color: props.mode === "dark" ? "white" : "black",
              // backgroundColor: props.mode === "red" ? "pink" : "white",
              // color: props.mode === "red" ? "white" : "black",
              backgroundColor: backgroundColor,
              color: textColor
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode === "green" ? "success" : "primary"} mx-2`} onClick={handleupClick}>
          Convert to Upper Case
        </button>
        <button className={`btn btn-${props.mode === "green" ? "success" : "primary"} mx-2`} onClick={handlelowClick}>
          Convert to Lower Case
        </button>
        <button className={`btn btn-${props.mode === "green" ? "success" : "primary"} mx-2`} onClick={handleCamelClick}>
          Convert to CamelCase Case
        </button>
        <button className={`btn btn-${props.mode === "green" ? "success" : "primary"} mx-2`} onClick={handleclearClick}>
          Clear Text
        </button>

        {/* <button className="btn btn-primary">Convert to Lowercase Case</button> */}
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary </h2>
        <p>
        <b>{wordCount}</b> words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
