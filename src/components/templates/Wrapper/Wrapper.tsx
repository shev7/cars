import cx from "classnames";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={cx("mx-auto max-w-wrapper px-5", className)}>
      {children}
    </div>
  );
};
