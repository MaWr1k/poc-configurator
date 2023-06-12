/*
 *  Document    : Forms.js
 *  Author      : Novac
 *  Description : custom forms for all components
 */

import React from "react";

const Forms = (props) => {
  const { ...others } = props;
  return (
    <form autoComplete="off" {...others}>
      {props.children}
    </form>
  );
};

export default Forms;
