import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Ai from "./components/ui/ai/Ai";
import Client from "./components/ui/client/Client";
import Intro from "./components/ui/intro/Intro";
import Power from "./components/ui/power/Power";
import Pricing from "./components/ui/pricing/Pricing";
import World from "./components/ui/world/World";

function App() {
    return <div>
        <Navbar />
        <Intro />
        <World />
        <Power />  
        {/* <Seo /> */}
        <Client />
        <Pricing />
        <Ai />
        <Footer />
    </div>
}

export default App;