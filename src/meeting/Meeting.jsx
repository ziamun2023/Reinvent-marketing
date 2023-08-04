import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


// import { ZoomMtg } from '@zoomus/websdk';
const Meeting = () => {
   
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
    return (
        <div>
            <p>Meeting will be here</p>
       
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            
        </div>
    );
};

export default Meeting;