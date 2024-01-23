import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Copyright = () => {
  return (
    <div className="flex-center gap-2 my-4">
      <AiOutlineCopyrightCircle />
      <p className="text-sm">2024 Paweł Bornikowski | WiredWave All Rights Reserved</p>
    </div>
  );
};

export default Copyright;
