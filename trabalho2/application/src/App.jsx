import React, { useState } from 'react';
    import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
    import Login from './Login';
    import Register from './Register';

    const App = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      const handleLogin = () => {
        setIsLoggedIn(true);
      };

      const handleLogout = () => {
        setIsLoggedIn(false);
      };

      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login" onClick={handleLogin}>Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/" exact>
                <h1>Bem-vindo à nossa Landing Page</h1>
                <p>A autenticação multifator (MFA) é crucial para a segurança das aplicações web.</p>
                {isLoggedIn ? <p>Você está logado!</p> : <p>Você não está logado.</p>}
              </Route>
              <Route path="/login">
                <Login onLogin={handleLogin} />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    };

    export default App;
