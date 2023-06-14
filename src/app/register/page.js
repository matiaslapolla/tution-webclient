import SubmitForm from "../components/molecules/submit-form";
import HeaderTitle from "../components/atoms/header-title-h1";

const Register = () => {
  return (
    <>
      <div className="flex w-screen items-center border justify-center h-full">
        <div className="w-1/2 border h-screen">
          <HeaderTitle title="Register" />
        </div>
        <div className="w-1/2">
          <SubmitForm />
        </div>
      </div>
    </>
  );
};

export default Register;
