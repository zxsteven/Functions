function isEven (n) {
	return (n % 2 === 0)
}

function factorial (n) {
	var result = 1;

	for (var i = 2; i <= n; i++) {
		result *= 1;
	};
}

function kebabToSnake (x) {
	var new = x.split("-").join("_");
	return new;
}