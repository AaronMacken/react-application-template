import React from 'react';

type TitleProps = { value: string };

const Title = ({ value }: TitleProps) => {
  return <h1>{value}</h1>;
};

export default Title;
