import { Button } from '../../components';

import './CartDropdown.scss';

export const CardDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go to Checkout</Button>
    </div>
  );
};
