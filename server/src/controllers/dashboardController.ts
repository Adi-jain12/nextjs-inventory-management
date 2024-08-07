import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDashboardMetrics = async (req: Request, res: Response) => {
	try {
		const popularProducts = await prisma.products.findMany({
			take: 15,
			orderBy: {
				stockQuantity: 'desc',
			},
		});

		const salesSummary = await prisma.salesSummary.findMany({
			take: 5,
			orderBy: {
				date: 'desc',
			},
		});
		const purchaseSummary = await prisma.purchaseSummary.findMany({
			take: 5,
			orderBy: {
				date: 'desc',
			},
		});
		const expenseSummary = await prisma.expenseSummary.findMany({
			take: 5,
			orderBy: {
				date: 'desc',
			},
		});
		const expenseByCategorySummary = await prisma.expenseByCategory.findMany({
			take: 5,
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

		res.json({
			popularProducts,
			salesSummary,
			purchaseSummary,
			expenseSummary,
			updatedExpenseByCategorySummary,
		});
	} catch (err) {
		res.status(500).json({ message: 'Error getting dashboard metrics' });
	}
};
