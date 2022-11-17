var currentTheme = document.querySelector(".dark-vertion");
changeTheme = () => {
    if (currentTheme.classList.contains("dark-vertion")) {
        currentTheme.classList.remove("dark-vertion");
        currentTheme.classList.remove("black-bg");
        currentTheme.classList.add("white-vertion");
        currentTheme.classList.add("white-bg");
        currentTheme = document.querySelector(".white-vertion");
    } else {
        currentTheme.classList.remove("white-vertion");
        currentTheme.classList.remove("white-bg");
        currentTheme.classList.add("dark-vertion");
        currentTheme.classList.add("black-bg");
        currentTheme = document.querySelector(".dark-vertion");
    }
}