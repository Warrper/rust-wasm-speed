import { Request, Response } from 'express';

const errorWrap = (fn: (req: Request, res: Response) => Promise<void>) => {
	return function(req: Request, res: Response): void {
		fn(req, res).catch(err => {
			console.error(err);
			res.status(500).send({
				status: 500,
				message: err.message,
			});
		});
	};
};

export default errorWrap;
