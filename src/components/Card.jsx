import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ImagesContext } from '../context/ImagesCtx';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

const Card = ({ image, selectImage, selected }) => {
  const { openFullScreen } = useContext(ImagesContext);

  return (
    <div
      onClick={() => openFullScreen(image)}
      className="cursor-zoom-in relative"
    >
      <img className="h-auto max-w-full rounded-lg" src={image.image} alt="" />
      <button
        className="absolute top-2 left-2"
        onClick={(e) => {
          e.stopPropagation();
          selectImage(image);
        }}
      >
        {selected ? (
          <AiFillCheckCircle size={32} />
        ) : (
          <AiOutlineCheckCircle size={32} />
        )}
      </button>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  selectImage: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Card;
