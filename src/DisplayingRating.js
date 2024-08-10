import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './DisplayingRating.css'; // Import CSS file for styling

const DisplayingRating = ({ userEmail }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get(`/api/ratings?userEmail=${userEmail}`);
        setRatings(response.data);
      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    };

    fetchRatings();
  }, [userEmail]);

  return (
    <div className='ratingflex'>
      
      {ratings.map((rating) => (
        <div key={rating._id} className="rating">
          <div className="stars">
            {/* Render stars based on the rating */}
            {[...Array(rating.stars)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="star" />
            ))}
          </div>
          <p className="message">{rating.message}</p>
          <p className="reviewer-email">Reviewer Email: {rating.reviewerMail}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayingRating;
