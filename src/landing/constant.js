const filmInfo = [
  {
    title:"Laputa: Castle In The Sky",
    url: "8ykEy-yPBFc",
    year:"1986",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Isao Takahata"],
    music:"Joe Hisaishi",
  },
  {
    title:"Grave of the Fireflies",
    url:"4vPeTSRd580",    
    year:"1988",
    director:"Isao Takahata",
    screenWriters:["Isao Takahata"],
    producers:["Tōru Hara"],
    music:"Michio Mamiya",    
  },
  {
    title:"My Neighbor Totoro",
    url:"92a7Hj0ijLs",
    year:"1988",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Tōru Hara"],
    music:"Joe Hisaishi",
  },
  {
    title:"Kiki's Delivery Service",
    url:"4bG17OYs-GA",
    year:"1989",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Hayao Miyazaki"],
    music:"Joe Hisaishi",
  },
  {
    title:"Only Yesterday",
    url:"OfkQlZArxw0",
    year:"1991",
    director:"Isao Takahata",
    screenWriters:["Isao Takahata"],
    producers:["Toshio Suzuki"],
    music:"Katz Hoshi",
  },
  {
    title:"Porco Rosso",
    url:"awEC-aLDzjs",
    year:"1992",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Toshio Suzuki"],
    music:"Joe Hisaishi",
  },
  {
    title:"Ocean Waves",
    url:"VciuDweg61c",
    year:"1993",
    director:"Tomomi Mochizuki",
    screenWriters:["Nozomu Takahashi","Seiji Okuda"],
    producers:["Toshio Suzuki"],
    music:"Shigeru Nagata",
  },
  {
    title:"Pom Poko",
    url:"_7cowIHjCD4",
    year:"1994",
    director:"Isao Takahata",
    screenWriters:["Isao Takahata"],
    producers:["Toshio Suzuki"],
    music:"Shang Shang Typhoon",
  },
  {
    title:"Whisper of the Heart",
    url:"0pVkiod6V0U",
    year:"1995",
    director:"Yoshifumi Kondō",
    screenWriters:["Hayao Miyazaki"],
    producers:["Toshio Suzuki"],
    music:"Yuji Nomi",
  },
  {
    title:"Princess Mononoke",
    url:"4OiMOHRDs14",
    year:"1997",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Toshio Suzuki"],
    music:"Joe Hisaishi",
  },
  {
    title:"My Neighbors the Yamadas",
    url:"1C9ujuCPlnY",
    year:"1999",
    director:"Isao Takahata",
    screenWriters:["Isao Takahata"],
    producers:["Toshio Suzuki"],
    music:"Akiko Yano",
  },
  {
    title:"Spirited Away",
    url:"ByXuk9QqQkk",
    year:"2001",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Toshio Suzuki"],
    music:"Joe Hisaishi",
  },
  {
    title:"The Cat Returns",
    url:"Gp-H_YOcYTM",
    year:"2002",
    director:"Hiroyuki Morita",
    screenWriters:["Reiko Yoshida"],
    producers:["Toshio Suzuki","Nozomu Takahashi"],
    music:"Yuji Nomi",
  },
  {
    title:"Howl's Moving Castle",
    url:"iwROgK94zcM",
    year:"2004",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Toshio Suzuki"],
    music:"Joe Hisaishi",
  },
  {
    title:"Tales From Earthsea",
    url:"8hxYx3Jq3kI",
    year:"2006",
    director:"Gorō Miyazaki",
    screenWriters:["Gorō Miyazaki", "Keiko Niwa"],
    producers:["Toshio Suzuki","Tomohiko Ishii"],
    music:"Tamiya Terashima",
  },
  {
    title:"Ponyo",
    url:"CsR3KVgBzSM",
    year:"2008",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Toshio Suzuki"],
    music:"Joe Hisaishi",
  },
  {
    title:"Arrietty",
    url:"9CtIXPhPo0g",
    year:"2010",
    director:"Hiromasa Yonebayashi",
    screenWriters:["Hayao Miyazaki","Keiko Niwa"],
    producers:["Toshio Suzuki"],
    music:"Cécile Corbel",
  },
  {
    title:"From Up On Poppy Hill",
    url:"9nzpk_Br6yo",
    year:"2011",
    director:"Gorō Miyazaki",
    screenWriters:["Hayao Miyazaki","Keiko Niwa"],
    producers:["Toshio Suzuki"],
    music:"Satoshi Takebe",
  },
  {
    title:"The Wind Rises",
    url:"2QFBZgAZx7g",
    year:"2013",
    director:"Hayao Miyazaki",
    screenWriters:["Hayao Miyazaki"],
    producers:["Toshio Suzuki"],
    music:"Joe Hisaishi",
  },
  {
    title:"The Tale of The Princess Kaguya",
    url:"tM6hcHp0_kU",
    year:"2013",
    director:"Isao Takahata",
    screenWriters:["Isao Takahata","Riko Sakaguchi"],
    producers:["Yoshiaki Nishimura"],
    music:"Joe Hisaishi",
  },
  {
    title:"When Marnie Was There",
    url:"PZq4uuMP8ss",
    year:"2014",
    director:"Hiromasa Yonebayashi",
    screenWriters:["Hiromasa Yonebayashi", "Keiko Niwa", "Masashi Ando"],
    producers:["Yoshiaki Nishimura"],
    music:"Takatsugu Muramatsu",
  },
  {
    title:"Earwig and The Witch",
    url:"j5YJsCDlTDA",
    year:"2014",
    director:"Gorō Miyazaki",
    screenWriters:["Keiko Niwa", "Emi Gunji"],
    producers:["Toshio Suzuki"],
    music:"Satoshi Takebe",
  },
];


const newsInfo = [
  {
    title: "Movie: 'Earwig and the Witch'",
    subtitle: "April 29 (Thursday) National Road Show",
    href: "https://www.aya-and-the-witch.jp/",
  },
  {
    title: "Stage 'Spirited Away'",
    subtitle: "February, March 2022 to be performed at the Imperial Theater",
    href: "https://www.tohostage.com/spirited_away/",
  },
  {
    title: "Studio Ghibli works: Still Image",
    subtitle: "Added 228 scene photos of Studio Ghibli works!",
    href: "https://www.ghibli.jp/info/013409/",
  },
  {
    title: "Ghibli Museum Mitaka",
    subtitle: "Official website of Ghibli Museum, Mitaka",
    href: "https://www.ghibli-museum.jp/",
  },
  {
    title: "Ghibli Exposition",
    subtitle: "Held at the Aichi Prefectural Museum of Art from July 17th!",
    href: "https://www.ghibli.jp/event/expo/",
  },
  {
    title: "Isao Takahata Exhibition",
    subtitle: "Held at Fukuoka Art Museum from April 29th!",
    href: "https://www.ghibli.jp/event/takahata/",
  },
  {
    title: "Animage and Ghibli Exhibition",
    subtitle: "Held at Matsuya Ginza from April 15th!",
    href: "https://www.ghibli.jp/event/animage/",
  },
  {
    title: "Studio Ghibli related links",
    subtitle: "North America Ghibli goods purchase site added",
    href: "https://www.ghibli.jp/links/",
  },
];

export {filmInfo, newsInfo}
