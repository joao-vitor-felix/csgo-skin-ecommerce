import { ReactComponent as ShoppingIcon } from '../../assets/cart-white.svg';
import './CardIcon.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts';

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="cart-item-count">0</span>
    </div>
  );
};
