import { Bike, Truck } from 'lucide-react';

export interface VehicleDetail {
  id: string;
  slug: string;
  name: string;
  subname: string;
  category: string;
  tag?: string;
  popular?: boolean;
  image: string;
  icon: typeof Truck | typeof Bike;
  payloadCapacity: string;
  payloadKg: number;
  dimensions: string;
  fuelType: string;
  loadClass: string;
  avgArrival: string;
  rating: number;
  tripsCount: string;
  tagline: string;
  description: string;
  idealFor: string[];
  features: string[];
  indoreRoutes: string[];
  helperAvailable: boolean;
  helperRate: string;
  whatsappMessage: string;
  faqs: { q: string; a: string }[];
}

export const FLEET_DETAILS: Record<string, VehicleDetail> = {
  bike: {
    id: 'bike',
    slug: 'bike',
    name: '2-Wheeler Express',
    subname: 'Bike & Electric Scooter Delivery',
    category: 'Express Intra-City Parcel',
    tag: 'Fastest in Traffic',
    image: '/vehicles/bike.svg',
    icon: Bike,
    payloadCapacity: 'Up to 20 kg',
    payloadKg: 20,
    dimensions: '40 × 40 × 40 cm Standard Delivery Bag',
    fuelType: 'EV / Petrol',
    loadClass: 'Lightweight Cargo & Parcels',
    avgArrival: '10–12 Minutes',
    rating: 4.9,
    tripsCount: '15,000+',
    tagline: 'Lightning-fast delivery for small packets, documents, food, and urgent retail goods across top city hubs.',
    description:
      'Ideal for urgent deliveries through crowded market streets and busy commercial corridors where four-wheelers face delays. Fully GPS-tracked with instant OTP delivery sign-off.',
    idealFor: [
      'Legal Documents, Cheques & Office Papers',
      'Food, Bakery & Restaurant Deliveries',
      'Medicines & Urgent Healthcare Supplies',
      'E-commerce & Direct-to-Consumer Small Parcels',
      'Retail Shop to Customer Express Handover',
      'Sample Swatches & Textile Samples',
    ],
    features: [
      'Fastest navigation through dense city traffic',
      'Weather-protected thermal delivery carrier bag',
      'Live GPS map telemetry on Customer App',
      'Contactless delivery with 4-digit OTP handover',
      'Zero advance deposit needed',
    ],
    indoreRoutes: [
      'Connaught Place ⇄ Noida Sector 62',
      'BKC ⇄ Andheri East',
      'Koramangala ⇄ Whitefield',
      'Rajwada ⇄ Vijay Nagar',
    ],
    helperAvailable: false,
    helperRate: 'N/A (Driver carries bag directly)',
    whatsappMessage:
      'Hello Shifter Online! 🛵\n\nI want to book a 2-Wheeler Express Bike for urgent parcel delivery.\nPlease connect me with the nearest driver.',
    faqs: [
      {
        q: 'What is the maximum weight a 2-wheeler can carry?',
        a: 'Our 2-wheeler express partners carry up to 20 kg in standard weather-sealed courier backpacks.',
      },
      {
        q: 'How fast will the bike rider reach my pickup location?',
        a: 'On average within major city hubs, a verified bike rider reaches your pickup doorstep in 10 to 12 minutes.',
      },
      {
        q: 'Can I send fragile or glass items by bike?',
        a: 'Small fragile items with proper bubble-wrapping can be safely carried in our padded delivery bags.',
      },
    ],
  },

  'three-wheeler': {
    id: 'three-wheeler',
    slug: 'three-wheeler',
    name: '3-Wheeler / E-Loader',
    subname: 'Piaggio Ape / Bajaj Maxima / Mahindra Treo',
    category: 'Mid-Sized Urban Freight',
    tag: 'Most Economical',
    popular: true,
    image: '/vehicles/3wheeler.svg',
    icon: Truck,
    payloadCapacity: 'Up to 500 kg',
    payloadKg: 500,
    dimensions: '5.5 × 4.5 × 4.0 ft (L × W × H)',
    fuelType: 'Electric (EV) / CNG',
    loadClass: 'Medium Freight & Wholesale Cargo',
    avgArrival: '12–15 Minutes',
    rating: 4.9,
    tripsCount: '28,000+',
    tagline: 'The undisputed workhorse of Indian wholesale markets — economical, eco-friendly, and highly agile.',
    description:
      'Perfect for moving textile rolls from wholesale cloth markets, electrical appliances, retail inventory, and medium cargo across city hubs. Equipped with heavy-duty tarpaulins for complete rain protection.',
    idealFor: [
      'Textile Rolls, Fabric Bales & Cloth Bundles',
      'Electrical Hardware, Cables & PVC Pipes',
      'Small Household Appliances & Single Furniture Items',
      'FMCG Wholesale Cartons & Grocery Crates',
      'E-commerce Hub-to-Store Restocking',
      'Auto Spare Parts & Hardware Tools',
    ],
    features: [
      'Accessible in narrow market lanes and commercial galis',
      'Full waterproof tarpaulin & tie-down ropes included',
      'Eco-friendly low-emission EV & CNG operation',
      'Experienced commercial transport drivers',
      'Optional loading helper available on request',
    ],
    indoreRoutes: [
      'Sitlamata Cloth Market ⇄ Dewas Naka',
      'Chandni Chowk ⇄ Okhla Industrial Area',
      'Crawford Market ⇄ Bhiwandi',
      'SP Road ⇄ Peenya Industrial',
    ],
    helperAvailable: true,
    helperRate: '₹150 per trained helper',
    whatsappMessage:
      'Hello Shifter Online! 🚚\n\nI need to book a 3-Wheeler / E-Loader for commercial transport.\nPlease dispatch the nearest verified vehicle.',
    faqs: [
      {
        q: 'Can the 3-wheeler enter crowded market areas during daytime?',
        a: 'Yes, 3-wheelers and E-Loaders have full day access in all commercial bazaars and markets.',
      },
      {
        q: 'Is rain protection provided for cloth and cardboard cartons?',
        a: 'Yes, all our 3-wheelers come equipped with heavy-duty waterproof tarpaulin covers and secure tying ropes.',
      },
      {
        q: 'Can I add a loading helper with a 3-wheeler?',
        a: 'Yes, you can request 1 trained loading helper directly during WhatsApp or app booking.',
      },
    ],
  },

  'tata-ace': {
    id: 'tata-ace',
    slug: 'tata-ace',
    name: 'Tata Ace (Chhota Hathi)',
    subname: 'Tata Ace Gold Diesel & CNG Mini Truck',
    category: 'Commercial & Shifting Specialist',
    tag: 'Highest Demand',
    popular: true,
    image: '/vehicles/4wheeler.svg',
    icon: Truck,
    payloadCapacity: 'Up to 750 kg',
    payloadKg: 750,
    dimensions: '7.0 × 4.8 × 4.8 ft (L × W × H)',
    fuelType: 'Diesel / CNG',
    loadClass: 'Heavy Commercial & 1 BHK Relocation',
    avgArrival: '15 Minutes',
    rating: 4.9,
    tripsCount: '45,000+',
    tagline: 'India’s most trusted mini-truck for commercial cargo, retail goods, and 1 BHK home shifting across 500+ cities.',
    description:
      'The Tata Ace Chhota Hathi is built to handle heavy commercial goods, industrial loads, and complete 1 BHK apartment relocations. Its sturdy open deck with reinforced metal side walls provides maximum safety for stacking cartons, beds, and machinery.',
    idealFor: [
      '1 BHK Home Shifting & Apartment Relocation',
      'Refrigerators, Washing Machines, Double Beds & Sofas',
      'Industrial Hardware & Machine Components',
      'Construction Materials, Paint Buckets & Tiles',
      'Wholesale FMCG & Departmental Store Restocking',
      'Event Equipment, Audio-Visual Gears & Exhibition Booths',
    ],
    features: [
      'High steel side walls for secure stacking of bulky goods',
      'Experienced highway and city commercial drivers',
      'Trained loading & unloading labor available',
      'Live GPS telemetry tracking for client & receiver',
      'Fixed transparent per-km rates with zero hidden surge fees',
    ],
    indoreRoutes: [
      'Delhi NCR ⇄ Meerut Expressway',
      'Mumbai ⇄ Pune Expressway Corridor',
      'Dewas Naka ⇄ Pithampur Industrial Area',
      'Bengaluru ⇄ Hosur Corridor',
    ],
    helperAvailable: true,
    helperRate: '₹200 per helper (up to 2 helpers)',
    whatsappMessage:
      'Hello Shifter Online! 🚚\n\nI want to book a Tata Ace (Chhota Hathi) for goods transport / shifting.\nPlease share dispatch details.',
    faqs: [
      {
        q: 'Can a Tata Ace fit a complete double bed and wardrobe?',
        a: 'Yes, a standard king-size mattress, dismantled bed frame, and large almirah fit easily in the 7-foot deck.',
      },
      {
        q: 'Are toll charges included in the fare?',
        a: 'Tolls on inter-city highway routes are paid at actuals at the toll plaza.',
      },
      {
        q: 'Can helpers assist in carrying items up the stairs?',
        a: 'Yes, our verified loading helpers assist with ground-to-floor transit safely.',
      },
    ],
  },

  pickup: {
    id: 'pickup',
    slug: 'pickup',
    name: 'Pickup 8ft / Bolero Maxi',
    subname: 'Mahindra Bolero Maxi Truck / Isuzu 8ft',
    category: 'Heavy Cargo & Highway Logistics',
    tag: 'Maximum Capacity',
    image: '/vehicles/4wheeler.svg',
    icon: Truck,
    payloadCapacity: 'Up to 1500 kg (1.5 Ton)',
    payloadKg: 1500,
    dimensions: '8.5 × 5.0 × 5.0 ft (L × W × H)',
    fuelType: 'Heavy Turbo Diesel',
    loadClass: 'Maximum Heavy Commercial & 2-3 BHK Shifting',
    avgArrival: '15–20 Minutes',
    rating: 4.8,
    tripsCount: '22,000+',
    tagline: 'Heavy-duty 8-foot cargo carrier engineered for heavy industrial machinery, bulk raw materials, and 2-3 BHK shifting nationwide.',
    description:
      'When you have heavy machinery, bulk industrial goods, steel pipes, or a complete 2 to 3 BHK house to relocate, the Mahindra Bolero Pickup 8ft is the ultimate solution. Unmatched torque and open bed capacity for any regional or national route.',
    idealFor: [
      'Complete 2 BHK & 3 BHK Home Relocations',
      'Heavy Industrial Machinery, Motors & Pumps',
      'Steel Rods, Plywood Sheets & Long Building Supplies',
      'Bulk Agricultural Produce & Grain Bags',
      'Factory-to-Warehouse Heavy Transfers',
      'Office Furniture, Executive Desks & Conference Tables',
    ],
    features: [
      'Extra-long 8.5-foot flat deck with drop-down sides',
      'Heavy-duty leaf spring suspension for heavy loads',
      'Full regional and national permit with verified commercial credentials',
      'Heavy cargo lashing straps and tarpaulins',
      'Multi-helper support available for heavy lifting',
    ],
    indoreRoutes: [
      'Delhi NCR ⇄ Jaipur Highway',
      'Mumbai ⇄ Nashik / Pune Freight Corridor',
      'Indore ⇄ Bhopal / Ujjain Linehaul',
      'Ahmedabad ⇄ Vadodara Express',
    ],
    helperAvailable: true,
    helperRate: '₹250 per helper (up to 3 helpers)',
    whatsappMessage:
      'Hello Shifter Online! 🚚\n\nI need an 8ft Pickup / Bolero Maxi Truck for heavy cargo / home relocation.\nPlease provide immediate dispatch.',
    faqs: [
      {
        q: 'What is the maximum payload capacity of the 8ft Pickup?',
        a: 'The 8ft Bolero Maxi handles up to 1,500 kg (1.5 Metric Tonnes) of cargo safely.',
      },
      {
        q: 'Does it support inter-city and highway transport?',
        a: 'Yes, all our pickup vehicles carry valid commercial permits for intercity transit anytime 24/7.',
      },
      {
        q: 'How many helpers can I request for shifting a 2 BHK apartment?',
        a: 'You can request up to 3 trained helpers to manage heavy furniture, wardrobes, and appliances.',
      },
    ],
  },

  'house-shifting': {
    id: 'house-shifting',
    slug: 'house-shifting',
    name: 'Household Goods Transport & Shifting',
    subname: 'Complete Home Relocation Service',
    category: 'End-to-End Residential Relocation',
    tag: 'Care & Safety',
    popular: true,
    image: '/household-goods-shifting.png',
    icon: Truck,
    payloadCapacity: '1 BHK, 2 BHK & 3 BHK Capacities',
    payloadKg: 1500,
    dimensions: 'Customized based on flat size (7ft to 8.5ft trucks)',
    fuelType: 'Commercial Clean Fleet',
    loadClass: 'Furniture, Appliances & Glassware Safe',
    avgArrival: 'Scheduled Slot or Immediate 20 Mins',
    rating: 4.95,
    tripsCount: '12,500+ Homes',
    tagline: 'Stress-free home shifting nationwide with polite verified drivers, trained packing helpers, and careful handling.',
    description:
      'Relocating your home? Shifter Online pairs you with the right size vehicle (Tata Ace for 1 BHK, Pickup 8ft for 2-3 BHK) along with verified loading labor who handle your furniture, television, refrigerator, and delicate kitchenware with extreme care.',
    idealFor: [
      'Complete 1 BHK, 2 BHK and 3 BHK Apartment Shifting',
      'Student & Bachelor Room Relocation',
      'Independent Villa & Bungalow Shifting',
      'Fragile Glassware, Crockery & Smart TVs',
      'Double Beds, Wardrobes, Sofas & Dining Tables',
      'Washing Machines, Refrigerators & Microwave Ovens',
    ],
    features: [
      'Trained loading & unloading labor who take utmost care',
      'Furniture blankets & tie-down ropes for damage protection',
      'Live GPS tracking link shareable with family members',
      'Dedicated helpline desk for route coordination',
      'Transparent upfront quotes with zero hidden union charges',
    ],
    indoreRoutes: [
      'Intra-City Apartment Relocation',
      'Intercity Home Shifting Corridor',
      'Metro Hub ⇄ Suburban Transfers',
      'North - Central - South Relocation Corridors',
    ],
    helperAvailable: true,
    helperRate: 'Customized labor package based on floor and flat size',
    whatsappMessage:
      'Hello Shifter Online! 🏠\n\nI want to shift my house. Please provide me with vehicle and helper options.',
    faqs: [
      {
        q: 'Do you provide helpers for lifting items up the stairs?',
        a: 'Yes! Our trained helpers carry heavy furniture and appliances upstairs safely without scratches.',
      },
      {
        q: 'Can I schedule my house shifting for a specific date and time?',
        a: 'Yes, you can schedule your shifting in advance via WhatsApp or book on-demand in ~20 minutes.',
      },
      {
        q: 'Is there any advance booking deposit needed?',
        a: 'No advance deposit is needed. You pay transparently after safe completion of the delivery.',
      },
    ],
  },

  'commercial-logistics': {
    id: 'commercial-logistics',
    slug: 'commercial-logistics',
    name: 'Business & Commercial Logistics',
    subname: 'Enterprise, Retail & Factory Freight Network',
    category: 'B2B Enterprise Logistics',
    tag: 'Enterprise Grade',
    image: '/commercial-logistics.jpg',
    icon: Truck,
    payloadCapacity: 'Multi-Vehicle Fleet (20kg to 1500kg per trip)',
    payloadKg: 1500,
    dimensions: 'Bikes, 3W Loaders, Tata Ace & 8ft Pickups',
    fuelType: 'Multi-Fuel Commercial',
    loadClass: 'Wholesale, FMCG, Industrial & Pharma Cargo',
    avgArrival: '15 Minutes Dispatch Guarantee',
    rating: 4.9,
    tripsCount: '35,000+ B2B Deliveries',
    tagline: 'Streamlined logistics partner for merchants, wholesalers, factories, and e-commerce brands nationwide.',
    description:
      'Powering commerce across India. Whether you operate a textile wholesale shop, an engineering plant, or an e-commerce fulfillment warehouse, Shifter Online delivers reliable, on-demand commercial fleet solutions with GST invoicing.',
    idealFor: [
      'Textile Merchants & Garment Manufacturers',
      'Automobile, Engineering & Pharma Manufacturing Plants',
      'FMCG Distributors & Wholesale Warehouses',
      'Hardware, Electrical & Sanitaryware Retailers',
      'E-commerce Hub-to-Store Same-Day Delivery',
      'Printing Presses & Packaging Material Suppliers',
    ],
    features: [
      'Direct GST tax invoicing for all business shipments',
      '100% Police & DL verified driver partner fleet',
      'Bulk trip booking and recurring route scheduling',
      'Dedicated account manager for enterprise logistics',
      'Start-PIN & Delivery OTP security verification',
    ],
    indoreRoutes: [
      'Delhi - Mumbai Industrial Corridor (DMIC)',
      'Western Freight & Port Logistics Corridor',
      'Central Trade & Logistics Spine',
      'Golden Quadrilateral Intercity Routes',
    ],
    helperAvailable: true,
    helperRate: 'Trained commercial loading helpers available on demand',
    whatsappMessage:
      'Hello Shifter Online B2B Team! 🏭\n\nI want to discuss commercial logistics / fleet partnership for our business.',
    faqs: [
      {
        q: 'Do you provide GST invoices for corporate tax deductions?',
        a: 'Yes, full commercial GST tax invoices are provided for all business bookings.',
      },
      {
        q: 'Can we schedule daily regular pickups for our warehouse?',
        a: 'Yes, our enterprise desk schedules daily recurring morning and evening dispatch slots with dedicated drivers.',
      },
      {
        q: 'What is the credit policy for regular business clients?',
        a: 'We offer weekly and monthly billing cycles for verified business clients following simple KYC.',
      },
    ],
  },
};
