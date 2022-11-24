import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import SignIn from './routes/SignIn/SignIn';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signin" element={<SignIn />} />
    </Route>
  </Routes>
);

export default App;
