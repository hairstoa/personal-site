import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Footer, NavigationBar } from "./Components";
import { AboutPage, ContactPage, DevPage, HomePage } from "./Pages";

function App() {

  return (
    < div className="App" >
    < NavigationBar />
    < HomePage />
    < AboutPage />
    < DevPage />
    < ContactPage />
    < Footer />
    </div>
  );
}

export default App;
