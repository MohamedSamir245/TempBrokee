import Chip from "@mui/material/Chip";

const TestCard = ({
  category,
  difficulty,
  description_short,
  featured_image,
  brokee_id,
  name,
  roles,
  status,
  type,
  tech_stack,
}: {
  category: string;
  difficulty: string;
  description_short: string;
  featured_image: string;
  brokee_id: string;
  name: string;
  roles: string;
  status: string;
  type: string;
  tech_stack: string;
}) => {
  return (
    <div className="flex flex-col items-center border rounded-2xl p-4 bg-white shadow-card h-full">
      <img className="w-[80px] mt-2" src={featured_image} alt="logo" />
      <div className="text-2xl font-semibold">{name}</div>
      <div className="text-center text-gray-600">{description_short}</div>
      <div className="w-full mt-2">
        <div className="text-start text-sm  font-[500] text-gray-600">
          TECH STACK
        </div>
        <div>
          {tech_stack.split(",").map((tech: string) => (
            <Chip
              className="m-1"
              label={tech}
              color="info"
              style={{
                backgroundColor: "#ffd600",
                color: "black",
                padding: "0px",
              }}
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="text-start text-sm  font-[500] text-gray-600">
          ROLES
        </div>
        <div>
          {roles.split(",").map((tech: string) => (
            <Chip
              className="m-1"
              label={tech}
              color="info"
              style={{
                backgroundColor: "#009c78",
                padding: "0px",
              }}
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="text-start text-sm  font-[500] text-gray-600">
          DIFFICULITY
        </div>
        <div>
          <Chip
            className={`m-1 `}
            label={
              difficulty === "easy"
                ? "Easy"
                : difficulty === "medium"
                ? "Medium"
                : "Hard"
            }
            color="info"
            style={{
              backgroundColor:
                difficulty === "easy"
                  ? "#009c78"
                  : difficulty === "medium"
                  ? "#f79009"
                  : "#f04438",
              padding: "0px",
            }}
          />
        </div>
      </div>
      <div className="flex-grow"></div>

      <div className=" w-full hover:bg-green-50 text-center p-2 rounded-2xl cursor-pointer text-green-700 text-sm font-semibold">
        {status === "ready" ? "Get Started" : "Comming Soon"}
      </div>
    </div>
  );
};

export default TestCard;
