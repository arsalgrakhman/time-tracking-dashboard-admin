fetch("js/data.json")
	.then((response) => response.json())
	.then((data) => {
		let aHref = document.querySelectorAll(".card-footer a");
		function filterDataByPeriod() {
			let h5 = document.querySelectorAll(".head h5");
			let current = document.querySelectorAll(".current h1");
			let previous = document.querySelectorAll(".previous p");
			let period = "";
			for (let a = 0; a < aHref.length; a++) {
				if (aHref[a].classList.contains("active")) {
					period += aHref[a].textContent.toLowerCase();
				}
			}
			for (let i = 0; i < data.length; i++) {
				for (let k = i; k < i + 1; k++) {
					h5[k].textContent = data[i].title;
					current[k].textContent =
						data[i].timeframes[period].current + "hrs";

					if (period == "daily") {
						previous[k].textContent = `Yesterday ${data[i].timeframes[period].previous} hrs`;
					} else if (period == "weekly") {
						previous[k].textContent = `Last Week ${data[i].timeframes[period].previous} hrs`;
					} else {
						previous[k].textContent = `Last Month ${data[i].timeframes[period].previous} hrs`;
					}
				}
			}
		}
		filterDataByPeriod();
		filterDataByPeriod();

		aHref.forEach((element) =>
			element.addEventListener("click", () => {
				for (let a = 0; a < aHref.length; a++) {
					if (aHref[a].classList.contains("active")) {
						aHref[a].classList.remove("active");
					}
				}
				element.classList.add("active");
				filterDataByPeriod();
			})
		);
	});
