// AURAILS — static mock data (replaces the Laravel database; values come from DatabaseSeeder.php)
window.AURAILS_DATA = {
  "genres": [
    "Pop",
    "Rock",
    "Classical",
    "Jazz",
    "Hip Hop",
    "Electronic",
    "R&B",
    "Country",
    "Folk",
    "Blues"
  ],
  "languages": [
    "Urdu",
    "English",
    "Hindi",
    "Punjabi",
    "Arabic",
    "Spanish",
    "French",
    "Turkish",
    "Korean",
    "Japanese"
  ],
  "artists": [
    {
      "id": 1,
      "name": "Atif Aslam",
      "bio": "One of Pakistan's most iconic singers. Known for soulful tracks like \"Tajdar-e-Haram\" and \"Aadat\".",
      "image": "assets/storage/artists/atif-aslam.jpg"
    },
    {
      "id": 2,
      "name": "Ali Zafar",
      "bio": "Pakistani singer, songwriter, and actor. Known for \"Channo\", \"Jhoom\", and \"Rockstar\".",
      "image": "assets/storage/artists/ali-zafar.jpg"
    },
    {
      "id": 3,
      "name": "Rahat Fateh Ali Khan",
      "bio": "Legendary Pakistani singer, nephew of Nusrat Fateh Ali Khan.",
      "image": "assets/storage/artists/rahat-fateh-ali-khan.jpg"
    },
    {
      "id": 4,
      "name": "Taylor Swift",
      "bio": "American singer-songwriter. Known for \"Love Story\", \"Shake It Off\", and \"All Too Well\".",
      "image": "assets/storage/artists/taylor-swift.jpg"
    },
    {
      "id": 5,
      "name": "Ed Sheeran",
      "bio": "British singer-songwriter. Known for \"Shape of You\", \"Perfect\", and \"Thinking Out Loud\".",
      "image": "assets/storage/artists/ed-sheeran.jpg"
    },
    {
      "id": 6,
      "name": "Billie Eilish",
      "bio": "American singer-songwriter. Known for \"Bad Guy\", \"Lovely\", and \"Everything I Wanted\".",
      "image": "assets/storage/artists/billie-eilish.jpg"
    },
    {
      "id": 7,
      "name": "Shakira",
      "bio": "Colombian singer, songwriter, and dancer. Known for \"Hips Don't Lie\" and \"Waka Waka\".",
      "image": "assets/storage/artists/shakira.jpg"
    },
    {
      "id": 8,
      "name": "Arijit Singh",
      "bio": "Indian playback singer. Known for \"Tum Hi Ho\", \"Channa Mereya\", and \"Kesariya\".",
      "image": "assets/storage/artists/arijit-singh.jpg"
    },
    {
      "id": 9,
      "name": "Shreya Ghoshal",
      "bio": "Indian playback singer. Known for \"Ghoomar\", \"Chikni Chameli\", and \"Deewani Mastani\".",
      "image": "assets/storage/artists/shreya-ghoshal.jpg"
    },
    {
      "id": 10,
      "name": "Marshmello",
      "bio": "American electronic music producer. Known for \"Alone\", \"Happier\", and \"Silence\".",
      "image": "assets/storage/artists/marshmello.jpg"
    }
  ],
  "albums": [
    {
      "id": 1,
      "name": "Doorie",
      "artistId": 1,
      "year": "2006",
      "cover": "assets/storage/albums/doorie.jpg",
      "description": "Atif Aslam's debut album featuring \"Aadat\" and \"Woh Lamhe\"."
    },
    {
      "id": 2,
      "name": "Meri Kahani",
      "artistId": 2,
      "year": "2008",
      "cover": "assets/storage/albums/meri-kahani.jpg",
      "description": "Ali Zafar's second studio album with hits like \"Channo\" and \"Jhoom\"."
    },
    {
      "id": 3,
      "name": "Qawwali & More",
      "artistId": 3,
      "year": "2010",
      "cover": "assets/storage/albums/qawwali-more.jpg",
      "description": "Collection of legendary qawwalis and classical performances."
    },
    {
      "id": 4,
      "name": "1989",
      "artistId": 4,
      "year": "2014",
      "cover": "assets/storage/albums/1989.jpg",
      "description": "Taylor's fifth studio album featuring \"Shake It Off\" and \"Blank Space\"."
    },
    {
      "id": 5,
      "name": "Divide",
      "artistId": 5,
      "year": "2017",
      "cover": "assets/storage/albums/divide.jpg",
      "description": "Ed Sheeran's third studio album with \"Shape of You\" and \"Perfect\"."
    },
    {
      "id": 6,
      "name": "Happier Than Ever",
      "artistId": 6,
      "year": "2021",
      "cover": "assets/storage/albums/happier-than-ever.jpg",
      "description": "Billie's second studio album with the title track \"Happier Than Ever\"."
    },
    {
      "id": 7,
      "name": "Oral Fixation",
      "artistId": 7,
      "year": "2005",
      "cover": "assets/storage/albums/oral-fixation.jpg",
      "description": "Shakira's seventh studio album featuring \"Hips Don't Lie\"."
    },
    {
      "id": 8,
      "name": "Aashiqui 2",
      "artistId": 8,
      "year": "2013",
      "cover": "assets/storage/albums/aashiqui-2.jpg",
      "description": "Soundtrack of the movie Aashiqui 2 featuring \"Tum Hi Ho\"."
    },
    {
      "id": 9,
      "name": "Ghoomar",
      "artistId": 9,
      "year": "2018",
      "cover": "assets/storage/albums/ghoomar.jpg",
      "description": "Padmaavat soundtrack featuring the hit song \"Ghoomar\"."
    },
    {
      "id": 10,
      "name": "Joytime",
      "artistId": 10,
      "year": "2016",
      "cover": "assets/storage/albums/joytime.jpg",
      "description": "Marshmello's debut studio album featuring \"Alone\"."
    }
  ],
  "music": [
    {
      "id": 1,
      "title": "Aadat",
      "artistId": 1,
      "albumId": 1,
      "genreId": 1,
      "languageId": 1,
      "year": "2006",
      "description": "Atif Aslam's breakthrough song.",
      "youtubeId": "BGVXrFSoFmI",
      "image": "assets/storage/music/aadat.jpg",
      "isNew": false
    },
    {
      "id": 2,
      "title": "Woh Lamhe",
      "artistId": 1,
      "albumId": 1,
      "genreId": 1,
      "languageId": 1,
      "year": "2006",
      "description": "Beautiful song about memories.",
      "youtubeId": "zZ0cQ3dJqjI",
      "image": "assets/storage/music/woh-lamhe.jpg",
      "isNew": false
    },
    {
      "id": 3,
      "title": "Jhoom",
      "artistId": 2,
      "albumId": 2,
      "genreId": 2,
      "languageId": 1,
      "year": "2008",
      "description": "Upbeat rock anthem.",
      "youtubeId": "WpYeekQkAdc",
      "image": "assets/storage/music/jhoom.jpg",
      "isNew": false
    },
    {
      "id": 4,
      "title": "Channo",
      "artistId": 2,
      "albumId": 2,
      "genreId": 1,
      "languageId": 1,
      "year": "2008",
      "description": "Romantic track.",
      "youtubeId": "I4qLVGX4uPY",
      "image": "assets/storage/music/channo.jpg",
      "isNew": false
    },
    {
      "id": 5,
      "title": "Tajdar-e-Haram",
      "artistId": 3,
      "albumId": 3,
      "genreId": 3,
      "languageId": 1,
      "year": "2010",
      "description": "Legendary qawwali.",
      "youtubeId": "c8Q4oj9-Ejk",
      "image": "assets/storage/music/tajdar-e-haram.jpg",
      "isNew": false
    },
    {
      "id": 6,
      "title": "Shake It Off",
      "artistId": 4,
      "albumId": 4,
      "genreId": 1,
      "languageId": 2,
      "year": "2014",
      "description": "Taylor's empowering anthem.",
      "youtubeId": "nfWlot6h_JM",
      "image": "assets/storage/music/shake-it-off.jpg",
      "isNew": false
    },
    {
      "id": 7,
      "title": "Blank Space",
      "artistId": 4,
      "albumId": 4,
      "genreId": 1,
      "languageId": 2,
      "year": "2014",
      "description": "Witty take on relationships.",
      "youtubeId": "e-ORhEE9VVg",
      "image": "assets/storage/music/blank-space.jpg",
      "isNew": false
    },
    {
      "id": 8,
      "title": "Shape of You",
      "artistId": 5,
      "albumId": 5,
      "genreId": 1,
      "languageId": 2,
      "year": "2017",
      "description": "Most-streamed song.",
      "youtubeId": "JGwWNGJdvx8",
      "image": "assets/storage/music/shape-of-you.jpg",
      "isNew": false
    },
    {
      "id": 9,
      "title": "Perfect",
      "artistId": 5,
      "albumId": 5,
      "genreId": 1,
      "languageId": 2,
      "year": "2017",
      "description": "Beautiful love song.",
      "youtubeId": "2Vv-BfVoq4g",
      "image": "assets/storage/music/perfect.jpg",
      "isNew": false
    },
    {
      "id": 10,
      "title": "Happier Than Ever",
      "artistId": 6,
      "albumId": 6,
      "genreId": 1,
      "languageId": 2,
      "year": "2021",
      "description": "Emotional breakthrough hit.",
      "youtubeId": "5GJWxDKyk3A",
      "image": "assets/storage/music/happier-than-ever.jpg",
      "isNew": true
    },
    {
      "id": 11,
      "title": "Tum Hi Ho",
      "artistId": 8,
      "albumId": 8,
      "genreId": 1,
      "languageId": 3,
      "year": "2013",
      "description": "Heartfelt Bollywood song.",
      "youtubeId": "Umqb9KENgmk",
      "image": "assets/storage/music/tum-hi-ho.jpg",
      "isNew": false
    },
    {
      "id": 12,
      "title": "Channa Mereya",
      "artistId": 8,
      "albumId": 8,
      "genreId": 1,
      "languageId": 3,
      "year": "2016",
      "description": "Soulful track from ADHM.",
      "youtubeId": "284Ov7ysmfA",
      "image": "assets/storage/music/channa-mereya.jpg",
      "isNew": false
    },
    {
      "id": 13,
      "title": "Ghoomar",
      "artistId": 9,
      "albumId": 9,
      "genreId": 3,
      "languageId": 3,
      "year": "2018",
      "description": "Traditional Rajasthani folk song.",
      "youtubeId": "B4x9OqmHh0k",
      "image": "assets/storage/music/ghoomar.jpg",
      "isNew": true
    },
    {
      "id": 14,
      "title": "Alone",
      "artistId": 10,
      "albumId": 10,
      "genreId": 6,
      "languageId": 2,
      "year": "2016",
      "description": "Marshmello's iconic track.",
      "youtubeId": "ALZHF5UqnU4",
      "image": "assets/storage/music/alone.jpg",
      "isNew": false
    }
  ],
  "videos": [
    {
      "id": 1,
      "title": "Aadat - Atif Aslam",
      "artistId": 1,
      "albumId": 1,
      "genreId": 1,
      "languageId": 1,
      "year": "2006",
      "description": "Official music video of \"Aadat\".",
      "youtubeId": "BGVXrFSoFmI",
      "image": "assets/storage/videos/aadat-thumb.jpg",
      "duration": "4:32",
      "isNew": false
    },
    {
      "id": 2,
      "title": "Jhoom - Ali Zafar",
      "artistId": 2,
      "albumId": 2,
      "genreId": 2,
      "languageId": 1,
      "year": "2008",
      "description": "Official music video of \"Jhoom\".",
      "youtubeId": "WpYeekQkAdc",
      "image": "assets/storage/videos/jhoom-thumb.jpg",
      "duration": "3:45",
      "isNew": false
    },
    {
      "id": 3,
      "title": "Tajdar-e-Haram - Rahat Fateh Ali Khan",
      "artistId": 3,
      "albumId": 3,
      "genreId": 3,
      "languageId": 1,
      "year": "2010",
      "description": "Live qawwali performance.",
      "youtubeId": "c8Q4oj9-Ejk",
      "image": "assets/storage/videos/tajdar-thumb.jpg",
      "duration": "8:15",
      "isNew": false
    },
    {
      "id": 4,
      "title": "Shake It Off - Taylor Swift",
      "artistId": 4,
      "albumId": 4,
      "genreId": 1,
      "languageId": 2,
      "year": "2014",
      "description": "Official video of \"Shake It Off\".",
      "youtubeId": "nfWlot6h_JM",
      "image": "assets/storage/videos/shake-it-off-thumb.jpg",
      "duration": "3:39",
      "isNew": false
    },
    {
      "id": 5,
      "title": "Shape of You - Ed Sheeran",
      "artistId": 5,
      "albumId": 5,
      "genreId": 1,
      "languageId": 2,
      "year": "2017",
      "description": "Official video of \"Shape of You\".",
      "youtubeId": "JGwWNGJdvx8",
      "image": "assets/storage/videos/shape-of-you-thumb.jpg",
      "duration": "4:24",
      "isNew": false
    },
    {
      "id": 6,
      "title": "Happier Than Ever - Billie Eilish",
      "artistId": 6,
      "albumId": 6,
      "genreId": 1,
      "languageId": 2,
      "year": "2021",
      "description": "Official video of \"Happier Than Ever\".",
      "youtubeId": "5GJWxDKyk3A",
      "image": "assets/storage/videos/happier-than-ever-thumb.jpg",
      "duration": "4:58",
      "isNew": true
    },
    {
      "id": 7,
      "title": "Tum Hi Ho - Arijit Singh",
      "artistId": 8,
      "albumId": 8,
      "genreId": 1,
      "languageId": 3,
      "year": "2013",
      "description": "Official video of \"Tum Hi Ho\".",
      "youtubeId": "Umqb9KENgmk",
      "image": "assets/storage/videos/tum-hi-ho-thumb.jpg",
      "duration": "4:22",
      "isNew": false
    },
    {
      "id": 8,
      "title": "Ghoomar - Shreya Ghoshal",
      "artistId": 9,
      "albumId": 9,
      "genreId": 3,
      "languageId": 3,
      "year": "2018",
      "description": "Official video of \"Ghoomar\".",
      "youtubeId": "B4x9OqmHh0k",
      "image": "assets/storage/videos/ghoomar-thumb.jpg",
      "duration": "4:45",
      "isNew": true
    },
    {
      "id": 9,
      "title": "Alone - Marshmello",
      "artistId": 10,
      "albumId": 10,
      "genreId": 6,
      "languageId": 2,
      "year": "2016",
      "description": "Official video of \"Alone\".",
      "youtubeId": "ALZHF5UqnU4",
      "image": "assets/storage/videos/alone-thumb.jpg",
      "duration": "4:32",
      "isNew": false
    }
  ],
  "reviews": [
    {
      "id": 1,
      "user": "Test User",
      "mediaType": "music",
      "mediaId": 1,
      "rating": 5,
      "text": "Amazing song! Atif Aslam at his best. The vocals are incredible.",
      "ago": "3 weeks ago"
    },
    {
      "id": 2,
      "user": "Test User",
      "mediaType": "music",
      "mediaId": 2,
      "rating": 4,
      "text": "Beautiful melody. Woh Lamhe is truly a timeless classic.",
      "ago": "3 weeks ago"
    },
    {
      "id": 3,
      "user": "Ali Hassan",
      "mediaType": "music",
      "mediaId": 11,
      "rating": 5,
      "text": "Tum Hi Ho is the best Bollywood song ever. Arijit Singh is a gem!",
      "ago": "2 weeks ago"
    },
    {
      "id": 4,
      "user": "Ali Hassan",
      "mediaType": "video",
      "mediaId": 1,
      "rating": 5,
      "text": "The video of Aadat brings back so many memories. Love it!",
      "ago": "2 weeks ago"
    },
    {
      "id": 5,
      "user": "Ali Hassan",
      "mediaType": "music",
      "mediaId": 8,
      "rating": 5,
      "text": "Shape of You is so catchy. Ed Sheeran never disappoints!",
      "ago": "2 weeks ago"
    },
    {
      "id": 6,
      "user": "Sara Khan",
      "mediaType": "video",
      "mediaId": 4,
      "rating": 4,
      "text": "Taylor Swift's Shake It Off is so catchy and fun to watch!",
      "ago": "1 week ago"
    },
    {
      "id": 7,
      "user": "Sara Khan",
      "mediaType": "video",
      "mediaId": 6,
      "rating": 5,
      "text": "Billie Eilish is a genius. The song is hauntingly beautiful.",
      "ago": "1 week ago"
    },
    {
      "id": 8,
      "user": "Sara Khan",
      "mediaType": "music",
      "mediaId": 10,
      "rating": 5,
      "text": "Happier Than Ever is Billie's best work. Emotional and raw.",
      "ago": "6 days ago"
    },
    {
      "id": 9,
      "user": "Ahmed Raza",
      "mediaType": "music",
      "mediaId": 12,
      "rating": 5,
      "text": "Channa Mereya is pure magic. Arijit Singh's voice is out of this world.",
      "ago": "4 days ago"
    },
    {
      "id": 10,
      "user": "Ahmed Raza",
      "mediaType": "video",
      "mediaId": 8,
      "rating": 4,
      "text": "Ghoomar is visually stunning. The dance and music are perfect!",
      "ago": "3 days ago"
    },
    {
      "id": 11,
      "user": "Ahmed Raza",
      "mediaType": "music",
      "mediaId": 4,
      "rating": 4,
      "text": "Channo is such a romantic track. Ali Zafar nailed it.",
      "ago": "2 days ago"
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@gmail.com",
      "phone": "1234567890",
      "address": "Admin Office",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Test User",
      "email": "user@gmail.com",
      "phone": "9876543210",
      "address": "Test Address",
      "role": "user"
    },
    {
      "id": 3,
      "name": "Ali Hassan",
      "email": "ali@gmail.com",
      "phone": "03001234567",
      "address": "Karachi",
      "role": "user"
    },
    {
      "id": 4,
      "name": "Sara Khan",
      "email": "sara@gmail.com",
      "phone": "03109876543",
      "address": "Lahore",
      "role": "user"
    },
    {
      "id": 5,
      "name": "Ahmed Raza",
      "email": "ahmed@gmail.com",
      "phone": "03334567890",
      "address": "Islamabad",
      "role": "user"
    }
  ]
};
