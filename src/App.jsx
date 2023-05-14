import { useContext } from 'react';
import CardLayout from './components/CardLayout';
import FullScreen from './components/FullScreen';
import { FullScreenContext } from './context/FullScreenCtx';
import images from './data/images';

const App = () => {
  const { isFullScreen } = useContext(FullScreenContext);

  return (
    <div className="">
      {isFullScreen && <FullScreen />}
      <CardLayout images={images} />
    </div>
  );
};

export default App;
