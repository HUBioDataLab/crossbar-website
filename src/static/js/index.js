(function () {
  // Check user's preferred color scheme
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // If the user's preference is dark, add a 'data-theme' attribute to the <html> tag
  if (prefersDarkMode) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
