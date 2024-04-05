'use client';

import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { storeLogin } from '../redux/store-login';

export function Register() {
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const SubmitFormRegister = (e: React.FormEvent) => {
    e.preventDefault();

    storeLogin.dispatch({
      type: 'CHANGE_STATE',
      payload: {
        authFullName: fullname,
        authEmail: email,
      },
    });
    location.href = '/';
  };

  return (
    <div className="grid place-items-center gap-2 p-8 text-secondary-main">
      <div className="container">
        <form
          onSubmit={(e) => {
            SubmitFormRegister(e);
          }}
        >
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              required
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
