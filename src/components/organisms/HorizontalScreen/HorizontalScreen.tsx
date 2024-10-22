// https://digital-cover.com
// https://foundry.co/

import { AutoItem } from "@molecules";
import { useScroll } from "./utils/useScroll";
import { useTextAnimation } from "./utils/useTextAnimation";

import img_1 from "./assets/img_1.jpg";
import img_2 from "./assets/img_2.jpg";
import img_3 from "./assets/img_3.jpg";
import img_4 from "./assets/img_4.jpg";
import img_5 from "./assets/img_5.jpg";
import img_6 from "./assets/img_6.jpg";
import img_7 from "./assets/img_7.jpg";
import img_8 from "./assets/img_8.jpg";
import img_9 from "./assets/img_9.jpg";
import img_10 from "./assets/img_10.jpg";
import { useMobile } from "@utils";

const screenSliderItems = [
  {
    id: 0,
    title: "Mersedes S-class",
    country: "Germany",
    img: img_1,
    description:
      "The Mercedes-Benz E-Class is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations. Produced since 1953, the E-Class falls midrange in the Mercedes line-up, and has been marketed worldwide across five generations.",
  },
  {
    id: 1,
    title: "Audi A7",
    country: "Germany",
    img: img_2,
    description:
      "The Audi A7 is an executive five-door liftback coupé produced by Audi since 2010. A luxury car, it features a sloping roofline with a steeply raked rear window and integrated boot lid (forming the Sportback), and four frameless doors. It is also available as a three-box, four-door saloon in China since 2021",
  },
  {
    id: 2,
    title: "BMW X5",
    country: "Germany",
    img: img_3,
    description:
      "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the E53 model. It was BMW's first SUV. At launch, it featured all-wheel drive and was available with either a manual or automatic gearbox. The second generation was launched in 2006, and was known internally as the E70",
  },
  {
    id: 3,
    title: "Kia K5",
    country: "South Korea",
    img: img_4,
    description:
      "The Kia K5, formerly known as the Kia Optima, is a mid-size car manufactured by Kia since 2000 and marketed globally through various nameplates. First generation cars were mostly marketed as the Optima, although the Kia Magentis name was used in Europe and Canada when sales began there in 2002. For the second-generation models, Kia used the Kia Lotze and Kia K5 name for the South Korean market, and the Magentis name globally, except in the United States, Canada, Malaysia and the Middle East, where the Optima name was retained until the 2021 model year. The K5 name is used for all markets since the introduction of the fifth generation in 2019. ",
  },
  {
    id: 4,
    title: "Honda Civic",
    country: "South Korea",
    img: img_5,
    description:
      "The Honda Civic is a series of automobiles manufactured by Honda since 1972. As of 2023, the Civic is positioned between the Honda Fit/City and Honda Accord in Honda's global car line-up. ",
  },
  {
    id: 5,
    title: "Chevrolet Camaro",
    country: "USA",
    img: img_6,
    description:
      "The Chevrolet Camaro is a mid-size American automobile manufactured by Chevrolet, classified as a pony car. It first went on sale on September 29, 1966, for the 1967 model year and was designed to compete with the Ford Mustang. The Camaro shared its platform and major components with the Firebird, produced by General Motors' Pontiac division that was also introduced for 1967.",
    left: 0,
  },
  {
    id: 6,
    title: "Škoda Octavia",
    country: "Czech republic",
    img: img_7,
    description:
      "The Škoda Octavia is a small family car (C-segment) produced by the Czech car manufacturer Škoda Auto since the end of 1996. It shares its name with an earlier model produced between 1959 and 1971. Four generations of the modern-era Octavia model have been introduced to date, delivered with five-door liftback or five-door estate styles only. The car is front engined, both front- or four-wheel drive are offered. Around five million units have been sold in its two decades of presence on the market. The Octavia is Škoda's most popular model; about 40% of all newly manufactured Škoda cars are Octavias.",
  },
  {
    id: 7,
    title: "Volkswagen Passat",
    country: "Germany",
    img: img_8,
    description:
      "The Volkswagen Passat is a nameplate of large family cars (D-segment) manufactured and marketed by the German automobile manufacturer Volkswagen since 1973. It has been marketed variously as the Dasher, Santana, Quantum, Magotan, Corsar and Carat, with varying body styles such as saloon, estate, and hatchback.",
    left: 20,
  },
  {
    id: 8,
    title: "Peugeot 308",
    country: "France",
    img: img_9,
    description:
      "The Peugeot 308 is a small family car (C-segment car; compact car in North America) produced by French automobile manufacturer Peugeot. It was unveiled in June 2007, and launched in September 2007. The 308 replaced the 307, and positioned below the 508 and above the smallest 208. ",
    left: 20,
  },
  {
    id: 9,
    title: "Mazda 3",
    country: "Japan",
    img: img_10,
    description:
      "The Mazda3 (known as the Mazda Axela in Japan (first three generations), a combination of 'accelerate' and 'excellent') is a compact car manufactured by Mazda. It was first introduced in 2003 as a 2004 model, replacing the Familia/323/Protegé in the C-segment.",
    left: 20,
  },
];

export const HorizontalSceen: React.FC = () => {
  const { mobileWidth } = useMobile();

  const CARD_WIDTH = mobileWidth < 1000 ? 300 : 550;

  const SCROLL_HEIGHT =
    CARD_WIDTH * (screenSliderItems.length + 4) + window.screen.width / 2;

  const { ref } = useScroll(SCROLL_HEIGHT);
  const { fontSize, animationRef } = useTextAnimation();

  return (
    <div style={{ height: SCROLL_HEIGHT }} className="overflow-x-clip">
      <div
        ref={ref}
        className="sticky left-0 top-0 flex h-screen py-10 lg:py-5"
      >
        {screenSliderItems.map(({ id, ...others }) => (
          <AutoItem key={id} width={CARD_WIDTH} {...others} />
        ))}
        <div
          className="flex flex-[0_0_100%] flex-col justify-center uppercase"
          ref={animationRef}
          style={{ fontSize, lineHeight: 1 }}
        >
          <span className="transition duration-500 ease-linear"> And</span>
          <span className="translate-x-[400px]">other</span>
          <span className="transition duration-500 ease-linear">cars...</span>
        </div>
      </div>
    </div>
  );
};
