import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function IdleTimeoutWrapper({
  children, 
  messageOnActivate, 
  messageOnTimeout, 
  sendMessage, 
  timeBeforeReset
}) {
  const [isTimeout, setIsTimeout] = useState(false);
  let _timestamp = new Date();
  let interval;

  const events = ['click', 'keypress', 'ontouchstart'];
  events.map((event) => {
    return window.addEventListener(event, resetTimeout);
  });

  useEffect(() => {
    if (!isTimeout) {
      interval = setInterval(() => {
        checkTimeout();
      }, 1000);
    }
    return () => { clearInterval(interval) }
  },[isTimeout]);


  function setTimeout() {
    if (sendMessage) {
      sendMessage(messageOnTimeout);
    }

    setIsTimeout(true);
  }

  function resetTimeout() {
    if (sendMessage && isTimeout) {
      sendMessage(messageOnActivate);
    }

    setIsTimeout(false);
  }

  function checkTimeout() {
    if (new Date() - _timestamp > timeBeforeReset * 1000) {
      setTimeout();

      //Don't run interval if already timed out
      clearInterval(interval);
    }
  }

  return (
    <>
      {children}
    </>
  );
}

IdleTimeoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  messageOnActivate: PropTypes.string,
  messageOnTimeout: PropTypes.string,
  sendMessage: PropTypes.func,
  timeBeforeReset: PropTypes.number
};

IdleTimeoutWrapper.defaultProps = {
  messageOnActivate: '',
  messageOnTimeout: '',
  sendMessage: () => {},
  timeBeforeReset: 300
};

export default IdleTimeoutWrapper;
