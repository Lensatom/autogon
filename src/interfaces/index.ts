export type MenuDrawerProps = {
  navLink?: {
    id: string;
    name: string;
    link: string;
    hover: boolean;
  };
  navLinks: MenuDrawerProps["navLink"][];
  onClick: () => void;
};

export type BenefitCardProps = {
  className?: string;
  position: string;
  children?: any;
};

export type BlogCardProps = {
  src: string;
  caption: string;
  title: string;
};

export type TestimonialProps = {
  comment: string;
  name: string;
  img: string;
  positionandcompany: string;
  isDark?: boolean;
};
