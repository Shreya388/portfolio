// loader
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    if (loader && content) {
        setTimeout(function () {
            loader.style.display = 'none';  // Hide the loader
            content.style.display = 'block';  // Show the content
        }, 500);
    } else {
        console.warn('Loader or content element is missing');
    }
});