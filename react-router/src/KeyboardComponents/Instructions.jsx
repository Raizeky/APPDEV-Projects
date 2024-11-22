import React from 'react';

function Instructions() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Setup Instructions</h2>
      <h4>Unboxing:</h4>
      <ul>
        <li>Carefully remove the keyboard and accessories from the box.</li>
      </ul>
      <h4>Connecting the Keyboard:</h4>
      <ul>
        <li>Plug the USB cable into an available USB port on your computer.</li>
        <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
      </ul>
      <h4>Software Installation (Optional):</h4>
      <ul>
        <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
        <li>Follow the on-screen instructions to install the software.</li>
      </ul>
    </div>
  );
}

export default Instructions;
