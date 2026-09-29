
/* TO DO:
	- able to drag windows by clicking on top, except message
	- menu shows extra stuff (games, art projects) */

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

/* DRAGGABLE WINDOWS */
// Keep track of which window is being dragged and how far the pointer is from its top-left corner.
const dragState = {
	windowEl: null,
	offsetX: 0,
	offsetY: 0
};

// Move the active window while the mouse is held down.
function onDragMove(event) {
	if (!dragState.windowEl) {
		return;
	}

	const nextLeft = event.clientX - dragState.offsetX;
	const nextTop = event.clientY - dragState.offsetY;

	dragState.windowEl.style.left = `${nextLeft}px`;
	dragState.windowEl.style.top = `${nextTop}px`;
}

// Release the drag listeners when the mouse button is released.
function stopDragging() {
	window.removeEventListener("mousemove", onDragMove);
	window.removeEventListener("mouseup", stopDragging);
	dragState.windowEl = null;
}

// Only allow dragging on the windows we want to move, and ignore clicks on the close buttons.
const windowTopBars = document.querySelectorAll(".window-top-bar");

windowTopBars.forEach(function (topbar) {
	topbar.addEventListener("mousedown", function (event) {
		if (event.target.closest("button")) {
			return;
		}

		const windowEl = topbar.closest(".window");
		if (!windowEl || windowEl.id === "contact-window") {
			return;
		}

		bringToFront(windowEl);

		const rect = windowEl.getBoundingClientRect();
		dragState.windowEl = windowEl;
		dragState.offsetX = event.clientX - rect.left;
		dragState.offsetY = event.clientY - rect.top;

		// Keep the current position and remove the centered transform so the window can be moved freely.
		windowEl.style.left = `${rect.left}px`;
		windowEl.style.top = `${rect.top}px`;
		windowEl.style.transform = "none";

		window.addEventListener("mousemove", onDragMove);
		window.addEventListener("mouseup", stopDragging);
	});
});

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

const email = document.querySelector(".email");
const feedback = document.querySelector(".copy-feedback");

email.addEventListener("click", async () => {
	const emailAddress = email.textContent
		.replace("✉", "")
		.trim();

	try {
		await navigator.clipboard.writeText(emailAddress);
		feedback.textContent = "Copied!";
		setTimeout(() => {feedback.textContent = "";}, 500);
	} catch (error) {
		feedback.textContent = "Copy failed";
		setTimeout(() => {feedback.textContent = "";}, 500);
	}
});