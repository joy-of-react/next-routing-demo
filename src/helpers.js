const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

export async function getProfileInfo(profileId) {
  // This method simulates a database request.
  // For realism, we'll wait about 1 second.
  await delay(Math.random() * 1000 + 500);

  return DATA[profileId];
}

const DATA = {
  1: {
    username: 'mamadou93',
    name: 'Mamadou Ba',
    location: 'Dakar, Senegal',
    bio: 'Software developer passionate about Java Virtual Machines.',
    followers: 1230,
    following: 345,
    posts: 67,
  },
  2: {
    username: 'leechen',
    name: 'Lee Chen',
    location: 'Beijing, China',
    bio: 'Food blogger and travel enthusiast.',
    followers: 5467,
    following: 124,
    posts: 321,
  },
  3: {
    username: 'mariajose12',
    name: 'María José Ramirez',
    location: 'Madrid, Spain',
    bio: 'Fashion designer with a love for sustainable materials.',
    followers: 3221,
    following: 764,
    posts: 276,
  },
  4: {
    username: 'anayapatel',
    name: 'Anaya Patel',
    location: 'Mumbai, India',
    bio: 'Cricket fan, software engineer, tea lover.',
    followers: 4567,
    following: 789,
    posts: 219,
  },
  5: {
    username: 'Nadia_K',
    name: 'Nadia Kuznetsova',
    location: 'Moscow, Russia',
    bio: 'Professional ballet dancer and fitness enthusiast.',
    followers: 7321,
    following: 432,
    posts: 154,
  },
  6: {
    username: 'kenta_sushiMaster',
    name: 'Kenta Yamamoto',
    location: 'Tokyo, Japan',
    bio: 'Third-generation sushi chef, sharing the art of sushi making.',
    followers: 8219,
    following: 312,
    posts: 421,
  },
};
