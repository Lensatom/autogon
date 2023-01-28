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
        className="!text-[23px] font-bold !leading-6"
      >
        {title}
      </Typography>
      <ul className="w-[17rem]">
        {links.map((nav) => (
          <li className="my-2 w-fit" key={nav.name}>
            <Link to={nav?.link}>
              <Typography
                isDarkMode={darkMode}
                variant="link"
                className={cn("capitalize cursor-pointer hover:underline w-fit")}
              >
                {nav.name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
