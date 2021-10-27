import React, {useEffect} from 'react';
import Form from "./components/Form";
import {Route} from "react-router";
import Profile from "./Profile";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUser} from "./store/action-creators/user";

const App = () => {
  const {user, error, loading} = useTypedSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div>
      <Route exact path="/tz-urban-smart">
        <Form user={user} error={error} loading={loading} />
      </Route>
      <Route exact path="/tz-urban-smart/profile">
        <Profile user={user}/>
      </Route>
    </div>
  );
};

export default App;