import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../components/Header'

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    continent: Model
  },

  seeds(server) {
    server.db.loadData({
      continents: [
        {
          id: 1,
          slug: 'europa',
          title: 'Europa',
          image: '/assets/slides/europe.png',
          description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio   Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
          citys: {
            city_1: {
              name: 'Londres',
              image: 'https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg',
              country: 'Reino Unido'
            },
            city_2: {
              name: 'Paris',
              image: 'https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg',
              country: 'França'
            },
            city_3: {
              name: 'Roma',
              image: 'https://cdn.pixabay.com/photo/2020/05/17/12/56/rome-5181486_960_720.jpg',
              country: 'Itália'
            },
            city_4: {
              name: 'Praga',
              image: 'https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_960_720.jpg',
              country: 'República Tcheca'
            },
            city_5: {
              name: 'Amsterdã',
              image: 'https://cdn.pixabay.com/photo/2016/01/19/19/26/amsterdam-1150319_960_720.jpg',
              country: 'Holanda'
            },
          }
        },
        {
          id: 2,
          slug: 'asia',
          title: 'Asia',
          image: '/assets/slides/asia.png',
          description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering',
          citys: {
            city_1: {
              name: 'Xangai',
              image: 'https://cdn.pixabay.com/photo/2016/06/28/11/36/shanghai-1484452_960_720.jpg',
              country: 'China'
            },
            city_2: {
              name: 'Mumbai',
              image: 'https://cdn.pixabay.com/photo/2010/11/29/india-294_960_720.jpg',
              country: 'Índia'
            },
            city_3: {
              name: 'Nova Déli',
              image: 'https://cdn.pixabay.com/photo/2020/02/21/14/23/delhi-4867634_960_720.jpg',
              country: 'Índia'
            },
            city_4: {
              name: 'Istambul',
              image: 'https://cdn.pixabay.com/photo/2015/08/26/13/39/istanbul-908510_960_720.jpg',
              country: 'Turquia'
            },
            city_5: {
              name: 'Seul',
              image: 'https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg',
              country: 'Coréia do Sul'
            },
          }
        },
        {
          id: 3,
          slug: 'oceania',
          title: 'Oceania',
          image: '/assets/slides/oceania.png',
          description: 'Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d Urville. termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacente',
          citys: {
            city_1: {
              name: 'Sydney',
              image: 'https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_960_720.jpg',
              country: 'Austrália'
            },
            city_2: {
              name: 'Melbourne',
              image: 'https://cdn.pixabay.com/photo/2019/06/20/06/03/beach-4286271_960_720.jpg',
              country: 'Austrália'
            },
            city_3: {
              name: 'Brisbane',
              image: 'https://cdn.pixabay.com/photo/2016/02/25/13/35/beach-1222080_960_720.jpg',
              country: 'Austrália'
            },
            city_4: {
              name: 'Perth',
              image: 'https://cdn.pixabay.com/photo/2020/06/04/04/12/beach-5257079_960_720.jpg',
              country: 'Austrália'
            },
            city_5: {
              name: 'Macáçar',
              image: 'https://cdn.pixabay.com/photo/2020/03/18/15/17/kathmandu-4944427_960_720.jpg',
              country: 'Indonésia'
            },
          }
        },
        {
          id: 4,
          slug: 'america',
          title: 'América do Norte',
          image: '/assets/slides/northamerica.png',
          description: 'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).',
          citys: {
            city_1: {
              name: 'Cidade do México',
              image: 'https://cdn.pixabay.com/photo/2017/01/27/20/43/mexico-2014178_960_720.jpg',
              country: 'México'
            },
            city_2: {
              name: 'Nova Iorque',
              image: 'https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_960_720.jpg',
              country: 'Estados Unidos'
            },
            city_3: {
              name: 'Toronto',
              image: 'https://cdn.pixabay.com/photo/2017/05/09/03/47/buildings-2297210_960_720.jpg',
              country: 'Canadá'
            },
            city_4: {
              name: 'Los Angeles',
              image: 'https://cdn.pixabay.com/photo/2017/08/25/09/19/highway-2679490_960_720.jpg',
              country: 'Estados Unidos'
            },
            city_5: {
              name: 'Montreal',
              image: 'https://cdn.pixabay.com/photo/2014/01/19/00/25/montreal-247795_960_720.jpg',
              country: 'Canadá'
            },
          }
        },
        {
          id: 5,
          slug: 'southamerica',
          title: 'América do Sul',
          image: '/assets/slides/southamerica.png',
          description: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.  A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente.',
          citys: {
            city_1: {
              name: 'São Paulo',
              image: 'https://cdn.pixabay.com/photo/2022/06/13/19/43/man-7260571_960_720.jpg',
              country: 'Brasil'
            },
            city_2: {
              name: 'Lima',
              image: 'https://cdn.pixabay.com/photo/2016/12/07/20/56/mujer-peruana-1890424_960_720.jpg',
              country: 'Peru'
            },
            city_3: {
              name: 'Bogotá',
              image: 'https://cdn.pixabay.com/photo/2017/06/23/14/50/colombia-2434911_960_720.jpg',
              country: 'Colômbia'
            },
            city_4: {
              name: 'Salvador',
              image: 'https://cdn.pixabay.com/photo/2016/02/12/23/40/salvador-1197085_960_720.jpg',
              country: 'Brasil'
            },
            city_5: {
              name: 'Buenos Aries',
              image: 'https://cdn.pixabay.com/photo/2012/07/06/17/11/caminito-51625_960_720.jpg',
              country: 'Argentina'
            },
          }
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/continent', () => {
      return this.schema.all('continent')
    });

    this.get('continent/:slug', (schema, request) => {
      const slug = request.params.slug

      return schema.db.continents.findBy({ slug: slug })
    })

    this.namespace = ''

    this.passthrough()
  }
})



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
