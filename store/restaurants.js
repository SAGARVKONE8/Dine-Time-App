const restaurants = [
  {
    name: "Sea Grill of Merrick Park",
    seats: 50,
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
    address: "4250 Salzedo Street, Suite 1425, Coral Gables, FL 33146",
    opening: "11:30",
    closing: "23:00",
    location: { lat: 25.7324, lng: -80.2599 },
    mapUrl: "https://www.google.com/maps?q=4250+Salzedo+Street+Coral+Gables+FL+33146",
  },
  {
    name: "Ocean's Edge Bistro",
    seats: 50,
    image:
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "123 Ocean Drive, Suite 101, Miami Beach, FL 33139",
    opening: "10:00",
    closing: "22:00",
    location: { lat: 25.7742, lng: -80.1340 },
    mapUrl: "https://www.google.com/maps?q=123+Ocean+Drive+Miami+Beach+FL+33139",
  },
  {
    name: "Sunset Grill",
    seats: 75,
    image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg",
    address: "789 Sunset Blvd, Suite 202, Los Angeles, CA 90069",
    opening: "11:00",
    closing: "00:00",
    location: { lat: 34.0901, lng: -118.3817 },
    mapUrl: "https://www.google.com/maps?q=789+Sunset+Blvd+Los+Angeles+CA+90069",
  },
  {
    name: "Riverside Diner",
    seats: 65,
    image: "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg",
    address: "456 River Road, Suite 300, New York, NY 10001",
    opening: "09:00",
    closing: "23:30",
    location: { lat: 40.7484, lng: -73.9967 },
    mapUrl: "https://www.google.com/maps?q=456+River+Road+New+York+NY+10001",
  },
  {
    name: "Bayview Café",
    seats: 80,
    image: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg",
    address: "321 Bay Street, Suite 400, San Francisco, CA 94133",
    opening: "10:30",
    closing: "22:30",
    location: { lat: 37.8060, lng: -122.4107 },
    mapUrl: "https://www.google.com/maps?q=321+Bay+Street+San+Francisco+CA+94133",
  },
  {
    name: "Lakeside Eatery",
    seats: 70,
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
    address: "555 Lake Avenue, Suite 120, Chicago, IL 60611",
    opening: "11:00",
    closing: "23:00",
    location: { lat: 41.8925, lng: -87.6201 },
    mapUrl: "https://www.google.com/maps?q=555+Lake+Avenue+Chicago+IL+60611",
  },
  {
    name: "Central Park Café",
    seats: 60,
    image: "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg",
    address: "789 Fifth Avenue, Suite 201, New York, NY 10022",
    opening: "08:30",
    closing: "21:30",
    location: { lat: 40.7638, lng: -73.9721 },
    mapUrl: "https://www.google.com/maps?q=789+Fifth+Avenue+New+York+NY+10022",
  },
  {
    name: "Music City Grill",
    seats: 100,
    image:
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "1000 Broadway, Suite 500, Nashville, TN 37203",
    opening: "12:00",
    closing: "00:30",
    location: { lat: 36.1550, lng: -86.7767 },
    mapUrl: "https://www.google.com/maps?q=1000+Broadway+Nashville+TN+37203",
  },
  {
    name: "Texas BBQ House",
    seats: 90,
    image:
      "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "222 Elm Street, Suite 101, Dallas, TX 75201",
    opening: "10:00",
    closing: "22:00",
    location: { lat: 32.7831, lng: -96.7987 },
    mapUrl: "https://www.google.com/maps?q=222+Elm+Street+Dallas+TX+75201",
  },
  {
    name: "Evergreen Eatery",
    seats: 85,
    image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg",
    address: "789 Pine Street, Suite 204, Seattle, WA 98101",
    opening: "11:30",
    closing: "23:00",
    location: { lat: 47.6114, lng: -122.3331 },
    mapUrl: "https://www.google.com/maps?q=789+Pine+Street+Seattle+WA+98101",
  },
  {
    name: "Lowcountry Diner",
    seats: 55,
    image:
      "https://images.pexels.com/photos/1628020/pexels-photo-1628020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "456 King Street, Suite 100, Charleston, SC 29403",
    opening: "09:30",
    closing: "22:00",
    location: { lat: 32.7910, lng: -79.9423 },
    mapUrl: "https://www.google.com/maps?q=456+King+Street+Charleston+SC+29403",
  },
  {
    name: "Bourbon Street Grill",
    seats: 110,
    image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
    address: "789 Bourbon Street, Suite 300, New Orleans, LA 70116",
    opening: "11:00",
    closing: "01:00",
    location: { lat: 29.9586, lng: -90.0646 },
    mapUrl: "https://www.google.com/maps?q=789+Bourbon+Street+New+Orleans+LA+70116",
  },

];


const carouselImages = [
  {
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_1",
  },
  {
    images: [
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_2",
  },
  {
    images: [
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=170.625&fit=crop&h=276.25",
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&h=138.125&fit=crop&w=154.375&dpr=1",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&h=138.125&fit=crop&w=154.375&dpr=1",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_3",
  },
  {
    images: [
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_4",
  },
  {
    images: [
      "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_5",
  },
  {
    images: [
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_6",
  },
  {
    images: [
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=236.25&fit=crop&h=382.5",
    ],
    res_id: "/restaurants/restaurant_7",
  },
  {
    images: [
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_8",
  },
  {
    images: [
      "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_9",
  },
  {
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_10",
  },
  {
    images: [
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_11",
  },
  {
    images: [
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_12",
  },
];



const slots = [
  {
    ref_id: "/restaurants/restaurant_1",
    slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  },
  {
    ref_id: "/restaurants/restaurant_2",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    ref_id: "/restaurants/restaurant_3",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
  {
    ref_id: "/restaurants/restaurant_4",
    slot: [
      "09:00",
      "11:00",
      "13:00",
      "15:00",
      "17:00",
      "19:00",
      "21:00",
      "23:00",
    ],
  },
  {
    ref_id: "/restaurants/restaurant_5",
    slot: ["10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  },
  {
    ref_id: "/restaurants/restaurant_6",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
  },
  {
    ref_id: "/restaurants/restaurant_7",
    slot: ["08:30", "10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  },
  {
    ref_id: "/restaurants/restaurant_8",
    slot: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  },
  {
    ref_id: "/restaurants/restaurant_9",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    ref_id: "/restaurants/restaurant_10",
    slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  },
  {
    ref_id: "/restaurants/restaurant_11",
    slot: ["09:30", "11:30", "13:30", "15:30", "17:30", "19:30"],
  },
  {
    ref_id: "/restaurants/restaurant_12",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
  {
    ref_id: "/restaurants/restaurant_13",
    slot: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  },
];

export { restaurants, carouselImages, slots };
