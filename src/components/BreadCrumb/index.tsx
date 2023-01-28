import { useLocation } from "react-router-dom";
import { Typography } from "../Typography";
import { BsSlash } from "react-icons/bs";
import cn from "classnames";

type BreadCrumbType = {
  className?: string;
  darkMode?: boolean;
  info?: string
};

export const BreadCrumb = ({
  className = "",
  darkMode,
  info
}: BreadCrumbType) => {
  const location = useLocation();

  let array_pathname = location.pathname.split("/");
  array_pathname.splice(0, 1);
  

  return (
    <nav
      className={`font-bold mb-2 mt-2 hidden lg:block ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Typography
            isDarkMode={darkMode}
            variant="link"
            disableUnderline
            className="!text-primary border-b border-primary"
          >
            Home
          </Typography>
          <BsSlash
            className={cn("h-6 w-6", {
              "text-white": darkMode,
              "text-neutral": !darkMode,
            })}
          />
        </li>
        {array_pathname.map((item, i) => (
          <li key={i} className={cn("flex items-center", {})}>
            <div
              className={cn("", {
                "border-b border-primary ":
                  i < array_pathname.length && array_pathname.length !== i + 1,
              })}
            >
              <Typography
                isDarkMode={darkMode}
                variant="link"
                disableUnderline
                className={cn("capitalize", {
                  "hover:!no-underline cursor-default":
                    array_pathname.length === i + 1,
                  "text-primary":
                    i < array_pathname.length &&
                    array_pathname.length !== i + 1,
                })}
              >
                {array_pathname.length === i && typeof info === "string"
                  ? info
                  : item}
              </Typography>
            </div>
            {array_pathname.length > i + 1 && (
              <BsSlash
                className={cn("h-6 w-6", {
                  "text-white": darkMode,
                  "text-neutral": !darkMode,
                })}
              />
            )}
            {array_pathname.length === i + 1 && typeof info !== "string" && (
              <Typography
                isDarkMode={darkMode}
                variant="link"
                className="ml-1 hover:no-underline capitalize cursor-default"
              >
                - Autogon Website
              </Typography>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
