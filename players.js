// Images are just placeholders
const links = [
	{ name: "Michael Jordan" },
	{ name: "Kobe Bryant" },
	{ name: "Stephen Curry" },
	{ name: "Shaquille O’ Neal" },
	{ name: "Kevin Durant" },
	{ name: "Kawhi Leonard" },
	{ name: "Dwyane Wade" },
	{ name: "Allen Iverson" },
	{ name: "Scottie Pippen" },
	{ name: "Russell Westbrook" },
	{ name: "Dennis Rodman" },
	{ name: "Vince Carter" },
	{ name: "Bob Pettit" },
	{ name: "Andrew Phillip" },
	{ name: "Scottie Pippen" },
	{ name: "Pat Riley" },
	{ name: "Willis Reed" },
	{ name: "Doc Rivers" },
	{ name: "Oscar Robertson" },
	{ name: "David Robinson" },
	{ name: "Dennis Rodman" },
	{ name: "Bill Russell" },
	{ name: "John Stockton" },
	{ name: "Helen Stephens" },
	{ name: "Jerry Sloan" },
];

links.forEach((link, i) => {
	link.image = `./images/${i + 1}.jpg`;
});
