import disney_banner from './assets/disney_banner.png'
import line_banner from './assets/ghibli-line_banner.png'
import twitter_banner from './assets/ghibli-twitter_banner.png'
import museum_banner from './assets/ghibli-museum_banner.png'

const CategoryMenu = [
  {
    title: "Latest information",
    url: "https://www.ghibli.jp/info/",
  },
  {
    title: "Event information",
    url: "https://www.ghibli.jp/event/",
  },
  {
    title: "Related books",
    url: "http://www.ghibli.jp/shuppan/",
  },
  {
    title: "Studio Ghibli work still image",
    url: "https://www.ghibli.jp/info/013409/",
  },
  {
    title: "Studio Ghibli WEB conference wallpaper",
    url: "https://www.ghibli.jp/info/013251/",
  },
  {
    title: "Overview of Studio Ghibli",
    url: "https://www.ghibli.jp/profile/",
  },
  {
    title: "Studio Ghibli works",
    url: "https://www.ghibli.jp/works/",
  },
  {
    title: "History of Studio Ghibli",
    url: "https://www.ghibli.jp/history/",
  },
  {
    title: "Studio Ghibli Chronology",
    url: "https://www.ghibli.jp/chronology/",
  },
  {
    title: "Copyright notice of the work",
    url: "https://www.ghibli.jp/copyright/",
  },
  {
    title: "Studio Ghibli Collection",
    url: "https://www.ghibli.jp/storage/",
  },
  {
    title: "Q & A",
    url: "https://www.ghibli.jp/qa/",
  },
  {
    title: "Studio Ghibli related links",
    url: "https://www.ghibli.jp/links/",
  },
];

const TravelExhibition = [
  { 
    title: "Ghibli Exposition", 
    url: "https://www.ghibli.jp/event/expo/" },
  {
    title: "Isao Takahata Exhibition",
    url: "https://www.ghibli.jp/event/takahata/",
  },
  {
    title: "Animage and Ghibli Exhibition",
    url: "https://www.ghibli.jp/event/animage/",
  },
  {
    title: "Ghibli 'Not big' exposition",
    url: "https://www.ghibli.jp/event/daijanaiexpo/",
  },
  {
    title: "Toshio Suzuki and Studio Ghibli Exhibition",
    url: "https://www.ghibli.jp/event/suzuki/",
  },
];

const RelatedSites = [
  {title:"Ghibli Museum Mitaka", url:"https://www.ghibli-museum.jp/"},
  {title:"Twitter official account", url:"https://twitter.com/JP_GHIBLI"},
  {title:"LINE official account", url:"https://line.me/ti/p/%40studioghibli"},
  {title:"Toshio Suzuki's Ghibli sweaty", url:"http://www.tfm.co.jp/asemamire/"},
  {title:"Disney (Blu-ray / DVD)", url:"http://www.disney.co.jp/studio/ghibli.html"},
]

const FooterBanners = [
  {src:museum_banner,url:"https://www.ghibli-museum.jp/"},
  {src:twitter_banner,url:"https://twitter.com/JP_GHIBLI"},
  {src:line_banner,url:"https://line.me/ti/p/%40studioghibli"},
  {src:disney_banner,url:"http://www.disney.co.jp/studio/ghibli.html"},
]

export {CategoryMenu, TravelExhibition, RelatedSites, FooterBanners}