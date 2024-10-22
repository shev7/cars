import cx from "classnames";
import { Icon, TwitterIcon, FacebookIcon, InstagrammIcon } from "./assets";
import { useMobile } from "@utils";
import { useState } from "react";

type LinkProps = {
  href?: string;
  text: string;
  textColor?: string;
  className?: string;
  list?: string[];
};

const getSocialIcon = (href: string = "") => {
  if (href.includes("x.com")) {
    return <TwitterIcon />;
  }
  if (href.includes("facebook")) {
    return <FacebookIcon />;
  }
  if (href.includes("instagram")) {
    return <InstagrammIcon />;
  }
};

// add microanimation

export const Link: React.FC<LinkProps> = ({
  text,
  className,
  list,
  textColor = "black",
  href,
}) => {
  const { isMobile } = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  const listJSX = (
    <div className="invisible absolute left-0 top-full z-20 min-w-full py-5 opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
      <ul className="flex flex-col items-start bg-white text-sm">
        {list?.map((el, index) => (
          <li key={el + index} className="">
            <a
              className="relative block px-5 py-2 uppercase after:block after:h-[1px] after:w-0 after:bg-black after:transition-all after:content-[''] hover:after:w-full"
              href="#"
            >
              {el}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  if (isMobile) {
    return (
      <div
        className={cx(className, "relative inline-block cursor-pointer", {
          "text-white": textColor === "white",
        })}
      >
        <a
          href={href}
          className={cx(
            "relative inline-flex items-center gap-3 px-5 py-3 text-sm after:absolute after:bottom-0 after:block after:h-[1px] after:w-0 after:transition-all after:content-[''] ",
            {
              "after:bg-white": textColor === "white",
              "after:bg-black": textColor === "black",
            },
          )}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          {getSocialIcon(href)}
          {text}
          {list && <Icon />}
        </a>

        {list && (
          <div
            className="overflow-hidden duration-300"
            style={{
              height: isOpen ? 37 * list.length : 0,
            }}
          >
            <div
              className={cx("z-20 min-w-full pb-5 duration-300 ", {
                "opacity-0": !isOpen,
              })}
            >
              <ul className="flex flex-col items-center bg-white text-sm">
                {list?.map((el, index) => (
                  <li key={el + index} className="">
                    <a
                      className="relative block px-5 py-2 uppercase after:block after:h-[1px] after:w-0 after:bg-black after:transition-all after:content-[''] hover:after:w-full"
                      href="#"
                    >
                      {el}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cx(className, "group relative inline-block cursor-pointer", {
        "text-white": textColor === "white",
      })}
    >
      <a
        href={href}
        className={cx(
          "relative inline-flex items-center gap-3 px-5 py-3 text-sm after:absolute after:bottom-0 after:block after:h-[1px] after:w-0 after:transition-all after:content-[''] group-hover:after:w-[calc(100%_-_2.5rem)]",
          {
            "after:bg-white": textColor === "white",
            "after:bg-black": textColor === "black",
          },
        )}
      >
        {getSocialIcon(href)}
        {text}
        {list && <Icon />}
      </a>

      {list && listJSX}
    </div>
  );
};
