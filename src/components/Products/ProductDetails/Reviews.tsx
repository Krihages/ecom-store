import StarRating from "@/components/StarRating";
import { ReviewProps } from "@/types/ProductProps";

type ReviewsProps = {
  reviews: ReviewProps[];
  avgRating: number;
};

export default function Reviews({ reviews, avgRating }: ReviewsProps) {
  if (!reviews.length) return null;

  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 pt-16">
        <h2 className="text-xl font-semibold text-center pb-4">Reviews:</h2>
        <div className=" flex flex-wrap gap-6 justify-center">
          {reviews.map((review: any, index: number) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: ReviewProps }) {
  return (
    <div className="text-sm w-52 flex flex-col gap-2 justify-between">
      <StarRating rating={review.rating} />
      <p>{review.description}</p>
      <p>
        By <span className="font-semibold">{review.username}</span>
      </p>
    </div>
  );
}
