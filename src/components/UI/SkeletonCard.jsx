import PropTypes from "prop-types";
import Card from "./Card";
import Skeleton from "./Skeleton";

function SkeletonCard({
  count = 1,
  showBadge = false,
  compact = false,
}) {
  const skeletonItems = Array.from(
    { length: count },
    (_, index) => index
  );

  return (
    <>
      {skeletonItems.map((item) => (
        <Card
          key={item}
          bordered
          className="overflow-hidden"
        >
          {/* Product image skeleton */}
          <Skeleton
            variant="image"
            className={`w-full ${
              compact
                ? "h-44 rounded-2xl"
                : "h-72 rounded-3xl"
            }`}
          />

          {/* Content skeleton */}
          <div className="mt-6 space-y-4">
            {showBadge && (
              <Skeleton
                width="90px"
                height="28px"
                className="rounded-full"
              />
            )}

            {/* Product title */}
            <Skeleton
              variant="title"
              width="75%"
            />

            {/* Subtitle / category */}
            <Skeleton
              variant="text"
              width="50%"
            />

            {/* Price */}
            <Skeleton
              variant="text"
              width="35%"
              height="20px"
            />

            {/* CTA */}
            <Skeleton
              variant="button"
              className="w-full"
            />
          </div>
        </Card>
      ))}
    </>
  );
}

SkeletonCard.propTypes = {
  count: PropTypes.number,
  showBadge: PropTypes.bool,
  compact: PropTypes.bool,
};

export default SkeletonCard;