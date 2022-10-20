import React from 'react';

interface RandomNumberProps extends React.PropsWithChildren {
  number: number;
}

const RandomNumber: React.FC<RandomNumberProps> = (props) =>  {
  return (
    <div className="random">
      <p>{props.number}</p>
      <p>{props.children}</p>
          </div>
  );
};

export default RandomNumber;