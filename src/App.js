import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Program from './Pages/Program/Program';
import Collaborative from './Pages/Collaborative/Collaborative';
import Blogs from './Pages/Blog/Blogs';
import BlogDetails from './Pages/Blog/BlogDetails';
import Events from './Pages/Event/Events';
import Contacts from './Pages/Contacts/Contacts';
import Footer from './Pages/Shared/Footer';
import Donation from './Pages/Donation/Donation';
import Schools from './Pages/Collaborative/Partners/Schools/Schools';
import University from './Pages/Collaborative/Partners/University';
import Business from './Pages/Collaborative/Partners/Business';
import NonProfit from './Pages/Collaborative/Partners/NonProfit';
import Employee from './Pages/Collaborative/Partners/Employee';
import SchoolDetails from './Pages/Collaborative/Partners/Schools/SchoolDetails';
import SuperAdmin from './Pages/Users/SuperAdmin';
import DonationBank from './Pages/Donation/DonationBank';
import Career from './Pages/Career/Career';
import ApplyNow from './Pages/Career/ApplyNow';
import Article1 from './Pages/Blog/Articles/Article1';
import Article2 from './Pages/Blog/Articles/Article2';
import Article3 from './Pages/Blog/Articles/Article3';
import Article4 from './Pages/Blog/Articles/Article4';
import Article5 from './Pages/Blog/Articles/Article5';
import Article6 from './Pages/Blog/Articles/Article6';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Users/Register';
import Login from './Pages/Users/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddArticles from './Pages/Dashboard/Articles/AddArticles';
import AddProgram from './Pages/Dashboard/ProgramItem/AddProgram';
import AddEvents from './Pages/Dashboard/AddEvents/AddEvents';
import ManageArticles from './Pages/Dashboard/Articles/ManageArticles';
import ManageEvents from './Pages/Dashboard/AddEvents/ManageEvents';
import ManageProgram from './Pages/Dashboard/ProgramItem/ManageProgram';
import ManageCareer from './Pages/Dashboard/Careerdb/ManageCareer';
import DonationList from './Pages/Dashboard/DonationList/DonationList';
import AddCareer from './Pages/Dashboard/Careerdb/career';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/program' element={<Program />} />
              <Route path='/donation' element={<Donation />} />
              <Route path='/donationbank' element={<DonationBank />} />
              <Route path='/collaborative' element={<Collaborative />} />
              <Route path='/school' element={<Schools />} />
              <Route path='/school/:schoolId' element={<SchoolDetails />} />
              <Route path='/university' element={<University />} />
              <Route path='/business' element={<Business/>} />
              <Route path='/nonprofit' element={<NonProfit />} />
              <Route path='/employee' element={<Employee />} />
              <Route path='/blog' element={<Blogs />} />
              <Route path='/article1' element={<Article1 />} />
              <Route path='/article2' element={<Article2 />} />
              <Route path='/article3' element={<Article3 />} />
              <Route path='/article4' element={<Article4 />} />
              <Route path='/article5' element={<Article5 />} />
              <Route path='/article6' element={<Article6 />} />
              <Route path='/blog/:blogId' element={<BlogDetails />} />
              <Route path='/events' element={<Events />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/superAdmin' element={<SuperAdmin />} />
              <Route path='/career' element={<Career />} />
              <Route path='/apply-now' element={<ApplyNow />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/dashboard' element={<Dashboard />}>

                <Route exact path="/dashboard" element={<DashboardHome />} />
                <Route path={`/dashboard/addcareer`} element={<AddCareer />} />
                <Route path={`/dashboard/addprogram`} element={<AddProgram />} />
                <Route path={`/dashboard/addarticles`} element={<AddArticles />} />
                <Route path={`/dashboard/addevents`} element={<AddEvents />} />
                <Route path={`/dashboard/manageArticles`} element={<ManageArticles />} />
                <Route path={`/dashboard/manageEvents`} element={<ManageEvents />} />
                <Route path={`/dashboard/managePrograms`} element={<ManageProgram />} />
                <Route path={`/dashboard/manageCareer`} element={<ManageCareer />} />
                <Route path={`/dashboard/donatonList`} element={<DonationList />} />

              </Route>
            </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
