import React, {Component} from 'react';
import {Link} from 'react-router';
import {sortArtists} from '../utils';

export default class Artists extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const artists = this.props.artists;
		
		return (
			<div>
  			<h3>Artists</h3>
    			<div className="list-group">
    			{
      			sortArtists(artists).map(artist => (
          			<div className="list-group-item" key={artist.id}>
            			<Link to={`/artists/${artist.id}`}>{artist.name}</Link> 
          			</div>
        			)    
      			)
    			}
  			</div>
			</div>
		);
	}
}
