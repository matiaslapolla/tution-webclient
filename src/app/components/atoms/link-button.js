const { default: Link } = require("next/link");

const CustomLinkButton = (props) => {
  const { route, linkText, ...other } = props;

  return (
    <>
      <Link className="" href={route}>
        <button
          className={
            "text-black hover:text-indigo-500 font-medium py-2 px-4"
          }
        >
          {linkText}
        </button>
      </Link>
    </>
  );
};

export default CustomLinkButton;
