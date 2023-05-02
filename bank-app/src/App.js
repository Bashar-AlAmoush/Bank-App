import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from './form';
import Home from './home';
import Layout from './Layout';
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="forms" element={<Forms />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
