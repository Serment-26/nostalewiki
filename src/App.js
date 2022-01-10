import './style/App.css';
import Index from './componment/index';
import Header from './componment/header';
import Spupgrade from './componment/spupgrade';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div id="header">
      <Header/>
    </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/spupgrade" element={<Spupgrade/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
