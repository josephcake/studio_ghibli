import arrietty from "./assets/poster_arrietty.jpg";
import graves_fireflies from "./assets/poster_graves_fireflies.jpg";
import cat_returns from "./assets/poster_cat_returns.jpg";
import earthsea from "./assets/poster_earthsea.jpg";
import earwig_witch from "./assets/poster_earwig_witch.jpg";
import howls_castle from "./assets/poster_howls_castle.jpg";
import kaguya from "./assets/poster_kaguya.jpg";
import kiki_delivery from "./assets/poster_kiki_delivery.jpg";
import laputa_castle from "./assets/poster_laputa_castle.jpg";
import marnie from "./assets/poster_marnie.jpg";
import my_neighbor_totoro from "./assets/poster_my_neighbor_totoro.jpg";
import nausicaa from "./assets/poster_nausicaa.jpg";
import ocean_waves from "./assets/poster_ocean_waves.jpg";
import only_yesterday from "./assets/poster_only_yesterday.jpg";
import pom_poko from "./assets/poster_pom_poko.jpg";
import ponyo from "./assets/poster_ponyo.jpg";
import poppy_hill from "./assets/poster_poppy_hill.jpg";
import porco_rosso from "./assets/poster_porco_rosso.jpg";
import princess_mononoke from "./assets/poster_princess_mononoke.jpg";
import spirited_away from "./assets/poster_spirited_away.jpg";
import whisper_heart from "./assets/poster_whisper_heart.jpg";
import wind_rises from "./assets/poster_wind_rises.jpg";
import yamadas from "./assets/poster_yamadas.jpg";



const arrietty_poster = arrietty;
const cat_returns_poster = cat_returns;
const earthsea_poster = earthsea;
const earwig_witch_poster = earwig_witch;
const howls_castle_poster = howls_castle;
const kaguya_poster = kaguya;
const kiki_delivery_poster = kiki_delivery;
const laputa_castle_poster = laputa_castle;
const marnie_poster = marnie;
const my_neighbor_totoro_poster = my_neighbor_totoro;
const nausicaa_poster = nausicaa;
const ocean_waves_poster = ocean_waves;
const only_yesterday_poster = only_yesterday;
const pom_poko_poster = pom_poko;
const ponyo_poster = ponyo;
const poppy_hill_poster = poppy_hill;
const porco_rosso_poster = porco_rosso;
const princess_mononoke_poster = princess_mononoke;
const spirited_away_poster = spirited_away;
const whisper_heart_poster = whisper_heart;
const wind_rises_poster = wind_rises;
const yamadas_poster = yamadas;
const graves_fireflies_poster = graves_fireflies;

