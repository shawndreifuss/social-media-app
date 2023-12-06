const connection = require('../config/connection');
const { User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let courseCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (courseCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 19; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    

    const username = ['shane','jordan','giannis', 'lebron', 'steven', 'james', 'kobe', 'michael', 'jeremy', 'Jane', 'Greg', 'Jason', 'Romeo', 'Luke', 'Grant', 'Garret', 'Sandra', 'Billy', 'Farit', 'Frankie' ]
    const profilePicture = ['./assets/profile/profile1.png', './assets/profile/profile2.png', './assets/profile/profile3.png', './assets/profile/profile4.png',  './assets/profile/profile5.png', './assets/profile/profile6.png',  './assets/profile/profile7.png', './assets/profile/profile8.png',  './assets/profile/profile9.png', './assets/profile/profile10.png',  './assets/profile/profile11.png', './assets/profile/profile12.png',  './assets/profile/profile13.png', './assets/profile/profile14.png',  './assets/profile/profile15.png', './assets/profile/profile16.png',  './assets/profile/profile17.png', './assets/profile/profile18.png',  './assets/profile/profile19.png', './assets/profile/profile20.png',  ]
    const password = ['123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456','123456', ]
    const email =  ['shane@gmail.com','jordan@gmail.com' ,'giannis@gmail.com', 'lebron@gmail.com', 'steven@gmail.com', 'james@gmail.com', 'kobe@gmail.com', 'michael@gmail.com', 'jeremy@gmail.com', 'Jane@gmail.com', 'Greg@gmail.com', 'Jason@gmail.com', 'Romeo@gmail.com', 'Luke@gmail.com', 'Grant@gmail.com', 'Garret@gmail.com', 'Sandra@gmail.com', 'Billy@gmail.com', 'Farit@gmail.com', 'Frankie@gmail.com' ]
    

    users.push({
        username: username[i],
        email: email[i],
        password: password[i],
        profilePicture:profilePicture[i],
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false
        
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  await User.collection.insertOne({
    username: 'UCLA',
    email: "ucla@ucla.com",
    password:'123456'
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
