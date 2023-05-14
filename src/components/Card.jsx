import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FullScreenContext } from '../context/FullScreenCtx';

const Card = ({ image, id }) => {
  const { openFullScreen } = useContext(FullScreenContext);

  return (
    <div onClick={() => openFullScreen(id)} className="cursor-pointer">
      <img className="h-auto max-w-full rounded-lg" src={image} alt="" />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
