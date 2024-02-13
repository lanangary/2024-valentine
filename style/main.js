// // wait for dom finish loading

// document.addEventListener('DOMContentLoaded', function () {

//     let containerLove = document.querySelector('.container.loading');
//     console.log(containerLove);

//     // wait 3 seconds
//     setTimeout(function () {
//         containerLove.classList.add('loaded');
//     }, 3000);

//     // wait 4 seconds
//     setTimeout(function () {
//         containerLove.style.display = 'none';
//     }, 4000);



//     // button spin

//     let button = document.querySelector('.btn-spin');

//     button.addEventListener('click', function () {
//         console.log('click');
//         reset();


//         // Wait 2 seconds before spinning
//         setTimeout(spin, 2000);

//     });
// });

// function reset() {
//     const roulette = document.querySelector('.roulette');
//     roulette.style.transition = 'transform 0s ease-out';
//     roulette.style.transform = 'rotate(0deg)';
// }

// function checkSpin(randomRotation) {
//     let newSpin;
//     if (randomRotation == 100 || randomRotation == 280) {
//         console.log('spin again');
//         // Spin again if condition met
//         newSpin = spin();
//     } else {
//         const roulette = document.querySelector('.roulette');
//         roulette.style.transition = 'transform 6.8s ease-out';

//         // get submit btn

//         let submitbtn = document.querySelector('.submit-btn');
//         let inpt = document.querySelector('.theinput');
//         let close = document.querySelector('.close-popup');

//         if (randomRotation == 20) {
//             inpt.value = '100K';
//         }
//         if (randomRotation == 60) {
//             inpt.value = 'Silverqueen';
//         }
//         if (randomRotation == 100) {
//             inpt.value = '1000K';
//         }
//         if (randomRotation == 140) {
//             inpt.value = '50K';
//         }
//         if (randomRotation == 180) {
//             inpt.value = 'Gelato';
//         }
//         if (randomRotation == 240) {
//             inpt.value = '10K';
//         }
//         if (randomRotation == 280) {
//             inpt.value = 'Iphone';
//         }
//         if (randomRotation == 320) {
//             inpt.value = '25K';
//         }



//         // how to make it spin 8 times but didnt change the result
//         const finalRotation = randomRotation + (8 * 360);

//         roulette.style.transform = `rotate(${finalRotation}deg)`;


//         close.addEventListener('click', function () {
//             let popup = document.querySelector('.popup');
//             popup.classList.remove('active');

//             submitbtn.click();
//         });



//         // wait 7 seconds before clicking submit
//         setTimeout(function () {

//             let text = document.querySelector('.here');
//             let popup = document.querySelector('.popup');

//             if (randomRotation == 20) {
//                 text.innerHTML = 'Isma Dapet 100K';
//             }
//             if (randomRotation == 60) {
//                 text.innerHTML = 'Isma Dapet Silverqueen';
//             }
//             if (randomRotation == 100) {
//                 text.innerHTML = 'Isma Dapet 1000K';
//             }
//             if (randomRotation == 140) {
//                 text.innerHTML = 'Isma Dapet 50K';
//             }
//             if (randomRotation == 180) {
//                 text.innerHTML = 'Isma Dapet Gelato';
//             }
//             if (randomRotation == 240) {
//                 text.innerHTML = 'Isma Dapet 10K';
//             }
//             if (randomRotation == 280) {
//                 text.innerHTML = 'Isma Dapet Iphone';
//             }
//             if (randomRotation == 320) {
//                 text.innerHTML = 'Isma Dapet 25K';
//             }
//             popup.classList.add('active');


//             // submitbtn.click();
//         }, 7000);
//     }
// }

// function spin() {
//     const spins = 10; // Number of spins
//     // generate random math hanya di 20, 60, 100, 140, 180, 240, 280, 320
//     let randomRotation = generateRandomNumber();
//     console.log(randomRotation);
//     checkSpin(randomRotation);
// }

// function generateRandomNumber() {
//     const numbers = [20, 60, 100, 140, 180, 240, 280, 320];
//     const randomIndex = Math.floor(Math.random() * numbers.length);
//     return numbers[randomIndex];
// }


// // note

// //  20 = 100K
// //  60 = silverquen
// // 100 = 1000K
// // 140 = 50K
// // 180 = gelato
// // 240 = 10K
// // 280 = iphone
// // 320 = 25k