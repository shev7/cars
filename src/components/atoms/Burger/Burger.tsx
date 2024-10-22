import cx from "classnames";

type BurgerProps = {
  isActive: boolean;
  onClick: () => void;
};

export const Burger: React.FC<BurgerProps> = ({ isActive, onClick }) => {
  return (
    <div
      className="group flex h-5 w-8 cursor-pointer flex-col justify-between"
      onClick={onClick}
    >
      <div
        className={cx(
          "h-[2px] origin-left bg-black duration-300 group-hover:w-full",
          {
            "w-[90%]": !isActive,
            "w-[100%] -translate-y-[2px] rotate-45": isActive,
          },
        )}
      ></div>
      <div
        className={cx("h-[2px] bg-black duration-300", {
          "opacity-0": isActive,
        })}
      ></div>
      <div
        className={cx(
          "h-[2px] origin-left bg-black duration-300 group-hover:w-full",
          {
            "w-[60%]": !isActive,
            "w-[100%] translate-y-[2px] -rotate-45": isActive,
          },
        )}
      ></div>
    </div>
  );
};
