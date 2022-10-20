import React from 'react';

interface RandomNumberProps extends React.PropsWithChildren {
  numeral: number;
 }

const RandomNumber: React.FC<RandomNumberProps> = (props) =>  {
  return (
    <div className="random">
      <h1>{props.children}</h1>
      <p>{props.numeral}</p>
               </div>
  );
};

export default RandomNumber;