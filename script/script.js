const orderBtn = document.querySelector(".order-btn");

const mobileMenuIcon = document.querySelector(".mobile-menu-icon");

const redirectToPage = () => {
	const url = "../pages/order.html";
	window.location.href = url;
};

const toggleMobileNav = () => {
	console.log("Clicked");
	const mobileNav = document.querySelector("#mobileNav");
	mobileNav.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
	orderBtn.addEventListener("click", redirectToPage);
	mobileMenuIcon.addEventListener("click", toggleMobileNav);
});
