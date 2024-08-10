import React from "react";
import './CreatorSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGamepad, 
  faVideo, 
  faUtensils, 
  faMusic, 
  faCamera, 
  faBookOpen, 
  faPencilRuler, 
  faPaintBrush, 
  faMicrophone, 
  faFilm, 
  faPalette, 
  faMagic, 
  faHeart, 
  faRunning, 
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';

function CreatorsSearch() {
  return (
    <div className="container123">
      <div className="box123">
        <FontAwesomeIcon className="icon123" icon={faGamepad} />
        <h4>Gaming</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon className="icon123" icon={faVideo} />
        <h4>Vlogs</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faUtensils}  className="icon123"/>
        <h4>Cooking</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faMusic} className="icon123" />
        <h4>Music</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faCamera} className="icon123" />
        <h4>Photography</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faBookOpen} className="icon123" />
        <h4>Education</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faPencilRuler} className="icon123" />
        <h4>Art & Design</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faPaintBrush} className="icon123" />
        <h4>DIY & Crafts</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faMicrophone}  className="icon123"/>
        <h4>Podcasts</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faFilm}  className="icon123"/>
        <h4>Film Making</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faPalette}  className="icon123"/>
        <h4>Art & Animation</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faMagic} className="icon123" />
        <h4>Special Effects</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faHeart}  className="icon123"/>
        <h4>Lifestyle</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faRunning} className="icon123" />
        <h4>Fitness & Sports</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faGlobe} className="icon123" />
        <h4>Travel</h4>
      </div>
    </div>
  );
}

export default CreatorsSearch;
