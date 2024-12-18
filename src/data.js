// data.js
export const constructionPlans = [
    {
      title: "House Plans",
      description:
        "Discover a wide range of house plans designed to suit every lifestyle, from cozy cottages to luxurious modern homes. Tailored for functionality and aesthetics.",
      image: "../../public/houseplan.jpeg",
      link: "/services/house-plans", // Use a route for navigation
    },
    {
      title: "Cabana Plans",
      description:
        "Immerse yourself in serene cabana designs, perfect for leisure retreats, poolside escapes, or private getaways. Combining relaxation and elegance seamlessly.",
      image: "../../public/cabanaplan.jpg",
      link: "/services/cabana-plans",
    },
    {
      title: "Garage Plans",
      description:
        "Explore innovative garage layouts tailored to maximize space and functionality, whether for single vehicles, multiple cars, or custom storage solutions.",
      image: "../../public/garageplan.jpg",
      link: "/services/garage-plans",
    },
    {
      title: "Guard Room Plans",
      description:
        "Efficient and secure guard room designs, crafted to enhance surveillance and provide comfort for security personnel, adaptable to various premises.",
      image: "../../public/guardroomplan.jpg",
      link: "/services/guard-room-plans",
    },
    {
      title: "Warehouse Plans",
      description:
        "Optimized warehouse designs for storage and industrial purposes, featuring practical layouts for seamless workflow, safety, and scalability.",
      image: "../../public/warehouseplan.jpg",
      link: "/services/warehouse-plans",
    },
    {
      title: "Restaurant Plans",
      description:
        "Crafted restaurant plans designed to create captivating dining spaces, with an emphasis on ambiance, functionality, and customer experience.",
      image: "../../public/restairantplan.jpg",
      link: "/services/restaurant-plans",
    },
    {
      title: "Shop Plans",
      description:
        "Retail space designs that combine modern aesthetics with practicality, optimized to create welcoming and efficient shopping environments.",
      image: "../../public/shopplan.png",
      link: "/services/shop-plans",
    },
    {
      title: "Factory Plans",
      description:
        "Comprehensive factory layouts that emphasize efficiency, safety, and scalability, tailored to meet industrial and manufacturing demands.",
      image: "../../public/factoryplan.png",
      link: "/services/factory-plans",
    },
  ];
  





  // src/data/constructionPlans.js

export const constructionHousePlans = [
    {
      title: "Modern 3-Bedroom Home",
      planCode: "P001",
      images: [
        "/../public/houseplan1v1.jpg",
        "/../public/houseplan1v2.jpg",
        "/../public/houseplan1v3.jpg",
        "/../public/houseplan1v4.jpg"
      ],
      image: "/../public/houseplan1v4.jpg", // Default large image
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
      images: [
        "/../public/houseplan2v1.jpg",
        "/../public/houseplan2v2.jpg",
        "/../public/houseplan2v3.jpg",
        "/../public/houseplan2v4.jpg"
      ],
      image: "/../public/houseplan2v4.jpg", // Default large image
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
      images: [
        "/../public/houseplan3v1.jpg",
        "/../public/houseplan3v2.jpg",
        "/../public/houseplan3v3.jpg",
        "/../public/houseplan3v4.jpg"
      ],
      image: "/../public/houseplan3v4.jpg", // Default large image
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
      images: [
        "/../public/houseplan4v1.jpg",
        "/../public/houseplan4v2.jpg",
        "/../public/houseplan4v3.jpg",
        "/../public/houseplan4v4.jpg"
      ],
      image: "/../public/houseplan4v4.jpg", // Default large image
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
      images: [
        "/../public/houseplan5v1.jpg",
        "/../public/houseplan5v2.jpg",
        "/../public/houseplan5v3.jpg",
        "/../public/houseplan5v4.jpg"
      ],
      image: "/../public/houseplan5v4.jpg", // Default large image
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
  