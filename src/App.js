import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import {Route} from 'react-router-dom';
import CharacterList from './components/CharacterList.js';
import LocationList from './components/LocationsList.js';
import EpisodesList from './components/LocationsList.js';


export default function App() {
  return (
    <main>
    <Header />
    <TabNav />
    <AppRouter>
      <Route path ='/characters' render={props => <CharacterList {...props}/>}charactersList={CharacterList}/>
      <Route path ='/locations' render={props => <LocationList {...props}/>}locationsList={LocationList}/>
      <Route path ='/episodes' render={props => <EpisodesList {...props}/>}episodesList={EpisodesList}/>
    </AppRouter>
  </main>
  )
}