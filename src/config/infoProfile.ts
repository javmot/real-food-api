const MINIMUM = 0;
const MACROS = 1;
const DETAILED = 2;

export const getInfoProfile = (profile: number): Array<string> => {
	switch (profile) {
		case MINIMUM:
			return ["409"];
		case MACROS:
			return ["409", "410", "416", "53"];
		case DETAILED:
			return ["409", "410", "416", "53"];
		default:
			return [];
	}
};
