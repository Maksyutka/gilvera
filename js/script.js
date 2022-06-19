const bodySelector = "body";
const bodyOverflowOffClass = "overflow-disabled";
const burgerSelector = ".burger";
const burgerOpenClass = "opened";
const headerUpperCloseSelector = ".header__upper-close";
const headerUpperCloseClass = "header__upper-block_unvisible";
const headerUpperBlockSelector = ".header__upper-block";
const mobileMenuSelector = ".mobile-menu";
const mobileMenuVisibilityClass = "mobile-menu_hidden";
const mobileMenuCloseSelector = ".mobile-menu__close";
const headerAccordeon = ".header__acc-content";
const headerBtn = ".header__nav-item";

function upperClose() {
	$(headerUpperCloseSelector).click(function () {
		$(headerUpperBlockSelector).addClass(headerUpperCloseClass);
	});
}

function accordeonInit() {
	$(headerBtn).hover(function () {
		$(this).find(headerAccordeon).stop().slideToggle();
	});
}

function mobileMenuAction() {
	$(burgerSelector).click(function () {
		$(burgerSelector).toggleClass(burgerOpenClass);
		$(mobileMenuSelector).toggleClass(mobileMenuVisibilityClass);
		$(bodySelector).toggleClass(bodyOverflowOffClass);
	});

	$(mobileMenuCloseSelector).click(function () {
		$(mobileMenuSelector).addClass(mobileMenuVisibilityClass);
		$(burgerSelector).toggleClass(burgerOpenClass);
		$(bodySelector).removeClass(bodyOverflowOffClass);
	});
}

$(document).ready(function () {
	mobileMenuAction();
	upperClose();
	accordeonInit();
});
