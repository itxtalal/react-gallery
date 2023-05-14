import Card from './Card';
import PropTypes from 'prop-types';

const CardLayout = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
      {images.map((image) => (
        <Card key={image.id} id={image.id} image={image.image} />
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
