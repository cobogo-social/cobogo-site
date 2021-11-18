import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from '../../components/NextLink';
import Social from '../../components/IndexPage/Social';
import Footer from '../../components/IndexPage/Footer';
import ChooseLanguage from '../../components/ChooseLanguage';
import { Accordion } from '../../components/Accordion';

const Faq = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-bgprimary">
      <ChooseLanguage />
      <Head>
        <title>Cobogo - FAQ</title>
      </Head>
      <div className="mx-5 md:mx-20 py-20">
        <Link href="/">
          <div className="w-60 h-14 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/logos/cobogo-logo.svg"
              alt="Guy playing youtube site"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <h1 className="bold-36 mb-5">FAQ</h1>
        <div className="panel panel-default mb-3">
          <Accordion title="Q: ¿Qué es Blockchain?">
            <div className="panel-body regular-18 mb-5">
              <p>
              Blockchain es una tecnología que presenta una lista continua de bloques de información en una red informática activa. Cada bloque contiene una serie de transacciones que, cuando se llenan, se cierran y se vinculan al bloque previamente llenado. Las cadenas de bloques están descentralizadas, por lo que es muy difícil para alguien modificar el registro de eventos almacenado en esta “chain“, haciendo que sea una tecnología adecuada para aplicaciones financieras.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Qué es Ethereum?">
            <div className="panel-body regular-18 mb-5">
              <p>
                <a
                  className="regular-cobogo-18"
                  target="_blank"
                  href="https://ethereum.org/en/what-is-ethereum/"
                  rel="noopener noreferrer"
                >
                  Ethereum
                </a>{' '}
                es una red de crypto, que ha sido adoptada por varios proyectos en todo el mundo. Es la red más grande que aloja dapps. También es donde tiene lugar la mayor parte de la actividad de los desarrolladores en la atmósfera de crypto. Ethereum es particularmente interesante debido a su seguridad y capacidad para alojar Smart Contracts.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Qué es “Gas”?">
            <div className="panel-body regular-18 mb-5">
              <p>
                <a
                  className="regular-cobogo-18"
                  target="_blank"
                  href="https://ethereum.org/en/developers/docs/gas/"
                  rel="noopener noreferrer"
                >
                  El gas
                </a>{' '}
                es la tasa requerida para ejecutar recursos computacionales para realizar con éxito una transacción en la red Ethereum. Esta tarifa se basa en el “precio del gas“ actual y se calcula en términos de ETH.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Qué es una “Wallet”?">
            <div className="panel-body regular-18 mb-5">
              <p>
              Una “Wallet” es un software que puede contener criptomonedas a través del almacenamiento de sus claves privadas, que se utilizan en cooperación con las claves públicas apropiadas. Hay varios tipos de Wallets disponibles, que se pueden clasificar como: Wallets móviles, de hardware, de escritorio y web.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Qué son los Smart Contracts?">
            <div className="panel-body regular-18 mb-5">
              <p>
              Smart Contract es básicamente un contrato autoejecutable, lo que significa que no están controlados por un usuario, sino que se ejecutan de forma independiente en la red con algunos “términos de acuerdo“ predeterminados.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Qué es DEV?">
            <div className="panel-body regular-18 mb-5">
              <p>
              DEV Token es el token de utilidad que impulsa el ecosistema del Dev Protocol. Al hacer staking de tokens DEV, los patrocinadores pueden financiar a los creadores de manera sostenible: ambos reciben recompensas, no es una transacción unidireccional. De esta manera, los creadores pueden crecer mientras empoderan a sus comunidades.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Qué son las dApps?">
            <div className="panel-body regular-18 mb-5">
              <p>
              dApps es la abreviatura de aplicaciones descentralizadas y son aplicaciones de software desarrolladas en base a Smart Contracts. Se diferencian de las apps habituales en que no están conectadas a servidores privados centralizados y, por tanto, son más transparentes en relación al funcionamiento de su back-end.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Dónde puedo comprar tokens DEV?">
            <div className="panel-body regular-18 mb-5">
              <p>
              La mejor manera de comprar tokens DEV es con el par más líquido. Puede encontrarlos en los pares comerciales que figuran en Coingecko. El mejor par para negociar DEV / ETH se encuentra actualmente en{' '}
                <a
                  className="regular-cobogo-18"
                  target="_blank"
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26&use=V2"
                  rel="noopener noreferrer"
                >
                  Uniswap V2
                </a>
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Qué es “Staking”?">
            <div className="panel-body regular-18 mb-5">
              <p>
                Staking es el proceso de bloquear fondos en Smart Contracts como una forma de beneficiar a la red en la que los fondos están en staking y de ser recompensado por hacerlo. Estas recompensas pueden verse como un tipo de interés que se acumula con el tiempo.
              </p>
              <p>
              Hacer staking usando tokens DEV significa que los Patronos están depositando los tokens DEV en un Smart Contract del Creador respectivo que el Patrono quiere financiar de manera sostenible. Al hacer esto, tanto el Patrón como el Creador son recompensados con tokens DEV.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Qué es APY y cómo se calcula?">
            <div className="panel-body regular-18 mb-5">
              <p>
              El Rendimiento Porcentual Anual (Annual Percentage Yield) representa la ganancia financiera en términos de un token determinado, en su porcentaje en un año. Una persona recibirá un APY cuando coloque sus fondos en un instrumento como un pool de staking o un pool de liquidez, por ejemplo. La idea detrás de APY es transmitir las verdaderas ganancias de una inversión en términos anuales. Dado que estamos usando el Dev Protcol, el staking es lineal y no tiene en cuenta el “interés” compuesto en el caso de un re-staking o de un nuevo staking.
              </p>
            </div>
          </Accordion>
          <Accordion title="Q: ¿Por qué debería usar cobogo?">
            <div className="panel-body regular-18 mb-5">
              <p>
              cobogo es una dApp, construida sobre el Ecosistema de Dev Protocol, que permite a los fans apoyar a sus YouTubers favoritos de una manera sostenible. Pueden hacer staking de sus tokens DEV en el pool del YouTuber y ambos reciben las recompensas. cobogo permite a los creadores monetizar su canal de una manera diferente, sin depender solo de anuncios o donaciones únicas, y permite a los fans apoyar a esos creadores mientras ganan dinero.
              </p>
            </div>
          </Accordion>
        </div>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default Faq;