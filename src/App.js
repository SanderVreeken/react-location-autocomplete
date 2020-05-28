import React from 'react'
import './App.css'

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import Places from '../src/algolia/widget';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

function App() {
  return (
    <div className="application">
      <div className='finder'>
        <div className='finder-wrapper'>
          <InstantSearch indexName="airports" searchClient={searchClient}>
            <Places
              defaultRefinement={{
                lat: 37.7793,
                lng: -122.419
              }}
            />
          </InstantSearch>
        </div>
      </div>   
    </div>
  )
}

export default App
