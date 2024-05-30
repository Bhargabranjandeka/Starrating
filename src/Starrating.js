import { useState } from "react";
import Star from "./Star";

const Maxrating = 10;
export default function Starrating() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTemprating] = useState(0);

  const handleRating = function (rating) {
    setRating(rating);
  };

  return (
    <div className="container">
      <div className="stars">
        {Array.from({ length: Maxrating }, (_, i) => (
          <Star
            key={i}
            fill={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverin={() => setTemprating(i + 1)}
            onHoverout={() => setTemprating(0)}
          />
        ))}
      </div>
    </div>
  );
}
