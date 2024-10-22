import cx from "classnames";

type TestimonialItemProps = {
  className?: string;
  name: string;
  town: string;
  text: string;
  img: string;
};

export const TestimonialItem: React.FC<TestimonialItemProps> = ({
  name,
  town,
  text,
  img,
  className,
}) => {
  return (
    <div
      className={cx(
        className,
        "h-full select-none border-b-[1px] border-main-border px-20 py-[10%] md:border-t-[1px] md:px-10",
      )}
    >
      <img
        className="h-16 w-16 rounded-full object-cover md:h-12 md:w-12"
        src={img}
        alt=""
      />
      <p className="my-8 text-2xl text-main-text-black md:text-base">{text}</p>
      <h4 className="mb-1 text-base text-main-text-black md:text-sm">{name}</h4>
      <h5 className="text-base text-main-text-black md:text-sm">{town}</h5>
    </div>
  );
};
