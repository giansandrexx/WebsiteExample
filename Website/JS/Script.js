document.addEventListener('DOMContentLoaded', function() {
    const shoesImage = document.getElementById('shoes-image');
    const toggleButtons = document.querySelectorAll('.round-toggle');
    const aj1titleElement = document.querySelector('.aj1-sub');
    const aj1aboutElement = document.querySelector('.about');
    const shoeImageElement = document.getElementById('shoes-image');

    const colorsLow = {
        black: '../Shoes/AJ 1 Low Black.png',
        iceblue: '../Shoes/AJ 1 Low Ice blue.png',
        luckygreen: '../Shoes/AJ 1 Low Lucky Green.png',
        wolfgrey: '../Shoes/AJ 1 Low Wolf Grey.png',
        sportblue: '../Shoes/AJ 1 Low Sport Blue.png',
        palevanilla: '../Shoes/AJ 1 Low Pale Vanilla.png',
        sunset: '../Shoes/AJ 1 Low Sunset.png',
        desert: '../Shoes/AJ 1 Low Desert.png',
        jadesmoke: '../Shoes/AJ 1 Low Gym Red.png'
    };

    const colorsHigh = {
        black: '../Shoes/AJ 1 High Black.png',
        varsityred: '../Shoes/AJ 1 High Varsity Red.png',
        latte: '../Shoes/AJ 1 High Latte.png',
        sunrise: '../Shoes/AJ 1 High Sunrise.png',
        bluesea: '../Shoes/AJ 1 High Blue Sea.png',
        cyanite: '../Shoes/AJ 1 High Cyanite.png',
    };

    let currentColors = colorsLow;

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            const newImageSrc = currentColors[color];
            if (newImageSrc) {
                shoesImage.src = newImageSrc;
            }
        });
    });

    document.getElementById('next-button').addEventListener('click', function() {
        aj1titleElement.classList.add('zoom-out');
        aj1aboutElement.classList.add('zoom-out');
        shoeImageElement.classList.add('zoom-out');

        setTimeout(() => {
            if (aj1aboutElement.innerHTML === 'The Air Jordan 1 High is not only a foundational piece of the Air Jordan <br>line but also a staple in the world of sneakers, known for its enduring style, <br>historical significance, and cultural impact.') {   
                aj1aboutElement.innerHTML = 'The Air Jordan 1 Low is a classic and versatile sneaker that combines <br>the rich history of the Air Jordan brand with a contemporary, <br>low-top design suitable for everyday wear.';
                aj1titleElement.innerHTML = 'LOW';
                shoeImageElement.src = '../Shoes/AJ 1 Low Black.png';
                currentColors = colorsLow;
                updateToggleButtons(Object.keys(colorsLow));
            } else {
                aj1aboutElement.innerHTML = 'The Air Jordan 1 High is not only a foundational piece of the Air Jordan <br>line but also a staple in the world of sneakers, known for its enduring style, <br>historical significance, and cultural impact.';
                aj1titleElement.innerHTML = 'HIGH';
                shoeImageElement.src = '../Shoes/AJ 1 High Black.png'; 
                currentColors = colorsHigh;
                updateToggleButtons(Object.keys(colorsHigh));
            }

            aj1titleElement.classList.remove('zoom-out');
            aj1aboutElement.classList.remove('zoom-out');
            shoeImageElement.classList.remove('zoom-out');
            
            aj1titleElement.classList.add('zoom-in');
            aj1aboutElement.classList.add('zoom-in');
            shoeImageElement.classList.add('zoom-in');

            setTimeout(() => {
                aj1titleElement.classList.remove('zoom-in');
                aj1aboutElement.classList.remove('zoom-in');
                shoeImageElement.classList.remove('zoom-in');
            }, 500);
        }, 500);
    });

    function updateToggleButtons(colors) {
        toggleButtons.forEach((button, index) => {
            if (index < colors.length) {
                button.setAttribute('data-color', colors[index]);
                button.style.background = getColorGradient(colors[index]);
                button.style.display = 'flex';
            } else {
                button.style.display = 'none';
            }
        });
    }

    function getColorGradient(color) {
        switch (color) {
            case 'black':
                return 'linear-gradient(to right, black 50%, white 50%)';
            case 'iceblue':
                return 'linear-gradient(to right, skyblue 50%, white 50%)';
            case 'luckygreen':
                return 'linear-gradient(to right, darkgreen 50%, white 50%)';
            case 'wolfgrey':
                return 'linear-gradient(to right, grey 50%, white 50%)';
            case 'sportblue':
                return 'linear-gradient(to right, hsl(240, 96%, 59%) 50%, white 50%)';
            case 'palevanilla':
                return 'linear-gradient(to right, hsl(48, 75%, 81%), 50%, white 50%)';
            case 'sunset':
                return 'linear-gradient(to right, hsl(10, 81%, 83%) 0%, hsl(10, 81%, 83%) 50%, white 50%, white 100%)';
            case 'desert':
                return 'linear-gradient(to right, black 50%, sandybrown 50%)';
            case 'jadesmoke':
                return 'linear-gradient(to right, black 50%, red 50%)';
            case 'varsityred':
                return 'linear-gradient(to right, #800000 50%, white 50%)';
            case 'latte':
                return 'linear-gradient(to right, #C4A484 50%, white 50%)';
            case 'sunrise':
                return 'linear-gradient(to right, #A52A2A 50%, white 50%)';
            case 'bluesea':
                return 'linear-gradient(to right, purple 50%, white 50%)';
            case 'cyanite':
                return 'linear-gradient(to right, #00FFFF 50%, white 50%)';
            default:
                return 'linear-gradient(to right, black 50%, white 50%)';
        }
    }

    updateToggleButtons(Object.keys(colorsLow));

    function updateToggleButtons(colors) {
        toggleButtons.forEach((button, index) => {
            button.classList.add('fade-out');
    
            setTimeout(() => {
                if (index < colors.length) {
                    button.setAttribute('data-color', colors[index]);
                    button.style.background = getColorGradient(colors[index]);
                    button.style.display = 'flex';
                } else {
                    button.style.display = 'none';
                }
    
                button.classList.remove('fade-out');
                button.classList.add('fade-in');
                
                setTimeout(() => {
                    button.classList.remove('fade-in');
                }, 500);
            }, 500);
        });
    }
});
