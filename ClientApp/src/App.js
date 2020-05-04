//Modified from computer generated code
import React, { useState } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import RocketLauncherContent from './pages/RocketLaunchContent';

import './custom.css';

const App = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '', userName: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout isLoggedIn={isLoggedIn} firstName={user.firstName} setUser={setUser} setIsLoggedIn={setIsLoggedIn}>
      <Route
        path="/"
        render={props => (
          <RocketLauncherContent
            {...props}
            user={user}
            setUser={setUser}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      />
    </Layout>
  );
};

export default App;
