import QRCode from "./components/qrCode";
import ldlogo from "./ld-light.png";
import toggle from "./toggle_thumbsup.png";
import "./App.css";
import { useFlags } from "launchdarkly-react-client-sdk";
import Header from "./components/header";
import Login from "./components/login";
import Intro from "./components/intro";
import Release from "./components/release";

function App() {
  const { qrcode, upperimage, logoversion, cardshow, login, prodHeader, release } = useFlags();
  
  return (
    <div className="App h-screen bg-ldls grid xl:grid-cols-4 grid-cols-3 grid-rows-4 xl:grid-rows-3 bg-cover bg-no-repeat">
      { prodHeader ? (
        <header className="App-header grid row-start-1 xl:row-start-2 xl:col-start-2 col-span-3">
          <Header />
        </header>
      ):
      (
        <header className="App-header grid col-start-1 col-span-4 row-start-2">
        <div className="body bg-ldgray px-8 py-4 mb-5 w-full shadow-2xl">
          <p className="text-m xl:text-4xl">The common <span className="text-ldyellow">Application Delivery</span> flow...</p>
        </div>
        <Intro release={release} />
      </header>
        )
      }
      {qrcode ? (
        <div className="body grid row-start-2 col-span-3 xl:col-span-1 xl:col-start-1 xl:row-start-1 bg-black-4 place-items-center">
            <QRCode /> 
        </div>
      ) : null}
      {login ? (
        <div className="body grid col-span-3 row-start-3 xl:col-span-1 xl:col-start-1 xl:row-start-2 bg-black-4 place-items-center">
          <Login />
        </div>
      ) : null}
      {upperimage ? (
        <div className="body grid row-start-2 col-span-3 xl:col-start-2  xl:row-start-1 place-items-center">
          {logoversion ? (
            <img
              src={toggle}
              className="mx-auto h-56 lg:h-60 2xl:h-80"
              alt="logo"
            />
          ) : (
            <div className="">
              <img
                src={ldlogo}
                className="mx-auto h-56 lg:h-60 2xl:h-80"
                alt="logo"
              />
            </div>
          )}
        </div>
      ) : (
        <div />
      )}
      {cardshow ? (
          <div className="body grid col-span-3 row-start-4 xl:row-start-3 xl:col-start-2 xl:col-span-3 place-items-center">
            <Release />
          </div>
      ) : (
        null
      )}
    </div>
  );
}

export default App;
