import Head from "next/head";
import Menu from "../components/Menu";

import { Jumbotron, Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Home() {
  return (
    <div>
      <Head>
        <title>Home - alemonDev</title>
        <meta name="description" content="Blog sobre Programação" />
        <meta name="author" content="Rafael Dias" />
      </Head>
      <Menu />
      <Jumbotron fluid className="services">
        <style>
          {`
            .services {
              padding: 80px 0;
              background: #000;
              color: #fff;
              margin-bottom: 0rem !important;
            }

            .circulo {
              width: 140px;
              height: 140px;
              background: #fed136;
              font-size: 52px;
              padding-top: 24px
            }

            .centralizar {
              margin: 0 auto;
              float: none !important;
            }
          `}
        </style>
        <Container className="text-center">
          <div>
            <h1 className="display-4">Serviços da empresa</h1>
            <p className="lead pb-4">
              Desenvolvemos soluções para o seu negócio
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="shopping-cart" />
              </div>
              <h2 className="mt-4 mb-4">Criação de ecommerce</h2>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
            </div>
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="envelope-open-text" />
              </div>
              <h2 className="mt-4 mb-4">Serviço de Email Marketing</h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit.
              </p>
            </div>
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="handshake" />
              </div>
              <h2 className="mt-4 mb-4">Consultorias</h2>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Vestibulum id ligula porta felis euismod semper. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
              </p>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
