﻿import React, { Component } from 'react';

export class SideMenu extends Component {

    render() {
        return (
			<div id="slide-out" class="side-nav sn-bg-4 fixed">
				<ul class="custom-scrollbar">
					<li>
						<ul class="social">
							<li><a href="#" class="icons-sm fb-ic"><i class="fab fa-facebook-f"> </i></a></li>
							<li><a href="#" class="icons-sm pin-ic"><i class="fab fa-pinterest"> </i></a></li>
							<li><a href="#" class="icons-sm gplus-ic"><i class="fab fa-google-plus-g"> </i></a></li>
							<li><a href="#" class="icons-sm tw-ic"><i class="fab fa-twitter"> </i></a></li>
						</ul>
					</li>
					<li>
					</li>

					<li>
						<ul class="collapsible collapsible-accordion">
							<li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-chevron-right"></i> Submit
                blog<i class="fas fa-angle-down rotate-icon"></i></a>
								<div class="collapsible-body">
									<ul>
										<li><a href="#" class="waves-effect">Submit listing</a>
										</li>
										<li><a href="#" class="waves-effect">Registration form</a>
										</li>
									</ul>
								</div>
							</li>
							<li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-hand-pointer-o"></i>
                Instruction<i class="fas fa-angle-down rotate-icon"></i></a>
								<div class="collapsible-body">
									<ul>
										<li><a href="#" class="waves-effect">For bloggers</a>
										</li>
										<li><a href="#" class="waves-effect">For authors</a>
										</li>
									</ul>
								</div>
							</li>
							<li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-eye"></i> About<i class="fas fa-angle-down rotate-icon"></i></a>
								<div class="collapsible-body">
									<ul>
										<li><a href="#" class="waves-effect">Introduction</a>
										</li>
										<li><a href="#" class="waves-effect">Monthly meetings</a>
										</li>
									</ul>
								</div>
							</li>
							<li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-envelope-o"></i> Contact me<i
								class="fas fa-angle-down rotate-icon"></i></a>
								<div class="collapsible-body">
									<ul>
										<li><a href="#" class="waves-effect">FAQ</a>
										</li>
										<li><a href="#" class="waves-effect">Write a message</a>
										</li>
										<li><a href="#" class="waves-effect">FAQ</a>
										</li>
										<li><a href="#" class="waves-effect">Write a message</a>
										</li>
										<li><a href="#" class="waves-effect">FAQ</a>
										</li>
										<li><a href="#" class="waves-effect">Write a message</a>
										</li>
										<li><a href="#" class="waves-effect">FAQ</a>
										</li>
										<li><a href="#" class="waves-effect">Write a message</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</li>
				</ul>
				<div class="sidenav-bg mask-strong"></div>
			</div>
        );
    }
}