// DONE
"use strict";

const calculate = document.querySelector('[value="Calculate"]');

function calculationSphereVolume(event) {
    event.preventDefault();

    const radius = document.querySelector('.radius').value;
    const volume = document.querySelector('.volume');

    volume.value = 4/3 * Math.PI * Math.pow(radius, 3);
}

calculate.addEventListener('click', calculationSphereVolume);
