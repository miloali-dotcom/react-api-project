import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ArmorInfo from './components/ArmorInfo';

function App(armor) {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/armor/:id" render={() => <ArmorInfo armor={armor} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
