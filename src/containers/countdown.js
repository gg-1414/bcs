import React from "react";
import CountdownTimer from "react-component-countdown-timer";

export const Countdown = () => (
  <div className="d-flex justify-content-center">
    <CountdownTimer count={5432} showTitle size={40} labelSize={20} border />
  </div>
);

