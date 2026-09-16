const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('open');
	navToggle.setAttribute('aria-expanded', String(isOpen));
	navToggle.querySelector('i').className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
});

navLinks?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('open');
		navToggle?.setAttribute('aria-expanded', 'false');
		const icon = navToggle?.querySelector('i');
		if (icon) icon.className = 'bi bi-list';
	});
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		});
	}, { threshold: 0.12 });
	revealItems.forEach((item) => revealObserver.observe(item));
} else {
	revealItems.forEach((item) => item.classList.add('is-visible'));
}
