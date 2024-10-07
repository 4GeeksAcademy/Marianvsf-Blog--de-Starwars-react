import React  from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


function CardsPlanets({planets}) {
  console.log(planets.data)
  function imageError(e) {
    e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
  }
    return (
      <div className="overflow-x-auto" >

        <div className="d-flex">
        {planets.map(planet => (
          <div key={planet.uid} className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={imageError} className="card-img-top" alt="..." />
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text">Population: {planet.population}</p>
            <p className="card-text">Terrain: {planet.terrain}</p>
            <div className="d-flex justify-content-between">
            <Link to={planet.url} className="btn btn-primary">Learn more...</Link>
            <Link to={planet.url} className="btn btn-outline-warning justify-content-end"><FontAwesomeIcon icon={faHeart} /></Link>
            </div>
          </div>
        </div>
        ))}
        
      </div>
        </div>
    );
  }
  export default CardsPlanets;
  