import React from "react";
import Countdown from 'react-countdown';
import { Clock } from '../components/clock';
import moment from 'moment';


export const CountdownClock = () => (
  <div className="d-flex justify-content-center">
    <Countdown date={moment("2020-11-27T11:00:00").local()} renderer={Clock} />
  </div>
);

