// Import necessary modules (e.g., React, useState, useEffect)
import React, { useState, useEffect } from 'react';

function CustomerReviews() {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from an API using useEffect
  useEffect(() => {
    fetch('/api/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  // Render reviews
  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <p>{review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerReviews;