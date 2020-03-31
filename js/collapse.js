window.addEventListener("load", event => {
	let botao = document.getElementById("botao-menu");

	let menu = document.getElementById("menu-mobile");

	let botaoFechar = document.getElementById("botao-fechar");

	function collapse() {
		botao.addEventListener("click", () => {
			menu.classList.add("collapse-menu");
			botao.classList.add("display-none");
			botaoFechar.classList.add("display-block");
		});
		botaoFechar.addEventListener("click", () => {
			menu.classList.remove("collapse-menu");
			botao.classList.remove("display-none");
			botaoFechar.classList.remove("display-block");
		});
	}
	collapse();
});
