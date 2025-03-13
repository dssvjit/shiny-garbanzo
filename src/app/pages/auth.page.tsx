import BgSvgAuth from "@/components/auth/bg-svg.auth";
import HeaderAuth from "@/components/auth/header.auth";
import AuthForm from "@/components/form/auth.form";

const AuthPage = () => {
  return (
    <section className="w-full h-svh flex flex-col lg:flex-row items-center justify-center">
      <div className="hidden lg:flex flex-col relative lg:h-full w-[90%] lg:w-1/2 justify-center items-center lg:bg-neutral-50 lg:border-r border-r-neutral-300">
        <div className="flex flex-col lg:w-2/3 justify-center items-start gap-10">
          <HeaderAuth />
          <img
            src="/assets/vectors/login.svg"
            alt="auth"
            className="sm:w-[200px] md:w-[200px] xl:w-[360px]"
          />
        </div>
        <BgSvgAuth />
      </div>
      <div className="h-full flex justify-center items-center w-full lg:w-1/2 px-10 lg:px-40">
        <AuthForm />
      </div>
    </section>
  );
};

export default AuthPage;
