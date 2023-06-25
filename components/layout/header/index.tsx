
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="" onClick={()=>{router.push('/user/servers')}}>
        Logo
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" onClick={()=>{router.push('/user/dashboard')}}  href="">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={()=>{router.push('/user/servers')}}  href="">
              Servers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={()=>{
              
                 localStorage.clear()
                 router.push('/login')
                
                }}  href="">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


const Header = () =>{

    return (
        <>
            <header>
                <Navbar></Navbar>
              
            </header>
    

        </>
    )

}


export default Header;
