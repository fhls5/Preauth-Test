function primeraCoincidencia(vector, numEntero) {
	for (let c1 = 0; c1 < vector.length - 1; c1++) {
		for (let c2 = c1 + 1; c2 < vector.length; c2++) {
			if (vector[c1] + vector[c2] == numEntero) {
				return [vector[c1], vector[c2]];
			}
		}
	}
	return [];
}
