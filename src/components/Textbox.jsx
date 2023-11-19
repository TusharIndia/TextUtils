import React, { useState } from "react";

export const Textbox = (props) => {
  const [text, settext] = useState("Set text here");
  const handlechange = (event) => {
    settext(event.target.value);
  };
  const handleUpclick = () => {
    let tex = text.toUpperCase();
    settext(tex);
    props.alert("converted to uppercase","success")
  };

  const handleLoclick = () => {
    let tex = text.toLowerCase();
    settext(tex);
    props.alert("converted to lowercase","success")
  };

  const handleSumm = () => {
    let tex = text.substr(0,100);
    settext(tex);
    props.alert("Summarized text","success")
  };

  const handlecpy =() =>{
    let tex = document.getElementById("adad");
    tex.select();
    navigator.clipboard.writeText(tex.value);
    props.alert("Text Copied","success")
  }

  const trimspace = () => {
    let tex = text.replace(/\s+/g, ' ').trim();
    console.log(tex);
    settext(tex);
    props.alert("Trimmed spaces","success")
  }

  return (
    <div className={`my-4 container text-${props.mode==="light"?'dark':'light'}`}>
      <h3>Textarea</h3>
      <div className="container">
        <textarea
          className="form-control"
          style={{background: props.tmode,color: props.mode==="light"?'black':'white'}}
          id="adad"
          rows="8"
          value={text}
          onChange={handlechange}
        ></textarea>
        <div className="container">
          <button className="btn btn-primary my-2" onClick={handleUpclick}>
            Convert to uppercase
            {/* {props.alert("converted to uppercase","success")} */}
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleLoclick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary my-2" onClick={handleSumm}>
            Summarize
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handlecpy}>
            Copy to clipboard
          </button>
          <button className="btn btn-primary my-2" onClick={trimspace}>
            Remove extra spaces
          </button>
        </div>
      </div>
      <div>
        <h6>Text summary - </h6>
        Total {text.split(" ").length} words and {text.length} letters
        <p>Text preview : {text} </p>
        Time to read : {0.008 * text.split(" ").length} sec
      </div>
    </div>
  );
};
