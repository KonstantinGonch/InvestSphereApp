import React, { Component } from 'react';
import { SideMenu } from "./SideMenu"
import { HeaderMenu } from "./HeaderMenu"
import { ApplicationComponent } from "./ApplicationComponent"
import './Home.css';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.token = localStorage.getItem("auth");
	}

	render() {
		return (
			<div>
				<header>
					<SideMenu />
					<HeaderMenu />
				</header>
				<main>
					<ApplicationComponent />
				</main>
			</div>
		);
	}
}
