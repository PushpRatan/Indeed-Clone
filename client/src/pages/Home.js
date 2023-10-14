import Header from "../components/Header";
import { Box, Typography, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";
const Component = styled(Box)({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  margin: "0 180px",
  "& > div": {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "&>p": {
      fontSize: 56,
      lineHeight: 1.25,
    },
    "&>button": {
      width: 220,
      height: 60,
      background: "rgb(37, 87, 167)",
      textTransform: "none",
      fontSize: 16,
      fontWeight: 700,
      marginTop: 40,
    },
  },
});

const Home = () => {
  const animatedImage =
    "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Component>
        <Box>
          <Typography>Let's find a Lead</Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate(routePath.create);
            }}
          >
            Post a Job
          </Button>
        </Box>
        <Box>
          <img src={animatedImage} alt="Hero" style={{ width: 600 }} />
        </Box>
      </Component>
    </div>
  );
};
export default Home;
