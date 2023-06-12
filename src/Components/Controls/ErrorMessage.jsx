/*
 *  Document    : ErrorMessage.js
 *  Author      : Novac
 *  Description : custom form error message for all components
 */

import React from "react";

const ErrorMessage = (props) => {
  return <span className="text-secondary">{props.children}</span>;
};

export default ErrorMessage;
