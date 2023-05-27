import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import imagesArr from '../data/images';

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState(imagesArr || []);
  const [selectedImages, setSelectedImages] = useState([]);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const [addImageScreen, setAddImageScreen] = useState(false);
  const [newImage, setNewImage] = useState(null);

  const openFullScreen = (image) => {
    setFullScreenImage(() => image);
    setIsFullScreen(() => true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(() => false);
    setFullScreenImage(() => null);
  };

  const selectImage = (image) => {
    setSelectedImages((prev) => {
      if (prev.find((img) => img.id === image.id)) {
        return prev.filter((img) => img.id !== image.id);
      } else {
        return [...prev, image];
      }
    });
  };

  const deleteImages = () => {
    setImages((prev) => {
      return prev.filter((image) => !selectedImages.includes(image));
    });
    setSelectedImages(() => []);
  };

  const addImage = () => {
    if (!newImage) return;
    setImages((prev) => {
      return [newImage, ...prev];
    });
    setNewImage(() => null);
    setAddImageScreen(() => false);
  };

  return (
    <ImagesContext.Provider
      value={{
        images,
        setImages,
        fullScreenImage,
        setFullScreenImage,
        selectedImages,
        selectImage,
        setIsFullScreen,
        closeFullScreen,
        openFullScreen,
        isFullScreen,
        deleteImages,
        addImageScreen,
        setAddImageScreen,
        newImage,
        setNewImage,
        addImage,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export { ImagesContext, ImagesProvider };

ImagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
