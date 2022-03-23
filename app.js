const container = document.querySelector(".container");

const links = [
	"Michael Jordan",
	"Kobe Bryant",
	"Stephen Curry",
	"Shaquille O’ Neal",
	"Kevin Durant",
	"Kawhi Leonard",
	"Dwyane Wade",
	"Wilt Chamberlain",
	"Allen Iverson",
	"Scottie Pippen",
	"Russell Westbrook",
	"Dennis Rodman",
	"Vince Carter",
];
let current = 0;
let target = 0;
const ease = 0.04;

// function
const renderElement = function (innerText) {
	const innerHtml = `<h1 class="menu-title">${innerText}</h1>`;

	const element = document.createElement("div");
	element.classList.add("wrapper");
	element.insertAdjacentHTML("beforeend", innerHtml);

	container.insertAdjacentElement("beforeend", element);
};
links.forEach(renderElement);

const lerp = (current, target) =>
	(current * (1 - ease) + target * ease).toFixed(2);

const animateScroll = function () {
	target = window.scrollY;
	current = lerp(current, target);

	const wrappers = [...document.querySelectorAll(".wrapper")];
	wrappers.forEach((wrapper, i) => {
		const space = i * 7 - links.length * 1.3;
		wrapper.style.transform = `rotate(${-current * 0.1 + space}deg)`;
	});

	requestAnimationFrame(animateScroll);
};

animateScroll();

// init
(function () {
	const linkHeight = document
		.querySelector(".menu-title")
		.getBoundingClientRect().height;

	document.body.style.height = `${(linkHeight * links.length) / 2}px`;
})();
