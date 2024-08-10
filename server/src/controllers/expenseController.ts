import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const expenseByCategorySummary = await prisma.expenseByCategory.findMany({
			orderBy: {
				date: 'desc',
			},
		});
		const updatedExpenseByCategorySummary = expenseByCategorySummary.map(
			(item) => ({
				...item,
				amount: item.amount.toString(),
			})
		);

		res.json(updatedExpenseByCategorySummary);
	} catch (error) {
		res.status(500).json({ message: 'Error getting expenses by category' });
	}
};
