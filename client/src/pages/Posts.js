import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllPost } from "../services/api";
import {
  Box,
  Card,
  CardContent,
  InputBase,
  Typography,
  collapseClasses,
  styled,
} from "@mui/material";

const SearchWrapper = styled(Box)({
  marginTop: 74,
  display: "flex",
  justifyContent: "center",
  "&>div": {
    width: 500,
    height: 45,
    border: "1px solid #767676",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    marginRight: 20,
    paddingLeft: 10,
  },
});

const PostedWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 50,
  flexWrap: "wrap",
  gap: 50,
  "&>div": {
    border: "1px solid #442d0",
    borderRadius: 10,
    width: "28%",
    height: 300,
  },
});

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await getAllPost();
      setPosts(response.data);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <SearchWrapper>
        <InputBase
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
        />
      </SearchWrapper>
      <PostedWrapper>
        {posts
          .filter((post) =>
            post.profile.toLowerCase().includes(text.toLowerCase())
          )
          .map((post) => (
            <Card>
              <CardContent>
                <Typography variant="h5">{post.profile}</Typography>
                <Typography>
                  {post.type === "offline" ? "Remote" : "In-Office"}
                </Typography>
                <Typography>{post.salary}</Typography>
                <Typography style={{ color: "#6f6f6f", margin: "10px 0" }}>
                  {post.description.length > 150
                    ? post.description.substring
                    : post.description}
                </Typography>
                <Typography>
                  <b>Experience:</b> {post.experience}
                </Typography>
                <Typography>
                  <b>Skills:</b> {post.technology.join(", ")}
                </Typography>
                <Typography style={{ color: "#6f6f6f", marginTop: "auto" }}>
                  <b>Posted on</b>
                  {new Date(post.createdAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </PostedWrapper>
    </>
  );
};

export default Posts;
