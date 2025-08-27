import React from "react";
import NavbarList from "./NavbarList";

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
								<NavbarList />
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
