// Import images
import housePlan from "./assets/images/houseplan.jpeg";
import cabanaPlan from "./assets/images/cabanaplan.jpg";
import garagePlan from "./assets/images/garageplan.jpg";
import guardRoomPlan from "./assets/images/guardroomplan.jpg";
import warehousePlan from "./assets/images/warehouseplan.jpg";
import restaurantPlan from "./assets/images/restairantplan.jpg";
import shopPlan from "./assets/images/shopplan.png";
import factoryPlan from "./assets/images/factoryplan.png";

import housePlan1v1 from "./assets/images/houseplan1v1.jpg";
import housePlan1v2 from "./assets/images/houseplan1v2.jpg";
import housePlan1v3 from "./assets/images/houseplan1v3.jpg";
import housePlan1v4 from "./assets/images/houseplan1v4.jpg";

import housePlan2v1 from "./assets/images/houseplan2v1.jpg";
import housePlan2v2 from "./assets/images/houseplan2v2.jpg";
import housePlan2v3 from "./assets/images/houseplan2v3.jpg";
import housePlan2v4 from "./assets/images/houseplan2v4.jpg";

import housePlan3v1 from "./assets/images/houseplan3v1.jpg";
import housePlan3v2 from "./assets/images/houseplan3v2.jpg";
import housePlan3v3 from "./assets/images/houseplan3v3.jpg";
import housePlan3v4 from "./assets/images/houseplan3v4.jpg";

import housePlan4v1 from "./assets/images/houseplan4v1.jpg";
import housePlan4v2 from "./assets/images/houseplan4v2.jpg";
import housePlan4v3 from "./assets/images/houseplan4v3.jpg";
import housePlan4v4 from "./assets/images/houseplan4v4.jpg";

import housePlan5v1 from "./assets/images/houseplan5v1.jpg";
import housePlan5v2 from "./assets/images/houseplan5v2.jpg";
import housePlan5v3 from "./assets/images/houseplan5v3.jpg";
import housePlan5v4 from "./assets/images/houseplan5v4.jpg";

// Construction Plans
export const constructionPlans = [
  {
    title: "House Plans",
    description: "Discover a wide range of house plans...",
    image: housePlan,
    link: "/services/house-plans",
  },
  {
    title: "Cabana Plans",
    description: "Immerse yourself in serene cabana designs...",
    image: cabanaPlan,
    link: "/services/cabana-plans",
  },
  {
    title: "Garage Plans",
    description: "Explore innovative garage layouts...",
    image: garagePlan,
    link: "/services/garage-plans",
  },
  {
    title: "Guard Room Plans",
    description: "Efficient and secure guard room designs...",
    image: guardRoomPlan,
    link: "/services/guard-room-plans",
  },
  {
    title: "Warehouse Plans",
    description: "Optimized warehouse designs...",
    image: warehousePlan,
    link: "/services/warehouse-plans",
  },
  {
    title: "Restaurant Plans",
    description: "Crafted restaurant plans...",
    image: restaurantPlan,
    link: "/services/restaurant-plans",
  },
  {
    title: "Shop Plans",
    description: "Retail space designs...",
    image: shopPlan,
    link: "/services/shop-plans",
  },
  {
    title: "Factory Plans",
    description: "Comprehensive factory layouts...",
    image: factoryPlan,
    link: "/services/factory-plans",
  },
];

// House Plans
export const constructionHousePlans = [
  {
    title: "Modern 3-Bedroom Home",
    planCode: "P001",
    images: [housePlan1v1, housePlan1v2, housePlan1v3, housePlan1v4],
    image: housePlan1v4, // Default large image
    description: "A spacious 2-floor plan with 3 bedrooms, 2 bathrooms, and a modern design.",
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    pricing: {
      "2DPlan": 5000.0,
      "3DPlan": 10000.0,
      Estimate: 15000.0,
    },
  },
  {
    title: "Compact 2-Bedroom Home",
    planCode: "P002",
    images: [housePlan2v1, housePlan2v2, housePlan2v3, housePlan2v4],
    image: housePlan2v4,
    description: "A compact 2-bedroom house with an open kitchen and cozy living space.",
    bedrooms: 2,
    bathrooms: 1,
    floors: 1,
    pricing: {
      "2DPlan": 7000.0,
      "3DPlan": 13000.0,
      Estimate: 18000.0,
    },
  },
  {
    title: "Luxury 4-Bedroom Villa",
    planCode: "P003",
    images: [housePlan3v1, housePlan3v2, housePlan3v3, housePlan3v4],
    image: housePlan3v4,
    description: "A luxurious villa with 4 bedrooms, a private pool, and a large backyard.",
    bedrooms: 4,
    bathrooms: 3,
    floors: 2,
    pricing: {
      "2DPlan": 5700.0,
      "3DPlan": 12000.0,
      Estimate: 19000.0,
    },
  },
  {
    title: "Eco-Friendly 2-Bedroom Home",
    planCode: "P004",
    images: [housePlan4v1, housePlan4v2, housePlan4v3, housePlan4v4],
    image: housePlan4v4,
    description: "An eco-friendly house with solar panels and energy-efficient designs.",
    bedrooms: 2,
    bathrooms: 1,
    floors: 1,
    pricing: {
      "2DPlan": 3000.0,
      "3DPlan": 12000.0,
      Estimate: 16000.0,
    },
  },
  {
    title: "Traditional 3-Bedroom Home",
    planCode: "P005",
    images: [housePlan5v1, housePlan5v2, housePlan5v3, housePlan5v4],
    image: housePlan5v4,
    description: "A traditional 3-bedroom home with a spacious porch and backyard.",
    bedrooms: 3,
    bathrooms: 2,
    floors: 1,
    pricing: {
      "2DPlan": 5000.0,
      "3DPlan": 10000.0,
      Estimate: 15000.0,
    },
  },
];
