import { Button } from "@atoms";

type BlockTitleProps = {
  pretitle: string;
  title: string;
  aftertitle: string;
  buttonText: string;
  className?: string;
};

export const BlockTitle: React.FC<BlockTitleProps> = ({
  pretitle,
  title,
  aftertitle,
  buttonText,
  className,
}) => {
  return (
    <div className={className}>
      <p className="mb-7 text-base md:mb-3 md:text-sm">{pretitle}</p>
      <h2 className="mb-7 text-6xl font-medium md:mb-3 md:text-4xl">{title}</h2>
      <p className="mb-7 text-base md:mb-3 md:text-sm">{aftertitle}</p>
      <Button text={buttonText} />
    </div>
  );
};
