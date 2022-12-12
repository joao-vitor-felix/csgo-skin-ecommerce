import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { Button } from '../../components';

import './SignUp.scss';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchPassword = watch('password');

  const onSubmit = async data => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        data.email,
        data.password
      );

      const userName = {
        displayName: data.displayName,
      };

      await createUserDocumentFromAuth(user, userName);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email already in use');
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="app-container">
      <h2 className="default-text">Dont have an account?</h2>
      <span className="default-text">Create a new one</span>
      <div className="form-group">
        <label htmlFor="displayName" className="input-label">
          Name
        </label>
        <input
          className={
            errors?.displayName ? 'input-field input-error' : 'input-field'
          }
          type="text"
          placeholder="Your name"
          id="displayName"
          {...register('displayName', { required: true })}
        />
        {errors?.displayName?.type === 'required' && (
          <p className="error-message">Name is required.</p>
        )}
      </div>

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

        {errors?.password?.type === 'minLength' && (
          <p className="error-message">
            Password needs to have at least 7 characters.
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword" className="input-label">
          Password confirmation
        </label>
        <input
          className={
            errors?.confirmPassword ? 'input-field input-error' : 'input-field'
          }
          type="password"
          placeholder="Repeat your password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: true,
            validate: value => value === watchPassword,
            minLength: 7,
          })}
        />
        {errors?.confirmPassword?.type === 'required' && (
          <p className="error-message">Password confirmation is required.</p>
        )}

        {errors?.confirmPassword?.type === 'validate' && (
          <p className="error-message">Passwords does not match.</p>
        )}

        {errors?.password?.type === 'minLength' && (
          <p className="error-message">
            Password needs to have at least 7 characters.
          </p>
        )}
      </div>

      <div className="form-group">
        <Button onClick={() => handleSubmit(onSubmit)()}>Sign Up</Button>
      </div>
    </div>
  );
};
