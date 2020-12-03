import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

// interface StateObject {
//   id: string;
//   image: string;
//   title: string;
//   price: number;
//   description: string;
// }

// interface State {
//   cart?: StateObject[];
//   products: StateObject[];
// }

// interface InitState {
//   addToCart: (payload: StateObject) => void;
//   removeFromCart: (payload: StateObject) => void;
//   state: State;
// }

const App = (): JSX.Element => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/checkout/information" component={Information} />
              <Route exact path="/checkout/payment" component={Payment} />
              <Route exact path="/checkout/success" component={Success} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
