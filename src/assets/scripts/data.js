const gameData = [
  [
    {
      id: 1,
      name_first: 'Окегем',
      name_second: 'Реквием',
      description: 'Возможно, первый полифонический реквием. Музыкальные события равномерно переплетены; нет предсказуемых гармонических «пит-стопов», один голос замирает, договаривая, как раз тогда, когда другой приходит в движение, в результате получается подвижная бесшовная структура.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592368/RSSchool/song/requiem/ockeghem.jpg',
      audio: './songs/requiem/ockeghem-requiem-kyrie.mp3',
      duration: '01:30'
    },
    {
      id: 2,
      name_first: 'Пьяццолла',
      name_second: 'Времена года в&nbsp;Буэнос Айресе',
      description: '«Времена года» Пьяццоллы представляют собой набор из четырёх танго-композиций. Это не «времена года» в классическом понимании (как смена сезонов). Речь идёт о разных периодах жизни жителя окраины столицы Аргентины.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592423/RSSchool/song/seasons/piazzolla.jpg',
      audio: './songs/seasons/astor-piazzolla-the-four-seasons-of-buenos-aires.mp3',
      duration: '01:30'
    },
    {
      id: 3,
      name_first: 'Крамбамбуля',
      name_second: 'Госцi',
      description: 'Песня «Госці», записанная в дуэте с Михалком («Ляпис Трубецкой»), стала самым известным хитом группы «Крамбамбуля». Стиль группы можно охарактеризовать как поп-рок с ироничными текстами, пародирующими моменты жизни пост-советского общества.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592470/RSSchool/song/belarus/krambambula.jpg',
      audio: './songs/belarus/krambambulya-gosci.mp3',
      duration: '01:30'
    },
    {
      id: 4,
      name_first: 'Верасы',
      name_second: 'Калыханка',
      description: 'Музыка Василия Раинчика, слова Генадия Буравкина. Исполняет ВИА «Верасы». Колыбельная, которую знают, пожалуй, все белорусы. Особенно те, чье детство пришлось на 80-е — начало нулевых.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592469/RSSchool/song/belarus/kalykhanka.jpg',
      audio: './songs/belarus/via-verasy-kalyxanka.mp3',
      duration: '01:30'
    },
    {
      id: 5,
      name_first: 'Фильм «Не время умирать»',
      name_second: 'Песня «No Time to Die»',
      description: 'Музыка и слова: Билли Айлиш и Финнеас О\’Коннелл. Номинация — 2022 год. Айлиш стала самым молодым исполнителем заглавной темы за всю историю Бондианы. На момент выхода песни певице было 18 лет.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592514/RSSchool/song/oskar/eilish.jpg',
      audio: './songs/oskar/billie-eilish-no-time-to-die.mp3',
      duration: '01:30'
    },
    {
      id: 6,
      name_first: 'Гимн Республики Гаити',
      name_second: 'La Dessalinienne',
      description: 'Утверждён в качестве официального в 1904. Стихи — Жюстен Лериссон. Музыка — Николя Жефрар.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592540/RSSchool/song/anthems/haiti.jpg',
      audio: './songs/anthems/haiti-la-dessalinienne.mp3',
      duration: '01:30'
    }
  ],
  [
    {
      id: 1,
      name_first: 'Окегем',
      name_second: 'Реквием',
      description: 'Возможно, первый полифонический реквием. Музыкальные события равномерно переплетены; нет предсказуемых гармонических «пит-стопов», один голос замирает, договаривая, как раз тогда, когда другой приходит в движение, в результате получается подвижная бесшовная структура.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592368/RSSchool/song/requiem/ockeghem.jpg',
      audio: './songs/requiem/ockeghem-requiem-kyrie.mp3',
      duration: '01:30'
    },
    {
      id: 2,
      name_first: 'Бибер',
      name_second: 'Реквием',
      description: 'Бибер отказывается от наследия григорианики. Массивные хоровые строфы, описывающие кошмар последнего дня, чередуются с ансамблевым пением. На слушателя низвергается мозаика изменчивых, иллюзорных, ярких эпизодов, где латинский текст выступает несущей конструкцией.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592368/RSSchool/song/requiem/biber.jpg',
      audio: './songs/requiem/franz-biber-requiem-in-f-minor.mp3',
      duration: '01:30'
    },
    {
      id: 3,
      name_first: 'Гайдн',
      name_second: 'Реквием',
      description: 'В отличии от поздних барочных и квазиоперных классических месс Гайдн отправляет слушателя прямиком в Средневековье и атмосферу мрака. Реквием Моцарта, написанный на 20 лет позже, содержит много стилистических схожих черт, что говорит о влиянии гайдновского Реквиема на композитора. ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592368/RSSchool/song/requiem/haydn.jpg',
      audio: './songs/requiem/michael-haydn-requiem-in-c-minor.mp3',
      duration: '01:30'
    },
    {
      id: 4,
      name_first: 'Моцарт',
      name_second: 'Реквием',
      description: 'Моцарт останавливается на самом давящем оркестровом колорите: фаготы в низком регистре, тихие литавры, низкая медь, бассетгорны. Сократил до минимума виртуозно-инструментальную составляющую. Композитор, по-видимому, хотел, чтобы Реквием был преимущественно вокальным.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592368/RSSchool/song/requiem/mozart.jpg',
      audio: './songs/requiem/mozart-requiem-in-d-minor.mp3',
      duration: '01:30'
    },
    {
      id: 5,
      name_first: 'Берлиоз',
      name_second: 'Реквием',
      description: 'Реквием отличается глубоко гражданской, а не духовно-мистической интонацией. Сочинение, задумывавшееся как оратория об апокалипсисе под названием «Последний день мира», переплавилось в музыку для мемориальной церемонии в честь жертв Июльской революции 1830 г.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592368/RSSchool/song/requiem/berlioz.jpg',
      audio: './songs/requiem/hector-berlioz-requiem-grande-messe-des-morts.mp3',
      duration: '01:30'
    },
    {
      id: 6,
      name_first: 'Хенце',
      name_second: 'Реквием',
      description: 'Главная особенность: отсутствие хора. Также Хенце пришел к чему-то вроде густой хаотической полифонии: музыкальной ткани, где много линий наложены друг на друга и постоянно движутся как живое пятно, к поверхности которого выскакивает то одна, то другая.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592368/RSSchool/song/requiem/henze.jpg',
      audio: './songs/requiem/hans-werner-henze-requiem-viii-lacrimosa.mp3',
      duration: '01:30'
    }
  ],
  [
    {
      id: 1,
      name_first: 'Пьяццолла',
      name_second: '«Времена года в&nbsp;Буэнос Айресе» ',
      description: '«Времена года» Пьяццоллы представляют собой набор из четырёх танго-композиций. Это не «времена года» в классическом понимании (как смена сезонов). Речь идёт о разных периодах жизни жителя окраины столицы Аргентины.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592423/RSSchool/song/seasons/piazzolla.jpg',
      audio: './songs/seasons/astor-piazzolla-the-four-seasons-of-buenos-aires.mp3',
      duration: '01:30'
    },
    {
      id: 2,
      name_first: 'Вивальди',
      name_second: '«Времена года»',
      description: '«Времена года» — одно из наиболее известных произведений как Вивальди, так и в целом музыки барокко. К концу XX века были выпущены более 200 грамзаписей цикла, одна из которых установила мировой рекорд по продажам в области академической музыки.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592423/RSSchool/song/seasons/vivaldi.jpg',
      audio: './songs/seasons/vivaldi-four-seasons-winter.mp3',
      duration: '01:30'
    },
    {
      id: 3,
      name_first: 'Чайковский',
      name_second: '«Времена года»',
      description: 'Сборник «Времена года» принадлежит к числу наиболее часто исполняемых фортепианных сочинений Чайковского. Композитор написал его по заказу издателя журнала «Нувеллист», которому принадлежала идея цикла и заглавия пьес. ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592423/RSSchool/song/seasons/chaikovsky.jpg',
      audio: './songs/seasons/tchaikovskys-the-seasons.mp3',
      duration: '01:30'
    },
    {
      id: 4,
      name_first: 'Гайдн',
      name_second: 'оратория «Времена года»',
      description: 'Оратория разделена на четыре части, соответствующая Весне, Лету, Осени и Зиме, с обычными речитативами, ариями, хорами и ансамблевыми номерами.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592423/RSSchool/song/seasons/haydn.jpg',
      audio: './songs/seasons/i-gaidn-oratoriya-vremena-goda.mp3',
      duration: '01:30'
    },
    {
      id: 5,
      name_first: 'Гаврилин',
      name_second: '«Времена года»',
      description: 'Цикл «времена года» — это четыре романса (Зима, Весна, Лето, Осень) на народные слова, а также на стихи Сергея Есенина и Александра Твардовского. В них в полной мере проявляется характерный вокальный стиль Гаврилина со свойственными ему меланхолией и  близостью народному песенному творчеству. ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592423/RSSchool/song/seasons/gavrilin.jpg',
      audio: './songs/seasons/v-gavrilin-vremena-goda-osen.mp3',
      duration: '01:30'
    },
    {
      id: 6,
      name_first: 'Глазунов',
      name_second: 'балет «Времена года»',
      description: 'Композитору необычайно ярко удалось воплотить в музыке картины весеннего пробуждения, летнего зноя, урожайности осени. Однако картины зимы поражают своей красочностью более других. Николай Римский-Корсаков не смог скрыть своего восторга, назвав первую картину «Времен года» Глазунова  «одной из лучших в русской музыке зим».',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592423/RSSchool/song/seasons/glazunov.jpg',
      audio: './songs/seasons/aleksandr-konstantinovic-glazunov-balet-vremena-godazima.mp3',
      duration: '01:30'
    }
  ],
  [
    {
      id: 1,
      name_first: 'Гимн Республики Гаити',
      name_second: 'La Dessalinienne',
      description: 'Утверждён в качестве официального в 1904. Стихи — Жюстен Лериссон. Музыка — Николя Жефрар.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/f_auto,q_auto/v1668592540/RSSchool/song/anthems/haiti.jpg',
      audio: './songs/anthems/haiti-la-dessalinienne.mp3',
      duration: '01:30'
    },
    {
      id: 2,
      name_first: 'Гимн Италии',
      name_second: 'Il Canto degli Italiani',
      description: 'Текст гимна был написан осенью 1847 года Гоффредо Мамели, музыка была написана Микеле Новаро немного позднее. «Песнь итальянцев» де-юре стала национальным гимном только 15 ноября 2017 года.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592540/RSSchool/song/anthems/italy.jpg',
      audio: './songs/anthems/national-anthem-of-italy.mp3',
      duration: '01:30'
    },
    {
      id: 3,
      name_first: 'Гимн Канады',
      name_second: 'O Canada',
      description: 'Так как в стране два государственных языка (английский и французский), есть две официальные версии канадского гимна. На территории Нунавут принята также официальная версия на местном языке инуктитут, которая поётся наряду с английской и французской версиями. ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592540/RSSchool/song/anthems/canada.jpg',
      audio: './songs/anthems/o-canada-national-anthem-song.mp3',
      duration: '01:25'
    },
    {
      id: 4,
      name_first: 'Гимн Польши',
      name_second: 'Mazurek Dąbrowskiego',
      description: 'После раздела Речи Посполитой в 1795 году многие вынуждены были покинуть страну. Генерал-поручик князь Ян Генрик Домбровский собрал эммигрантов и создал Польские легионы, которые по его замыслу, должны были вторгнуться в Польшу и вновь отвоевать независимость. 26 февраля 1927 года «Марш Домбровского» стал государственным гимном Польши.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592540/RSSchool/song/anthems/poland.jpg',
      audio: './songs/anthems/polish-national-anthem.mp3',
      duration: '01:30'
    },
    {
      id: 5,
      name_first: 'Гимн Португалии',
      name_second: 'A Portuguesa ',
      description: 'Официально утверждён в качестве государственного гимна 19 июля 1911.  Текст: Энрике Лопеш де Мендонса. Музыка: Альфредо Кейль.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592541/RSSchool/song/anthems/portugal.jpg',
      audio: './songs/anthems/portuguese-national-anthem-a-portuguesa.mp3',
      duration: '01:30'
    },
    {
      id: 6,
      name_first: 'Гимн Финляндии',
      name_second: 'Maamme',
      description: 'Песня композитора Фредрика Пациуса на слова Йохана Людвига Рунеберга, национальный гимн Финляндии. Официального статуса песня не имеет, поскольку в Конституции Финляндии о национальном гимне ничего не сказано. ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592541/RSSchool/song/anthems/finland.jpg',
      audio: './songs/anthems/finnish-national-anthem-maamme-fien.mp3',
      duration: '01:30'
    }
  ],
  [
    {
      id: 1,
      name_first: 'Крамбамбуля',
      name_second: 'Госцi',
      description: 'Песня «Госці», записанная в дуэте с Михалком («Ляпис Трубецкой»), стала самым известным хитом группы «Крамбамбуля». Стиль группы можно охарактеризовать как поп-рок с ироничными текстами, пародирующими моменты жизни пост-советского общества.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/f_auto,q_auto/v1668592470/RSSchool/song/belarus/krambambula.jpg',
      audio: './songs/belarus/krambambulya-gosci.mp3',
      duration: '01:30'
    },
    {
      id: 2,
      name_first: 'Верасы',
      name_second: 'Калыханка',
      description: 'Музыка Василия Раинчика, слова Генадия Буравкина. Исполняет ВИА «Верасы». Колыбельная, которую знают, пожалуй, все белорусы. Особенно те, чье детство пришлось на 80-е — начало нулевых.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/f_auto,q_auto/v1668592469/RSSchool/song/belarus/kalykhanka.jpg',
      audio: './songs/belarus/via-verasy-kalyxanka.mp3',
      duration: '01:30'
    },
    {
      id: 3,
      name_first: 'Ляпис Трубецкой',
      name_second: 'Ня быць скотам',
      description: 'Песня на слова классика белорусской литературы — Янки Купалы (стихотворение «Хто ты гэткi?»,  1908 г.) Во время выхода песни (2011 г) она стала личным манифестом лидера группы — Сергея Михалка.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592470/RSSchool/song/belarus/michalok.jpg',
      audio: './songs/belarus/lyapis-trubeckoi-ne-byc-skotam.mp3',
      duration: '01:30'
    },
    {
      id: 4,
      name_first: 'Нейро Дюбель',
      name_second: 'Охотник и&nbsp;сайгак',
      description: 'Охотник и сайгак — одна из наиболее известных композиций «Neuro Dubel». Сама группа фактически прекратила существованиe после смерти лидера группы Александра Куллинковича и вокалиста Юрия Наумова.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592469/RSSchool/song/belarus/kulinkovich.jpg',
      audio: './songs/belarus/oxotnik-i-saigak.mp3',
      duration: '01:30'
    },
    {
      id: 5,
      name_first: 'Lavon Volski',
      name_second: 'Тры чарапахі',
      description: 'Одна из самых известных песен Вольского. В 2000 году ее признали лучшей песней года. Если вы не знаете белорусский язык, песня о том, что мир вокруг развивается, а здесь все настолько стабильно, что Земля по прежнему плоская, стоит на черепахах и китах (по крайне мере, по ощущениям автора 22-летней давности).',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592470/RSSchool/song/belarus/volski.jpg',
      audio: './songs/belarus/lavon-volski-try-carapaxi.mp3',
      duration: '01:30'
    },
    {
      id: 6,
      name_first: 'Песняры',
      name_second: 'Малiтва',
      description: 'слова — Янка Купала, музыка — Олег Молчан. Песня стала визитной карточкой ВИА «Песняры» в 90-х годах. ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592470/RSSchool/song/belarus/mulavin.jpg',
      audio: './songs/belarus/molitva-v-mulyavin-pesnyary.mp3',
      duration: '01:30'
    }
  ],
  [
    {
      id: 1,
      name_first: 'Фильм «Не время умирать»',
      name_second: 'Песня «No Time to Die»',
      description: 'Музыка и слова: Билли Айлиш и Финнеас О\’Коннелл. Номинация — 2022 год. Айлиш стала самым молодым исполнителем заглавной темы за всю историю Бондианы. На момент выхода песни певице было 18 лет.',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592514/RSSchool/song/oskar/eilish.jpg',
      audio: './songs/oskar/billie-eilish-no-time-to-die.mp3',
      duration: '01:30'
    },
    {
      id: 2,
      name_first: 'Фильм «Иуда и&nbsp;черный мессия»',
      name_second: 'Песня «Fight for You»',
      description: 'Номинация — 2021 год. Песня американской хип-хоп певицы и автора песен Габриэллы Уилсон, известной под сценическим именем H.E.R.  (это акроним от Having Everything Revealed («все будет раскрыто»)).',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592514/RSSchool/song/oskar/h.e.r.jpg',
      audio: './songs/oskar/her-fight-for-you-from-the-original-motion-picture-judas-and-the-black-messiah.mp3',
      duration: '01:30'
    },
    {
      id: 3,
      name_first: 'Фильм «Миллионер из&nbsp;трущоб»',
      name_second: 'Песня «Jai Ho»',
      description: 'музыка: А.Р.Рахман, слова: Гулзар. Номинация — 2009 год. ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592514/RSSchool/song/oskar/jai.jpg',
      audio: './songs/oskar/jai-ho-lyrical-video-slumdog-millionaire.mp3',
      duration: '01:30'
    },
    {
      id: 4,
      name_first: 'Фильм «Вундер&shy;кинды»',
      name_second: 'Песня  «Things Have Changed»',
      description: 'Номинация — 2001 год. Музыка и слова: Боб Дилан. За эту песню Дилан также получил «Золотой Глобус». ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592514/RSSchool/song/oskar/dylan.jpg',
      audio: './songs/oskar/bob-dylan-things-have-changed.mp3',
      duration: '01:30'
    },
    {
      id: 5,
      name_first: 'Фильм «Завтрак у&nbsp;Тифанни»',
      name_second: 'Песня «Moon River»',
      description: 'Песня Генри Манчини на слова Джонни Мерсера. Была исполнена Одри Хепбёрн в фильме «Завтрак у Тиффани» и была удостоена премии «Оскар» за лучшую песню к фильму (1962), премии «Грэмми» за лучшую запись года (1962) и премии «Грэмми» за лучшую песню года (1962). ',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592514/RSSchool/song/oskar/moonriver.jpg',
      audio: './songs/oskar/audrey-hepburn-moon-river.mp3',
      duration: '01:30'
    },
    {
      id: 6,
      name_first: 'Фильм «Деловая девушка»',
      name_second: 'Песня «Let the River Run»',
      description: 'Номинация — 1989 года. Песня, написанная и исполненная американской певицей Карли Саймон. Помимо «Оскара» песня была удостоена «Грэмми» и «Золотого Глобуса».',
      image: 'https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1668592514/RSSchool/song/oskar/simon.jpg',
      audio: './songs/oskar/let-the-river-run-carly-simon.mp3',
      duration: '01:30'
    }
  ]
]

export default gameData;