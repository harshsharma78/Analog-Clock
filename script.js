'use strict';

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const startDate = function () {
	const date = new Date();
	let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let hoursRotate = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
	hourHand.style.transform = `rotate(${hoursRotate}deg)`;

	let minutesRotate = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
	minuteHand.style.transform = `rotate(${minutesRotate}deg)`;

	let secondsRotate = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsRotate}deg)`;
};
setInterval(startDate, 1000);

startDate();
