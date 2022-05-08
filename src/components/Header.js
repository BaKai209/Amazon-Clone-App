import { LocationOnOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartCount, Container, HeaderLogo, HeaderNavItems, HeaderOption, HeaderOptionAdress, HeaderOptionCart, HeaderSearch, HeaderSearchIconContainer, HeaderSearchInput, OptionLineOne, OptionLineTwo } from '../styles/HeaderLogo'
import logo from '../assets/logo-amazon.png';
import Navbar from './NavBar'
import NavFilter from './NavFilter'
import { logoutAsync } from '../redux/actions/actionIngreso'

const Header = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cart)
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1rem'
    }}>
    <Container>
      <Link to='/'>
      <HeaderLogo>
        <img src={logo}
        alt='Logo Amazonas'
        />
      </HeaderLogo>
      </Link>
      <HeaderOptionAdress>
        <LocationOnOutlined />

        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your Address</OptionLineTwo>
        </HeaderOption>

      </HeaderOptionAdress>

      <HeaderSearch>

        <HeaderSearchInput type='text' />

        <HeaderSearchIconContainer>
          <Search />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
      
        <HeaderOption onClick={dispatch(logoutAsync)}>
          <OptionLineOne>Hello, Nazary</OptionLineOne>
          <OptionLineTwo>Account & lists</OptionLineTwo>
        </HeaderOption>

      <Link to='/order'>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& deliveries</OptionLineTwo>
        </HeaderOption>
        </Link>
        <Link to='/checkout'>
        <HeaderOptionCart>
          <ShoppingCartOutlined />
          <CartCount>{ cart.length }</CartCount>
        </HeaderOptionCart>
        </Link>
      </HeaderNavItems>

    </Container>
    <Navbar />
    <NavFilter />
    </div>
  )
}

export default Header