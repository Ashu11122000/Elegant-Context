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
          className="group overflow-hidden"
        >
          {/* Product Image Skeleton */}
          <div className="relative overflow-hidden rounded-[1.8rem]">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[0.04] via-transparent to-black/10" />

            {/* Image skeleton */}
            <Skeleton
              variant="image"
              className={`w-full rounded-[1.8rem] ${
                compact
                  ? "h-48"
                  : "h-80"
              }`}
            />

            {/* Floating badge skeleton */}
            {showBadge && (
              <div className="absolute left-5 top-5 z-20">
                <Skeleton
                  width="88px"
                  height="30px"
                  className="rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl"
                />
              </div>
            )}

            {/* Bottom image fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative mt-7 space-y-5">
            {/* Category */}
            <div className="flex items-center gap-3">
              <Skeleton
                width="72px"
                height="10px"
                className="rounded-full"
              />

              <div className="h-px flex-1 bg-white/5" />
            </div>

            {/* Product title */}
            <div className="space-y-3">
              <Skeleton
                variant="title"
                width="82%"
                className="rounded-2xl"
              />

              <Skeleton
                variant="text"
                width="58%"
                className="rounded-xl"
              />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              {Array.from(
                { length: 5 },
                (_, starIndex) => (
                  <Skeleton
                    key={starIndex}
                    width="16px"
                    height="16px"
                    className="rounded-full"
                  />
                )
              )}

              <Skeleton
                width="48px"
                height="12px"
                className="ml-2 rounded-full"
              />
            </div>

            {/* Price section */}
            <div className="flex items-end gap-3">
              <Skeleton
                width="120px"
                height="28px"
                className="rounded-2xl"
              />

              <Skeleton
                width="70px"
                height="18px"
                className="rounded-xl"
              />
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Skeleton
                variant="button"
                className="h-[54px] w-full rounded-[1.4rem]"
              />
            </div>
          </div>

          {/* Bottom subtle glow */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent opacity-70" />
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