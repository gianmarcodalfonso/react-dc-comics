import React from "react";

const NavMenu = () => {
	const menuItems = [
		{ title: "CHARACTERS", id: 1, href: "#" },
		{ title: "COMICS", id: 2, href: "#" },
		{ title: "MOVIES", id: 3, href: "#" },
		{ title: "TV", id: 4, href: "#" },
		{ title: "GAMES", id: 5, href: "#" },
		{ title: "COLLECTIBLES", id: 6, href: "#" },
		{ title: "VIDEOS", id: 7, href: "#" },
		{ title: "FANS", id: 8, href: "#" },
		{ title: "NEWS", id: 9, href: "#" },
		{ title: "SHOP", id: 10, href: "#" },
	];

	return (
		<ul id="nav-menu">
			{menuItems.map((menuItem) => (
				<li key={menuItem.id}>
					<a href={menuItem.href}>{menuItem.title}</a>
				</li>
			))}
		</ul>
	);
};

export default NavMenu;
