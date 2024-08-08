new Vue({
  el: '#slider1',
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
      timer: null,
      speed: 3000
    },
    methods: {
      startRotation() {
        this.timer = setInterval(this.next, this.speed);
      },
      next() {
        this.current = (this.current + 1) % this.slides.length;
      },
      isActive(index) {
        return this.current === index;
      }
    },
    created() {
      this.startRotation();
    }
  });

  new Vue({
    el: '#slider2',
    data: {
      current: 0,
      otherSlides: [
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/250830726.jpg?k=79ead5935f6d4d2eb8792cb8c910b594b630a8b7dc37646b235dd3412609161e&o=&hp=1', title: 'Hotel Image 1' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/120208547.jpg?k=315cce8e29b8a15fb31f68584d8daa7a067b21f93c77162ff1ed41331cd662b9&o=&hp=1', title: 'Hotel Image 2' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/432297247.jpg?k=0bfd25adc19b4f1181311f741c58f71d80a128e2b52f271529f284ff7892a97e&o=&hp=1', title: 'Hotel Image 3' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/432297245.jpg?k=233ffdc68628b4dc1e94317a5b847b090462ead83da1f2358ffed4c1e75e51bf&o=&hp=1', title: 'Hotel Image 4' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247910572.jpg?k=4dc542d523e8ca833718d014a833cd5dcbddc75b9eff02d3261eed78e108b16a&o=&hp=1', title: 'Hotel Image 5' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247910584.jpg?k=c556238e9c5ac48f465387fb83be4179477a333b559f05f68e657181809b4d90&o=&hp=1', title: 'Hotel Image 6' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247910573.jpg?k=470f777ead80580dc10c2f20a049228a9c903b0848f0819135768dd6d440cbaa&o=&hp=1', title: 'Hotel Image 7' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247910582.jpg?k=a7710ed999b228c33919f9f30ed3228d14f283e0b42b7486607a09b3e204aca6&o=&hp=1', title: 'Hotel Image 8' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247910577.jpg?k=5138f305862f089531df881e304fd3ab495d043d5cda12b25535d853aced73c9&o=&hp=1', title: 'Hotel Image 9' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247910586.jpg?k=47211a115d31ea4adf4d79aeaa1e5e29868ab421372b52829e3e44cfb34bfaed&o=&hp=1', title: 'Hotel Image 10' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/564113558.jpg?k=19198729fbfe46d6227adac973811a7120cf133ac179280d3dba0f9140327607&o=&hp=1', title: 'Hotel Image 11' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/432297257.jpg?k=ac7e5a78c81f83b9d4a84291698536d7f758292c14745fd3930f71bc91d214d8&o=&hp=1', title: 'Hotel Image 12' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/249943157.jpg?k=c3b20448988d1f8e0a0cc95fa7e6b6d56587be10d8bb08db1cad046e627ef431&o=&hp=1', title: 'Hotel Image 13' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/232829514.jpg?k=fc40f469fa0f5b4aec4e5d2a115f1f4ab9b5fdad42b6649f16175a7bdbe3cecf&o=&hp=1', title: 'Hotel Image 14' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/232828633.jpg?k=ed9f00b54e7328fccc7833a0822a35045385527c74750855890baf3c346fa0c9&o=&hp=1', title: 'Hotel Image 15' },
      ],
      timer: null,
      speed: 3000
    },
    methods: {
      startRotation() {
        this.timer = setInterval(this.next, this.speed);
      },
      next() {
        this.current = (this.current + 1) % this.otherSlides.length;
      },
      isActive(index) {
        return this.current === index;
      }
    },
    created() {
      this.startRotation();
    }
  });

  new Vue({
    el: '#slider3',
    data: {
      current: 0,
      nextSlides: [
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471002102.jpg?k=201f67f258c986d1f5e0db2919348e783a9b1f04174cb3a0ec2e795e5a1c7a91&o=&hp=1', title: 'Hotel California Image 1' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/177576152.jpg?k=1f174b6bbeed3cb67244c461b77b59298a20f34f9f436e837458ad7fc73c4ce7&o=&hp=1', title: 'Hotel California Image 2' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/457941819.jpg?k=e875f8d96e2756594d70f2c4456eb737adc76a8558836aebbe19998f1aff7ca5&o=&hp=1', title: 'Hotel California Image 3' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/457942348.jpg?k=feac9e321050dcd728978afcc70b3dba0c2e12f27604fb7075073435f7546acb&o=&hp=1', title: 'Hotel California Image 4' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/457942463.jpg?k=3fdb4bd3c0cf220969c0795fcf9124b7e9c284550cd10bb6c4a5103250463e1c&o=&hp=1', title: 'Hotel California Image 5' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/547180850.jpg?k=15c04f9a51276bb9d3eda7f0e27db778e442547dceea90cfa91f1773e864662a&o=&hp=1', title: 'Hotel California Image 6' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/326316927.jpg?k=9021cbc8ddf5e8e08b6b6895cd4d08346abc6bb548c55a79e2291a6bf5000c88&o=&hp=1', title: 'Hotel California Image 7' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/586809690.jpg?k=34fb43460c4c0766a75f1bbd42e4facec6682c373a8bbd28afe8085ef8c61b23&o=&hp=1', title: 'Hotel California Image 8' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/198891149.jpg?k=8276fced84507cdd08edb130de5f4e5384c69162f536e96796a994a938d0c80a&o=&hp=1', title: 'Hotel California Image 9' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/264148981.jpg?k=d61a9801d0e6c862339d2565ce20d6849e2fd2b1aa90fbc114ca22cf5821ca4c&o=&hp=1', title: 'Hotel California Image 10' },
      ],
      speed: 3000,
      timer: null
    },
    methods: {
      startRotation() {
        this.timer = setInterval(this.next, this.speed);
      },
      next() {
        this.current = (this.current + 1) % this.nextSlides.length;
      },
      isActive(index) {
        return this.current === index;
      }
    },
    created() {
      this.startRotation();
    }
  }); 

  new Vue({
    el: '#slider4',
    data: {
      current: 0,
      lastSlides: [
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320322066.jpg?k=7d08a1383424e0dfb9a7d84374a2b39c12a772842c60da718eef079bf592efa9&o=&hp=1', title: 'Hotel image 1' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320322400.jpg?k=6b748fc0e16e4cb343f0c2240396f28e6f98be536cce259d5e4ae06435bb41b1&o=&hp=1', title: 'Hotel Image 2' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320322398.jpg?k=ad3d6c3fcd9a4f942c4bb425b017996d7f8330e146584ac8d7e195bc24ba8aaf&o=&hp=1', title: 'Hotel Image 3' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320322387.jpg?k=1e2cc210600f25bcf219628ebf58db0129a9b177c9c6741a1b789c8403c24b23&o=&hp=1', title: 'Hotel Image 4' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320309231.jpg?k=96ffdf81c7436574329eb8c16d6bfa4421e813cf5d38c9419855fcb2c5e93d04&o=&hp=1', title: 'Hotel image 5' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320310578.jpg?k=cebd01849f105616446399182386b8399653e2747bd91990287585941ef2ce52&o=&hp=1', title: 'Hotel Image 6' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320307903.jpg?k=cab645bccf7fa6629eac9447f7502b64761877893ba46fc2462ef5360b0353cd&o=&hp=1', title: 'Hotel Image 7' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320308491.jpg?k=35562ed65e75b6dfa203e056b9d9fc236d6b3172ed902ce4429b13fa6ea55917&o=&hp=1', title: 'Hotel image 8' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320322379.jpg?k=0c4962a92ffb55b43d292fe8f40f706e6fad77c888f3d9ce419010aba7c384a5&o=&hp=1', title: 'Hotel Image 9' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322723475.jpg?k=c38f0eb3e2bd21dd2b0d213a700107a9cefa01881fcd855810d2aeea79cd9aa0&o=&hp=1', title: 'Hotel Image 10' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320347830.jpg?k=a57ef52eae859ef83192ee3c550526891d4196237b8a2f4e982207039eafb5b2&o=&hp=1', title: 'Hotel Image 11' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322723472.jpg?k=bd39e0aa74869d43405ff746910bd078e7556cfd173223299eb7e659b83c8de1&o=&hp=1', title: 'Hotel Image 12' },
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/320322384.jpg?k=595ebb5002ab1ea90345fa28656678517e6a405c96fca3e4b326cd41fb603c5d&o=&hp=1', title: 'Hotel Image 13' },
      ],
      speed: 3000,
      timer: null
    },
    methods: {
      startRotation() {
        this.timer = setInterval(this.next, this.speed);
      },
      next() {
        this.current = (this.current + 1) % this.lastSlides.length;
      },
      isActive(index) {
        return this.current === index;
      }
    },
    created() {
      this.startRotation();
    }
  });
  