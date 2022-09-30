// script.js for lab 2 javascript - Aleksej Cupic
fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d7f28c1-b3cb-41cc-b1ab-c42f5b62beeb/attractions.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T231002Z&X-Amz-Expires=86400&X-Amz-Signature=017816bbce74b93b19b722ecf3f0d480ace0cc50e1f10d54fe8c425fc677e5c0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22attractions.json%22&x-id=GetObject')
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