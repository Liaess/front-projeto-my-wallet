import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Wallet from "./Pages/Wallet";
import Revenue from "./Pages/Revenue";
import Expense from "./Pages/Expense";
import GlobalStyles from "./Styles/GlobalStyles";
import { Route, Switch, BrowserRouter } from "react-router-dom"; 
import UserContext from "./Context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState()

  return (
    <UserContext.Provider value = {{user,setUser}}>
      <BrowserRouter>
      <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/wallet" exact component={Wallet} />
          <Route path="/revenue" exact component={Revenue} />
          <Route path="/expense" exact component={Expense} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
