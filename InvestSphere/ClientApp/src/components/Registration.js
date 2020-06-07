import React, { Component } from 'react';
import './Auth.css';
import { Captcha, captchaSettings } from 'reactjs-captcha'
import axios from 'axios'

export class Registration extends Component {
	constructor(props) {
		super(props);
		this.captcha = '';
		this.state = { login: '', password: '', firstName: '', lastName: '' };

		
	}

	onFormSubmit(event) {
		event.preventDefault();

		axios.post("api/auth/register", this.state)
			.then(response => {
				console.log(response);
			})
	}

	onLoginChange(event) {
		this.setState({login : event.target.value})
	}

	onPasswordChange(event) {
		this.setState({ password: event.target.value })
	}

	onFirstNameChange(event) {
		this.setState({ firstName: event.target.value })
	}

	onLastNameChange(event) {
		this.setState({ lastName: event.target.value })
	}

	render() {
		return (
			<div id="login">
				<h3 class="text-center text-white pt-5">Регистрация нового пользователя</h3>
				<div class="container">
					<div id="login-row" class="row justify-content-center align-items-center">
						<div id="login-column" class="col-md-6">
							<div id="register-box" class="col-md-12">
								<form id="reg-form" class="form" action="" method="post" onSubmit={this.onFormSubmit.bind(this)}>
									<div class="form-group">
										<h3 class="text-center text-info">Заполните поля</h3>
									</div>
									<div class="form-group">
										<label class="text-info">Фото профиля</label>
										<input type="file" id="file" class="form-control" name="file" accept="image/*" />
									</div>
									<div class="form-group">
										<label class="text-info">Имя</label><br />
										<input onChange={this.onFirstNameChange.bind(this)} type="text" class="form-control" value={this.state.firstName} />
									</div>
									<div class="form-group">
										<label class="text-info">Фамилия</label><br />
										<input onChange={this.onLastNameChange.bind(this)} type="text" class="form-control" value={this.state.lastName} />
									</div>
									<div class="form-group">
										<label class="text-info">Логин</label><br />
										<input onChange={this.onLoginChange.bind(this)} type="text" class="form-control" value={this.state.login} />
									</div>
									<div class="form-group">
										<label class="text-info">Пароль</label><br />
										<input onChange={this.onPasswordChange.bind(this)} type="password" class="form-control" value={this.state.password} />
									</div>
									<div class="form-group">
										<button class="btn btn-primary" type="submit" id="submitButton">Зарегистрироваться</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}