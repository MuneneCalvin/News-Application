import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route,} from "react-router-dom";
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <navbar/>
      <Routes>
          <Route path="/"  element={<News pageSize={PageSize} country="in" category="general"/>} />
          <Route path="/about"  element={<About/>} />

          {/* category */}
          <Route exact path="/general" element={<News key="general"  pageSize={PageSize} country="in" category="general"/>} />
          <Route exact path="/business" element={<News key="business" pageSize={PageSize} country="in" category="business"/>} />
          <Route exact path="/entertainment" element={<News   key="entertainment" pageSize={PageSize} country="in" category="entertainment"/>} />
          <Route exact path="/health" element={<News key="health" pageSize={PageSize} country="in" category="health"/>} />
          <Route exact path="/science"element={<News key="science" pageSize={PageSize} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News key="sports" pageSize={PageSize} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={PageSize} country="in" category="technology"/>} />
          

      </Routes> 

      </BrowserRouter>
    </>
  )
}

export default App
