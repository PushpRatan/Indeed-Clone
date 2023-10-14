import styled from "@emotion/styled";
import Header from "../components/Header";
import { Box, Typography, TextField, Button } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";
const Component = styled(Box)({
  padding: "80px 200px",
  background: "#f5f5f5",
});
const Container = styled(Box)({
  display: "flex",
  background: "#ffffff",
  borderRadius: 20,
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 70px",
  "&>p": {
    fontSize: 35,
    fontWeight: 700,
    opacity: 0.7,
  },
});

const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  padding: 20,
  background: "#ffffff",
  borderRadius: 20,
  "& >*": {
    marginTop: "20px !important",
  },
});

const defaultObj = {
  profile: "",
  type: "",
  description: "",
  experience: "",
  technology: [],
  salary: "",
};

const options = {
  type: ["Online", "Offline"],
  experience: ["0-2 Years", "3-5 Years", "5-8 Years", "8 and more years"],
  technology: [
    "Java",
    "JavaScript",
    "NodeJs",
    "SpringBoot",
    "ReactJs",
    "HTML5",
    "CSS3",
    "Docker",
    "AWS",
    "Kuberneetes",
    "C++",
    "DBMS",
    "MySQL",
    "SQL",
    "Maven",
    "Rest",
    "Hibernate",
    "GitHub",
    "VS code",
    "Web Services",
    "Azure",
    "Postman",
    "SDLC",
    "Flutter",
    "Angular",
    "MongoDB",
    "Python",
    "Django",
    "Golang",
    "Redux",
  ],
  salary: [
    "Rs 0-300000",
    "RS 300000-500000",
    "Rs 500000-800000",
    "Rs 800000-1200000",
    "Rs 1200000+",
  ],
};
const CreatePost = () => {
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

  const [data, setData] = useState(defaultObj);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveJob = async () => {
    console.log(data);
    await savePost(data);

    navigate(routePath.post);
  };

  return (
    <>
      <Header />
      <Component>
        <Container>
          <Typography>Create a job post</Typography>
          <img src={image} alt="create" />
        </Container>
        <FormWrapper>
          <TextField
            placeholder="Job Title"
            name="profile"
            onChange={handleChange}
          />
          <Dropdown
            label="Job Type"
            id="job-type-label"
            value={data.type}
            handleChange={handleChange}
            options={options.type}
            name="type"
          />
          <TextField
            placeholder="Job Title"
            name="description"
            onChange={handleChange}
          />
          <Dropdown
            label="Experience"
            id="job-experience-label"
            value={data.experience}
            handleChange={handleChange}
            options={options.experience}
            name="experience"
          />
          <Dropdown
            label="Technology"
            id="job-technology-label"
            value={data.technology}
            handleChange={handleChange}
            options={options.technology}
            name="technology"
            multiple
          />
          <Dropdown
            label="Salary"
            id="job-salary-label"
            value={data.salary}
            handleChange={handleChange}
            options={options.salary}
            name="salary"
          />
          <Button onClick={() => saveJob()} variant="contained">
            Save Job
          </Button>
        </FormWrapper>
      </Component>
    </>
  );
};

export default CreatePost;
