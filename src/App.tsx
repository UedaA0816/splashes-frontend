import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { photoUserIdState } from './atoms/PhotoUserIdAtom';
import Home from './components/pages/Home';

const App: React.FC = () => {
  
  return <Home />
}


export default App;
