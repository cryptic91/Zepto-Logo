
function darkMode() {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
}

function lightMode() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
}

window.addEventListener('DOMContentLoaded', () => {

    let l = document.querySelectorAll('.letter');
    let d = document.querySelectorAll('.letterd');

    let color = [
        // 'linear-gradient(45deg, #ff4b2b, #ff416c)',
        // 'linear-gradient(45deg, #42e695, #3bb2b8)',
        // 'linear-gradient(45deg, #f093fb, #f5576c)',
        // 'linear-gradient(45deg, #4facfe, #00f2fe)',
        // 'linear-gradient(45deg, #fa709a, #fee140)',

        'linear-gradient(45deg, #0a924e, #a0bb2a)',
        'linear-gradient(45deg, #ed5c5c, #e1c424)',
        'linear-gradient(45deg, #105c9e, #3deaf3)',
        'linear-gradient(45deg, #d213e7, #f05d71)',
        'linear-gradient(45deg, #da2929, #e55f7e)',
    ];


    
    d.forEach((letter, index) => {
        letter.style.backgroundImage = color[index % color.length];
        letter.style.webkitBackgroundClip = 'text';
        letter.style.webkitTextFillColor = 'transparent';

        letter.addEventListener('mouseover', () => {
            letter.style.transition = 'transform 1s ease';
            letter.style.transform = 'translateY(-30px) scale(1.2) rotate(35deg)'
        });

        letter.addEventListener('mouseout', () => {
            letter.style.transition = 'transform 1s ease';
            letter.style.transform = 'translateY(0) scale(1) rotate(0deg)'
        });
    });

    
    // l.forEach((letter, index) => {
    //     letter.style.backgroundImage = color[index % color.length]; // color cycle through the array
    //     letter.style.webkitBackgroundClip = 'text';
    //     letter.style.webkitTextFillColor = 'transparent';

    //     letter.addEventListener('mouseover', () => {
    //         letter.style.transition = 'transform 0.3s ease';
    //         letter.style.animationPlayState = 'paused';
    //         letter.style.transform = 'translateY(-30px) scale(1.3) rotate(-35deg)';
    //     });

    //     letter.addEventListener('mouseout', () => {
    //         letter.style.transition = 'transform 0.3s ease';
    //         letter.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    //         // letter.style.transform = ''; // reset
    //         letter.style.animationPlayState = 'running';
    //     });
    // });


    // window.addEventListener('scroll', () => {
    //     const containerFixed = document.getElementById('page2');
    //     if (window.scrollY > 100) { // Adjust the scroll threshold as needed
    //         containerFixed.classList.add('active');
    //     } else {
    //         containerFixed.classList.remove('active');
    //     }
    // });
    
});