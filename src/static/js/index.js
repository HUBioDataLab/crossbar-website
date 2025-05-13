(() => {
	// Check user's preferred color scheme
	const prefersDarkMode = window.matchMedia?.(
		"(prefers-color-scheme: dark)",
	).matches;
	// If the user's preference is dark, add a 'data-theme' attribute to the <html> tag

	if (prefersDarkMode) {
		document.documentElement.setAttribute("data-theme", "dark");
	}

	document.addEventListener("DOMContentLoaded", () => {
		const toggleThemeCheckbox = document.getElementById("toggleThemeCheckbox");
		const imgs = document.getElementsByTagName("img");

		if (prefersDarkMode) {
			toggleThemeCheckbox.checked = true;

			for (let i = 0; i < imgs.length; i++) {
				imgs[i].setAttribute("data-invert", true);
			}
		}

		function toggleTheme() {
			if (toggleThemeCheckbox.checked) {
				document.documentElement.setAttribute("data-theme", "dark");
        for (let i = 0; i < imgs.length; i++) {
          imgs[i].setAttribute("data-invert", true);
        }
			} else {
				document.documentElement.removeAttribute("data-theme");
        for (let i = 0; i < imgs.length; i++) {
          imgs[i].removeAttribute("data-invert");
        }
			}
		}

		toggleThemeCheckbox.addEventListener("click", toggleTheme);
	});
})();
