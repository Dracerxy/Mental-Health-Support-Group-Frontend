import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeDisplay = ({ value }) => {
  return (
    <div className="text-center">
      <QRCode value={value} />
    </div>
  );
};

export default QRCodeDisplay;
