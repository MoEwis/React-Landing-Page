interface NavbarItemProps {
  href: string;
  text: string;
}
const NavbarItem = ({ href, text }: NavbarItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="duration-300 font-medium ease-linear hover:text-primary py-4"
      >
        {text}
      </a>
    </li>
  );
};

export default NavbarItem;
