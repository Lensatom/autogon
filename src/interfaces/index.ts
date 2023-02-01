export type MenuDrawerProps = {
  navLink?: NavLinks;
  navLinks: MenuDrawerProps["navLink"];
  dark?: boolean;
  isShowing?: boolean;
};

export type BenefitCardProps = {
  className?: string;
  position: string;
  children?: any;
  contents: string[];
  src: string;
  active: boolean;
  onClick: () => void,
  bounds?: { top?: number, left?: number, right?: number, bottom?: number }
};

export type BlogCardProps = {
  src: string;
  caption?: string;
  title: string;
  Icon?: any;
  buttonText?: string;
  className?: string;
  titleClass?: string;
  children?: any;
  onClick?: () => void
};

export type TestimonialProps = {
  comment: string;
  name: string;
  img: string;
  positionandcompany: string;
  isDark?: boolean;
};

export type NavMenus = {
  title?: string;
  links?: {
    name?: string;
    link?: string;
    hash?: boolean;
  }[];
};

export type NavLinks = {
  id: string;
  name: string;
  link?: string;
  hover?: boolean;
  menu?: NavMenus[];
}[];