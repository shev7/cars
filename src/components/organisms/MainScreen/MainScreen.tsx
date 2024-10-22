import { BlockTitle } from "@molecules";
import { useScroll } from "./utils/useScroll";

import img_1 from "./assets/img_1.jpg";
import img_2 from "./assets/img_2.jpg";
import img_3 from "./assets/img_3.jpg";
import img_4 from "./assets/img_4.jpg";
import img_5 from "./assets/img_5.jpg";
import img_6 from "./assets/img_6.jpg";

const mainScreenSlider = [
  {
    id: 0,
    title: "Volkswagen Touareg",
    aftertitle: "Take a seat and enjoy",
    pretitle: "Favourite crossover",
    buttonText: "see more",
    img: img_1,
  },
  {
    id: 1,
    title: "BMW 5 series",
    aftertitle: "Pioneering technologies",
    pretitle: "Coolest sedan",
    buttonText: "learn more",
    img: img_2,
  },
  {
    id: 2,
    title: "Audi A5",
    aftertitle: "Joy in every drive",
    pretitle: "Best coupe",
    buttonText: "learn more",
    img: img_3,
  },
  {
    id: 3,
    title: "Chevrolet corvette",
    aftertitle: "High-performance sportback",
    pretitle: "Amazing design",
    buttonText: "take a look",
    img: img_4,
  },
  {
    id: 4,
    title: "Mersedes E-class",
    aftertitle: "Elegance at its best",
    pretitle: "Royal auto",
    buttonText: "see more",
    img: img_5,
  },
  {
    id: 5,
    title: "Hyundai Elantra",
    aftertitle: "For the ambitious, the daring, the extraordinary",
    pretitle: "Simple with pleasure",
    buttonText: "learn more",
    img: img_6,
  },
];

export const MainScreen: React.FC = () => {
  const { count, height } = useScroll();

  return (
    <div className="relative flex">
      <div className="relative z-10 w-[50%] md:w-full">
        {mainScreenSlider.map(({ id, ...rest }) => (
          <div
            className="flex h-screen items-center bg-main-gray md:bg-main-gray-transparent"
            key={id}
          >
            <BlockTitle {...rest} className="mx-auto w-full max-w-3xl px-5" />
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 h-full w-[50%] md:w-full">
        <div className="sticky top-0 h-screen w-full">
          {mainScreenSlider.map(({ img, id }, i) => {
            const imgJSX = (
              <img
                src={img}
                className="h-screen w-full object-cover object-left-top md:absolute md:bottom-0"
                alt=""
              />
            );
            if (i === count) {
              return (
                <div
                  className="absolute top-0 z-[1] h-screen w-full overflow-hidden md:bottom-0 md:top-[unset]"
                  key={id}
                >
                  {imgJSX}
                </div>
              );
            }
            if (i === count + 1) {
              return (
                <div
                  style={{ height: height + "px" }}
                  className="absolute top-0 z-10 h-screen w-full overflow-hidden md:bottom-0 md:top-[unset]"
                  key={id}
                >
                  {imgJSX}
                </div>
              );
            } else {
              return (
                <div
                  className="absolute top-0 h-screen w-full overflow-hidden md:bottom-0 md:top-[unset]"
                  key={id}
                >
                  {imgJSX}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
