import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a new context
const FullScreenContext = createContext();

// Create a FullScreenProvider component
const FullScreenProvider = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageId, setCurrentImageId] = useState(null);

  const openFullScreen = (id) => {
    setCurrentImageId(() => id);
    setIsFullScreen(() => true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(() => false);
  };

  return (
    <FullScreenContext.Provider
      value={{ isFullScreen, currentImageId, openFullScreen, closeFullScreen }}
    >
      {children}
    </FullScreenContext.Provider>
  );
};

export { FullScreenContext, FullScreenProvider };

FullScreenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
