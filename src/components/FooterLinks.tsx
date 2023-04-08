import { Typography } from "./Typography";
import cn from "classnames";
import { Link } from "react-router-dom";

export const FooterLinks = ({
  links,
  title,
  className,
  darkMode,
}: {
  links: any[];
  title: string;
  className?: string;
  darkMode?: boolean;
}) => {
  return (
    <div className={className}>
      <Typography
        isDarkMode={darkMode}
        variant="title"
        className="!text-[23px] !text-white font-bold !leading-6"
      >
        {title}
      </Typography>
      <ul className="w-[17rem]">
        {links.map((nav) => {
          const name = nav.name.toLowerCase();
          if (name === 'community' || name === 'documentation' || name ==='integration library') {
            return (
              <li className="my-2 w-fit" key={nav.name}>
                <a href={nav?.link} target='__blank'>
                  <Typography
                    isDarkMode={darkMode}
                    variant="link"
                    className={cn(
                      "capitalize cursor-pointer !text-white hover:underline w-fit"
                    )}
                  >
                    {nav.name}
                  </Typography>
                </a>
              </li>
            )
          }
          return (
            <li className="my-2 w-fit" key={nav.name}>
              <Link to={nav?.link}>
                <Typography
                  isDarkMode={darkMode}
                  variant="link"
                  className={cn(
                    "capitalize cursor-pointer !text-white hover:underline w-fit"
                  )}
                >
                  {nav.name}
                </Typography>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
