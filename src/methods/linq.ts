export function firstOrDefault<T>(array: T[], predicate: (item: T) => boolean): T | null {
	for (let i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			return array[i];
		}
	}
	return null;
}

export function lastOrDefault<T>(array: T[], predicate: (item: T) => boolean): T | null {
	for (let i = array.length - 1; i >= 0; i--) {
		if (predicate(array[i])) {
			return array[i];
		}
	}
	return null;
}

export function where<T>(array: T[], predicate: (item: T) => boolean): T[] {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
}

export function select<T, TResult>(array: T[], selector: (item: T) => TResult): TResult[] {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(selector(array[i]));
	}
	return result;
}

/* -------------------------------------------------------------------------- */