const filmInfo = [
  {
    id: 1,
    title: "Nausicaa of the Valley of the Wind",
    url: "6zhLBe319KE",
    year: "1984",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Isao Takahata"],
    music: "Joe Hisaishi",
    poster: nausicaa_poster,
    screenTime: "1h 57m",
    rated: "PG",
  },
  {
    id: 2,
    title: "Laputa: Castle In The Sky",
    url: "8ykEy-yPBFc",
    year: "1986",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Isao Takahata"],
    music: "Joe Hisaishi",
    poster: laputa_castle_poster,
    screenTime: "2h 6m",
    rated: "PG",
  },
  {
    id: 3,
    title: "Grave of the Fireflies",
    url: "4vPeTSRd580",
    year: "1988",
    director: "Isao Takahata",
    screenWriters: ["Isao Takahata"],
    producers: ["Tōru Hara"],
    music: "Michio Mamiya",
    poster: graves_fireflies_poster,
    screenTime: "1h 33m",
    rated: "PG",
  },
  {
    id: 4,
    title: "My Neighbor Totoro",
    url: "92a7Hj0ijLs",
    year: "1988",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Tōru Hara"],
    music: "Joe Hisaishi",
    poster: my_neighbor_totoro_poster,
    screenTime: "1h 28m",
    rated: "G",
  },
  {
    id: 5,
    title: "Kiki's Delivery Service",
    url: "4bG17OYs-GA",
    year: "1989",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Hayao Miyazaki"],
    music: "Joe Hisaishi",
    poster: kiki_delivery_poster,
    screenTime: "1h 43m",
    rated: "G",
  },
  {
    id: 6,
    title: "Only Yesterday",
    url: "OfkQlZArxw0",
    year: "1991",
    director: "Isao Takahata",
    screenWriters: ["Isao Takahata"],
    producers: ["Toshio Suzuki"],
    music: "Katz Hoshi",
    poster: only_yesterday_poster,
    screenTime: "1h 59m",
    rated: "PG",
  },
  {
    id: 7,
    title: "Porco Rosso",
    url: "awEC-aLDzjs",
    year: "1992",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Toshio Suzuki"],
    music: "Joe Hisaishi",
    poster: porco_rosso_poster,
    screenTime: "1h 42m",
    rated: "PG",
  },
  {
    id: 8,
    title: "Ocean Waves",
    url: "VciuDweg61c",
    year: "1993",
    director: "Tomomi Mochizuki",
    screenWriters: ["Nozomu Takahashi", "Seiji Okuda"],
    producers: ["Toshio Suzuki"],
    music: "Shigeru Nagata",
    poster: ocean_waves_poster,
    screenTime: "1h 16m",
    rated: "PG-13",
  },
  {
    id: 9,
    title: "Pom Poko",
    url: "_7cowIHjCD4",
    year: "1994",
    director: "Isao Takahata",
    screenWriters: ["Isao Takahata"],
    producers: ["Toshio Suzuki"],
    music: "Shang Shang Typhoon",
    poster: pom_poko_poster,
    screenTime: "1h 59m",
    rated: "PG",
  },
  {
    id: 10,
    title: "Whisper of the Heart",
    url: "0pVkiod6V0U",
    year: "1995",
    director: "Yoshifumi Kondō",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Toshio Suzuki"],
    music: "Yuji Nomi",
    poster: whisper_heart_poster,
    screenTime: "1h 51m",
    rated: "G",
  },
  {
    id: 11,
    title: "Princess Mononoke",
    url: "4OiMOHRDs14",
    year: "1997",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Toshio Suzuki"],
    music: "Joe Hisaishi",
    poster: princess_mononoke_poster,
    screenTime: "2h 13m",
    rated: "PG-13",
  },
  {
    id: 12,
    title: "My Neighbors the Yamadas",
    url: "1C9ujuCPlnY",
    year: "1999",
    director: "Isao Takahata",
    screenWriters: ["Isao Takahata"],
    producers: ["Toshio Suzuki"],
    music: "Akiko Yano",
    poster: yamadas_poster,
    screenTime: "1h 44m",
    rated: "PG",
  },
  {
    id: 13,
    title: "Spirited Away",
    url: "ByXuk9QqQkk",
    year: "2001",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Toshio Suzuki"],
    music: "Joe Hisaishi",
    poster: spirited_away_poster,
    screenTime: "2h 5m",
    rated: "PG",
  },
  {
    id: 14,
    title: "The Cat Returns",
    url: "Gp-H_YOcYTM",
    year: "2002",
    director: "Hiroyuki Morita",
    screenWriters: ["Reiko Yoshida"],
    producers: ["Toshio Suzuki", "Nozomu Takahashi"],
    music: "Yuji Nomi",
    poster: cat_returns_poster,
    screenTime: "1h 15m",
    rated: "G",
  },
  {
    id: 15,
    title: "Howl's Moving Castle",
    url: "iwROgK94zcM",
    year: "2004",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Toshio Suzuki"],
    music: "Joe Hisaishi",
    poster: howls_castle_poster,
    screenTime: "1h 59m",
    rated: "PG",
  },
  {
    id: 16,
    title: "Tales From Earthsea",
    url: "8hxYx3Jq3kI",
    year: "2006",
    director: "Gorō Miyazaki",
    screenWriters: ["Gorō Miyazaki", "Keiko Niwa"],
    producers: ["Toshio Suzuki", "Tomohiko Ishii"],
    music: "Tamiya Terashima",
    poster: earthsea_poster,
    screenTime: "1h 56m",
    rated: "PG-13",
  },
  {
    id: 17,
    title: "Ponyo",
    url: "CsR3KVgBzSM",
    year: "2008",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Toshio Suzuki"],
    music: "Joe Hisaishi",
    poster: ponyo_poster,
    screenTime: "1h 43m",
    rated: "G",
  },
  {
    id: 18,
    title: "The Secret World of Arrietty",
    url: "9CtIXPhPo0g",
    year: "2010",
    director: "Hiromasa Yonebayashi",
    screenWriters: ["Hayao Miyazaki", "Keiko Niwa"],
    producers: ["Toshio Suzuki"],
    music: "Cécile Corbel",
    poster: arrietty_poster,
    screenTime: "1h 35m",
    rated: "G",
  },
  {
    id: 19,
    title: "From Up On Poppy Hill",
    url: "9nzpk_Br6yo",
    year: "2011",
    director: "Gorō Miyazaki",
    screenWriters: ["Hayao Miyazaki", "Keiko Niwa"],
    producers: ["Toshio Suzuki"],
    music: "Satoshi Takebe",
    poster: poppy_hill_poster,
    screenTime: "1h 32m",
    rated: "PG",
  },
  {
    id: 20,
    title: "The Wind Rises",
    url: "2QFBZgAZx7g",
    year: "2013",
    director: "Hayao Miyazaki",
    screenWriters: ["Hayao Miyazaki"],
    producers: ["Toshio Suzuki"],
    music: "Joe Hisaishi",
    poster: wind_rises_poster,
    screenTime: "2h 6m",
    rated: "PG-13",
  },
  {
    id: 21,
    title: "The Tale of The Princess Kaguya",
    url: "tM6hcHp0_kU",
    year: "2013",
    director: "Isao Takahata",
    screenWriters: ["Isao Takahata", "Riko Sakaguchi"],
    producers: ["Yoshiaki Nishimura"],
    music: "Joe Hisaishi",
    poster: kaguya_poster,
    screenTime: "2h 17m",
    rated: "PG",
  },
  {
    id: 22,
    title: "When Marnie Was There",
    url: "PZq4uuMP8ss",
    year: "2014",
    director: "Hiromasa Yonebayashi",
    screenWriters: ["Hiromasa Yonebayashi", "Keiko Niwa", "Masashi Ando"],
    producers: ["Yoshiaki Nishimura"],
    music: "Takatsugu Muramatsu",
    poster: marnie_poster,
    screenTime: "1h 43m",
    rated: "PG",
  },
  // the red turtle data
  {
    id: 23,
    title: "Earwig and The Witch",
    url: "j5YJsCDlTDA",
    year: "2014",
    director: "Gorō Miyazaki",
    screenWriters: ["Keiko Niwa", "Emi Gunji"],
    producers: ["Toshio Suzuki"],
    music: "Satoshi Takebe",
    poster: earwig_witch_poster,
    screenTime: "1h 22m",
    rated: "PG",
  },
];

const posters = [
  nausicaa_poster,
  laputa_castle_poster,
  graves_fireflies_poster,
  my_neighbor_totoro_poster,
  kiki_delivery_poster,
  only_yesterday_poster,
  porco_rosso_poster,
  ocean_waves_poster,
  pom_poko_poster,
  whisper_heart_poster,
  princess_mononoke_poster,
  yamadas_poster,
  spirited_away_poster,
  cat_returns_poster,
  howls_castle_poster,
  earthsea_poster,
  ponyo_poster,
  arrietty_poster,
  poppy_hill_poster,
  wind_rises_poster,
  kaguya_poster,
  marnie_poster,
  earwig_witch_poster,
];

export {posters, filmInfo}