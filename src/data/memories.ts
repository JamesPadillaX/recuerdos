import { MemoryPage, PhotoItem } from '../types';

export const COLLAGE_PHOTOS: PhotoItem[] = [
  { id: 'c-1', url: '/images/12.png' },
  { id: 'c-2', url: '/images/23.png' },
  { id: 'c-3', url: '/images/22.png' },
  { id: 'c-4', url: '/images/14.png' },
  { id: 'c-5', url: '/images/24.png' },
  { id: 'c-6', url: '/images/9.png' },
  { id: 'c-7', url: '/images/17.png' },
  { id: 'c-8', url: '/images/26.png' },
  { id: 'c-9', url: '/images/21.png' },
  { id: 'c-10', url: '/images/31.png' },
  { id: 'c-11', url: '/images/32.png' },
  
  // Añade aquí más fotos para el collage. Solo copia una línea y cambia el nombre (ej. 8.png)
];
export const INITIAL_MEMORIES: MemoryPage[] = [
  {
    id: 'page-1',
    pageNumber: 'PÁGINA 01',
    date: '27 DE AGOSTO DE 2024',
    monthKey: 'AGO 2024',
    title: 'El comienzo',
    subtitle: 'Donde todo cruzó su camino',
    location: 'H & M y el cine',
    photos: [
      {
        id: 'p1-1',
        url: '/images/7.png',
        caption: 'Un sábado inesperado',
        rotation: -1.8,
        alt: 'Nuestra primera salida'
      },
      {
        id: 'p1-2',
        url: '/images/6.png',
        caption: 'Tus hermosos ojos',
        rotation: 1.5,
        alt: 'Recuerdos de aquel día'
      }
    ],
    storyText: `Todo comenzó un sábado, todo fue tan inesperado, no pensé que ese día te encontraría y te amaría con toda mi alma, incluso te lo dije porque no pensaba ir, porque mi perro se había enfermando, incluso lo lleve al veterinario una hora antes de verte, no me arrepiento de nada, solamente de haberte perdido, la impresión que me lleve de ti, son tus hermosos ojos, en ese momento no lo sabía, pero más adelante, aunque no te lo dije, me hubiera gustado tener dos hijos con tus lindos ojos. Aunque el inicio fue el 29 de julio cuando por primera vez entraste al servidor de discord.\n\nEl martes 27 de agosto, salimos por primera vez, te vi cuando llegaste a H y M, y te observe por unos minutos, recuerdo incluso tu vestimenta, un pantalón con cuadros con un top blanco, y una polera amarilla, vimos la película del cuervo y después de comer, te dije si quieres ser mi enamorada, no fue de la mejor manera, pero es un recuerdo que siempre llevare.`,
    quote: 'No me arrepiento de nada, solamente de haberte perdido.'
  },
  {
    id: 'page-2',
    pageNumber: 'PÁGINA 02',
    date: 'SEPTIEMBRE DE 2024',
    monthKey: 'SEPTIEMBRE DE 2024',
    title: 'Los primeros recuerdos',
    subtitle: 'Risas compartidas',

    photos: [
      {
        id: 'p2-1',
        url: '/images/6.png',
        caption: 'El otoño comenzaba a transformar los árboles',
        rotation: 2.1,
        alt: 'Camino de hojas secas al atardecer'
      },
      
      {
        id: 'p2-2',
        url: '/images/33.png',
        caption: 'El otoño comenzaba a transformar los árboles',
        rotation: 2.1,
        alt: 'Camino de hojas secas al atardecer'
      }
    ],
    storyText: `Este mes fue increible para mi te regale flores por primera vez, no tengo fotos de eso, porque a mi no me gustaban las fotos, aunque al final termine amandolas porque solo aparecias tu, de igual manera son recuerdos que nunca olvidare, cuando te las entregue, incluso cuando las compre porque no habia hecho nunca eso, recuerdo incluso que le pedi ayuda a un chico
    y me dio el lugar donde las compro, te lo habia comentado despues de cenar.
    \n\n Tantas experiencias, incluso tu amiga nos tomo una foto y me la enseñaste, la cual editaste para subir a nuestros 
    estados, seguramente tu no lo recuerdas, pero yo recuerdo absolutamente todo, cuando te iba a ver a la universidad, me fui de viaje por una semana, cuando llegue 
    eras lo primero que queria ver, recuerdo que llegue meti mi ropa a mi cuarto, me bañe y sali 
    a verte como quedamos, estabas con el mismo outfit rosado, que aparece en las fotos de esta seccion.
    Te amo Jami.
    \n\n Tambien cuando fuimos a panda los juegos mecanicos, subimos en el carrusel, en el juego de que nos hacia girar, saliste mareada, te deseo lo mejor.
     \n\n No recuerdo el dia, pero fue la primera vez que te vi comer tu carrot cake.`,
    quote: 'Te deseo lo mejor, amor.'
  },
  {
    id: 'page-3',
    pageNumber: 'PÁGINA 03',
    date: 'OCTUBRE DE 2024',
    monthKey: 'OCTUBRE DE 2024',
    title: 'Muchas anectotas',
    subtitle: 'El viento frío y el calor de tu compañía',
    photos: [
      {
        id: 'p3-1',
        url: '/images/34.png',
        rotation: -1.5,
        alt: 'Tarde de octubre con hojas secas'
      },
      {
        id: 'p3-1',
        url: '/images/2.png',
        rotation: -1.5,
        alt: 'Tarde de octubre con hojas secas'
      },
    ],
    storyText: `Octubre un mes con muchas cosas vividas, como cuando te subi a mi historia de tik tok
    salidas, peliculas, te visite por primera vez en pimentel, estabas igualmente vestida con tu outfit rosado, inolvidable, caminamos por el muelle, te tome fotos, pero esta en mi anterior celular, recuperare eso.
    \n\n Halloween, recuerdo eso porque no celebramos el mismo 31, fue un viernes, porque recuerdo que me escape
    del cumpleaños de una hermana de comunidad, nos vestimos de unos escolares que no recuerdo el nombre,
    fue en la casa de tu amiga, hablamos, incluso te hice un chupeton, odio mi cabeza por recordar todo,
    sabiendo que ya me olvidaste.
    \n\n Tambien recuerdo que el 31 por la noche vimos peliculas de terror hasta la madrugada, me hubiera gustado que fuera juntos
    pero como soy un cobarde, nunca exprese todo lo que sentia por ti y de igual manera esas cosas que me hubieran gustado hacer.`,
    quote: 'Se feliz, nunca dejes de sonreir, tienes unos ojos hermosos'
  },
  {
    id: 'page-4',
    pageNumber: 'PÁGINA 04',
    date: 'NOVIEMBRE DE 2024',
    monthKey: 'NOVIEMBRE DE 2024',
    title: 'Conversaciones al atardecer',
    subtitle: 'Noches largas de confidencias',
    photos: [
      {
        id: 'p4-1',
        url: '/images/35.png',
        caption: 'El horizonte al caer la noche',
        rotation: -1.2,
        alt: 'Vista nocturna de la costa con luces suaves'
      },
      {
        id: 'p4-2',
        url: '/images/29.png',
        caption: 'Momentos congelados en el tiempo',
        rotation: 1.8,
        alt: 'Fotografía analógica de paisaje'
      }
    ],
    storyText: `Este mes no recuerdo mucho, pero la pasamos bien, cuando me acompañaste a comprar el collar para mi perro raiden,
    tambien cuando coincidimos en la playa, tu con tus amigas y yo con mi comunidad, si te habia dicho que iba a ir,
    te vi caminando, te llame y te bese, recuerdo ese lindo vestido y lo hermosa que estabas con esas pantunflas de oso polar.
    \n\n Quiero tomar este espacio, para decirte que te quiero mucho, cuenta conmigo, aunque sea la ultima persona en la que pienses,
    lamento no haber sido esa persona en la que confiaras y lo peor, no haber sanado tu pasado,
    estudia que lo que te gusta, siempre te lo dije, que en 2027 te iba a ayudar cuando termine la universidad,
    que te iba a mantener y tu te reias, cuidate mucho, aprendi a vivir por ti, me sacaste de mi soledad que tenia
    y ese vacio por el que pasaba, porque te lo conte, hice cosas que nunca pense hacer, gracias por sacar esa personalidad,
    aunque no fui lo sufiente valiente para expresarte todo lo que te amo, por ser un cobarde, eres increible Jami, me encanta 
    lo fria que aveces eras, pero aun asi te elegi para que seas tú, incluso se venian pensamientos de casarnos y tener hijos, cuando siempre he dicho, que no haria eso,
    el hubiera no existe, si no esto no se llamaria vida, cuidate mucho.`,
    quote: 'Te quiero mucho'
  },
  {
    id: 'page-5',
    pageNumber: 'PÁGINA 05',
    date: 'DICIEMBRE DE 2024',
    monthKey: 'DICIEMBRE DE 2024',
    title: 'Luces de fin de año',
    subtitle: 'La calidez en el mes más frío',
    photos: [
      {
        id: 'p5-1',
        url: '/images/15.png',
        caption: 'Luces navideñas y frío compartido',
        rotation: 1.0,
        alt: 'Luces parpadeantes en la noche'
      },
            {
        id: 'p5-1',
        url: '/images/25.png',
        caption: 'Luces navideñas y frío compartido',
        rotation: 1.0,
        alt: 'Luces parpadeantes en la noche'
      }
    ],
    storyText: `El fin de uno de los mejores años de mi vida, lamento no haber hecho esa casita de jengibre,
    aunque nunca te lo dije, este mes y dos meses siguiente del 2025, fue cuando peor la pase monetariamente,
    pero aun asi recuerdo haberte regalado una cartera negra, que nunca te vi usar, porque despues de unos meses dejaste usar carteras,
    aunque creo que si me mandaste una foto cuando estabas en la u y la llevaste. Queria que el 2026 sea diferente
    pasar estas fechas como deben de ser y crear recuerdos valiosos de la vida, no se pudo pero igual,
    fue el primer año que pase con una pareja, nunca habia experimentado todo eso de los meses, estaba enamorado, incluso tu me comenzaste a llamar cariño,
    y de igual manera yo comence hacerlo, hasta que un punto me llamaste amor y yo tambien lo dije. Te amo Jami, con todo mi corazon, ojala encontrar y hablar todo esto alguna vez
    ya no guardo esperanza de volver a ti, pero al menos de hablar las cosas en persona que nunca hablamos.
    \n\n Recuerdo comer un paneton y tasa de chocolate en el segundo piso del mall, porque soy un estupido y no hice las cosas bien,
    siempre me marcara el dicho de aprender a valorar las cosas despues de haberlas perdido, te amo.
    \n\n Fueron de las pocas navidades que pase feliz, porque estabas tu, no cerca a mi, pero lo estabas,
    sigo siendo un resentido porque nunca con mi familia pase algo bonito, aunque suene como excusa.`,
    quote: 'Gracias por tu cariño'
  },
  {
    id: 'page-6',
    pageNumber: 'PÁGINA 06',
    date: 'ENERO DE 2025',
    monthKey: 'ENERO DE 2025',
    title: 'Te amo',
    photos: [
      {
        id: 'p6-1',
        url: '/images/28.png',
        caption: 'Las colinas heladas de aquel frío enero',
        rotation: 2.0,
        alt: 'Montañas nevadas con cielo azul profundo'
      },
      {
        id: 'p6-2',
        url: '/images/11.png',
        caption: 'Luces cálidas al final de la jornada',
        rotation: -2.2,
        alt: 'Refugio acogedor con chimenea'
      }
    ],
    storyText: `De este mes tampoco recuerdo mucho, seguramente fue porque fue el peor mes economicamente hablando,
    nunca te lo dije porque no eres de las chicas que exigian tanto, pero a mi siempre me gusto darte lo mejor, aunque en ese tiempo todavia no podia,
    no saliamos a restaurantes bonitos porque como no tenia tanto dinero, preferia no verte, que pasar verguenza, siempre fui de la idea de que el hombre debe de pagar, 
    espero me entiendas, pero si recuerdo que lo ultimo de dinero me meti a un curso de programacion, para saber las bases y hacer lo que tu ya sabes de los siguientes meses.
    \n\n Te amo mucho Jami, espero no te lleves lo mal de mi y tambien las experiencias que yo tomo como bonitos recuerdos. `,
    quote: 'Odio no poder abrazarte nunca mas, era tan calido como ver tu sonrisa'
  },
  {
    id: 'page-7',
    pageNumber: 'PÁGINA 07',
    date: 'FEBRERO DE 2025',
    monthKey: 'FEBRERO DE 2025',
    title: 'Detalles cotidianos',
    subtitle: 'El valor de lo sencillo',
    location: 'Mayascon',
    photos: [
      {
        id: 'p7-1',
        url: '/images/36.png',
        caption: 'Dos tazas y un par de risas',
        rotation: -1.3,
        alt: 'Dos tazas de café sobre mesa de madera'
      }
    ],
    storyText: `Recuerdo cuando llegaste a mi casa por primera vez, fue algo loco y tonto de mi parte, te dije que estaba solo y podias venir,
    tu llegaste aunque no pensaba si ibas a venir, antes limpie y heche demasiado clorox, porque tu lo notaste, vimos peliculas, los snacks que trajiste, una galletas, se hicieron cosas claramente,
    fue la primera vez que dormimos, y me acabo de recordardar cuando en septiembre de la nada dijiste, hay que dormir juntos jaja, que bonito recuerdo,
    despues de dormir en la madrugada llego mi papa de viaje, me levantaste, todo fue rapido, pidi un taxi y te fuiste a casa, lo recuerdo porque por ti descargue indriver,
    y ahi estan mis solicitudes fue un 13 de febrero, ese mes tambien llegaste mas veces, y dormimos juntos, cosas que todavia me martiriza porque paro encerrado en mi cuarto
    solo pero con un vacio mas fuerte, tu ya no estas aqui.
    \n\n Dias despues de la primera vez de dormir juntos fui a verte, para ir a la playa, si recuerdo eso, saliste con un vestido y unas chanclas, recuerdo todo, mi memoria es media rara jajaja,
    te dije para meternos, a ti nunca te gusto, me lo comentaste pero aun asi te preste mi short que lleve para el regreso y mi polo, y asi te metiste,
    esa ropa la tengo ahi, ya no la voy a usar, te quiero.
    \n\n Nuestro primer viaje juntos, fuimos a Mayascon por nuestro aniversario, no supe de donde saque dinero pero lo hice, viajamos, la caminata de 30 minutos, recuerdo que me tomaste una foto de espalda y lo subiste a tu estado.
    nos tomamos fotos en la cara del mono, esas fotos las debes de tener tu, si es que no las borraste, y tambien estan en mi celular de ese tiempo, lo tengo que arreglar.
    Recuerdo que llevaste cartera, y como el camino para llegar a la ultima laguna era subir escalera y pasar por lugares estrechos,
    me la puse en mi cuello para llegar a la ultima laguna, nos bañamos, claramente con medidas de seguridad, luego bajamos
    a comer, nos cambiamos en el baño de la casa de la señora que nos iba a dar el almuerzo, tenias un polo marron,
    mi memoria recuerda todo, cuando pasaste al baño y me dijiste entra, nos cambiamos juntos.
    Llegamos cansados, en el carro para pimentel me dormi, me levantaste y te deje en tu casa.
    algo bonito que no olvidare.`,
    quote: 'Siempre quiero verte feliz.'
  },
  {
    id: 'page-8',
    pageNumber: 'PÁGINA 08',
    date: 'MARZO DE 2025',
    monthKey: 'MARZO DE 2025',
    title: 'Tu cumpleaños, lamento no haber sido especial',
    location: 'El parque de los cerezos',
    photos: [
      {
        id: 'p8-1',
        url: '/images/37.png',
        caption: 'La foto no es la misma, pero es de la misma empresa',
        rotation: 1.5,
        alt: 'La foto no es la misma, pero es de la misma empresa que compre para 2026'
      }
    ],
    storyText: `Un mes importante para mi, ya que el 22 de marzo fue tu cumpleaños, antes de conocerte el 27 de agosto, hablamos de cuando era tu cumpleaños,
    me lo dijiste 22 de marzo, guarde esa captura y nunca se me olvido de mi cabeza. Lo unico que lamento es no haberte dado ese cumpleaños que siempre quise
    solamente te lleve flores, para ser mas detallista fueron rosas rojas en Luna cix lo compre, te las entregue y cuando abrio la puerta fue tu primita, fue la primera vez que la vi. Cuando digo que recuerdo todo es todo
    literalmente, no tuve el caracter suficiente para planear algo, pero fuimos a cenar, te deje en tu casa y al momento de regresarme por el camino encontre a tu madre, tia y prima, 
    te lo comente y nos reimos jaja. 
    \n\n Tambien recuerdo este mes porque al inicio llegabas por mi casa, para que ensayaras con tu amiga
    para el tema del aniversario, aunque al final fue cancelado.
    \n\n finales de mes me comenzo a ir bien y el siguiente mes es donde comenzamos a salir con mas frecuencia y seguimos con otro viaje a Tucume, no eran los mejores lugares
    pero espero la pasaras biem. Te amo mucho.
    \n\n La foto es referencial, pero es de la misma tienda donde las compre.`,
    quote: 'Algun dia cumplire lo de tu cumpleaños.'
  },
  {
    id: 'page-9',
    pageNumber: 'PÁGINA 09',
    date: 'ABRIL DE 2025',
    monthKey: 'ABRIL DE 2025',
    title: 'El mejor mes de mi vida',
    subtitle: 'Refugiándonos bajo el mismo paraguas',
    location: 'Paseo bajo la lluvia',
    photos: [
      {
        id: 'p9-1',
        url: '/images/38.png',
        rotation: -2.0,
        alt: 'Gotas de lluvia brillando en las hojas'
      }, 
            {
        id: 'p9-1',
        url: '/images/39.png',
        rotation: -2.0,
        alt: 'Gotas de lluvia brillando en las hojas'
      },
                  {
        id: 'p9-1',
        url: '/images/40.png',
        rotation: -2.0,
        alt: 'Gotas de lluvia brillando en las hojas'
      },
                  {
        id: 'p9-1',
        url: '/images/10.png',
        rotation: -2.0,
        alt: 'Gotas de lluvia brillando en las hojas'
      },
                        {
        id: 'p9-1',
        url: '/images/9.png',
        rotation: -2.0,
        alt: 'Gotas de lluvia brillando en las hojas'
      },
                        {
        id: 'p9-1',
        url: '/images/11.png',
        rotation: -2.0,
        alt: 'Gotas de lluvia brillando en las hojas'
      },
                        {
        id: 'p9-1',
        url: '/images/12.png',
        rotation: -2.0,
        alt: 'Gotas de lluvia brillando en las hojas'
      },
      
      
    ],
    storyText: `Abril el mejor mes de mi vida, de mi existencia a mis 21 años, gracias por hacerme feliz Jami, gracias por hacerme sentir que estaba vivo.
    \n\n Las primeras semanas no salimos mucho porque no tenia celular, pero me fue mejor, comence a ganar dinero, vi resultados, vendi mi canal para tener capital y comenzar, en rubro diferente, eso nunca te lo comente.
    Espere a que mis padres me compraran como regalo, tu venias a verme al parque de mi casa.
    \n\n Fue el mejor cumpleaños que vivi, sabes porque te tenia a ti, recuerdo que me llevaste a ver una pelicula de romance, no recuerdo el nombre pero antes de eso me regalaste como sorpresa un muñeco de spiderman,
    nadie habia hecho nada por mi, como sorpresa, en mis cumpleaños siempre la pasaba solo en mi cuarto, nunca me gusto celebrarlo por circustancias de mi padre, aunque años anteriores no habian problemas, quede con la frustracion de niño.
    Me sali del tema pero ese regalo me hizo feliz, me comentaste que antes de salir de clases o de bailar de la universidad si no mas recuerdo, fuiste con una amiga a comprar,
    incluso recuerdo como estabas vestida, con una casaca negra, y el peculiar pantalon rojo con botas negras, siempre te lo dije que observaba lo minimo, y recuerdo todo eso.
    Luego fuimos a comer unos frappes y tu carrot cake, se me vino a la mente momentos de septiembre la primera vez que comiste carrot cake.
    \n\n Fui la persona mas feliz ese dia, aun tengo aca el spiderman y me hace acordar a ti, ya no tengo tanta tristeza, tengo que vivir con lo aprendido y lo feliz que fui contigo.
    \n\n Tambien viajamos el 20 de abril por segunda vez a Tucume, pasamos momentos inolvidables, tengo los videos, las fotos, cuando subimos el cerro, me tomaste fotos, nos tomamos fotos,
    recuedo cuando te enojaste porque alce mi voz a la señora donde comimos, pero luego en el camino de regreso nos abrazamos, eres muy sencible a pesar de tratar de ocultar tus sentimientos.
    Te quiero mucho Jami, no quiero olvidarte, quiero aprender de lo vivido, ojala todo fuera diferente. 
    \n\n Posdata, este año fui, incluso te mande el video por el camino donde pasamos, y te dije recuerdos de vietnam, lo hermosa que te veias,
    aunque te reiste, te quiero mucho, te extraño.`,
    quote: 'Se feliz Jami'
  },
  {
    id: 'page-10',
    pageNumber: 'PÁGINA 10',
    date: 'MAYO DE 2025',
    monthKey: 'MAYO DE 2025',
    title: 'Promesas sin palabras',
    subtitle: 'Primavera, miradas y complicidad',
    location: 'Jardín botánico en flor',
    photos: [
      {
        id: 'p10_1',
        url: '/images/p10_1.jpg',
        caption: 'Flores de mayo bañadas por el sol',
        rotation: -1.0,
        alt: 'Flores primaverales con desenfoque poético'
      }
    ],
    storyText: `La primavera trajo consigo una calma luminosa. Para entonces, ya nos entendíamos con una sola mirada. Había una ternura madura e incondicional en la forma en que nos acompañábamos en los momentos alegres y en los días difíciles.\n\nGuardará siempre en mi memoria la forma en que tu risa iluminaba los espacios y la certeza de que, pasara lo que pasara, esos momentos tenían una belleza limpia y duradera.`,
    quote: 'Hay gestos que dicen más que cualquier discurso y miradas que quedan grabadas para siempre.'
  },
  {
    id: 'page-11',
    pageNumber: 'PÁGINA 11',
    date: 'JUNIO DE 2025',
    monthKey: 'JUNIO DE 2025',
    title: 'Solsticio de verano',
    subtitle: 'Los días más largos del año',
    location: 'El atardecer desde el cerro',
    photos: [
      {
        id: 'p11_1',
        url: '/images/p11_1.jpg',
        caption: 'El cielo pintado de tonos naranjas',
        rotation: 1.2,
        alt: 'Cielo al atardecer sobre la silueta urbana'
      }
    ],
    storyText: `Junio nos regaló tardes que parecían eternas. Aprovechamos la luz extendida para sentarnos a conversar sin mirar el reloj, viendo cómo la noche tardaba en llegar y sintiendo la promesa de un verano lleno de planes por compartir.`,
    quote: 'Los días de verano son para coleccionar momentos que duren todo el invierno.'
  },
  {
    id: 'page-12',
    pageNumber: 'PÁGINA 12',
    date: 'JULIO DE 2025',
    monthKey: 'JULIO DE 2025',
    title: 'Escapadas bajo el sol',
    subtitle: 'La frescura del mar y la arena',
    location: 'La costa brava',
    photos: [
      {
        id: 'p12_1',
        url: '/images/p12_1.jpg',
        caption: 'El azul infinito del mar',
        rotation: -1.8,
        alt: 'Océano azul y espuma blanca'
      },
      {
        id: 'p12_2',
        url: '/images/p12_2.jpg',
        caption: 'Arena dorada bajo nuestros pies',
        rotation: 1.4,
        alt: 'Playa solitaria y tranquila'
      }
    ],
    storyText: `En julio decidimos escapar del calor de la ciudad hacia la costa. La brisa marina, el sonido constante de las olas y las caminatas descalzos por la arena húmeda nos recordaron lo importante que es desconectar para conectar verdaderamente entre nosotros.`,
    quote: 'Frente al mar la vida es diferente; el tiempo parece detenerse.'
  },
  {
    id: 'page-13',
    pageNumber: 'PÁGINA 13',
    date: 'AGOSTO DE 2025',
    monthKey: 'AGOSTO DE 2025',
    title: 'Un año después',
    subtitle: 'El atardecer en la costa',
    location: 'Acantilado junto al mar',
    photos: [
      {
        id: 'p13_1',
        url: '/images/p13_1.jpg',
        caption: 'Un año entero reflejado en el mar',
        rotation: 1.4,
        alt: 'Atardecer dorado sobre el océano'
      },
      {
        id: 'p13_2',
        url: '/images/p13_2.jpg',
        caption: 'Huellas en la arena húmeda',
        rotation: -1.6,
        alt: 'Huellas en la playa al atardecer'
      }
    ],
    storyText: `Celebrar un año desde aquel primer café fue un recordatorio del camino recorrido. Miramos atrás y vimos todas las estaciones compartidas, las historias acumuladas, los aprendizajes mutuos y el cariño sincero que se había consolidado.\n\nEl viento marino de agosto traía esa mezcla nostalgia y calma, sabiendo que lo que habíamos vivido juntos era auténtico, valioso e inolvidable.`,
    quote: 'El tiempo no mide el valor de los momentos; lo mide la huella que dejan en el alma.'
  },
  {
    id: 'page-14',
    pageNumber: 'PÁGINA 14',
    date: 'SEPTIEMBRE DE 2025',
    monthKey: 'SEPTIEMBRE DE 2025',
    title: 'Nuevos comienzos',
    subtitle: 'El ciclo que se renueva',
    location: 'Las cafeterías acogedoras',
    photos: [
      {
        id: 'p14_1',
        url: '/images/p14_1.jpg',
        caption: 'La luz de una nueva temporada',
        rotation: -1.1,
        alt: 'Interior de cafetería con luz suave'
      }
    ],
    storyText: `Septiembre de 2025 llegó con nuevos proyectos y metas personales para ambos. A pesar de los días más ocupados, encontramos en el otro el espacio perfecto para descansar, compartir los logros y apoyarnos en las dificultades cotidianas.`,
    quote: 'El mayor apoyo no es el que te soluciona las cosas, sino el que te acompaña a cruzarlas.'
  },
  {
    id: 'page-15',
    pageNumber: 'PÁGINA 15',
    date: 'OCTUBRE DE 2025',
    monthKey: 'OCTUBRE DE 2025',
    title: 'El viento de octubre',
    subtitle: 'Nuestros cafés eternos',
    location: 'El rincón de la ventana',
    photos: [
      {
        id: 'p15_1',
        url: '/images/p15_1.jpg',
        caption: 'Taza caliente y hojas secas afuera',
        rotation: 1.6,
        alt: 'Taza humeante frente a una ventana'
      }
    ],
    storyText: `El aire se volvió fresco de nuevo al llegar octubre. Nos encantaba sentarnos al lado de las grandes ventanas de los cafés a observar el ritmo de la ciudad mientras conversábamos sobre todo y nada, compartiendo ideas que reforzaban nuestra complicidad.`,
    quote: 'Agradecer lo que se tiene es el secreto para recibir lo que se anhela.'
  },
  {
    id: 'page-16',
    pageNumber: 'PÁGINA 16',
    date: 'NOVIEMBRE DE 2025',
    monthKey: 'NOVIEMBRE DE 2025',
    title: 'Días de lluvia y café',
    subtitle: 'La belleza de lo cotidiano',
    location: 'Nuestra librería favorita',
    photos: [
      {
        id: 'p16_1',
        url: '/images/p16_1.jpg',
        caption: 'Lluvia en los cristales y libros antiguos',
        rotation: -1.5,
        alt: 'Gotas de lluvia en ventana con libros de fondo'
      }
    ],
    storyText: `Noviembre volvió con sus tardes lluviosas. Nos gustaba refugiarnos entre los pasillos de libros antiguos, buscando historias perdidas mientras afuera la ciudad se aceleraba.\n\nEn la sencillez de esos días comprendí que la elegancia de nuestra historia radicaba en la paz que encontrábamos al estar cerca, en el respeto mutuo y en la generosidad de compartir la vida sin exigencias.`,
    quote: 'La auténtica complicidad no necesita grandes escenarios, solo la presencia sincera de quien aprecias.'
  },
  {
    id: 'page-17',
    pageNumber: 'PÁGINA 17',
    date: 'DICIEMBRE DE 2025',
    monthKey: 'DICIEMBRE DE 2025',
    title: 'El fin de año juntos',
    subtitle: 'Cerrando otro año de recuerdos',
    location: 'El mirador iluminado',
    photos: [
      {
        id: 'p17_1',
        url: '/images/p17_1.jpg',
        caption: 'El destello de las luces nocturnas',
        rotation: -1.2,
        alt: 'Luces nocturnas de la ciudad desde la altura'
      }
    ],
    storyText: `Despedimos el 2025 con la tranquilidad de haber vivido plenamente y con el corazón lleno de momentos compartidos. Nos dimos cuenta de lo mucho que habíamos aprendido y crecido juntos en este camino.`,
    quote: 'No contamos los años, contamos los recuerdos que nos hicieron sonreír.'
  },
  {
    id: 'page-18',
    pageNumber: 'PÁGINA 18',
    date: 'ENERO DE 2026',
    monthKey: 'ENERO DE 2026',
    title: 'La tranquilidad de lo vivido',
    subtitle: 'Mirar atrás con el corazón lleno',
    location: 'Paseo al anochecer',
    photos: [
      {
        id: 'p18_1',
        url: '/images/p18_1.jpg',
        caption: 'Cielo estrellado de invierno',
        rotation: 1.2,
        alt: 'Noche estrellada sobre paisaje en calma'
      }
    ],
    storyText: `Al iniciar el 2026, la perspectiva del tiempo nos mostró que las cosas cambian, que las etapas se transforman, pero que el afecto verdadero permanece intacto.\n\nPoder recordar cada capítulo con una sonrisa serena es una de las mayores satisfacciones. No hay lugar para los reproches ni el pesar; solo queda una inmensa gratitud por haber tenido el privilegio de caminar a tu lado.`,
    quote: 'Agradecer lo que fue es la forma más noble de honrar el tiempo compartido.'
  },
  {
    id: 'page-19',
    pageNumber: 'PÁGINA 19',
    date: 'FEBRERO DE 2026',
    monthKey: 'FEBRERO DE 2026',
    title: 'El último capítulo',
    subtitle: 'Cerrando con gratitud y elegancia',
    photos: [
      {
        id: 'p19_1',
        url: '/images/p19_1.jpg',
        caption: 'Tinta, papel y memorias imperecederas',
        rotation: -0.8,
        alt: 'Cuaderno antiguo con pluma estilográfica'
      }
    ],
    storyText: '',
    quote: '',
    isSpecialFinal: true,
    specialLetter: {
      title: 'Antes de cerrar este álbum...',
      paragraphs: [
        'Hay historias que no necesitan ser eternas en el tiempo para ser infinitas en el corazón. Cuando miro hacia atrás y recorro cada una de estas fechas, desde aquel cálido agosto de 2024 hasta este febrero de 2026, no puedo sentir más que una profunda serenidad y un sincero agradecimiento.',
        'Gracias por tus palabras cuando hicieron falta, por tu risa limpia en las tardes más grises, por los silencios compartidos que jamás resultaron incómodos y por la luz que aportaste a mi vida durante todo este tiempo.',
        'Fue un viaje hermoso, lleno de momentos reales, aprendizajes profundos y recuerdos que conservaré siempre en un lugar muy especial. Deseo con el alma que la vida te devuelva multiplicada toda la calidez, la alegría y la belleza que le regalaste a la mía.'
      ],
      thanksText: 'Gracias por formar parte de una parte de mi historia.',
      finalPhotoUrl: '/images/final.jpg',
      finalPhotoCaption: 'Para siempre en el recuerdo',
      yearsRange: 'Agosto 2024 — Febrero 2026',
      closingQuote: 'Algunas historias terminan, pero ciertos recuerdos siempre encuentran la manera de quedarse.'
    }
  }
];
