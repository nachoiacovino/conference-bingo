import './App.scss';

import { useState } from 'react';

import Board from './components/Board/Board';
import Landing from './components/Landing/Landing';

const App = () => {
  const [limit, setLimit] = useState(null);

  if (limit) {
    return <Board limit={limit} />;
  } else {
    return <Landing setLimit={setLimit} />;
  }
};

export default App;
