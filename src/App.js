import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Courses from './pages/Courses';
import Error from './pages/Error';
import NewCourse from './pages/NewCourse';
import Students from './pages/Students';


function App() {
  return (
    <div className='main-wrapper main-wrapper-02'>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path='/:id' element={ <Courses />}  />
          <Route path='/students' element={ <Students /> } />
          <Route path='/create' element={ <NewCourse /> } />
          <Route path='*' element={ <Error /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
