import React, { Component } from 'react';
import './Auth.css';

export class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = { login: '', password: '', userFound: false, paneVisible: false };
		this.onAuthorize = this.onAuthorize.bind(this);
		this.onLoginChange = this.onLoginChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.getPaneClass = this.getPaneClass.bind(this);
	}

	async onAuthorize(event) {
		event.preventDefault();
		const response = await fetch("api/auth?login=" + this.state.login + "&password=" + this.state.password);
		const data = await response.json();
		if (data.id) {
			this.setState({ paneVisible: true, userFound : true })
		}
		else {
			this.setState({ paneVisible: true, userFound: false })
		}
	}

	onLoginChange(event) {
		this.setState({login : event.target.value})
	}
	onPasswordChange(event) {
		this.setState({ password: event.target.value })
	}
	getPaneClass() {
		return this.state.paneVisible ? 'visible' + this.state.userFound ? 'success' : 'fail' : 'invisible'
	}
	render() {
		return (
			<div id="login">
				<h3 class="text-center text-white pt-5">Мои Инвестиции</h3>
				<div class="container">
					<div id="login-row" class="row justify-content-center align-items-center">
						<div id="login-column" class="col-md-6">
							<div id="login-box" class="col-md-12">
								<form id="login-form" class="form" action="" method="post">
									<h3 class="text-center text-info">Вход в систему</h3>
									<div class="form-group">
										<label for="username" class="text-info">Логин</label><br />
										<input onChange={this.onLoginChange} type="text" name="username" id="username" class="form-control" value={this.state.login} />
									</div>
									<div class="form-group">
										<label  for="password" class="text-info">Пароль</label><br />
										<input onChange={this.onPasswordChange} type="password" name="password" id="password" class="form-control" value={this.state.password} />
									</div>
									<div class="form-group">
										<button class="btn btn-primary" onClick={this.onAuthorize}>Вход</button>
										<br/>
										<div>
											<a href="#" class="text-info">Нет аккаунта? Зарегистрируйтесь</a>
										</div>
									</div>
									<div class="form-group">
										<div id="pane-result" class={this.getPaneClass}>
											<i class={this.state.userFound ? 'fas fa-check' : 'fas fa-times'}></i>
											<label>{this.state.userFound ? '' : 'Пользователь не найден'}</label>
										</div>
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