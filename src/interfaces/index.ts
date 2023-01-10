export type MenuDrawerProps = {
  navLink?: {
    id: string,
    name: string,
    link: string,
    useHover: boolean
  },
  navLinks: MenuDrawerProps['navLink'][],
  onClick: () => void
}