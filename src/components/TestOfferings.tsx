import { useEffect, useState } from "react";
import axios from "axios";
import TestCard from "./TestCard";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const TestOfferings = () => {
  const [tests, setTests] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://graph.brokee.io/v1/graphql?q=GetTests",
        {
          operationName: "GetTests",
          query:
            "query GetTests {\n  tests(order_by: {name: asc}) {\n    ...TestPartial\n    __typename\n  }\n}\n\nfragment TestPartial on tests {\n  category\n  difficulty\n  description_short\n  featured_image\n  brokee_id\n  name\n  roles\n  status\n  type\n  tech_stack\n  __typename\n}",
          variables: {},
        },
        {}
      )
      .then((response) => {
        //   console.log(response.data.data.tests);
        setTests(response.data.data.tests);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="font-semibold text-4xl text-[#111927] text-center">
            Current Test Offerings
          </div>
          <div className="text-gray-600 mt-4 text-center">
            Evaluate the practical skills of your candidates by checking if they
            can fix one of the following broken environments:
          </div>
        </div>
      </div>
      <div className="flex justify-center  mt-5 xl:mx-[10%] md:mx-[2%] max-[600px]:mx-[3%]">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            alignItems="stretch"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {tests.map((test: any) => (
              <Grid item xs={2} sm={4} md={4} key={test.brokee_id}>
                <TestCard
                  category={test.category}
                  difficulty={test.difficulty}
                  description_short={test.description_short}
                  featured_image={test.featured_image}
                  brokee_id={test.brokee_id}
                  name={test.name}
                  roles={test.roles}
                  status={test.status}
                  type={test.type}
                  tech_stack={test.tech_stack}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default TestOfferings;
