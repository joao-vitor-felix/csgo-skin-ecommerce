import { SignUp, SignIn } from '../../components';

import './Login.scss';

export const Login = () => {
  return (
    <div className="login-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
