import { Button } from "@/components/ui/button";
import React from "react";

const CustomersPage = () => {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
			</div>
			<div
				className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
				x-chunk="dashboard-02-chunk-1"
			>
				<div className="flex flex-col items-center gap-1 text-center">
					<h3 className="text-2xl font-bold tracking-tight">
						You have no customers yet
					</h3>
					<p className="text-sm text-muted-foreground">
						You can start getting customers as soon as customers login.
					</p>
				</div>
			</div>
		</main>
	);
};
export default CustomersPage;
