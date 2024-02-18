import { Blocks } from "react-loader-spinner";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
    <Blocks
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      visible={true}
      />
      </StyledLoader>
  );
};

export default Loader;
