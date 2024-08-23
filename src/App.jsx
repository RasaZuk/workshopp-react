import FirstSection from './components/firstSection/FirstSection';
import SecondSection from './components/secondSection/SecondSection';
import { Footer } from './components/footer/footer';
import Accordion from './components/faq/Accordion';
import { Reasons } from './components/reasons-to-join/ReasonsToJoin';


function App() {
    return (
    
        <div>
            <FirstSection />
            <SecondSection />
            <div>
                <h2>More Reasons to Join</h2>
                <Reasons />
            </div>
            <div>
                <Accordion />
            </div>
            <Footer />
        </div>
           
    
    );
}

export default App;