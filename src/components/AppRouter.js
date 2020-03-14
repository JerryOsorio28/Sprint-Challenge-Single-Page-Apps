import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodesList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path ='/characters' render={props => <CharacterList {...props}/>}charactersList={CharacterList}/>
      <Route path ='/locations' render={props => <LocationsList {...props}/>}locationsList={LocationsList}/>
      <Route path ='/episodes' render={props => <EpisodesList {...props}/>}episodesList={EpisodesList}/>
      <Route path ='/' component={WelcomePage}/>
    </Switch>
  </div>

}
