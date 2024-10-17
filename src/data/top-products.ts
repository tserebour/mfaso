export interface Product {
  id: number;
  name: string;
  color: string;
  sales: number;
}

export const topProducts: Product[] = [
  { id: 1, name: 'Pipes and fitting', color: 'info.main', sales: 45 },
  { id: 2, name: 'Pumps and filtration systems', color: 'success.main', sales: 29 },
  { id: 3, name: 'Storage tanks and reservoirs', color: 'secondary.dark', sales: 18 },
  // { id: 4, name: 'Apple Smartwatches', color: 'warning.dark', sales: 25 },
];
