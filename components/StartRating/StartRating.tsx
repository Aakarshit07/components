import React, { useState } from "react";

const StartRating = ({ numberOfStart = 5 }) => {
  const [starIdx, setStarIdx] = useState(-1);
  const startList = Array.from({ length: numberOfStart }).fill(0);
  const [hoverIdx, setHoverIdx] = useState(-1);

  return (
    <div className="w-full flex  items-center justify-center gap-3 p-4">
      {startList.map((_, idx) =>
        idx <= (hoverIdx >= 0 ? hoverIdx : starIdx) ? (
          <Star
            key={idx}
            isStartFilld={true}
            onStarClick={() => setStarIdx(idx === starIdx ? -1 : idx)}
            onMouseHover={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(-1)}
            isHovered={true}
          />
        ) : (
          <Star
            key={idx}
            isStartFilld={false}
            onStarClick={() => setStarIdx(idx === starIdx ? -1 : idx)}
            onMouseHover={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(-1)}
            isHovered={false}
          />
        ),
      )}
    </div>
  );
};

export default StartRating;

const Star = ({
  isStartFilld = false,
  onStarClick,
  isHovered = false,
  onMouseHover,
  onMouseLeave,
}: any) => {
  return (
    <div
      className={`rounded-full h-6 w-6 ${isStartFilld ? "bg-amber-300" : "bg-gray-300"} ${isHovered ? "bg-amber-200" : "bg-gray-300"} `}
      onClick={onStarClick}
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseLeave}
    />
  );
};
