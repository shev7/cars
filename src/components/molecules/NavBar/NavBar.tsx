import { Burger, Link } from "@atoms";
import { useMobile } from "@utils";
import { useState } from "react";
import cx from "classnames";

const menuLinks = [
  {
    text: "Audi",
  },
  {
    text: "BMW",
  },
  {
    text: "Volkswagen",
    list: ["Polo", "Golf", "Passat", "Teramont"],
  },
];

export const NavBar: React.FC = () => {
  const { isMobile } = useMobile();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuClickHandler = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  if (isMobile) {
    return (
      <>
        <Burger onClick={menuClickHandler} isActive={isMenuVisible} />
        <nav
          className={cx(
            "fixed left-0 top-[100vh] z-50 flex h-[calc(100vh_-_76px)] w-full flex-col items-center justify-center bg-white duration-300",
            {
              "top-[76px]": isMenuVisible,
            },
          )}
        >
          {menuLinks.map(({ text, list }) => (
            <Link text={text} list={list} key={text} />
          ))}
        </nav>
      </>
    );
  }

  return (
    <nav className="-mr-5">
      {menuLinks.map(({ text, list }) => (
        <Link text={text} list={list} key={text} />
      ))}
    </nav>
  );
};
