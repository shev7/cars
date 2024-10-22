import { TestimonialItem } from "@molecules";
import Slider, { Settings } from "react-slick";
import img_1 from "./assets/bird_1.jpg";
import img_2 from "./assets/bird_2.jpg";
import img_3 from "./assets/bird_3.jpg";
import img_4 from "./assets/bird_4.jpg";
import img_5 from "./assets/bird_5.jpg";
import img_6 from "./assets/bird_6.jpg";
import img_7 from "./assets/bird_7.jpg";
import img_8 from "./assets/bird_8.jpg";
import img_9 from "./assets/bird_9.jpg";
import { useMobile } from "@utils";

import "./styles.css";
const testimonials = [
  {
    id: 1,
    name: "Emily",
    town: "Austin, Texas",
    text: "Absolutely thrilled with my recent car purchase! From the sleek design to the smooth ride, this vehicle exceeds all expectations. Highly recommend!",
    img: img_1,
  },
  {
    id: 2,
    name: "Jacob",
    town: "Denver, Colorado",
    text: "I've been driving my new car for a few weeks now and I couldn't be happier. It's reliable, comfortable, and just a joy to drive. 10/10 would buy again",
    img: img_2,
  },
  {
    id: 3,
    name: "Sophia",
    town: "Atlanta, Georgia",
    text: "Impressed with the performance of this car. It handles well on all types of terrain and the fuel efficiency is a definite plus. Great investment!",
    img: img_3,
  },
  {
    id: 4,
    name: "Ethan",
    town: "Seattle, Washington",
    text: "This car is a game-changer! Whether it's the spacious interior or the advanced technology features, every aspect of it screams quality. Love it!",
    img: img_4,
  },
  {
    id: 5,
    name: "Olivia",
    town: "Miami, Florida",
    text: "Purchased this car recently and it has completely surpassed my expectations. It's stylish, practical, and feels like a luxury ride without the hefty price tag. Definitely a winner!",
    img: img_5,
  },
  {
    id: 6,
    name: "Nathan",
    town: "Boston, Massachusetts",
    text: "Couldn't be happier with my decision to buy this car. It's the perfect combination of style and functionality. Driving has never been so enjoyable!",
    img: img_6,
  },
  {
    id: 7,
    name: "Ava",
    town: "Phoenix, Arizona",
    text: "From the moment I test drove this car, I knew it was the one for me. The smooth handling and comfortable seating make every journey a pleasure. Highly recommend giving it a try!",
    img: img_7,
  },
  {
    id: 8,
    name: "Lucas",
    town: "Portland, Oregon",
    text: "This car is a dream come true! It's reliable, efficient, and packed with features that make every drive enjoyable. Definitely worth every penny.",
    img: img_8,
  },
  {
    id: 9,
    name: "Mia",
    town: "Nashville, Tennessee",
    text: "I've owned several cars in the past, but this one takes the cake. It's practical, stylish, and performs like a champ. Couldn't ask for more in a vehicle!",
    img: img_9,
  },
];

export const TestimonialsScreen = () => {
  const { isMobile } = useMobile();

  if (isMobile) {
    const settings: Settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px 0",
            gap: "6px",
          }}
        >
          {dots}
        </ul>
      ),
      customPaging: (i) => (
        <div className="flex h-8 cursor-pointer items-center justify-center">
          <button className="slider_button h-2 w-2 rounded-full bg-main-gray text-[0px] opacity-30 duration-200">
            {i}
          </button>
        </div>
      ),
    };

    return (
      <div className="bg-main-background">
        <div className="py-32 text-center md:py-20">
          <h3 className="mb-5 text-5xl text-main-text-black md:text-4xl">
            Testimonials
          </h3>
          <p className="text-2xl text-main-text-black md:text-base">
            Real users and buyers
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map(({ id, ...rest }) => (
            <TestimonialItem key={id} {...rest} />
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <div className="flex items-start bg-main-background">
      <div className="sticky top-0 flex h-screen flex-50 flex-col items-center justify-center px-10">
        <div>
          <h3 className="mb-5 text-5xl text-main-text-black">Testimonials</h3>
          <p className="text-2xl text-main-text-black">Real users and buyers</p>
        </div>
      </div>
      <div className="flex-50 border-l-[1px] border-main-border">
        {testimonials.map(({ id, ...rest }) => (
          <TestimonialItem key={id} {...rest} />
        ))}
      </div>
    </div>
  );
};
