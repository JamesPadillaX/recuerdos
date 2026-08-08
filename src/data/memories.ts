import { MemoryPage } from '../types';

export const INITIAL_MEMORIES: MemoryPage[] = [
  {
    id: 'page-1',
    pageNumber: 'PÁGINA 01',
    date: '27 DE AGOSTO DE 2024',
    monthKey: 'AGO 2024',
    title: 'El comienzo',
    subtitle: 'Donde todo cruzó su camino',
    location: 'El pequeño café de la esquina',
    photos: [
      {
        id: 'p1-1',
        url: '/images/p1_1.jpg',
        caption: 'La luz de aquella tarde de agosto',
        rotation: -1.8,
        alt: 'Café con luz cálida de tarde'
      },
      {
        id: 'p1-2',
        url: '/images/p1_2.jpg',
        caption: 'Tu primera sonrisa sin prisa',
        rotation: 1.5,
        alt: 'Retrato con luz natural cálida'
      }
    ],
    storyText: `Aquella tarde de finales de agosto el calor empezaba a ceder y la luz del atardecer teñía la ciudad con tonos dorados. No sabíamos que un encuentro aparentemente fortuito se convertiría en el punto de partida de algo tan incalculable.\n\nRecuerdo con total claridad cómo la conversación fluyó sin esfuerzo alguno, como si nos conociéramos de toda la vida pero con la emoción intacta de descubrirnos por primera vez. Había una serenidad distinta en tu forma de mirar y una calma que de inmediato me hizo sentir en casa.`,
    quote: 'Hay comienzos que parecen pequeños, pero terminan significándolo todo.'
  },
  {
    id: 'page-2',
    pageNumber: 'PÁGINA 02',
    date: 'SEPTIEMBRE DE 2024',
    monthKey: 'SEPTIEMBRE DE 2024',
    title: 'Los primeros recuerdos',
    subtitle: 'Risas compartidas en el parque',
    location: 'Paseo bajo los árboles dorados',
    photos: [
      {
        id: 'p2-1',
        url: '/images/p2_1.jpg',
        caption: 'El otoño comenzaba a transformar los árboles',
        rotation: 2.1,
        alt: 'Camino de hojas secas al atardecer'
      }
    ],
    storyText: `Septiembre trajo consigo las primeras caminatas interminables sin destino fijo. Aprendimos a descifrar los silencios cómodos, las anécdotas de la infancia y las canciones que definían nuestros días.\n\nCada detalle, por simple que pareciera —compartir un café para llevar, caminar bajo las primeras hojas caídas o reírnos de cualquier tontería— empezaba a construir una complicidad única que guardo con enorme gratitud.`,
    quote: 'A veces los momentos más sencillos son los que dejan las huellas más profundas.'
  },
  {
    id: 'page-3',
    pageNumber: 'PÁGINA 03',
    date: 'OCTUBRE DE 2024',
    monthKey: 'OCTUBRE DE 2024',
    title: 'Tardes otoñales',
    subtitle: 'El viento frío y el calor de tu compañía',
    location: 'Las calles del centro histórico',
    photos: [
      {
        id: 'p3-1',
        url: '/images/p3_1.jpg',
        caption: 'La luz dorada de octubre filtrándose',
        rotation: -1.5,
        alt: 'Tarde de octubre con hojas secas'
      }
    ],
    storyText: `Con la llegada de octubre, los días se hicieron más cortos y el aire más fresco. Sin embargo, caminar a tu lado hacía que cualquier tarde fría se sintiera perfectamente cálida. Descubrimos pequeños rincones de la ciudad que pronto se convertirían en nuestros lugares favoritos.`,
    quote: 'El otoño es una segunda primavera donde cada hoja es una flor.'
  },
  {
    id: 'page-4',
    pageNumber: 'PÁGINA 04',
    date: 'NOVIEMBRE DE 2024',
    monthKey: 'NOVIEMBRE DE 2024',
    title: 'Conversaciones al atardecer',
    subtitle: 'Noches largas de confidencias',
    location: 'El mirador de la ciudad',
    photos: [
      {
        id: 'p4-1',
        url: '/images/p4_1.jpg',
        caption: 'El horizonte al caer la noche',
        rotation: -1.2,
        alt: 'Vista nocturna de la costa con luces suaves'
      },
      {
        id: 'p4-2',
        url: '/images/p4_2.jpg',
        caption: 'Momentos congelados en el tiempo',
        rotation: 1.8,
        alt: 'Fotografía analógica de paisaje'
      }
    ],
    storyText: `Con la llegada del frío de noviembre, las horas se pasaban volando entre tazas calientes y confidencias sinceras. Fue en esa época cuando nos mostramos vulnerables, compartiendo miedos, sueños y aquellas historias que no se le cuentan a cualquiera.\n\nMe impactó la autenticidad con la que escuchabas y la delicadeza con la que cuidabas cada palabra. Descubrí en ti una sensibilidad inmensa y una fuerza interior que siempre admiraré.`,
    quote: 'Encontrar a alguien con quien hablar con el alma descalza es un regalo escaso.'
  },
  {
    id: 'page-5',
    pageNumber: 'PÁGINA 05',
    date: 'DICIEMBRE DE 2024',
    monthKey: 'DICIEMBRE DE 2024',
    title: 'Luces de fin de año',
    subtitle: 'La calidez en el mes más frío',
    location: 'La plaza iluminada',
    photos: [
      {
        id: 'p5-1',
        url: '/images/p5_1.jpg',
        caption: 'Luces navideñas y frío compartido',
        rotation: 1.0,
        alt: 'Luces parpadeantes en la noche'
      }
    ],
    storyText: `Diciembre llenó la ciudad de luces y de un ritmo diferente. En medio del bullicio de las fiestas, nosotros encontramos nuestro propio ritmo pausado. Brindamos por el año que se iba y por todo lo que habíamos comenzado a construir casi sin darnos cuenta.`,
    quote: 'Hay luces que no brillan en el cielo, sino en los ojos de quien te acompaña.'
  },
  {
    id: 'page-6',
    pageNumber: 'PÁGINA 06',
    date: 'ENERO DE 2025',
    monthKey: 'ENERO DE 2025',
    title: 'El primer viaje juntos',
    subtitle: 'Nuevos horizontes y carreteras nevadas',
    location: 'Pueblo entre las montañas',
    photos: [
      {
        id: 'p6-1',
        url: '/images/p6_1.jpg',
        caption: 'Las colinas heladas de aquel frío enero',
        rotation: 2.0,
        alt: 'Montañas nevadas con cielo azul profundo'
      },
      {
        id: 'p6-2',
        url: '/images/p6_2.jpg',
        caption: 'Luces cálidas al final de la jornada',
        rotation: -2.2,
        alt: 'Refugio acogedor con chimenea'
      }
    ],
    storyText: `Enero de 2025 arrancó con una escapada lejos del ruido cotidiano. La carretera rodeada de paisajes blancos, la música sonando de fondo y la sensación de libertad absoluta convirtieron esos días en una burbuja atemporal.\n\nRecuerdo perder la noción del tiempo mirando las montañas a través del cristal mientras compartíamos una manta y un chocolate caliente. Todo parecía encajar con una naturalidad perfecta.`,
    quote: 'El viaje no era el destino, sino el refugio que construíamos al caminar juntos.'
  },
  {
    id: 'page-7',
    pageNumber: 'PÁGINA 07',
    date: 'FEBRERO DE 2025',
    monthKey: 'FEBRERO DE 2025',
    title: 'Detalles cotidianos',
    subtitle: 'El valor de lo sencillo',
    location: 'Nuestra cafetería habitual',
    photos: [
      {
        id: 'p7-1',
        url: '/images/p7_1.jpg',
        caption: 'Dos tazas y un par de risas',
        rotation: -1.3,
        alt: 'Dos tazas de café sobre mesa de madera'
      }
    ],
    storyText: `Febrero transcurrió con la tranquilidad de la rutina bien entendida. Descubrimos que el amor también reside en la constancia, en el mensaje de buenos días, en preparar la cena juntos y en saber que el otro está ahí para escucharte al final de un día largo.`,
    quote: 'La felicidad consiste en encontrar lo extraordinario en medio de lo ordinario.'
  },
  {
    id: 'page-8',
    pageNumber: 'PÁGINA 08',
    date: 'MARZO DE 2025',
    monthKey: 'MARZO DE 2025',
    title: 'El cambio de estación',
    subtitle: 'La llegada del viento templado',
    location: 'El parque de los cerezos',
    photos: [
      {
        id: 'p8-1',
        url: '/images/p8_1.jpg',
        caption: 'Las primeras flores asomándose al sol',
        rotation: 1.5,
        alt: 'Ramas con pequeños brotes verdes'
      }
    ],
    storyText: `Marzo trajo consigo los primeros indicios de que el invierno se retiraba. El sol empezó a calentar un poco más y las tardes se hicieron ideales para volver a caminar sin prisa, viendo cómo la naturaleza despertaba lentamente a nuestro alrededor.`,
    quote: 'Cada flor que se abre es un recordatorio de que los inviernos siempre pasan.'
  },
  {
    id: 'page-9',
    pageNumber: 'PÁGINA 09',
    date: 'ABRIL DE 2025',
    monthKey: 'ABRIL DE 2025',
    title: 'Lluvias de abril',
    subtitle: 'Refugiándonos bajo el mismo paraguas',
    location: 'Paseo bajo la lluvia',
    photos: [
      {
        id: 'p9-1',
        url: '/images/p9_1.jpg',
        caption: 'Gotas de lluvia sobre las hojas verdes',
        rotation: -2.0,
        alt: 'Gotas de lluvia brillando en las hojas'
      }
    ],
    storyText: `Abril se vistió de nubes grises y lloviznas persistentes. Lejos de desanimarnos, encontramos una magia diferente en compartir el paraguas, esquivar los charcos de la acera y terminar la tarde en cualquier sitio resguardados con algo caliente entre las manos.`,
    quote: 'Hay quienes caminan bajo la lluvia y otros que simplemente se mojan.'
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
