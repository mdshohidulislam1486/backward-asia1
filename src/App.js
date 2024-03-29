import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import BookNow from './pages/BookNow/BookNow';
import PriavateRoute from './pages/PriavateRoute/PriavateRoute';
import Booked from './pages/Booked/Booked';
import OrdersManage from './pages/OrdersManage/OrdersManage';
import Footer from './pages/Home/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/booked'>
              <Booked></Booked>
            </Route>
            <Route path='/ordermanage'>
              <OrdersManage>

              </OrdersManage>
            </Route>
            <PriavateRoute exact path='/booking/:id'>
               <BookNow>
              </BookNow>
            </PriavateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
