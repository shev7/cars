import { Link } from "@atoms";

type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    link: string;
  }>;
  className?: string;
};

export const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  className,
}) => {
  return (
    <div className={className}>
      <div className="mb:mb-2 mb-5 text-xl text-white">{title}</div>
      <div className="-ml-4 flex flex-col items-start">
        {links.map(({ link, href }) => (
          <Link key={link + href} text={link} href={href} textColor="white" />
        ))}
      </div>
    </div>
  );
};
