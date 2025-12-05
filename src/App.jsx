import './App.css';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import KycDetails from './pages/KycDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<KycDetails />} />
    </Routes>
  );
}
export default App;
