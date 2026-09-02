
/*	2 - menu pop up
	3 - message button works

	3- able to move windows by clicking on top, except message
	4 - menu shows extra stuff (games, art projects)
*/

//alert("script.js is connected");

const windows = document.querySelectorAll(".window");

let highestZIndex = 10;

/* Assigns highest index to the last window clicked */
function bringToFront(clickedWindow) {
	highestZIndex = highestZIndex + 1;
	clickedWindow.style.zIndex = highestZIndex;
}

const welcomeWindow = document.querySelector("#welcome-window")
const welcomeClose = document.querySelector("#welcome-close");
const letsClose = document.querySelector("#lets-close");


function closeWelcome() {
	welcomeWindow.classList.add("hidden");
}

welcomeClose.addEventListener("click", closeWelcome);
letsClose.addEventListener("click", closeWelcome);


/* PROJECT WINDOW */
const projectsIcons = document.querySelectorAll(".project-icon");
const projectsWindow = document.querySelector("#project-window");
const projectsClose = document.querySelector("#project-close");

/* When person clicks on icon I want to remove project window from the hidden rule in CSS */
function openProject() {
	projectsWindow.classList.remove("hidden");
	bringToFront(projectsWindow);
}

function closeProject() {
	projectsWindow.classList.add("hidden");
}

projectsIcons.forEach(function (oneProjectIcon) {
	oneProjectIcon.addEventListener("click", openProject);
});

projectsClose.addEventListener("click", closeProject);


/* PROFILE WINDOW */
const profileIcons = document.querySelectorAll(".profile-icon");
const profileWindow = document.querySelector("#profile-window");
const profileClose = document.querySelector("#profile-close");

function openProfile() {
	profileWindow.classList.remove("hidden");
	bringToFront(profileWindow);
}

function closeProfile() {
	profileWindow.classList.add("hidden");
}

profileIcons.forEach(function (oneProfileIcon) {
	oneProfileIcon.addEventListener("click", openProfile);
});

profileClose.addEventListener("click", closeProfile);


/* RESUME WINDOW */
const resumeIcons = document.querySelectorAll(".resume-icon");
const resumeWindow = document.querySelector("#resume-window");
const resumeClose = document.querySelector("#resume-close");

function openResume() {
	resumeWindow.classList.remove("hidden");
	bringToFront(resumeWindow);
}

function closeResume() {
	resumeWindow.classList.add("hidden");
}

resumeIcons.forEach(function (oneResumeIcon) {
	oneResumeIcon.addEventListener("click", openResume);
});

resumeClose.addEventListener("click", closeResume);


/* CONTACT WINDOW */
const contactIcons = document.querySelectorAll(".contact-icon");
const contactWindow = document.querySelector("#contact-window");
const contactClose = document.querySelector("#contact-close");

function openContact() {
	bringToFront(contactWindow);
	contactWindow.classList.remove("hidden");
}

function closeContact() {
	contactWindow.classList.add("hidden");
}

contactIcons.forEach(function (oneContactIcon) {
	oneContactIcon.addEventListener("click", openContact);
});

contactClose.addEventListener("click", closeContact);


/* MENU WINDOW */
const menuIcon = document.querySelector(".menu-icon");
const menuWindow = document.querySelector("#menu-window");
const menuClose = document.querySelector("#menu-close");

function openMenu() {
	menuWindow.classList.remove("hidden");
	bringToFront(menuWindow);
}

function closeMenu() {
	menuWindow.classList.add("hidden");
}

menuIcon.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

