import { FooterColumn } from "@molecules";
import { Wrapper } from "@templates";

const footerColumns = [
  {
    id: 1,
    title: "Quick Links",
    links: [
      { link: "search", href: "" },
      { link: "shop", href: "" },
      { link: "contuct us", href: "" },
      { link: "about", href: "" },
    ],
  },
  {
    id: 2,
    title: "Shop links",
    links: [
      { link: "Volkswagen", href: "" },
      { link: "BMW", href: "" },
      { link: "Audi", href: "" },
      { link: "Chevrolet", href: "" },
      { link: "Mersedes", href: "" },
      { link: "Hyundai", href: "" },
    ],
  },
  {
    id: 3,
    title: "Follow me",
    links: [
      { link: "Instagramm", href: "https://www.instagram.com/" },
      { link: "Facebook", href: "https://www.facebook.com/" },
      { link: "Twitter", href: "https://x.com/" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <div>
      <div className="h-[100px] bg-white md:h-5"></div>
      <div className="mb:py-12 bg-main-background py-24">
        <Wrapper className="mb:block flex gap-8 md:flex-wrap md:gap-0">
          <div className="mb-5 mr-10 flex-[0_1_350px] text-white md:mb-5 md:flex-50 md:px-2 lg:mr-0">
            <div className="mb-5 md:text-xl">Cars from around the world</div>
            <div className="text-3xl md:text-base">
              Discover top car ratings and reviews to help you choose the best
              vehicle. Our expert analysis and user feedback ensure you find the
              perfect car
            </div>
          </div>
          {footerColumns.map(({ id, title, links }) => (
            <FooterColumn
              className="mb:px-2 mb:mb-4 md:flex-50"
              key={id}
              title={title}
              links={links}
            />
          ))}
        </Wrapper>
      </div>
    </div>
  );
};
