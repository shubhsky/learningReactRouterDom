import { useState } from 'react';
import Navbar from './Navbar/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';

function App() {
  const [page, setPage] = useState('home')
  return (
    <>
      <Navbar setPage = {setPage} />
      {page === 'home' && <Home/>}
      {page === 'about' && <About/>}
      {page === 'items' && <Items/>}
    </>
  );
}

export default App;
