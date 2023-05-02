
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from './form';
import Layout from './Layout';
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="forms" element={<Forms />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
