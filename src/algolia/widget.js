import React, { Component } from 'react';
import places from 'places.js';
import connect from './connector';

class Places extends Component {
  createRef = c => (this.element = c);

  componentDidMount() {
    const { refine, defaultRefinement } = this.props;

    const autocomplete = places({
      container: this.element,
      // Algolia Places options
    });

    autocomplete.on('change', event => {
      console.log(event.suggestion)
      refine(event.suggestion.latlng);
    });

    autocomplete.on('clear', () => {
      refine(defaultRefinement);
    });
  }

  render() {
    return (
      <input className='finder__input' placeholder='Where are we going?' ref={this.createRef} type='search'/>
    )
  }
}

export default connect(Places);