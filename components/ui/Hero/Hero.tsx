import { FC } from "react";

interface Props {
  headline: string;
  description: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className='heroContainer'>
      <h3>{headline}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Hero;
