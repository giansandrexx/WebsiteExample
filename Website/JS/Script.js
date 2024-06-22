document.addEventListener('DOMContentLoaded', function() {
    const shoesImage = document.getElementById('shoes-image');
    const toggleButtons = document.querySelectorAll('.round-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            let newImageSrc;

            switch(color) {
                case 'black':
                    newImageSrc = '../Shoes/AJ 1 Low Black.png';
                    break;
                case 'iceblue':
                    newImageSrc = '../Shoes/AJ 1 Low Ice blue.png';
                    break;
                case 'luckygreen':
                    newImageSrc = '../Shoes/AJ 1 Low Lucky Green.png';
                    break;
                case 'wolfgrey':
                    newImageSrc = '../Shoes/AJ 1 Low Wolf Grey.png';
                    break;
                case 'sportblue':
                    newImageSrc = '../Shoes/AJ 1 Low Sport Blue.png';
                    break;
                case 'palevanilla':
                    newImageSrc = '../Shoes/AJ 1 Low Pale Vanilla.png';
                    break;
                case 'sunset':
                    newImageSrc = '../Shoes/AJ 1 Low Sunset.png';
                    break;
                case 'desert':
                    newImageSrc = '../Shoes/AJ 1 Low Desert.png';
                    break;
                case 'jadesmoke':
                    newImageSrc = '../Shoes/AJ 1 Low Jade Smoke.png';
                    break;
            }
            shoesImage.src = newImageSrc;
        });
    });

    const buttons = document.querySelectorAll('.round-toggle');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            document.body.style.backgroundColor = color;
        });
    });

    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('hovered'));
            button.classList.add('hovered');
        });
    });

    function clearContent() {
        const elements = document.querySelectorAll('body > *:not(.just-do-it-banner)');
        elements.forEach(element => {
            element.style.display = 'none';
        });
    }

    document.getElementById('next-button').addEventListener('click', function() {
        const aj1titleElement = document.querySelector('.aj1-sub');
        const aj1aboutElement = document.querySelector('.about');
        const shoeImageElement = document.getElementById('shoes-image');
        
        if (aj1aboutElement.innerHTML === 'The Air Jordan 1 High is not only a foundational piece of the Air Jordan <br>line but also a staple in the world of sneakers, known for its enduring style, <br>historical significance, and cultural impact.') {   
            aj1aboutElement.innerHTML = 'The Air Jordan 1 Low is a classic and versatile sneaker that combines <br>the rich history of the Air Jordan brand with a contemporary, <br>low-top design suitable for everyday wear.';
            aj1titleElement.innerHTML = 'LOW';
            shoeImageElement.src = '../Shoes/AJ 1 Low Black.png';
        } else {
            aj1aboutElement.innerHTML = 'The Air Jordan 1 High is not only a foundational piece of the Air Jordan <br>line but also a staple in the world of sneakers, known for its enduring style, <br>historical significance, and cultural impact.';
            aj1titleElement.innerHTML = 'HIGH';
            shoeImageElement.src = '../Shoes/AJ 1 High Black.png'; 
        }
    });    
});

    
