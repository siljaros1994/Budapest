new Vue({
    el: '.js-slideshow',
    data: {
      current: 0,
      slides: [
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/495457675.jpg?k=23a08d600a347fa8cc8fce138387793c55994471ff151e5f513e97d3419245a5&o=&hp=1', title: 'Hotel Image 1' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/504309139.jpg?k=25c71de14a720c6f0c999e5b1e970172797910d8cab1a264393b93ad801e9ae0&o=&hp=1', title: 'Hotel Image 2' },
        { id: 3, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/569082947.jpg?k=0f99380bfed015f90bde6a13db0f733a0bd2fffdaa96e198bf86c1db199d6fd8&o=&hp=1', title: 'Hotel Image 3' },
        { id: 4, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/506321918.jpg?k=dda1da16f195e10954119a49b1a9902a2bfe47320f240a0b7655186840ee1e99&o=&hp=1', title: 'Hotel Image 4' },
        { id: 5, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/522293257.jpg?k=9ce0796b3d849dd39473b0c49f05cdeaf358051c8f470283bfe50434722786c5&o=&hp=1', title: 'Hotel Image 5' },
        { id: 6, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488946156.jpg?k=4376c5746219929411abc285a2e262abff5fdb5559a41d507f0e31d55868ba37&o=&hp=1', title: 'Hotel Image 6' },
        { id: 7, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488946155.jpg?k=a8e2265386bc40999ba5cabfe40c8575d554156bdf34f88a92a16e7a4d639771&o=&hp=1', title: 'Hotel Image 7' },
        { id: 8, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/495457680.jpg?k=9b8568216463d5bf1b9f2e0e35a5ac73322d4f6563e6290bf30c034e9f8fee65&o=&hp=1', title: 'Hotel Image 8' },
        { id: 9, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/563524664.jpg?k=0ce4b20bd4234001867917a3e21e86cb6ac3e599dfaf644131f839f03dabe658&o=&hp=1', title: 'Hotel Image 9' },
        { id: 10, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/563524673.jpg?k=2a2551f2ecda2c6d7519bd8a74b622235ec429a033e9b3b6fe85aef8d689accb&o=&hp=1', title: 'Hotel Image 10' },
        { id: 11, url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/569082946.jpg?k=127157e81b7722b324dc0efa62c28abccd76320425e5e186464fee1f9602e50d&o=&hp=1', title: 'Hotel Image 11' },
        { id: 12, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486674705.jpg?k=917ca76fbf5075fd62becab0969bb1a16a6bbf169079d5f54f1480b1b6fc4c07&o=&hp=1', title: 'Hotel Image 12' },
        { id: 13, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496433089.jpg?k=1126656b9f5436108a017605cf0dd7c0afbfea63256f9c04e9e21773b78dbaf6&o=&hp=1', title: 'Hotel Image 13' },
      ],
      speed: 3000,
      timer: null
    },
    methods: {
      startRotation: function () {
        this.timer = setInterval(this.next, this.speed);
      },
      stopRotation: function () {
        clearTimeout(this.timer);
        this.timer = null;
      },
      next: function () {
        var current = this.current;
        var next = current + 1;
  
        if (next > this.slides.length - 1) {
          next = 0;
        }
        this.current = next;
      },
      isActive: function (index) {
        return this.current === index;
      }
    },
    created: function () {
      this.startRotation();
    }
  });  
