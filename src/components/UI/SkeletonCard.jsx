import PropTypes from "prop-types";
import Card from "./Card";

function SkeletonCard({
  count = 1,
  showBadge = false,
  compact = false,
}) {
  const skeletonItems = Array.from({ length: count });

  return (
    <>
      {skeletonItems.map((_, index) => (
        <Card
          key={index}
          bordered
          className="animate-pulse overflow-hidden"
        >
          <div
            className={`
              rounded-xl bg-white/10
              ${compact ? "h-40" : "h-64"}
            `}
          />

          <div className="mt-4 space-y-3">
            {showBadge && (
              <div className="h-5 w-20 rounded-full bg-white/10" />
            )}

            <div className="h-5 w-3/4 rounded bg-white/10" />

            <div className="h-4 w-1/2 rounded bg-white/10" />

            <div className="h-10 w-full rounded-full bg-white/10" />
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