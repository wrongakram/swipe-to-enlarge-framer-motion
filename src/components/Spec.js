import React from "react";

const Spec = () => {
  return (
    <div className='spec'>
      <div className='spec-inner'>
        <div className='spec-header'>
          <h5>
            HiFive1 Rev B Features <br /> and Specifications
          </h5>
        </div>
        <ul>
          <li>
            <div className='spec-label'>Microcontroller</div>
            <div className='spec-content red'>FE310-G002</div>
          </li>
          <li>
            <div className='spec-label'>Operating Voltage</div>
            <div className='spec-content'>3.3 V and 1.8 V</div>
          </li>
          <li>
            <div className='spec-label'>Input Voltage</div>
            <div className='spec-content'>5 V USB or 7-12 VDC Jack</div>
          </li>
          <li>
            <div className='spec-label'>IO Voltage</div>
            <div className='spec-content'>3.3 V</div>
          </li>
          <li>
            <div className='spec-label'>Digital I/O Pins</div>
            <div className='spec-content'>19</div>
          </li>
          <li>
            <div className='spec-label'>PWM Pins</div>
            <div className='spec-content'>9</div>
          </li>
          <li>
            <div className='spec-label'>SPI Controllers/HW CS Pins</div>
            <div className='spec-content'>1/3</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Spec;
