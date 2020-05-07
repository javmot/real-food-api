import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { FoodDataSources } from "../dataSources/FoodDataSource";
import BedcaAPI from "../dataSources/BedcaAPI";
import { UserModel } from "../entities/User";

export interface Context {
	headers: IncomingHttpHeaders;
	user: string;
	req: Request;
	res: Response;
	dataSources: FoodDataSources;
}

export const dataSources = (): DataSources<FoodDataSources> => ({
	bedcaAPI: new BedcaAPI(),
});

export const context = async (req: Request, res: Response) => {
	// TODO: Auth Logic
	const userDoc = await UserModel.findOne();
	const user = userDoc && userDoc._id;
	return {
		user,
		req,
		res,
	};
};
