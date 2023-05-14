import { useContext } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { ImagesContext } from '../context/ImagesCtx';

const CardLayout = ({ images }) => {
  const { selectedImages, selectImage } = useContext(ImagesContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
      {images.map((image) => (
        <Card
          key={image.id}
          image={image}
          selected={
            selectedImages.find((img) => img.id === image.id) ? true : false
          }
          selectImage={selectImage}
        />
      ))}
    </div>
  );
};

export default CardLayout;

CardLayout.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
