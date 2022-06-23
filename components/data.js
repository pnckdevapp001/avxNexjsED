const  AVTV = [{
  //   "id": 1,
  //   "name": "คลิปล่าสุด ส่งตรงจากจีน",
  //   "host": "https://sb8.app/rb8.png",
  //   "list_api": "http://f2dcj6.com/sapi/json?ac=list",
  //   "detail_api": "http://f2dcj6.com/sapi/json?ac=videolist", //&pg=&t=&wd=  &ids=106536,106535
  // },
  // {
  "id": 11,
  "name": "หนังAV ส่งตรงจากจีน",
  "type": "tv",
  "host": "wu",
  "list_api": "http://zmcj88.com/sapi/json?ac=list",
  "detail_api": "http://zmcj88.com/sapi/json?ac=videolist", //&pg=&t=&wd=  &ids=106536,106535
},
{
  "id": 2,
  "name": "คลิปโซนเอเชีย",
  "type": "tv",
  "host": "https://sao-lang-jian.com",
  "list_api": "http://llzxcj.com/inc/json.php?ac=list",
  "detail_api": "http://llzxcj.com/inc/json.php?ac=videolist",
},
{
  "id": 3,
  "name": "หนังAVเต็มเรื่อง",
  "type": "tv",
  "host": "http://mygzycj.com",
  "list_api": "http://mygzycj.com/sapi.php?ac=jsonlist",
  "detail_api": "http://mygzycj.com/sapi.php?ac=jsonvideolist",
}]

//รูปแบบ json ที่ส่งคืนโดย api ต่อไปนี้จะแตกต่างจากรูปแบบด้านบน ซึ่งแยกความแตกต่างด้วย id (id>100)

const JAVMOVIE = [
  {
    "id": 100,
    "name": "💋AVวัยรุ่น",
    "type": "movie",
    "host": "https://apilj.com/",
    "list_api": "https://apilj.com/api.php/provide/vod/at/json/?ac=list",
    "detail_api": "https://apilj.com/api.php/provide/vod/at/json/?ac=detail",
  },
  {
    "id": 101,
    "name": "🦆Cosplay Anime ",
    "type": "movie",
    "host": "http://www.laoyazy5.com/",
    "list_api": "https://api.apilyzy.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://api.apilyzy.com/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 102,
    "name": "ANIME",
    "type": "movie",
    "host": "http://help.apittzy.com/",
    "list_api": "https://apittzy.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://apittzy.com/api.php/provide/vod/?ac=detail",
    "art": "https://apittzy.com/api.php/provide/art/?ac=", //ac=list  ac=detail
  },
  {
    "id": 103,
    "name": "INTERเย็ดกัน",
    "type": "movie",
    "host": "https://api.xiuseapi.com/",
    "list_api": "https://api.xiuseapi.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://api.xiuseapi.com/api.php/provide/vod/?ac=detail",
    "art": "https://api.xiuseapi.com/api.php/provide/art/?ac=", //ac=list  ac=detail
  },
  {
    "id": 104,
    "name": "🐠แหล่งตกเบ็ด",
    "type": "movie",
    "host": "https://help.leyuzy.pro/",
    "list_api": "https://www.leyuzyapi.com/inc/apijson_vod.php?ac=list",
    "detail_api": "https://www.leyuzyapi.com/inc/apijson_vod.php?ac=detail",
    "jx": "https://player.leyuzy.net/?url=",
  },
  {
    "id": 105,
    "name": "🧦ถุงน่อง",
    "type": "movie",
    "host": "https://siwazyw.tv/index.php/label/help.html",
    "list_api": "https://siwazyw.tv/api.php/provide/vod/?ac=list",
    "detail_api": "https://siwazyw.tv/api.php/provide/vod/?ac=detail",
    "art": "https://siwazyw.tv/api.php/provide/art/?ac=", //ac=list  ac=detail
    "jx": "http://jx.siwapay.com/m3u8.php?url=",
  },
  {
    "id": 106,
    "name": "INTERSHOW",
    "type": "movie",
    "host": "https://www.kudouzy.com/index.php/label/help.html",
    "list_api": "http://api.kdapi.info/api.php/provide/vod/?ac=list",
    "detail_api": "http://api.kdapi.info/api.php/provide/vod/?ac=detail",
    "art": "http://api.kdapi.info/api.php/provide/art/?ac=detail", //ac=list  ac=detail
    "jx": "https://jx.kubohk.com/jx/?url=",
  },
  {
    "id": 107,
    "name": "🥑AV",
    "type": "movie",
    "host": "https://mgm3u8-player.com/",
    "list_api": "https://mgzyz1.com/api.php/provide/vod/?ac=list",
    "detail_api": "https://mgzyz1.com/api.php/provide/vod/?ac=detail",
    "jx": "https://mgm3u8-player.com/player/DPm3u8.php?url=",
  },
  {
    "id": 108,
    "name": "🍑ทรัพยากรพีช",
    "type": "movie",
    "host": "http://51smt4.xyz/",
    "list_api": "http://51smt4.xyz/api.php/provide/vod/?ac=list",
    "detail_api": "http://51smt4.xyz/api.php/provide/vod/?ac=detail",
  },
  {
    "id": 109,
    "name": "🌶อินเตอร์แซ่บๆ",
    "type": "movie",
    "host": "https://apihjzy.com",
    "list_api": "https://apihjzy.com/api.php/provide/vod/at/json/?ac=detail",
    "detail_api": "https://apihjzy.com/api.php/provide/vod/at/json/?ac=detail",
  },
  {
    "id": 110,
    "name": "😄JAV",
    "type": "movie",
    "host": "https://lbapi9.com",
    "list_api": "https://lbapi9.com/api.php/provide/vod/at/json/?ac=list",
    "detail_api": "https://lbapi9.com/api.php/provide/vod/at/json/?ac=detail",
  },
  // {
  //   "id": 111,
  //   "name": "😄ทรัพยากรจำนวน",
  //   "host": "https://fhapi9.com",
  //   "list_api": "http://fhapi9.com/api.php/provide/vod/at/json/?ac=list",
  //   "detail_api": "http://fhapi9.com/api.php/provide/vod/at/json/?ac=detail",
  // },
  {
    "id": 112,
    "name": "🦈ทีมฉลาม",
    "type": "movie",
    "host": "www.shayuapi.com",
    "list_api": "https://www.shayuapi.com/api.php/provide/vod/at/json/?ac=list",
    "detail_api": "https://www.shayuapi.com/api.php/provide/vod/at/json/?ac=detail",
  },
  {
    "id": 113,
    "name": "🥑AV",
    "type": "movie",
    "host": "www.mgav1.cc",
    "list_api": "https://www.mgav1.cc/api.php/provide/vod/at/json/?ac=detail",
    "detail_api": "https://www.mgav1.cc/api.php/provide/vod/at/json/?ac=detail",
  }
]