import React from 'react';
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.png'

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='RocketShoes' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} item(ns)</span>
        </div>
        <MdShoppingBasket size={36} color='#fff' />
      </Cart>
    </Container>
  )
}