'use client';

import {
	CheckCircle,
	Package,
	Tag,
	TrendingDown,
	TrendingUp,
} from 'lucide-react';
import ExpenseSummaryCard from './ExpenseSummaryCard';
import PopularProductsCard from './PopularProductsCard';
import PurchaseSummaryCard from './PurchaseSummaryCard';
import SalesSummaryCard from './SalesSummaryCard';
import StatsCard from './StatsCard';

const Dashboard = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
			<PopularProductsCard />
			<SalesSummaryCard />
			<PurchaseSummaryCard />
			<ExpenseSummaryCard />
			<StatsCard
				title="Customer & Expenses"
				primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 January 2024"
				details={[
					{
						title: 'Customer Growth',
						amount: '175.00',
						changePercentage: 131,
						IconComponent: TrendingUp,
					},
					{
						title: 'Expenses',
						amount: '15.00',
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
			/>
			<StatsCard
				title="Dues & Pending Orders"
				primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 January 2024"
				details={[
					{
						title: 'Dues',
						amount: '275.00',
						changePercentage: 131,
						IconComponent: TrendingUp,
					},
					{
						title: 'Pending Orders',
						amount: '145.00',
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
			/>
			<StatsCard
				title="Sales & Discount"
				primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 January 2024"
				details={[
					{
						title: 'Sales',
						amount: '1750.00',
						changePercentage: 40,
						IconComponent: TrendingUp,
					},
					{
						title: 'Discount',
						amount: '150.00',
						changePercentage: -20,
						IconComponent: TrendingDown,
					},
				]}
			/>
		</div>
	);
};

export default Dashboard;
