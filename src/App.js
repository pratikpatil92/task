import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './component/Home/home';
import ViewTask from './component/task/ViewTask';
import AddTask1 from './component/task/AddTask1';
import store from './store'
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header></Header>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Task" component={ViewTask}></Route>
      <Route exact path="/add-task/:id" component={AddTask1}></Route>
    </Router>
    </Provider>
  );
}

export default App;
