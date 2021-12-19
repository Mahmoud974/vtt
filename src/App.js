import Acceuil from "./blocs/Acceuil";
import LogoCenter from "./blocs/LogoCenter";
import Veloform from "./blocs/Veloform";
import Character from "./components/Character";
import WhatisM from "./blocs/WhatisM";
import Footer from "./blocs/Footer";
import ContextProvider from "./ContextOne";

function App() {
  return (
    <ContextProvider>
      <Acceuil />
      <LogoCenter />
      <Veloform />
      <Character />
      <WhatisM />
      <Footer />
    </ContextProvider>
  );
}

export default App;
