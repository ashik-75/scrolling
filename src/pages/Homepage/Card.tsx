import { Bath, BedDouble, PersonStanding } from "lucide-react";
import Slider from "react-slick";

function Card({ property }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="mb-4">
        <Slider {...settings}>
          {property?.acf?.photos?.slice(0, 5)?.map((photo: any) => {
            return (
              <div key={photo?.id}>
                <img src={photo?.sizes["homehost-thumbnail"]} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* title */}
      <h1>{property?.title?.rendered}</h1>

      {/* price */}
      <div className="space-x-2">
        <span className="text-lg font-bold">{property?.average_rent}</span>
        <span>avg/night</span>
      </div>

      {/* group name and property name */}

      <div className="flex items-center justify-between">
        <div>{property?.groups?.[0]?.name}</div>
        <div>{property?.types?.[0]?.name}</div>
      </div>

      {/* maximum guests, bedrooms, bathrooms */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PersonStanding className="h-5 w-5" />
          <span>{property?.acf?.maximum_guests}</span>
        </div>
        <div className="flex items-center gap-2">
          <BedDouble className="h-5 w-5" />
          <span>{property?.acf?.bedrooms}</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="h-5 w-5" />
          <span>{property?.acf?.bathrooms}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
