'use client';

import { useGetProductsQuery } from '@/state/api';
import Header from '@/app/_components/Header/Header';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

// Defining custom columns with properties in MUI
const columns: GridColDef[] = [
	{
		field: 'productId',
		headerName: 'ID',
		width: 90,
	},
	{ field: 'name', headerName: 'Product Name', width: 200 },
	{
		field: 'price',
		headerName: 'Price',
		width: 110,
		type: 'number',
		valueGetter: (value, row) => `₹${row.price}`, // This function is used to format every row and prefix the price with "₹"
	},
	{
		field: 'rating',
		headerName: 'Rating',
		width: 110,
		type: 'number',
		valueGetter: (value, row) => (row.rating ? row.rating : 'N/A'),
	},
	{
		field: 'stockQuantity',
		headerName: 'Stock Quantity',
		width: 150,
		type: 'number',
		valueGetter: (value, row) => `${row.stockQuantity} units`,
	},
];

const Inventory = () => {
	const { data: products, isError, isLoading } = useGetProductsQuery();

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !products) {
		return (
			<div className="text-center text-red-500 py-4">
				Failed to fetch products
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<Header name="Inventory" />

			<DataGrid
				rows={products}
				columns={columns}
				getRowId={(row) => row.productId}
				checkboxSelection
				className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
};

export default Inventory;
