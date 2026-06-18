const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const albums = [
  {
    id: 1,
    title: 'Bear Demos',
    year: 2025,
    color: '#7c4e2a',
    coverArt: '/images/bear demos artwork-1.png'
  },
  {
    id: 2,
    title: 'Wolf Demos',
    year: 2024,
    color: '#3b5e3a',
    coverArt: '/images/wolf demos artwork-1.png'
  },
  {
    id: 3,
    title: 'Ram Demos',
    year: 2023,
    color: '#3b5e3a',
    coverArt: '/images/ram demos artwork-1.png'
  },
  {
    id: 4,
    title: 'Moose Demos',
    year: 2022,
    color: '#3b5e3a',
    coverArt: '/images/moose demos artwork-2.png'
  },
  {
    id: 5,
    title: 'Elk Demos',
    year: 2021,
    color: '#3b5e3a',
    coverArt: '/images/elk demos artwork-2.png'
  },
  {
    id: 5,
    title: 'Eagle Demos',
    year: 2027,
    color: '#3b5e3a',
    coverArt: '/images/eagle demos artwork-1.png'
  },
];

export const tracks = [
  {
    id: 1,
    title: 'Watch Me Walk Out',
    album: 'Bear Demos',
    albumId: 1,
    duration: '2:49',
    durationSecs: 169,
    color: '#7c4e2a',
    src: `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto/f_auto/v1781623529/01.Watch_Me_Walk_Out_1_deptg2.wav`,
    // src: '/demos/bear demos/01.Watch Me Walk Out_1.wav',
  },
  {
    id: 2,
    title: 'Everything Has Gone And Changed',
    album: 'Bear Demos',
    albumId: 1,
    duration: '3:05',
    durationSecs: 185,
    color: '#3b5e3a',
    // src: `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto/f_auto/v1781624067/02.Everything_Has_Gone_And_Changed2_szhhel.wav`,
    src: '/demos/bear demos/02.Everything Has Gone And Changed2.wav',
  },
  {
    id: 3,
    title: 'Hope You Had Your Fun',
    album: 'Bear Demos',
    albumId: 1,
    duration: '2:44',
    durationSecs: 164,
    color: '#4a3565',
    src: '/demos/bear demos/03.Hope You Had Your Fun.wav',
  },
  {
    id: 4,
    title: 'Liked And Subscribed',
    album: 'Bear Demos',
    albumId: 1,
    duration: '3:27',
    durationSecs: 207,
    color: '#5e3a2a',
    src: '/demos/bear demos/04.Liked and Subscribed_1.wav',
  },
  {
    id: 5,
    title: 'A Bad Guru',
    album: 'Bear Demos',
    albumId: 1,
    duration: '3:24',
    durationSecs: 204,
    color: '#2a4a5e',
    src: '/demos/bear demos/05.A Bad Guru_1.wav',
  },

  {
    id: 20,
    title: 'Let The Night Erupt',
    album: 'Ram Demos',
    albumId: 3,
    duration: '2:57',
    durationSecs: 177,
    color: 'orange ',
    // src: `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto/f_auto/v1781624829/1.let_the_night_erupt_jw9kjy.wav`,
    src: '/demos/ram demos/1.let the night erupt.wav',
  },
];