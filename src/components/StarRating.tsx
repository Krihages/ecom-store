import { FullStar, HalfStar } from "./Icons/Stars";

type StarProps = {
  rating: number;
  color?: "primary" | "secondary";
  size?: number;
  displayRating?: boolean;
  maxRating?: number;
  textSize?: "sm" | "md" | "lg" | "xl";
};

export default function StarRating({
  rating,
  color = "primary",
  size = 18,
  displayRating = true,
  maxRating = 5,
  textSize = "sm",
}: StarProps) {
  const ifHalfStar = rating % 1 >= 0.4 ? true : false;

  return (
    <div className={`flex gap-2 items-center`}>
      <div className="flex">
        {rating ? (
          Array.from({ length: Math.floor(rating) }, (_, i) => {
            return <FullStar key={i} color={color} size={size} />;
          })
        ) : (
          <p>No ratings yet</p>
        )}
        {ifHalfStar && <HalfStar color={color} size={size} />}
      </div>
      {rating > 0 && displayRating && (
        <span className={`text-${textSize} font-semibold text-gray-600`}>
          {rating} / {maxRating}
        </span>
      )}
    </div>
  );
}
