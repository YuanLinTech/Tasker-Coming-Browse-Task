/* eslint-disable */
export const taskData = [{
  id: 0, // Used in JSX as a key
  title: "House cleaning",
  due_date: new Date('2023-03-27'),
  remote: false, // true = remote, false = in person
  locality: "Donvale",
  state: 'VIC',
  detail: `General house clean, vaccume, wash floors, clean bathrooms dust abs kitcheb
  Type of clean: Regular
  Number of bedrooms: 4+
  Number of bathrooms: 4+
  Equipment and supplies: Tasker must provide
  Due date: Flexible`,
  image_URL: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=350&h=233&dpr=1",
  budget: 140,
  type: null,
  categories: "General cleaning",
  Status: 'Open',// open, assigned, canceled, completed
  final_price: null,
  create_user_firstname: 'Sharon', // First name of the task poster
  create_user_lastname: 'Matthews',
  create_user_img_url: "https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1670924334504_avatar-placeholder-240x240.png?width=64&height=64",
  create_datetime: new Date('2023-02-25T09:26:16.988Z'),
  time_of_day: ['Morning'],// array of strings, with contents being 'Morning', 'Midday', 'Afternoon' or 'Evening'
  offers: [{id: 0, text: `Hello good afternoon I would like to apply for this job`, 
  price: 130, Status: 'Pending', attached_file_url: null, 
  create_user_firstname: 'Maria', // First name of the user who made the offer 
  create_user_lastname: 'Markman',
  create_user_img_url: "https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/6180656/794af921-b584-4da0-bcf8-feee8d793887-a64c47f27ebb91d70972680a6d35cbbf.jpg?width=256&height=256",
  create_datetime: new Date('2023-02-26T09:26:16.988Z')}],
  comments: null,
  deleted: false // Boolean
},
{
  id: 1, // Used in JSX as a key
  title: "Wash my car",
  due_date: new Date('2023-03-10'),
  remote: false, // true = remote, false = in person
  locality: "Cranbourne East",
  state: 'VIC',
  detail: `Wash, vacuum my car (bring your own things) - medium sized Sedan.
  Due date: Needs to be done on Friday, 10 March 2023`,
  image_URL: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=350&h=233&dpr=1",
  budget: 50,
  type: null,
  categories: "Car Washing",
  Status: 'Open',// open, assigned, canceled, completed
  final_price: null,
  create_user_firstname: 'Daizy', // id of the task poster
  create_user_lastname: 'Mann',
  create_user_img_url:"https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/3474874/daizy_photo-058e8447402528ea2c9e136518a83c7e.jpeg?width=256&height=256",
  create_datetime: '2023-02-26T09:26:16.988Z',
  time_of_day: ['Morning', 'Afternoon'],// array of strings, with contents being 'Morning', 'Afternoon', 'Evening' or 'Anytime'
  offers: [], // 
  comments: null,
  deleted: false // Boolean
},
{
  id: 2, // Used in JSX as a key
  title: "Apartment cleaning with an eye for detail",
  due_date: new Date('2023-03-10'),
  remote: false, // true = remote, false = in person
  locality: "St Kilda",
  state: 'VIC',
  detail: `Hi there, I need an experienced cleaner to change bed linen and thoroughly clean my apartment after a short term stay. 
  The guests are usually very tidy. It will take around 2.5 hours. And I can send through a thorough list once accepted. 
  But a general all over clean including fridge (which is barely used) and microwave, stove top etc... `,
  image_URL: "https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=350&h=233&dpr=1",
  budget: 150,
  type: null,
  categories: "Car Washing",
  Status: 'Assigned',// Open, Assigned, Canceled, Completed
  final_price: 120,
  create_user_firstname: 'Mikhiala', // id of the task poster
  create_user_lastname: 'Sloane',
  create_user_img_url:"https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/6180656/794af921-b584-4da0-bcf8-feee8d793887-a64c47f27ebb91d70972680a6d35cbbf.jpg?width=256&height=256",
  create_datetime: '2023-02-26T01:26:16.988Z',
  time_of_day: ['Anytime'],
  offers: [
  {id: 0, text: `Hi Mikhiala,
  I'm a well experienced cleaner. I have covid vaccination boosted.
  This is a quote for BnB cleaning service for 1 visit.
  I'm excellent with details and I  take pride with my work. 
  I'm  available on Tuesday the 28th of February. 
  Thank you and look forward to see you.
  Maria.`, 
  price: 140, Status: 'Declined', attached_file_url: null, 
  create_user_firstname: 'Maria', create_user_lastname: 'Smith',
  create_user_img_url: "https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1450828/e5bce7e2-6e62-4b6d-b75f-c53bbe63450b-3481734c779ff882e92591bf53e27de4.jpg?width=256&height=256",
  create_datetime: new Date('2023-02-26T09:26:16.988Z')}, 

  {id: 1, text: `I would love to assist you with your requirements. 
  We are a registered business with ABN & have full business insurances. I provide all my own specialized equipment. 
  I have spent over 10 years as an employee for a carpet cleaning company that specialising in carpet dry cleaning.`, 
  price: 120, Status: 'Accepted', attached_file_url: null, 
  create_user_firstname: 'Maria', create_user_lastname: 'Smith',
  create_user_img_url: "https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1450828/e5bce7e2-6e62-4b6d-b75f-c53bbe63450b-3481734c779ff882e92591bf53e27de4.jpg?width=256&height=256",
  create_datetime: new Date('2023-02-26T09:26:16.988Z')}
  ], 

  comments: null,
  deleted: false // Boolean
},
{
  id: 3, // Used in JSX as a key
  title: "Board up a house",
  due_date: new Date('2023-07-15'),
  remote: false, // true = remote, false = in person
  locality: "Footscray",
  state: 'VIC',
  detail: `1. Supply and install plywood to board up two front windows (2.8m wide x 1.8m high)
  2. Supply and install plywood to close the gap between the black gate and fence (2m high x 0.4m wide)
  -
  Due date: Flexible `,
  image_URL: "https://assets-airtasker-com.s3.amazonaws.com/uploads/message_asset/message_attachment/d852fa04f1e4d3ab689fc0f708744604/modal_219f54a4-c77a-4898-892b-990a1b8d9966-70f19762789ebf9a259fc5cb15dca561.jpg",
  budget: 200,
  type: null,
  categories: "Labour",
  Status: 'Open',// Open, Assigned, Canceled, Completed
  final_price: 180,
  create_user_firstname: 'Matt', // id of the task poster
  create_user_lastname: 'Thompson',
  create_user_img_url:"https://eu7cmie.cloudimg.io/v7/https://eu7cmie.cloudimg.io/v7/https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1670924334504_avatar-placeholder-240x240.png?width=256&height=256",
  create_datetime: '2023-07-15T08:41:24.988Z',
  time_of_day: ['Anytime'],
  offers: [
  {id: 0, text: `Hi Matt, my offer is to supply and fix ply to all areas required, 
  taking all my rubbish with me,  leaving the property clean,  regards david`, 
  price: 140, Status: 'Pending', attached_file_url: null, 
  create_user_firstname: 'David', create_user_lastname: 'Kemp',
  create_user_img_url: "https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2469562/Resized_20180118_072116001-36b900584d1e108912de52f28baa560f.jpeg?width=256&height=256",
  create_datetime: new Date('2023-07-15T09:01:24.988Z')}, 

  {id: 1, text: `Qualified carpenter offer includes all materials fees gst and labour thanks`, 
  price: 150, Status: 'Pending', attached_file_url: null, 
  create_user_firstname: 'Alexander', create_user_lastname: 'Asher',
  create_user_img_url: "https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1712772/image-be5d1623a8908a85308f679d167405fe.jpg?width=256&height=256",
  create_datetime: new Date('2023-07-15T09:11:24.988Z')},

  {id: 2, text: `I'm happy to assist you with the task as described. 
  My offer includes materials, gst, fees and labour and I'm available Friday to complete your task.
  I'm an experienced handyman, film set builder (carpentry and joining) and artist, please check my portfolio and reviews.`, 
  price: 180, Status: 'Pending', attached_file_url: null, 
  create_user_firstname: 'Bradley', create_user_lastname: 'O\'Brien',
  create_user_img_url: "https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1766513/image-b2ba5ad484d6c7831ae8bbc03dfef9b4.jpg?width=256&height=256",
  create_datetime: new Date('2023-07-15T09:41:24.988Z')}
  ], 

  comments: null,
  deleted: false // Boolean
}
];