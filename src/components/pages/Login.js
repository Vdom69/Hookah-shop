import React, { useState } from 'react';
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
export default class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleEmail = event => {
    this.setState({ email: event.target.value});
  }
  handlePassword = event => {
    this.setState({ password: event.target.value});
  }
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
  }
    axios.post(`http://localhost:3000/PersonList`, {user})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  render() {
    return (
      <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-20">
  <div class="w-full max-w-md space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <form class="mt-8 space-y-6" onSubmit={this.handleSubmit} method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label  htmlFor="Email"for="email" class="sr-only">Email address</label>
          <input  id="Email" type="text" name="email" onChange={this.handleEmail} class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label htmlFor="Password" for="password" class="sr-only">Password</label>
          <input  type="password" onChange={this.handlePassword} class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600">Forgot your Password?</a>
        </div>
      </div>

      <div>
        <button  type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          </span>
          Sign In
        </button>
      </div>
      <div class="text-sm">
        <a href="/signUp" class="font-medium text-indigo-600">SignUp</a>
      </div>
    </form>
  </div>
</div>

  )
}
};