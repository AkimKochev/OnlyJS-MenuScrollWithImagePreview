const container = document.querySelector(".container");

let current = 0;
let target = 0;
const ease = 0.04;

// function
const lerp = (current, target) =>
	(current * (1 - ease) + target * ease).toFixed(2);

const renderImage = function (wrapper, imageSrc) {
	const wrapperImage = document.createElement("div");
	wrapperImage.classList.add("wrapper-image");

	const image = document.createElement("img");
	image.src = imageSrc;

	wrapperImage.appendChild(image);
	wrapper.appendChild(wrapperImage);
};

const renderElement = function ({ name, image }, i) {
	const innerHtml = `
	<h1 class="menu-title">
	${name}
	<span>${i < 9 ? 0 : ""}${i + 1}</span>
	</h1>
	`;

	const element = document.createElement("div");
	element.classList.add("wrapper");
	element.style.transform = `rotate(${
		(360 / links.length) * i
	}deg) translateX(50%)`;
	element.insertAdjacentHTML("beforeend", innerHtml);

	renderImage(element, image);

	container.insertAdjacentElement("beforeend", element);
};

links.forEach((link, i) => renderElement(link, i));

const animateScroll = function () {
	target = window.scrollY;
	current = lerp(current, target);
	container.style.transform = `rotate(${-current * 0.07}deg)`;

	requestAnimationFrame(animateScroll);
};

animateScroll();

// init
const init = function () {
	document.body.style.height = `${6150}px`;
	window.scrollTo(0, 1030);
};
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", init);

document.addEventListener("mouseover", function (e) {
	if (!e.target.matches(".menu-title")) return;
	const wrapperImage = e.target.nextElementSibling;
	wrapperImage.classList.add("active");
	wrapperImage.style.left = `${e.clientX - 80}px`;
});

document.addEventListener("mouseout", function (e) {
	if (!e.target.matches(".menu-title")) return;
	const wrapperImage = e.target.nextElementSibling;
	wrapperImage.classList.remove("active");
});
