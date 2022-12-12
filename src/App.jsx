import { Routes, Route } from 'react-router-dom';

import { Navigation, Home, Shop, Login } from './routes';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
    </Route>
  </Routes>
);

export default App;
