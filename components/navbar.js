import React from "react";
const Navbar = () => {
	const navItems = [
		{
			name: "home",
			id: "header"
		},
		{
			name: "about",
			id: "about"
		},
		{
			name: "terms & conditions",
			id: "terms"
		},
		{
			name: "structure",
			id: "structure"
		},
		{
			name: "schedule",
			id: "schedule"
		},
		{
			name: "register",
			id: "register"
		},
		{
			name: "contact",
			id: "contact"
		}
	];
	return (
		<nav id="nav" data-aos="fade">
			<ul>
				{navItems.map(item => {
					return (
						<li key={item.id}>
							<span
								onClick={() => {
									const elem = document.getElementById(item.id);
									window.scrollTo({
										top: elem.offsetTop - 120,
										left: elem.offsetLeft,
										behavior: "smooth"
									});
								}}
							>
								{item.name}
							</span>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
