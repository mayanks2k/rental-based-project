import Link from "next/link";
import React from "react";
interface TravelCardProps {
  date: number;
  month: string;
  img: string;
  tagLine: string;
  summary: string;
  readMoreUrl: string;
}

const TravelCard: React.FC<TravelCardProps> = ({
  date,
  month,
  img,
  tagLine,
  summary,
  readMoreUrl,
}) => {
  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className="w-full my-8 p-4 bg-white shadow-md rounded-lg overflow-hidden border-b-2 border-green-500">
      <div className="relative">
        <img
          src={img} // Replace with your image URL
          alt="Travel"
          className="w-full h-52 object-cover rounded-lg"
        />
        <div className="absolute top-2 font-bold left-2 bg-green-500 text-white py-1 px-3 rounded-br-lg rounded-tl-lg">
          <span className="block text-lg">{date}</span>
          <span className="block text-sm uppercase">{month}</span>
        </div>
      </div>
      <div className="mx-1.5">
        <h2 className="text-lg font-semibold py-2">{tagLine}</h2>
        <p className="text-gray-600 mb-4">{truncateText(summary, 200)}</p>
        <Link
          href={readMoreUrl}
          target="_blank"
          className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

function NewAndPromo() {
  const newPromoItem = [
    {
      date: 3,
      month: "July",
      img: "/assets/images/news/news2.jpeg",
      tagLine: "Strategic Alliances",
      summary:
        "In the rapidly evolving landscape of transportation and mobility, strategic alliances have become crucial for businesses striving to deliver exceptional value and service to their customers. At car Fleet Ltd., we understand the significance of forming strong partnerships to enhance our fleet offerings and ensure versatility for our clients. By partnering with all major Original Equipment Manufacturers (OEMs), we have positioned ourselves at the forefront of the industry, providing unparalleled options and quality in our fleet services.",
      readMoreUrl:
        "https://car-blog-ctkkrakmva-el.a.run.app/blog/strategic-alliances-elevating-fleet-offerings-through-premier-partnerships",
    },
    {
      date: 3,
      month: "July",
      img: "/assets/images/news/news1.jpeg",
      tagLine: "Reinventing B2B2C Fleet Management",
      summary:
        "At car Fleet Ltd., we are committed to redefining the future of transportation through innovative and sustainable fleet management solutions. Our vision encompasses a comprehensive approach to revolutionizing B2B2C fleet management, focusing on multi-variant EV/green energy fleet management, vehicle subscription services, EV pitstop charging hubs, CNG & LNG facilities, and e-hailing. By integrating these cutting-edge elements, we aim to transform the way businesses and consumers experience transportation, setting new standards for efficiency, sustainability, and convenience.",
      readMoreUrl:
        "https://car-blog-ctkkrakmva-el.a.run.app/blog/reinventing-b2b2c-fleet-management-a-vision-for-the-future",
    },
    {
      date: 3,
      month: "July",
      img: "/assets/images/news/news3.jpg",
      tagLine: "Ridehailing Service Solutions",
      summary:
        "In today’s fast-paced world, reliable and efficient transportation is crucial for businesses and individuals alike. car Fleet Ltd. is at the forefront of the ridehailing industry, offering comprehensive services nationwide. Our commitment to delivering safe, compliant, and hassle-free transportation solutions makes us the preferred choice for large corporates looking to streamline their mobility needs without any capital investment.",
      readMoreUrl:
        "https://car-blog-ctkkrakmva-el.a.run.app/blog/ridehailing-service-solutions-car-leading-the-way",
    },
  ];
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-32 py-10">
      <div className="text-center py-4 space-y-3">
        <p className="text-green-500 font-semibold bg-[#F2F3F6] inline-block px-4 rounded-lg py-2">
          Latest From Us
        </p>
        <h5 className="text-3xl font-bold">News & Promo</h5>
        <p className="inline-block mb-5 text-base text-gray-500 sm:text-lg sm:w-[530px] px-2">
          Breaking news, fresh perspectives, and in-depth coverage - stay ahead
          with our latest news, insights, and analysis.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 px-2">
        {newPromoItem.map((item, index) => {
          return (
            <TravelCard
              key={index}
              date={item.date}
              month={item.month}
              img={item.img}
              tagLine={item.tagLine}
              summary={item.summary}
              readMoreUrl={item.readMoreUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewAndPromo;
