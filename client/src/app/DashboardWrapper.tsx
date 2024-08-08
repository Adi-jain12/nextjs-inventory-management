'use client';

import React, { useEffect } from 'react';
import Navbar from '@/app/_components/Navbar/Navbar';
import Sidebar from '@/app/_components/Sidebar/Sidebar';
import StoreProvider, { useAppSelector } from './redux';

type Props = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed
	);

	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

	/*
	The reason we are adding this side effect with this particular logic because we want to apply the dark and light mode on 
	direct html elements for better background but by doing the ternary operation of dark/light mode in below jsx we are explicitly changing the html 
	which forces the <html>...</html> in root layout.tsx to be in "use client" which we cannot do in Nextjs.
	Therefore, doing this method of changing the dark/light mode on html with classList.
	NOTE: not that much necessary method but better to do it
	 */
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.add('light');
		}
	}, [isDarkMode]);

	return (
		<div
			className={`${
				isDarkMode ? 'dark' : 'light'
			} flex bg-gray-200 w-full min-h-screen`}
		>
			<Sidebar />
			<main
				className={`flex flex-col w-full h-full py-7 px-7 ${
					isDarkMode ? 'bg-gray-50' : 'bg-slate-100'
				} ${isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'}`}
			>
				<Navbar />

				{children}
			</main>
		</div>
	);
};

const DashboardWrapper = ({ children }: Props) => {
	return (
		<StoreProvider>
			<DashboardLayout>{children}</DashboardLayout>
		</StoreProvider>
	);
};

export default DashboardWrapper;
