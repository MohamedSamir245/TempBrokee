import Slider from "react-slick";
import { features } from "../constants";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import FeatureCard from "./FeatureCard";

const Features = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="  xl:mx-[10%] md:mx-[2%] max-[600px]:mx-[3%] my-5">
      <h2 className="flex justify-center min-[500px]:text-3xl text-2xl font-semibold my-2">
        Unveiling Our Latest Innovations
      </h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          alignItems="stretch"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {features.slice(0, 3).map((f: any) => (
            <Grid item xs={2} sm={4} md={4} key={f.title}>
              <FeatureCard
                title={f.title}
                description={f.description}
                image={f.image}
                slider={false}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <h2 className="flex justify-center text-3xl font-semibold my-2 mt-10">
        Unveiling Our Innovations
      </h2>
      <Slider {...settings}>
        {features.map((f: any) => (
          <div className="h-full">
            <FeatureCard
              title={f.title}
              description={f.description}
              image={f.image}
              slider={true}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Features;
