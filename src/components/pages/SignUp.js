import React, { useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";
export default class SignUp extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''

  }
  handleUsername = event => {
    this.setState({ username: event.target.value});
  }
  handleEmail = event => {
    this.setState({ email: event.target.value});
  }
  handlePassword = event => {
    this.setState({ password: event.target.value});
  }
  handlepasswordConfirm = event => {
    this.setState({ passwordConfirm: event.target.value});
  }
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
  }
    axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  render() {
  return(
      <div class="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8 mt-10">
  <div class="w-full max-w-md space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create account</h2>
    </div>
    <form onSubmit={this.handleSubmit} class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="username" class="sr-only">Name</label>
          <input onChange={this.handleUsername} id="username" name="username" type="username" autocomplete="username" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Name"/>
        </div>
        <div>
          <label for="email" class="sr-only">Email</label>
          <input onChange={this.handleEmail} id="email" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email"/>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input onChange={this.handlePassword} id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
        </div>
        <div>
          <label for="passwordc" class="sr-only">Password Confirm</label>
          <input onChange={this.handlepasswordConfirm} id="passwordc" name="passwordc" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password Confirm"/>
        </div>
      </div>
      <div><Link to="/" class="text-decoration-none">
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          </span>
          Sign Up
        </button>
        </Link>
      </div>
    </form>
  </div>
</div>
  );
}
};
