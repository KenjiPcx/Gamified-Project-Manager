export default interface ProductObj {
  name: string;
  price: number;
  duration?: string;
  image?: string;
}

export const FoodProducts: ProductObj[] = [
  {
    name: "Japanese Buffet",
    price: 400,
  },
  {
    name: "Western Buffet",
    price: 350,
  },
  {
    name: "American Steak",
    price: 200,
  },
  {
    name: "Boba Milk Tea",
    price: 25,
  },
  {
    name: "Fried Chicken",
    price: 50,
  },
  {
    name: "Milkshake",
    price: 50,
  },
  {
    name: "Burger",
    price: 50,
  },
  {
    name: "Ice Cream",
    price: 25,
  },
  {
    name: "Sour Strips",
    price: 25,
  },
];

export const EntertainmentProducts: ProductObj[] = [
  {
    name: "Youtube Pass",
    duration: "1 Hour",
    price: 5,
  },
  {
    name: "Youtube Pass",
    duration: "3 Hour",
    price: 10,
  },
  {
    name: "Anime Pass",
    duration: "1 Hour",
    price: 5,
  },
  {
    name: "Anime Pass",
    duration: "3 Hour",
    price: 10,
  },
  {
    name: "Dota Game",
    duration: "1",
    price: 5,
  },
  {
    name: "Dota Game",
    duration: "3",
    price: 10,
  },
  {
    name: "Tetris Game",
    duration: "10",
    price: 5,
  },
];

export const TechProducts: ProductObj[] = [
  {
    name: "Flagship Phone",
    price: 3500,
  },
  {
    name: "Nintendo Switch",
    price: 3500,
  },
  {
    name: "Legion Laptop",
    price: 10000,
  },
  {
    name: "Beast PC",
    price: 15000,
  },
  {
    name: "Wireless Airpods",
    price: 1000,
  },
  {
    name: "Wireless Headset",
    price: 1000,
  },
  {
    name: "Apple Pencil",
    price: 1000,
  },
];

export const HolidayProducts: ProductObj[] = [
  {
    name: "Work Pass",
    duration: "1 Day",
    price: 1000,
  },
  {
    name: "Work Pass",
    duration: "3 Day",
    price: 2500,
  },
  {
    name: "Work Pass",
    duration: "1 Week",
    price: 5000,
  },
  {
    name: "Work Pass",
    duration: "2 Week",
    price: 8500,
  },
  {
    name: "Japan Trip",
    duration: "1 Week",
    price: 50000,
  },
  {
    name: "Japan Trip",
    duration: "2 Week",
    price: 100000,
  },
  {
    name: "Japan Trip",
    duration: "1 Month",
    price: 150000,
  },
];
