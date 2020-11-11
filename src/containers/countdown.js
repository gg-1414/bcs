import React from 'react';
import CountdownTimer from "react-component-countdown-timer";

export const Countdown = () => (
  <div className="d-flex justify-content-center">
    <CountdownTimer count={1400000} showTitle dayTitle={"Days"} responsive size={40} labelSize={14} color="#fff" backgroundColor="#000" />
  </div>
);

