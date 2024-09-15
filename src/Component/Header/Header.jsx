import "./Header.css"
import {
  Navbar,
  Container,
  Nav,
  Image,
  NavDropdown
} from "react-bootstrap"
import menu from "../../json.api/menu.json"
import { Link } from "react-router-dom";
import brand from "../../json.api/brand.json";
import { useState } from "react";

const Menu = ({ item }) => {
  const design = (
    <Link
      data-bs-dismiss="Navbar"
      style={{ color: item.color }}
      className={item.isButton ? " px-4 mx-2 ml-2 fw-bold btn btn-primary" : "nav-link"}
      to={item.link}>{item.label}
    </Link>

  );
  return design
}


const DropdownMenu = ({ item }) => {
  const design = (
    <>

      <NavDropdown title={item.label} id="basic-nav-dropdown">
        <i className="fa fa-caret-up arrow"></i>
        {
          item.dropdownMenu.map((data, index) => {
            return <Menu item={data} key={index} />
          })
        }
      </NavDropdown>
    </>
  );
  return design
}

const Header = () => {
  const [sticky, setSticky] = useState("fixed-top border-bottom");
  window.onscroll = () => {
    let top = window.scrollY
    let tmp = "";
    if (top > 100) {
      tmp = "fixed-top border-bottom sticky";

    } else {
      tmp = "fixed-top border-bottom";
    }
    setSticky(tmp)
  }
  const design = (
    <>
      <Navbar expand="lg" className={sticky}>
        <Container>
          <Image src={brand.logo} width={30} />
          <Navbar.Brand to="#home" className="mx-3  brand-name text-white fw-bold">{brand.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end w-100">
              {
                menu.map((item, index) => {
                  if (item.isDropdown) {
                    return <DropdownMenu item={item} key={index} />
                  }
                  item['color'] = "white";
                  return <Menu item={item} key={index} />
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
  return design
}

export default Header