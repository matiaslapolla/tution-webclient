import Link from "next/link";
import CustomLinkButton from "./atoms/link-button";

const routes = [
  {
    path: "/home",
    displayText: "Home",
  },
  {
    path: "/register",
    displayText: "Register",
  },
  {
    path: "/login",
    displayText: "Login",
  },
  {
    path: "/logout",
    displayText: "Logout",
  },
];

const AppRouter = () => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="w-2/3" />
          <ul className="flex w-1/3 justify-around ">
            {routes.map((route) => (
              <li key={route.path}>
                <CustomLinkButton
                  route={route.path}
                  linkText={route.displayText}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppRouter;
