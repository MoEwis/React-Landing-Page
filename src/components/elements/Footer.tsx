import Container from "../shared/Container";
import logo from "../../assets/icon.svg";
import { navbarItems } from "./Navbar";
import NavbarItem from "../shared/NavbarItem";

const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <img src={logo} alt={logo} className="w-7 h-7 " />
            <span className="text-lg font-semibold text-heading-1 gap-3 mb-4 md:mb-0">
              EdgeAI
            </span>
          </div>
          <ul className="flex gap-6 text-heading-1">
            {navbarItems.map((item, key) => (
              <NavbarItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
