import React from "react";
import PropTypes  from "prop-types";

function _Text({text}){
    setInterval(()=> {
      return <><p>{text}<br/></p></>;
    }, 5000);
};

_Text.propTypes = {
    text : PropTypes.string.isRequired
}

export default _Text;