//1. Elementos del DOM (Es nuestro modelo del objeto documento)
//2. Eventos del DOM (click (u onclick), submit y DOMContentLoad())
//3. Responsive design
//4. LocalStorage() y SessionStoge().
//----------------------------OBJETIVOS DE ESTE EJERCICIO PRÁCTICO-------------------
//Construir un aplicativo donde se enlisten algunos personajes Disney (en cards) 1. Al dar click sobre la card, 
//redireccione al usuario a una página que contenga la información de detalle de ese personaje. 2. crear (o incluir) 
//un nuevo personaje Disney mediante un form 3. Agregar personajes en una lista de favoritos.

const disneyCharacters = [
    {
      id: 1,
      name: "Hércules",
      image:
        "https://static.wikia.nocookie.net/disney/images/7/70/Profile_-_Hercules.jpeg",
      seenIn: {
        category: "Film",
        title: "Hércules",
        year: "1997",
        duration: "93 minutos",
      },
    },
    {
      id: 2,
      name: "Simba",
      image:
        "https://static.wikia.nocookie.net/disney/images/3/37/Profile_-_Simba.jpeg",
      seenIn: {
        category: "Film",
        title: "Rey León",
        year: "1994",
        duration: "88 minutos",
      },
    },
    {
      id: 3,
      name: "Pluto",
      image:
        "https://static.wikia.nocookie.net/disney/images/6/68/PHOTO_9449325_66470_18660554_main.jpg",
      seenIn: {
        category: "Tv Series",
        title: "La Casa de Mickey",
        year: "1930",
        duration: "88 minutos",
      },
    },
    {
      id: 4,
      name: "Mérida",
      image: "https://es.web.img2.acsta.net/pictures/15/10/23/16/29/214432.jpg",
      seenIn: {
        category: "Film",
        title: "Valiente",
        year: "2012",
        duration: "88 minutos",
      },
    },
    {
      id: 5,
      name: "Cruella de vil",
      image:
        "https://i.pinimg.com/originals/5b/65/e7/5b65e711c9a9a3bb548c4ffbb4e22410.jpg",
      seenIn: {
        typeShow: "film",
        title: "Cruella",
        year: 2021,
        Duration: " 134 minutos",
      },
    },
    {
      id: 6,
      name: "Tiana",
      image:
        "https://i.pinimg.com/736x/ef/84/aa/ef84aaf02508b3c86838832f2c1ad3c8.jpg",
      seenIn: {
        typeShow: "film",
        title: "La princesa y el sapo",
        year: 2009,
        Duration: "97 minutos",
      },
    },
    {
      id: 7,
      name: "Anastacia",
      imag: "https://static.wikia.nocookie.net/disneymagicalkingdoms/imagees/8/83/Cp-anastasia_tremaine.png/revision/latest/scale-to-width/360?cb=20200724003007",
      seenIn: {
        typeShow: "film",
        title: "Cindirella",
        year: 1950,
        Duration: "76 minutos",
      },
    },
    {
      id: 8,
      name: "Ariel",
      image: "https://www.pngplay.com/wp-content/uploads/6/Ariel-Clipart-PNG.png",
      seenIn: {
        typeShow: "film",
        title: "La sirenita",
        year: 198,
        Duration: "83 minutos",
      },
    },
    {
      id: 9,
      name: "Abby patosa",
      image: "https://1.bp.blogspot.com/-689NBM262t0/YRxSj3QwDJI/AAAAAAAARC4/fcYsFWNhJ2odY6ZT9fyHsDtZjNZBj7XUACLcBGAsYHQ/s0/chicken%2Blittle%2Bpng%2Bclipart%2B%252817%2529.png",
      seenIn: {
        typeShow: "film",
        title: "chicken little",
        year: 2005,
        Duration: "81 minutos",
      },
    },
    {
      id: 10,
      name: "Alice",
      image: "https://w7.pngwing.com/pngs/1018/607/png-transparent-alice-in-wonderland-alice-s-adventures-in-wonderland-the-mad-hatter-white-rabbit-queen-of-hearts-alice-in-wonderland-child-toddler-fictional-character.png",
      seenIn: {
        typeShow: "film",
        title: "Alicia en el pais de las maravillas",
        year: 2010,
        Duration: "108 minutos",
      },
    },
    {
      id: 11,
      name: "Fa mulán",
      image: "https://imageenesparapeques.com/wp-content/uploads/2014/11/Mulan-10.png",
      seenIn: {
        typeShow: "film",
        title: "Mulán",
        year: 1998,
        Duration: " 88 minutos",
      },
    },
    {
      id: 11,
      name: "Pocahontas",
      image: "https://e7.pngegg.com/pngimages/471/180/png-clipart-tiana-pocahontas-fa-mulan-minnie-mouse-princess-aurora-minnie-mouse-disney-princess-cartoon.png",
      seenIn: {
        typeShow: "film",
        title: "Pocahontas",
        year: 1995,
        Duration: "81 minutos",
      },
    },
  ];