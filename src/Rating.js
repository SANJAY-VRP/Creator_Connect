import React, { useState } from 'react';
import './Rating.css';
import axios from 'axios';


const RatingPopup = ({ userEmail ,reviewerEmail  }) => {
  const [stars, setStars] = useState(0);
  const [message, setMessage] = useState('');

  const handleStarClick = (starCount) => {
    setStars(starCount);
  };

  const handleSubmitRating = async () => {
    try {
      const response = await axios.post('/api/ratings', {
        userEmail,
        reviewerEmail,// Add userEmail to the request body
        stars,
        message,
      });

      console.log('Rating saved:', response.data);
      setStars(0);
      setMessage('');
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
          <div className="px-12 py-5">
            <h2 className="text-gray-800 text-3xl font-semibold">Your opinion matters to Me!</h2>
          </div>
          <div className="bg-gray-200 w-full flex flex-col items-center">
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-lg text-gray-800">How was quality of my works??</span>
              <div className="flex space-x-3">
                {[1, 2, 3, 4, 5].map((starCount) => (
                <svg
                key={starCount}
                onClick={() => handleStarClick(starCount)}
                className={`w-12 h-12 cursor-pointer ${stars >= starCount ? 'text-yellow-500' : 'text-gray-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <polygon
                  points="10 1 12.748 6.936 18.879 7.75 14.817 11.686 15.777 17.718 10 15.337 4.622 17.718 5.583 11.686 1.521 7.75 7.652 6.936 10 1"
                />
              </svg>
              
               
                ))}
              </div>
            </div>
            <div className="w-3/4 flex flex-col">
              <textarea
                rows="3"
                className="p-4 text-gray-500 rounded-xl resize-none"
                placeholder="Leave a message, if you want"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button onClick={handleSubmitRating} className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">
                Rate now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-gray-700"></div>
      </div>
    </div>
  );
};

export default RatingPopup;
