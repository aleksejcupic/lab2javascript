// script.js for lab 2 javascript - Aleksej Cupic
fetch('/attractions.json')
	.then(response => response.json())
	.then(data => {
	 	attractions = data.sort();
		filterData("all");
	});

function filterData(category) {
	var data = attractions
		.filter(attraction => category == "all" ? true : attraction.Category == category)
		.slice(0, 5);
	renderBarChart(data);
}

document.querySelector('#attraction-category').addEventListener('change',
	event => filterData(event.target.value));