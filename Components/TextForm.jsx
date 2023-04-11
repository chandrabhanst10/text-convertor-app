import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [totalVowels, setTotalVowels] = useState();

  
  const handleUpperCase = () => {
    if (text === "") {
      return toast.error("please enter some text");
    }
    try {
      setText(text.toUpperCase());
      toast.success("Text Changed To Upper Case");
    } catch (error) {
      toast.error(error);
    }
  };
  const handleLowerCase = () => {
    if (text === "") {
      return toast.error("please enter some text");
    }
    try {
      setText(text.toLowerCase());
      toast.success("Text Changed To Upper Case");
    } catch (error) {
      toast.error(error);
    }
  };
  const handleReset = () => {
    setText("");
  };
  const handleExptraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCapitalize = () => {
    let arr = text.split(" ");
    for (let n in arr) {
      let str = arr[n].charAt(0).toUpperCase() + arr[n].slice(1);
      setText(str);
    }
  };
  const handleCountVowel = (text) => {
    let pattern=/[aeiou]/g
    let result=text.match(pattern).length
    return result
  };
  // setTotalVowels(handleCountVowel(text))
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    
  };

  return (
    <div>
      <div className="container m-auto">
        <h2>{props.heading}</h2>
      </div>
      <Row className="m-auto container">
        <Col xs={8} md={4} className=" container">
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              as="textarea"
              placeholder="Enter your text"
              style={{ height: "150px" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col className="container mt-3">
          <Row>
            <Col md={4}>
              <div className="btn container">
                <Button style={{ width: "200px" }} onClick={handleUpperCase}>
                  Convert To UpperCase
                </Button>
              </div>
              <div className="btn container">
                <Button style={{ width: "200px" }} onClick={handleLowerCase}>
                  Convert To LowerCase
                </Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="btn container">
                <Button style={{ width: "200px" }} onClick={handleExptraSpaces}>
                  Remove Extra Spaces
                </Button>
              </div>
              <div className="btn container">
                <Button
                  style={{ width: "200px" }}
                  className=""
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="btn container">
                <Button
                  style={{ width: "200px" }}
                  className=""
                  onClick={handleCapitalize}
                >
                  Capitalize
                </Button>
              </div>
              <div className="btn container">
                <Button
                  style={{ width: "200px" }}
                  className=""
                  onClick={handleCopyText}
                >
                  Copy Text
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="row m-auto container ">
        <div className="col ">
          {text.length > 0 ? (
            <>
              <h3>Text summary</h3>{" "}
              <label htmlFor="">
                Total Word
                <Form.Control
                  id="tex-area"
                  readOnly
                  className="w-5"
                  type="number"
                  placeholder="Your Word count"
                  value={text.split(" ").length}
                />
              </label>
              <label htmlFor="">
                Total Vowels 
                <Form.Control
                  id="tex-area"
                  readOnly
                  className="w-5"
                  type="number"
                  onChange={()=>{
                  let pattern=/aeiou/g
                  let result=text.match(pattern)
                  setTotalVowels(result.length)

                  }}
                  value={handleCountVowel(text)}
                />
              </label>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextForm;
