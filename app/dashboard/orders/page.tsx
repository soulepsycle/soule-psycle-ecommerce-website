import { Button } from "@/components/ui/button";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
type Order = {
	id: number
  amount: string
  quantity: number
  email: string
  }
   
   const orders: Order[] = [
	{
		"id": 1,
		"amount": "$17.78",
		"email": "rchape0@apple.com",
		"quantity": 16
	  }, {
		"id": 2,
		"amount": "$17.11",
		"email": "ckilcullen1@sciencedaily.com",
		"quantity": 16
	  }, {
		"id": 3,
		"amount": "$7.98",
		"email": "clouw2@meetup.com",
		"quantity": 2
	  }, {
		"id": 4,
		"amount": "$52.95",
		"email": "kcasiroli3@about.me",
		"quantity": 5
	  }, {
		"id": 5,
		"amount": "$30.11",
		"email": "jbonnier4@gravatar.com",
		"quantity": 13
	  }, {
		"id": 6,
		"amount": "$9.53",
		"email": "kgai5@hibu.com",
		"quantity": 25
	  }, {
		"id": 7,
		"amount": "$84.15",
		"email": "fhoulworth6@whitehouse.gov",
		"quantity": 2
	  }, {
		"id": 8,
		"amount": "$92.15",
		"email": "iheelis7@telegraph.co.uk",
		"quantity": 9
	  }, {
		"id": 9,
		"amount": "$10.03",
		"email": "bluety8@wix.com",
		"quantity": 17
	  }, {
		"id": 10,
		"amount": "$2.43",
		"email": "baubray9@geocities.jp",
		"quantity": 14
	  }, {
		"id": 11,
		"amount": "$44.39",
		"email": "cdrynana@hp.com",
		"quantity": 30
	  }, {
		"id": 12,
		"amount": "$13.58",
		"email": "lshepherdb@netscape.com",
		"quantity": 19
	  }, {
		"id": 13,
		"amount": "$91.38",
		"email": "npaullc@dedecms.com",
		"quantity": 20
	  }, {
		"id": 14,
		"amount": "$81.79",
		"email": "ebakesefd@sitemeter.com",
		"quantity": 1
	  }, {
		"id": 15,
		"amount": "$24.03",
		"email": "aorcase@nba.com",
		"quantity": 26
	  }, {
		"id": 16,
		"amount": "$13.30",
		"email": "bmacmenaminf@yolasite.com",
		"quantity": 15
	  }, {
		"id": 17,
		"amount": "$56.05",
		"email": "ceagerg@apache.org",
		"quantity": 28
	  }, {
		"id": 18,
		"amount": "$75.83",
		"email": "phenfreh@creativecommons.org",
		"quantity": 13
	  }, {
		"id": 19,
		"amount": "$2.78",
		"email": "cmaruskai@twitpic.com",
		"quantity": 26
	  }, {
		"id": 20,
		"amount": "$96.34",
		"email": "mgyngellj@friendfeed.com",
		"quantity": 24
	  }
	// ...
  ]
const OrdersPage = () => {
	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
			</div>
			<div
				className="max-h-screen overflow-scroll shadow-sm"
				x-chunk="dashboard-02-chunk-1"
			>
				<DataTable columns={columns} data={orders} />
			</div>
		</main>
	);
};
export default OrdersPage;
