import React from "react";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const GetInTouch = () => {
  let [isCopied, isSetCopied] = useState(false);

  let [emailText, setEmailText] = useState("Copy email address.");
  let [phoneText, setPhoneText] = useState("Copy phone number.");

  const copyEmail = () => {
    isSetCopied(true);
    console.log(isCopied);
    setEmailText("Email copied.");
    setTimeout(() => {
      setEmailText("Copy email address.");
    }, 5000);

    setPhoneText("Copy phone number.");
  };

  const copyPhone = () => {
    isSetCopied(true);
    console.log(isCopied);
    setPhoneText("Number copied.");
    setTimeout(() => {
      setPhoneText("Copy phone number.");
    }, 5000);
    setEmailText("Copy email address.");
  };

  if (isSetCopied)
    return (
      <>
        <div>
          <CopyToClipboard text={"whatevacreates@gmail.com"} onCopy={copyEmail}>
            <h4 className="gmail">{emailText}</h4>
          </CopyToClipboard>
          <CopyToClipboard text="0031682372271" onCopy={copyPhone}>
            <h4 className="gmail">{phoneText}</h4>
          </CopyToClipboard>
        </div>
      </>
    );
};

export default GetInTouch;
