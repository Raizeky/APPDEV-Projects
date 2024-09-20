import Footer from './Footer';
import Header from './Header';
import Body from './Body';

function App() {
    return (
        <>
            <Header />

                <Body name="Rendon" food="motivation rice" isHealthy="true" age={29} />
                <Body name="Ben" food="cream pie" isHealthy="true" age={18} />
                <Body name="Samantha" food="veggie pizza" isHealthy="true" age={22} />
                <Body name="Lily" food="fruit salad deluxe" isHealthy="true" age={34} />
                <Body name="Kenny" food="blueberry pie" isHealthy="true" age={14} />
                <Body name="Eren Yeager" food="titan burger deluxe" isHealthy="false" age={15} />

            <Footer />
        </>
    );
}

export default App;