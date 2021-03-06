import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationList() {
  // TODO: Add useState to track data from useEffect

  let [locationList, setLocationList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/location/')
      .then(object =>{
        locationList = object.data.results
        // console.log(object.data.results)
        setLocationList(locationList);
      })
      .catch(object =>{
        console.log('Error! Try again')
      })
    

  }, [])

  return (
    <section className='location-list grid-view'>
      {locationList.map(location => <LocationCard location={location}/>)}
    </section>
  )
};
