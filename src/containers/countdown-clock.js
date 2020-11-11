import React from "react";
import Countdown from 'react-countdown';
import { Clock } from '../components/clock';

export const CountdownClock = () => (
  <div className="d-flex justify-content-center">
    <Countdown date={("2020-11-27")}>
      <Clock hours={hours} days={days} minutes={minutes} />
    </Countdown>
  </div>
);

