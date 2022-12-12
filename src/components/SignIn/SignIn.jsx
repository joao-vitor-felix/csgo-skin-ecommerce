import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import { Button } from '../../components';

import './SignIn.scss';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logGoogleUserWithPopup = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const onSubmit = async data => {
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('Incorrect e-mail');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="app-container">
      <h2 className="default-text">Already have an account?</h2>
      <span className="default-text">Sign In with e- mail and password</span>
      <div className="form-group">
        <label htmlFor="email" className="input-label">
          E-mail
        </label>
        <input
          className={errors?.email ? 'input-field input-error' : 'input-field'}
          type="email"
          placeholder="Your e-mail"
          id="email"
          {...register('email', {
            required: true,
            validate: value => isEmail(value),
          })}
        />
        {errors?.email?.type === 'required' && (
          <p className="error-message">Email is required.</p>
        )}

        {errors?.email?.type === 'validate' && (
          <p className="error-message">Email is invalid.</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="input-label">
          Password
        </label>
        <input
          className={
            errors?.password ? 'input-field input-error' : 'input-field'
          }
          type="password"
          placeholder="Password"
          id="password"
          {...register('password', { required: true, minLength: 7 })}
        />

        {errors?.password?.type === 'required' && (
          <p className="error-message">Password is required.</p>
        )}
      </div>
      <div className="buttons-container">
        <Button
          className="button-sign-in"
          onClick={() => handleSubmit(onSubmit)()}
        >
          Sign In
        </Button>
        <Button
          type="button"
          buttonType="google"
          onClick={logGoogleUserWithPopup}
        >
          Sign In with Google
        </Button>
      </div>
    </div>
  );
};
