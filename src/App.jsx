import { useContext } from 'react';
import CardLayout from './components/CardLayout';
import FullScreen from './components/FullScreen';
import { ImagesContext } from './context/ImagesCtx';
import Navbar from './components/Navbar';
import AddImageModal from './components/AddImageModal';

const App = () => {
  const { isFullScreen, addImageScreen } = useContext(ImagesContext);
  const { images } = useContext(ImagesContext);

  return (
    <div className="">
      {isFullScreen && <FullScreen />}
      {addImageScreen && <AddImageModal />}
      <Navbar />
      <CardLayout images={images} />
    </div>
  );
};

export default App;
