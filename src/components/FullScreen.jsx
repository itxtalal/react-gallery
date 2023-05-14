import { useContext } from 'react';
import { GrClose } from 'react-icons/gr';
import { FullScreenContext } from '../context/FullScreenCtx';
import images from '../data/images';

const FullScreen = () => {
  const { closeFullScreen, currentImageId } = useContext(FullScreenContext);

  const currentImage = images.find((image) => image.id === currentImageId);

  return (
    <div className="h-screen w-screen fixed top-0 bg-slate-800 bg-opacity-70">
      <img
        src={currentImage.image}
        alt="Img"
        className="h-auto max-w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div onClick={closeFullScreen} className="absolute top-6 right-12 p-1">
        <GrClose className="text-white text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default FullScreen;
