import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, DropdownToggle, DropdownItem, DropdownMenu, NavbarText, UncontrolledDropdown} from 'reactstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's For Dinner?</h1>
      </header>
      <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Home
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Search Recipes
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem> */}
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Ingredients
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Refrigerator
            </DropdownItem>
            <DropdownItem>
              Pantry
            </DropdownItem>
            <DropdownItem>
              Spice Rack
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
</div>
    </div>
  );
}

export default App;
