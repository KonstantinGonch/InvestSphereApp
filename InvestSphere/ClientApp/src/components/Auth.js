import React, { Component } from 'react';
import './Auth.css';

export class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = { login: '', password: '', paneClass: "invisible", rememberMe: false };
		this.onAuthorize = this.onAuthorize.bind(this);
		this.onLoginChange = this.onLoginChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onRememberChange = this.onRememberChange.bind(this);

		this.authKey = localStorage.getItem("auth");
	}

	componentDidMount() {
		fetch("api/auth/verify?token=" + this.authKey)
			.then((result) => {
				if (result.status !== 404) {
					window.open("/main");
				}
			});
	}

	 onAuthorize(event) {
		event.preventDefault();
		fetch("api/auth?login=" + this.state.login + "&password=" + this.state.password + "&remember=" + this.state.rememberMe)
			.then(async (result) => {
				if (result.status !== 404) {
					var response = await result.json();
					localStorage.setItem("auth", response.token);
					window.open("/main");
				}
				else {
					this.setState({ paneClass: "visible" });
				}
			});
	}

	onRememberChange(event) {
		this.setState({ rememberMe: event.target.checked })
	}

	onLoginChange(event) {
		this.setState({ login: event.target.value })
	}
	onPasswordChange(event) {
		this.setState({ password: event.target.value })
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
										<label for="password" class="text-info">Пароль</label><br />
										<input onChange={this.onPasswordChange} type="password" name="password" id="password" class="form-control" value={this.state.password} />
									</div>
									<div class="form-group">
										<div class="form-group">
											<button class="btn btn-primary" onClick={this.onAuthorize}>Вход</button>
											<br />
											<div>
												<a href="/register" class="text-info">Нет аккаунта? Зарегистрируйтесь</a>
												<span class="block-right">
													<label >Запомнить меня</label>
													<input type="checkbox" checked={this.state.rememberMe} onChange={this.onRememberChange} />
												</span>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div id="pane-result" class={this.state.paneClass}>
											<i class="fas fa-times"></i>
											<label class="lbl-error">Пользователь не найден</label>
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