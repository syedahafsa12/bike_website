// Cadence Cycles product data.

export type Product = {
  id: string;
  name: string;
  category: string;
  color: string;
  price: number;
  stock: number;
  description: string;
};

export const PRODUCTS: Product[] = [
  { id: "bike-101", name: "Verdant City Cruiser", category: "bicycle", color: "green", price: 429, stock: 6,
    description: "Step-through steel frame city bicycle with fenders, chain guard and a rear rack." },
  { id: "bike-102", name: "Mint Commuter 7-Speed", category: "bicycle", color: "green", price: 389, stock: 0,
    description: "Lightweight aluminium commuter with 7-speed gearing and disc brakes." },
  { id: "bike-103", name: "Emerald Trail Hardtail", category: "bicycle", color: "green", price: 349, stock: 3,
    description: "Entry-level hardtail trail bike. Great value for new riders." },
  { id: "bike-104", name: "Crimson Road Racer", category: "bicycle", color: "red", price: 899, stock: 2,
    description: "Carbon-fork road bike with 22-speed groupset." },
  { id: "bike-105", name: "Slate Gravel Explorer", category: "bicycle", color: "grey", price: 649, stock: 4,
    description: "Drop-bar gravel bicycle with 40mm tyre clearance." },
  { id: "helm-201", name: "Apex Commuter Helmet", category: "helmet", color: "blue", price: 59, stock: 25,
    description: "MIPS-equipped commuter helmet with rear light." },
  { id: "lock-301", name: "Steel U-Lock", category: "lock", color: "black", price: 39, stock: 40,
    description: "16mm hardened steel U-lock with two keys." },
  { id: "wear-501", name: "Organic Cotton Cycling Cap", category: "apparel", color: "white", price: 24, stock: 30,
    description: "Breathable cycling cap made from 100% organic cotton." },
  { id: "wear-502", name: "Organic Cotton Commuter Tee", category: "apparel", color: "green", price: 45, stock: 0,
    description: "Everyday tee made from GOTS-certified organic cotton." },
  { id: "bag-401", name: "Waterproof Pannier Pair", category: "bag", color: "black", price: 79, stock: 11,
    description: "Roll-top waterproof panniers, 20L each." },
];

export const POLICIES = {
  returns: "30-day returns on unused bicycles in original packaging. Accessories: 14 days.",
  shipping: "Free standard shipping over $100, otherwise a flat $12. Bicycles ship fully assembled within 3 business days.",
  warranty: "Frames carry a 5-year warranty. Components carry a 1-year warranty.",
};

