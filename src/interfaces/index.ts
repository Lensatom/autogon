export type MenuDrawerProps = {
  navLink?: {
    id: string;
    name: string;
    link: string;
    useHover: boolean;
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
