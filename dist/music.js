const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '天后',
        artist: 'Bjp',
        url: '/mysong/天后.mp3',  
        // #歌曲链接
        cover: '/mypic/jxt.jpg', 
        //  #图片
      },
      {
        name: " 大海",
        artist: 'Bjp',
          url: "/mysong/大海.mp3",
         cover: "/mypic/jxt.jpg"
      },
      {
        name: " 花海",
        artist: 'Bjp',
          url: "/mysong/花海.flac",
         cover: "/mypic/jxt.jpg"
      },
      {
        name: " 王妃",
        artist: 'Bjp',
          url: "/mysong/王妃.flac",
         cover: "/mypic/jxt.jpg"
      },
      {
        name: "七里香 ",
        artist: 'Bjp',
          url: "/mysong/七里香.flac",
         cover: "/mypic/jxt.jpg"
      },
      {
        name: "晴天 ",
        artist: 'Bjp',
          url: "/mysong/晴天.flac",
         cover: "/mypic/jxt.jpg"
      },
      {
        name: "告白气球 ",
        artist: 'Bjp',
          url: "/mysong/告白气球.flac",
         cover: "/mypic/jxt.jpg"
      }
     /*  ,{
        name: " ",
        artist: 'Bjp',
          url: "/mysong/",
         cover: "/mypic/jxt.jpg"
      }
      ,{
        name: " ",
        artist: 'Bjp',
          url: "/mysong/",
         cover: "/mypic/jxt.jpg"
      }
      ,{
        name: " ",
        artist: 'Bjp',
          url: "/mysong/",
         cover: "/mypic/jxt.jpg"
      } */
    ]
});