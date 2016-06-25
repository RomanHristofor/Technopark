var CreateModal = {
      constructor: function( img, title, price, body, character, link ) {
        this.img = img;
        this.title = title;
        this.body = body;
        this.character = character;
        this.link = link;
        this.price = price;
        return this;
      }
    };
var product;
var productArrayObj = [
  product = Object.create(CreateModal).constructor(
      "<img src='images/1200d.jpg'><hr noshade>",
      "<h1>Canon EOS 1200D</h1>",
      "<h1>5 967 000 руб.</h1>\n" +
      "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
      "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
      "<pre><p>Тип камеры</p>\n" +
      "<p>Тип матрицы</p>\n" +
      "<p>Размер экрана</p>\n" +
      "<p>Колличество точек\nматрицы</p>\n" +
      "<p>Физический размер\nматрицы</p>\n" +
      "<p>Фокусное расстояние</p>\n" +
      "</pre>",
      "<pre><p>зеркальная</p>\n" +
      "<p>CMOS</p>\n" +
      "<p>3\"</p>\n" +
      "<p>18 Мп</p>\n" +
      "<p>APS-C (1.6 crop)</p>\n" +
      "<p>35 мм</p>\n" +
      "</pre>",
      "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/banner_p-a.png'><hr noshade>",
    "<h1>Xiaomi Yi Action Camera</h1>",
    "<h1>-</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>24.2 Мп</p>\n" +
    "<p>APS-C (1.5 crop)</p>\n" +
    "<p>18-55 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/700d.jpg'><hr noshade>",
    "<h1>Canon EOS 700D</h1>",
    "<h1>8 355 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>18 Мп</p>\n" +
    "<p>APS-C (1.6 crop)</p>\n" +
    "<p>18-55 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/x100s.jpg'><hr noshade>",
    "<h1>Fujifilm X100S</h1>",
    "<h1>12 999 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>2.8\"</p>\n" +
    "<p>16.3 Мп</p>\n" +
    "<p>APS-C (1.5 crop)</p>\n" +
    "<p>35 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),

  product = Object.create(CreateModal).constructor(
    "<img src='images/d3200.jpg'><hr noshade>",
    "<h1>Nikon D3200</h1>",
    "<h1>5 967 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>24.2 Мп</p>\n" +
    "<p>APS-C (1.5 crop)</p>\n" +
    "<p>18-55 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/a5000.jpg'><hr noshade>",
    "<h1>Sony Alpha a5000</h1>",
    "<h1>6 900 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>20.1 Мп</p>\n" +
    "<p>APS-C (1.5 crop)</p>\n" +
    "<p>16-50 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/banner_p-b.png'><hr noshade>",
    "<h1>Fujifilm</h1>",
    "<h1>6 900 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>20.1 Мп</p>\n" +
    "<p>APS-C (1.5 crop)</p>\n" +
    "<p>16-50 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/g7x.jpg'><hr noshade>",
    "<h1>Canon PowerShot G7 X</h1>",
    "<h1>8 499 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>20.2 Мп</p>\n" +
    "<p>APS-C (1 crop)</p>\n" +
    "<p>24-100 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),

  product = Object.create(CreateModal).constructor(
    "<img src='images/700d.jpg'><hr noshade>",
    "<h1>Canon EOS 700D</h1>",
    "<h1>8 355 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>18 Мп</p>\n" +
    "<p>APS-C (1.6 crop)</p>\n" +
    "<p>18-55 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/x100s.jpg'><hr noshade>",
    "<h1>Fujifilm</h1>",
    "<h1>6 900 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>20.1 Мп</p>\n" +
    "<p>APS-C (1.5 crop)</p>\n" +
    "<p>16-50 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/d3200.jpg'><hr noshade>",
    "<h1>Nikon D3200</h1>",
    "<h1>5 967 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>24.2 Мп</p>\n" +
    "<p>APS-C (1.5 crop)</p>\n" +
    "<p>18-55 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  ),
  product = Object.create(CreateModal).constructor(
    "<img src='images/a5000.jpg'><hr noshade>",
    "<h1>Sony Alpha a5000</h1>",
    "<h1>6 900 000 руб.</h1>\n" +
    "<button><img src='svg/cart_blue.svg' alt='basket' />в корзину</button>\n" +
    "<h3>В наличии</h3> <span>Доставка по Минске<br>бесплатно с 11 до 20 часов</span>",
    "<pre><p>Тип камеры</p>\n" +
    "<p>Тип матрицы</p>\n" +
    "<p>Размер экрана</p>\n" +
    "<p>Колличество точек\nматрицы</p>\n" +
    "<p>Физический размер\nматрицы</p>\n" +
    "<p>Фокусное расстояние</p>\n" +
    "</pre>",
    "<pre><p>зеркальная</p>\n" +
    "<p>CMOS</p>\n" +
    "<p>3\"</p>\n" +
    "<p>20.1 Мп</p>\n" +
    "<p>APS-C (1.5 crop)</p>\n" +
    "<p>16-50 мм</p>\n" +
    "</pre>",
    "<a href='#'>Полные характеристики</a>"
  )
];
