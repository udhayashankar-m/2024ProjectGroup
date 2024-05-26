import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { getAuth, signOut } from 'firebase/auth';


function NavbarComponent() {

  const { user } = useUser();
  const navigate = useNavigate();

  console.log(user)

  return (
    <div className='container'>
      <Navbar expand="lg" className="text-bg-dark navbar-dark">
        <Container class="w-100">
          <Navbar.Brand href="#"><i class="bi bi-rocket-takeoff rocket-icon"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link><Link style={{ textDecoration: "none" }} to="/" className='link-warning'>Home</Link></Nav.Link>

              <Nav.Link><Link style={{ textDecoration: "none" }} to="/about" className='link-warning'>About</Link></Nav.Link>

              <Nav.Link><Link style={{ textDecoration: "none" }} to="/articles" className='link-warning'>Articles</Link></Nav.Link>

              <Nav.Link><Link style={{ textDecoration: "none", }} to="/createAccount" className='link-warning'>create an account</Link></Nav.Link>
              <div>
                  <button class="btn btn-outline-warning" onClick={() => {
                    navigate('/login')
                  }}>Log in</button>
                   <button class="btn btn-outline-warning ms-3" onClick={() => {
                    signOut(getAuth())
                    alert("successfully Log out");
                  }}>Log out</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;