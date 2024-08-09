import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DashboardMetrics, NewProduct, Product } from './types';

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
	reducerPath: 'api',
	tagTypes: ['DashboardMetrics', 'Products'],
	endpoints: (build) => ({
		/* 
		Here, in <DashboardMetrics, void> the first argument is what type of data we are getting from backend and
		the second argument is the value we are sending in api like query params. Here, i.e void 
		*/
		getDashboardMetrics: build.query<DashboardMetrics, void>({
			query: () => '/api/v1/dashboard/metrics',
			providesTags: ['DashboardMetrics'],
		}),

		getProducts: build.query<Product[], string | void>({
			query: (searchQuery) => ({
				url: '/api/v1/products',
				params: searchQuery ? { searchQuery } : {},
			}),
			providesTags: ['Products'],
		}),

		createProduct: build.mutation<Product, NewProduct>({
			query: (newProduct) => ({
				url: '/api/v1/products',
				method: 'POST',
				body: newProduct,
			}),

			/* 
			invalidateTags is used to invalidate the query of the mentioned Tag i.e ["Products"] which is the associated tag of getProducts query above,
			which makes the query request again of that Tag to re-fetch newly created products automatically by redux.
			So, that we dont have to make the second call manually to get the products after creating and adding a new product.
			Hence, it helps to sync the frontend with latest results
			Its the same as React Query feature.
		  */
			invalidatesTags: ['Products'],
		}),
	}),
});

/* 
Here, redux query uses suffixes which automatically create custom hook for us.
E.g: useGetDashboardMetricsQuery ----> where use_________Query, the blank space is the endpoint name we created above 
*/
export const {
	useGetDashboardMetricsQuery,
	useGetProductsQuery,
	useCreateProductMutation,
} = api;
