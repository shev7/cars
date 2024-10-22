import cx from "classnames";
import React, { useRef } from "react";
import { useParalax } from "./utils/useParalax";

type AutoItemProps = {
  title: string;
  country: string;
  description: string;
  img: string;
  width: number;
  className?: string;
  left?: number;
};

export const AutoItem: React.FC<AutoItemProps> = ({
  title,
  country,
  description,
  img,
  className,
  width,
  left = -50,
}) => {
  const ref = useRef(null);

  const { scrollLeft } = useParalax(ref);

  const transform = scrollLeft / 20;

  return (
    <div
      ref={ref}
      style={{ flex: `0 0 ${width}px`, width }}
      className={cx(
        className,
        "flex w-full flex-shrink-0 flex-col border-l border-l-main-text-gray px-10 lg:px-5",
      )}
    >
      <h3 className="text-3xl lg:text-2xl">{title}</h3>
      <p className="my-4">
        <span className="text-main-text-gray lg:text-sm">Country:</span>{" "}
        {country}
      </p>
      <p
        className="mb-3 text-sm leading-6 text-main-text-gray lg:max-h-[30vh] lg:min-h-[20vh] lg:overflow-auto lg:text-lt"
        style={{
          scrollbarWidth: "thin",
        }}
      >
        {description}
      </p>
      <div className="mx-auto mt-auto w-full">
        <div className="relative overflow-hidden pb-[100%]">
          <img
            style={{
              transform: `translate(-${transform}px, 0)`,
              left: `${left}%`,
            }}
            className="absolute -left-[50%] top-0 h-full w-[200%] max-w-[200%] -translate-x-1/3 object-cover duration-300"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export const MemoAutoItem = React.memo(AutoItem, () => {
  return true;
});
