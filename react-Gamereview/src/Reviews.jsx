import React, { useState } from 'react';

export default function Reviews() {
  const [gameName, setGameName] = useState('');
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    
    if (gameName && review) {
      const newReview = {
        gameName,
        rating,
        review,
        date: new Date().toLocaleDateString(),
      };
      setReviews([newReview, ...reviews]);
      setGameName('');
      setRating(1);
      setReview('');
    }
  };

  return (
    <div className="game-review-container">
      <h2>Submit a Game Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label>Game Name:</label>
          <input
            type="text"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>

      {reviews.length > 0 && (
        <div className="review-list">
          <h3>Game Reviews</h3>
          {reviews.map((rev, index) => (
            <div key={index} className="review-card">
              <h4>{rev.gameName}</h4>
              <p>Rating: {rev.rating} / 10</p>
              <p>{rev.review}</p>
              <p className="date">Reviewed on: {rev.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
