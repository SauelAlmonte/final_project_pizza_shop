const orderBtn = document.querySelector(".order-btn");


const redirectToPage = () => {
	const url = "./pages/order.html";
	window.location.href = url;
};


document.addEventListener("DOMContentLoaded", () => {
	orderBtn.addEventListener("click", redirectToPage);
});
