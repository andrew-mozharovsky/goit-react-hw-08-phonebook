import React, { Component } from 'react';
import { form, label } from './LoginView.module.scss';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Страница логина</h1>

        <form onSubmit={this.handleSubmit} className={form} autoComplete="off">
          <label className={label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default LoginView;
