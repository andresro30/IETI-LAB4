import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/login';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import TempDrawer from './components/tempDrawer';
import NewTask from './components/NewTask';

class App extends Component {

    constructor(props) {
        console.log("estamos en app");
        super(props);
        
        this.state = {isLoggedIn: false};
        this.handleLogginChange = this.handleLogginChange.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    handleLogginChange() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };

    logOut(){
        localStorage.clear();
        localStorage.setItem('isLoggedIn',false);
        this.handleLogginChange();
    };

    render() {
        const LoginView = () => (<Login login={this.handleLogginChange}/>);

        const DrawerView = () => (<TempDrawer logOut={this.logOut}/>);

        const NewTaskView = () => (<NewTask />);

        return (
            
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h3 className="App-title">Lab 4 IETI</h3>
                    </header>
                    <div>
                        {this.state.isLoggedIn ? <Redirect to="/panel" />: <Redirect to="/"/>}
                        <Switch>
                            <Route exact path="/" component={LoginView}/>
                            <Route exact path="/panel" component={DrawerView}/>
                            <Route exact path="/panel/register" component={NewTaskView}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
