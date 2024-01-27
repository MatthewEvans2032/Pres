document.addEventListener('DOMContentLoaded', function() {
    // Enable screen reader support
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('role', 'link');
    });
});
