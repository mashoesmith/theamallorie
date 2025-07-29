import { Oval } from "react-loader-spinner";

export const LoadSpinner = () => {
  return (
    <Oval
      visible={true}
      height="50"
      width="50"
      strokeWidth={1.5}
      color="#D1D5DB"
      secondaryColor="#E5E7EB"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass="spinner"
    />
  );
};
