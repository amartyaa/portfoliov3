// 1. SCROLL REVEAL SCRIPT
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}
reveal(); // Trigger once on load

// 2. EYE TRACKING SCRIPT
document.addEventListener('mousemove', (e) => {
    const pupils = document.querySelectorAll('.pupil');

    pupils.forEach((pupil) => {
        // Get position of the eye
        const rect = pupil.getBoundingClientRect();
        const x = (rect.left + rect.right) / 2;
        const y = (rect.top + rect.bottom) / 2;

        // Calculate angle
        const rad = Math.atan2(e.pageX - x, e.pageY - y);
        const rot = (rad * (180 / Math.PI) * -1) + 180;

        // Limit movement radius (so pupils stay in eye)
        // We calculate the offset based on the angle
        const r = 10; // radius of movement
        const xOffset = Math.sin(rad) * r;
        const yOffset = Math.cos(rad) * r;

        // Apply transformation
        // We use CSS transform to move the pupil from its center
        pupil.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});
