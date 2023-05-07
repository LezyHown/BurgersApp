import React from "react";
import Icon from "../../content/icons/iconsAPI";

export default function MailInput({ ...rest }) {
  return (
    <div className="mail-input" {...rest}>
      <input placeholder="Email Address" type="email" />
      <Icon category={"FOOTER"} name={"mail"} />
    </div>
  );
}