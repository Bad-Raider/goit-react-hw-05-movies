import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Nav, Header } from '../App.styled';

const Layout = () => {
  

  return (
    <>
      <Header>
        <Nav>
          <Link to="/" end> Home</Link>
          <Link to="/movies"> Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;