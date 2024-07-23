import { Button } from "@/components/ui/button";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
type Order = {
	order_id: number;
  customer_name: string;
  customer_email: string;
  order_date: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  shipping_address: string;
  status: string;
  }
   
   const orders: Order[] = [
	{
		"order_id": 1,
		"customer_name": "Arlina Cremer",
		"customer_email": "acremer0@scientificamerican.com",
		"order_date": "6/4/2021",
		"product_name": "Corn Syrup",
		"quantity": 68,
		"unit_price": 104.49,
		"total_price": 3189.02,
		"shipping_address": "051 Helena Junction",
		"status": "processing"
	  }, {
		"order_id": 2,
		"customer_name": "Liana Rudolf",
		"customer_email": "lrudolf1@dell.com",
		"order_date": "5/11/2022",
		"product_name": "Soup - Chicken And Wild Rice",
		"quantity": 54,
		"unit_price": 36.62,
		"total_price": 7692.95,
		"shipping_address": "09 Blaine Alley",
		"status": "delivered"
	  }, {
		"order_id": 3,
		"customer_name": "Hester Bernini",
		"customer_email": "hbernini2@is.gd",
		"order_date": "10/27/2022",
		"product_name": "Bagel - Everything Presliced",
		"quantity": 7,
		"unit_price": 557.21,
		"total_price": 1626.02,
		"shipping_address": "916 Pine View Circle",
		"status": "processing"
	  }, {
		"order_id": 4,
		"customer_name": "Lena Swannell",
		"customer_email": "lswannell3@elegantthemes.com",
		"order_date": "3/2/2022",
		"product_name": "Muffin Mix - Blueberry",
		"quantity": 100,
		"unit_price": 926.92,
		"total_price": 6446.2,
		"shipping_address": "5694 Ridgeway Drive",
		"status": "processing"
	  }, {
		"order_id": 5,
		"customer_name": "Tandie Folk",
		"customer_email": "tfolk4@furl.net",
		"order_date": "12/21/2021",
		"product_name": "Chips - Potato Jalapeno",
		"quantity": 11,
		"unit_price": 769.14,
		"total_price": 1994.76,
		"shipping_address": "721 Swallow Parkway",
		"status": "pending"
	  }, {
		"order_id": 6,
		"customer_name": "Alphonso Angeli",
		"customer_email": "aangeli5@eventbrite.com",
		"order_date": "12/10/2020",
		"product_name": "Flour - Chickpea",
		"quantity": 59,
		"unit_price": 136.74,
		"total_price": 2883.83,
		"shipping_address": "3 Sachs Street",
		"status": "shipped"
	  }, {
		"order_id": 7,
		"customer_name": "Ulrick Haining",
		"customer_email": "uhaining6@house.gov",
		"order_date": "4/28/2020",
		"product_name": "Alize Sunset",
		"quantity": 3,
		"unit_price": 895.97,
		"total_price": 6265.14,
		"shipping_address": "1284 Fieldstone Pass",
		"status": "processing"
	  }, {
		"order_id": 8,
		"customer_name": "Bond Dolphin",
		"customer_email": "bdolphin7@gov.uk",
		"order_date": "1/1/2021",
		"product_name": "Soap - Mr.clean Floor Soap",
		"quantity": 92,
		"unit_price": 842.75,
		"total_price": 6667.3,
		"shipping_address": "6655 Novick Trail",
		"status": "shipped"
	  }, {
		"order_id": 9,
		"customer_name": "Colette Lodford",
		"customer_email": "clodford8@mysql.com",
		"order_date": "5/11/2020",
		"product_name": "Cod - Fillets",
		"quantity": 82,
		"unit_price": 752.54,
		"total_price": 3993.5,
		"shipping_address": "03972 Ludington Terrace",
		"status": "delivered"
	  }, {
		"order_id": 10,
		"customer_name": "Petronille Fowlie",
		"customer_email": "pfowlie9@home.pl",
		"order_date": "6/30/2021",
		"product_name": "Shrimp - 21/25, Peel And Deviened",
		"quantity": 40,
		"unit_price": 231.83,
		"total_price": 7490.05,
		"shipping_address": "6010 Monterey Park",
		"status": "pending"
	  }, {
		"order_id": 11,
		"customer_name": "Marje Jerzyk",
		"customer_email": "mjerzyka@psu.edu",
		"order_date": "6/13/2021",
		"product_name": "Laundry - Bag Cloth",
		"quantity": 18,
		"unit_price": 829.44,
		"total_price": 3715.14,
		"shipping_address": "985 Old Gate Park",
		"status": "pending"
	  }, {
		"order_id": 12,
		"customer_name": "Dougie Madgin",
		"customer_email": "dmadginb@seesaa.net",
		"order_date": "10/1/2021",
		"product_name": "Chicken - Breast, 5 - 7 Oz",
		"quantity": 8,
		"unit_price": 248.98,
		"total_price": 1102.96,
		"shipping_address": "5448 Anthes Road",
		"status": "shipped"
	  }, {
		"order_id": 13,
		"customer_name": "Kristopher Knatt",
		"customer_email": "kknattc@latimes.com",
		"order_date": "9/22/2022",
		"product_name": "Beef - Top Sirloin - Aaa",
		"quantity": 32,
		"unit_price": 811.52,
		"total_price": 6090.64,
		"shipping_address": "322 Fisk Center",
		"status": "shipped"
	  }, {
		"order_id": 14,
		"customer_name": "Micheil Whiff",
		"customer_email": "mwhiffd@mapquest.com",
		"order_date": "3/30/2021",
		"product_name": "Shrimp - Black Tiger 26/30",
		"quantity": 3,
		"unit_price": 789.28,
		"total_price": 7552.76,
		"shipping_address": "66504 Tennyson Trail",
		"status": "delivered"
	  }, {
		"order_id": 15,
		"customer_name": "Thalia Michelin",
		"customer_email": "tmicheline@ucla.edu",
		"order_date": "7/13/2020",
		"product_name": "7up Diet, 355 Ml",
		"quantity": 71,
		"unit_price": 674.88,
		"total_price": 4559.84,
		"shipping_address": "0017 Petterle Pass",
		"status": "pending"
	  }, {
		"order_id": 16,
		"customer_name": "Malva Delamaine",
		"customer_email": "mdelamainef@dion.ne.jp",
		"order_date": "4/25/2022",
		"product_name": "Bacardi Raspberry",
		"quantity": 27,
		"unit_price": 848.96,
		"total_price": 1556.22,
		"shipping_address": "4127 Bluestem Pass",
		"status": "delivered"
	  }, {
		"order_id": 17,
		"customer_name": "Hamlen Lanceley",
		"customer_email": "hlanceleyg@ocn.ne.jp",
		"order_date": "10/5/2022",
		"product_name": "Longos - Lasagna Beef",
		"quantity": 12,
		"unit_price": 540.79,
		"total_price": 4516.54,
		"shipping_address": "204 Beilfuss Street",
		"status": "pending"
	  }, {
		"order_id": 18,
		"customer_name": "Yettie Melonby",
		"customer_email": "ymelonbyh@photobucket.com",
		"order_date": "8/6/2020",
		"product_name": "Tea - Lemon Scented",
		"quantity": 79,
		"unit_price": 60.15,
		"total_price": 3907.7,
		"shipping_address": "7 Gerald Drive",
		"status": "pending"
	  }, {
		"order_id": 19,
		"customer_name": "Lexie Collihole",
		"customer_email": "lcolliholei@shareasale.com",
		"order_date": "12/4/2021",
		"product_name": "Creme De Cacao White",
		"quantity": 20,
		"unit_price": 154.77,
		"total_price": 6429.37,
		"shipping_address": "9501 Carey Road",
		"status": "shipped"
	  }, {
		"order_id": 20,
		"customer_name": "Ronalda Jobin",
		"customer_email": "rjobinj@sfgate.com",
		"order_date": "1/15/2022",
		"product_name": "Wine - Red, Gamay Noir",
		"quantity": 8,
		"unit_price": 152.19,
		"total_price": 4060.98,
		"shipping_address": "195 Northridge Hill",
		"status": "pending"
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
