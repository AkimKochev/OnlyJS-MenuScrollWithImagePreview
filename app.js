const container = document.querySelector(".container");

let current = 0;
let target = 0;
const ease = 0.04;

// function
const lerp = (current, target) => current * (1 - ease) + target * ease;

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

const checkScrollPosition = function () {
	if (window.scrollY + window.innerHeight === 6150) {
		window.scrollTo(0, 10);
	}

	if (window.scrollY < 10) {
		window.scrollTo(0, 5140);
	}
};

const animateScroll = function () {
	target = window.scrollY;
	current = lerp(current, target);
	container.style.transform = `rotate(-${(current * 0.07).toFixed(2)}deg)`;

	console.log((target - current) * 0.17);
	const menuTitle = [...document.querySelectorAll(".menu-title")];
	menuTitle.forEach((title, i) => {
		let rotateDeg = (target - current) * 0.2;
		if (rotateDeg > 60 || rotateDeg < -60) rotateDeg = 0;

		title.style.transform = `translate3d(0, -${rotateDeg}px, 0)`;
	});

	checkScrollPosition();
	requestAnimationFrame(animateScroll);
};

// init
const init = function () {
	document.body.style.height = `${6150}px`;
	setTimeout(() => {
		window.scrollTo(0, 10);
		animateScroll();
	}, 1000);
};
window.addEventListener("DOMContentLoaded", init);

document.addEventListener("mouseover", function (e) {
	if (!e.target.matches(".menu-title")) return;
	const wrapperImage = e.target.nextElementSibling;
	wrapperImage.style.left = `${e.clientX - 80}px`;
	wrapperImage.classList.add("active");
	e.target.closest(".wrapper").style.zIndex = 2;
});

document.addEventListener("mouseout", function (e) {
	if (!e.target.matches(".menu-title")) return;
	const wrapperImage = e.target.nextElementSibling;
	wrapperImage.classList.remove("active");
	e.target.closest(".wrapper").style.zIndex = 1;
});
