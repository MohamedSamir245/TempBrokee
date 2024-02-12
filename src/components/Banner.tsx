import Avatar from "@mui/material/Avatar";
import coding from "../assets/images/coding.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { features } from "../constants";
import FeatureCard from "./FeatureCard";

const Banner: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          columns={{ xs: 2, sm: 8, md: 12 }}
          className="h-[100vh]"
        >
          <Grid item xs={2} sm={8} md={7} className="flex ">
            <div className="flex flex-col justify-center w-full   xl:ml-[10%] ml-[3%] max-[600px]:ml-[3%]">
              <div className="lg:text-[2.6rem]  min-[500px]:text-5xl text-3xl font-bold text-green-700">
                Technical Assessments for
              </div>
              <div className="flex items-center">
                <div className=" lg:text-[2.6rem]   min-[500px]:text-5xl text-3xl font-bold text-white mt-1 bg-green-700 w-fit py-2 px-1">
                  Support
                </div>
                <div className=" lg:text-[2.6rem]   min-[500px]:text-5xl text-3xl font-bold text-green-700 ml-3">
                  Engineers.
                </div>
              </div>
              <div className="text-4xl font-semibold mt-4">
                Hire faster. Hire better.
              </div>
              <div className="flex justify-start items-center p-5">
                <div className="rounded-xl cursor-pointer hover:bg-gray-100 px-5 py-3 font-semibold mr-5">
                  Learn More
                </div>
                <div className="rounded-xl cursor-pointer bg-yellow-400 hover:bg-yellow-500 px-5 py-3 font-semibold mr-5">
                  Learn More
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={2} md={5} className="flex max-[900px]:hidden">
            <div className="w-full relative flex items-center justify-center xl:mr-[10%] md:mr-[2%] max-[600px]:mr-[3%]">
              <div className="shadow-card2 rounded-full w-full aspect-square">
                <Avatar
                  alt="code"
                  sx={{ width: "100%", height: "100%" }}
                  src={coding}
                />
              </div>
              <div className="absolute xl:w-[240px] lg:w-[200px] md:w-[200px] rounded-xl shadow-card2 border top-4 xl:-left-28 lg:-left-10 md:-left-24 bg-white max-[900px]:hidden">
                <FeatureCard
                  title={features[0].title}
                  description={features[0].description}
                  image={features[0].image}
                  slider={false}
                />
              </div>
              <div className="absolute xl:w-[240px]  lg:w-[200px] md:w-[200px] rounded-xl shadow-card2 border bottom-12 -left-28 bg-white  max-[900px]:hidden">
                <FeatureCard
                  title={features[1].title}
                  description={features[1].description}
                  image={features[1].image}
                  slider={false}
                />
              </div>
              <div className="absolute xl:w-[240px] lg:w-[200px] md:w-[200px] rounded-xl shadow-card2 border xl:bottom-28 lg:bottom-16 xl:-right-10 lg:-right-0 md:right-0 md:bottom-10 bg-white  max-[900px]:hidden">
                <FeatureCard
                  title={features[2].title}
                  description={features[2].description}
                  image={features[2].image}
                  slider={false}
                />
              </div>
            </div>
            <div className="w-[30%] h-[100%] mt-[5%] rounded-tr-full rounded-br-full bg-green-100 absolute -left-40 -z-10 -top-20 bg-opacity-25"></div>
            <div className="w-[10%] h-[30%] mt-[5%] rounded-tl-full  rounded-bl-full bg-green-100 absolute -right-0 -z-10 -top-32 bg-opacity-25"></div>
            <div className="w-[15%] h-[25%] mt-[5%] rounded-tl-full rounded-tr-full  bg-green-100 absolute left-[25%] -z-10 bottom-0 bg-opacity-25"></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;
