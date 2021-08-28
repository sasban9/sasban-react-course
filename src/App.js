import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  return <div>
    <Switch>
    <Route path='/new-meetup'>
      <NewMeetupPage />
    </Route>
    <Route path='/favorites'>
      <FavoritesPage />
    </Route>
    <Route path='/' exact>
      <AllMeetupsPage />
    </Route>
    </Switch>
  </div>;
}

export default App;
