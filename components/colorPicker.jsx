import React from 'react';

const ColorCircle = ({ color, isActive, onClick }) => {
  const circleSize = isActive ? '50px' : '30px';

  return (
    <div
      className="color-circle"
      style={{
        backgroundColor: color,
        width: circleSize,
        height: circleSize,
        borderRadius: '50%',
      }}
      onClick={() => onClick(color)}
    />
  );
};

export default ColorCircle;
