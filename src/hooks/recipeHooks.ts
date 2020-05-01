import { groupBy, map } from "lodash";
import fs from "fs";
import BedcaAPI from "../dataSources/BedcaAPI";
import { FoodItemInput } from "../inputs/FoodItemInput";

export const mergeFoodValues = (foodValues: any) => {
	const totalReducer = (memo: any, value: any) => {
		const valueTotal = value.total || parseFloat(value.best_location[0]) || 0;
		return {
			...memo,
			total: memo.total + valueTotal,
		};
	};
	const grouped = groupBy(foodValues, (value) => value.id || value.c_id[0]);

	const merged = map(grouped, (group) => {
		return group.reduce(totalReducer, {
			bedcaId: group[0].bedcaId || group[0].c_id[0],
			name: group[0].name || group[0].c_ori_name[0],
			unit: group[0].unit || group[0].v_unit[0],
			total: 0,
		});
	});

	fs.promises.writeFile("infos.json", JSON.stringify(merged));

	return merged;
};

export const recipeInfoHook = (
	ingredients: Array<FoodItemInput>,
	bedcaApi: BedcaAPI
) => {
	return Promise.all(
		ingredients.map((ingredient) =>
			bedcaApi.getFood(ingredient.id).then((foodInfo) => foodInfo.foodvalue)
		)
	).then((values) => values.flat());
};
