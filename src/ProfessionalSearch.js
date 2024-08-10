import React from "react";
import './ProfessionalSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faVideo, faMagic, faPen, faSearch, faChartBar, faUsers, faBullhorn, faBriefcase, faGlobe, faEnvelope, faFilm, faBuilding, faChalkboardTeacher, faMailBulk, faAd, faYoutube } from '@fortawesome/free-solid-svg-icons';

function ProfessionalSearch() {
  return (
    <div className="container123">
      <div className="box123">
        <FontAwesomeIcon className="icon123" icon={faPalette} />
        <h4>Thumbnail Editors</h4>
      </div>
      <div className="box123  ">
        <FontAwesomeIcon icon={faVideo} className="icon123"  />
        <h4>Video Editors</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faMagic} className="icon123" />
        <h4>SFX Artist</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faPen} className="icon123" />
        <h4>Content Writer</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faSearch} className="icon123" />
        <h4>Content Researcher</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faChartBar}className="icon123"  />
        <h4>SEO Specialist</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faUsers}className="icon123"  />
        <h4>Social Media Manager</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faBullhorn} className="icon123" />
        <h4>Strategy Specialist</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faBriefcase} className="icon123" />
        <h4>Google Ads Analyst</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faGlobe}className="icon123"  />
        <h4>Promotion Manager</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faEnvelope}className="icon123"  />
        <h4>Event Organizer</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faFilm} className="icon123" />
        <h4>Photographer</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faBuilding} className="icon123" />
        <h4>Business Development</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faChalkboardTeacher}className="icon123"  />
        <h4>Digital Marketing</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faMailBulk} className="icon123" />
        <h4>Email Marketing</h4>
      </div>
      <div className="box123">
        <FontAwesomeIcon icon={faAd} className="icon123" />
        <h4>YouTube Ads</h4>
      </div>
    </div>
  );
}

export default ProfessionalSearch;
