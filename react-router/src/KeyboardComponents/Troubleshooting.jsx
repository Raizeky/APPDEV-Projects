import React from 'react';

function Troubleshooting() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Troubleshooting</h2>
      <h4>Keyboard Not Responding:</h4>
      <ul>
        <li>Ensure the USB connection is secure.</li>
        <li>Try connecting the keyboard to a different USB port.</li>
        <li>Restart your computer if necessary.</li>
      </ul>
      <h4>Backlighting Not Working:</h4>
      <ul>
        <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
        <li>Verify that the configuration software is properly installed.</li>
      </ul>
      <h4>Key Not Registering:</h4>
      <ul>
        <li>Confirm that no physical obstructions are affecting the key.</li>
        <li>Test the key in different applications to determine if the issue is software-related.</li>
      </ul>
    </div>
  );
}

export default Troubleshooting;
