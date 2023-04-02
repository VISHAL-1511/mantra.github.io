document.addEventListener('DOMContentLoaded',() =>{

	const selectDrop = document.querySelector('#countries');


	fetch('https://restcountries.com/v3.1/all').then(res => {
		return res.json();
	}).then(data => {
			let output = "";
			console.log(data);
		data.forEach(country => {
			output += `<option>${country.name.common}</option>`;
		})

		selectDrop.innerHTML = output;
	}).catch(err => {
		console.log(err);
	})



});