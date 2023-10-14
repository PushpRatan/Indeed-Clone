// eslint-disable-next-line no-unused-vars
import { AppBar, Toolbar, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
  background: "#2d2d2d",
  height: 64,
  "&>div >*": {
    textDecoration: "none",
    color: "inherit",
    marginRight: 20,
    fonSize: 14,
  },
});

const Header = () => {
  const logo =
    "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";

  const navigate = useNavigate();
  return (
    <StyledAppBar>
      <Toolbar>
        <Link to={routePath.home}>
          <img src={logo} alt={logo} style={{ width: 95, marginBottom: 6 }} />
        </Link>
        <Link to={routePath.create}>Post a Job</Link>
        <Link to={routePath.post}>Find Jobs</Link>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
