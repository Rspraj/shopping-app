import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss'
const Navigation =() => {
    return(
      <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'><CrwnLogo className='logo'/></Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                    shop
                    </Link>
                    <Link className='nav-link' to='/shop'>
                    contact
                    </Link><Link className='nav-link' to='/sign-in'>
                    sign in
                    </Link>
                </div>
            </div>
        <Outlet/>
      </Fragment>
  
    )
  };

  export default Navigation;
