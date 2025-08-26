import React from "react";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="col-25">
						<div id="logo">
							<img src="" alt="" />
						</div>
					</div>
					<div className="col-75">
						<div id="nav-bar">
							<nav>
								<ul>
									<li>
										<a href="">CHARACTERS</a>
									</li>
									<li className="active">
										<a href="">COMICS</a>
									</li>
									<li>
										<a href="">MOVIES</a>
									</li>
									<li>
										<a href="">TV</a>
									</li>
									<li>
										<a href="">GAMES</a>
									</li>
									<li>
										<a href="">COLLECTIBLES</a>
									</li>
									<li>
										<a href="">VIDEOS</a>
									</li>
									<li>
										<a href="">FANS</a>
									</li>
									<li>
										<a href="">NEWS</a>
									</li>
									<li>
										<a href="">SHOP</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
