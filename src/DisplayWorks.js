import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayWorks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function DisplayWorks({ userEmail }) {
    const [uploads, setUploads] = useState([]);
    const [likedUploads, setLikedUploads] = useState([]);

    useEffect(() => {
        const fetchUploads = async () => {
            try {
                const response = await axios.get('/api/uploads', {
                    params: { email: userEmail }
                });
                setUploads(response.data);
            } catch (error) {
                console.error('Error fetching uploads:', error);
            }
        };
    
        const fetchLikedUploads = async () => {
            try {
                const response = await axios.get(`/api/user/likeduploads?email=${userEmail}`);
                setLikedUploads(response.data.map(upload => upload._id));
            } catch (error) {
                console.error('Error fetching liked uploads:', error);
            }
        };
    
        fetchUploads();
        fetchLikedUploads();
    }, [userEmail]);
    

    const handleLike = async (uploadId) => {
        try {
            await axios.post(`/api/upload/like/${uploadId}`);
            // Update the state to reflect the change in like count
            setUploads(prevUploads =>
                prevUploads.map(upload => {
                    if (upload._id === uploadId) {
                        return {
                            ...upload,
                            likes: upload.likes + 1
                        };
                    }
                    return upload;
                })
            );
            // Update liked uploads state
            setLikedUploads(prevLikedUploads => [...prevLikedUploads, uploadId]);
        } catch (error) {
            console.error('Error liking upload:', error);
        }
    };
    

    const isLiked = (uploadId) => {
        return likedUploads.includes(uploadId);
    };

    return (
        <div>
            <h2>User's Works</h2>
            <div className="uploads-container">
                {uploads.map(upload => (
                    <div key={upload._id} className="upload-item">
                        <img src={`http://localhost:3001/${upload.imagePath}`} alt={upload.description} />
                        <p>{upload.description} </p>
                        <p>Email: {upload.email}</p>
                        <div className='likecontainer'>
                            <button className='likebutton' onClick={() => handleLike(upload._id)} disabled={isLiked(upload._id)}>
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </button>
                            <span className='liketext'>{upload.likes} Likes</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayWorks;
