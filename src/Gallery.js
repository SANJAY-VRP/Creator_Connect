// Gallery.js

import React from "react";
import './Gallery.css'

function Gallery({ images, descriptions, onDeleteImage, onDescriptionChange }) {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img className="object-cover ding h-64 w-full" src={image} alt={`Uploaded ${index}`} />
                        <div className="p-4">
                            <input
                                className="w-full mb-2 px-3 py-2 border biggallery rounded-lg focus:outline-none focus:border-indigo-500"
                                type="text"
                                value={descriptions[index]}
                                onChange={(e) => onDescriptionChange(index, e)}
                                placeholder="Enter description"
                            />
                            <button
                                className="block w-full px-4 py-2 text-xs font-semibold text-center text-white uppercase transition bg-red-500 rounded-lg shadow hover:bg-red-600 focus:outline-none"
                                onClick={() => onDeleteImage(index)}
                            >
                                Delete Image
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
