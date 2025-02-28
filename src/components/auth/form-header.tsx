import Logo from "../shared/logo";

interface FormHeaderProps {
  description: string;
}

const FormHeader = ({ description }: FormHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Logo withText className="w-36" />
      <p className="text-md md:text-sm text-neutral-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default FormHeader;
