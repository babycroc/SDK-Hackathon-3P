import React, { useState } from "react";
import PropTypes  from "prop-types";

function _Text({text}){
  return (
    <><p>{text}<br/></p></>
  )
};

_Text.propTypes = {
    text : PropTypes.string.isRequired
}

export default _Text;