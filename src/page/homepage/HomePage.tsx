import Header from "@/layout/header/Header";
import UpButton from "@/component/upButton/UpButton";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Header />
      <UpButton variant="outlined" ><Typography>hello</Typography></UpButton>
    </>
  );
};
export default HomePage;
