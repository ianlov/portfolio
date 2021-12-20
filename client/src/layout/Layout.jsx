import Nav from "../components/Nav.jsx";

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  )
}

export default Layout;