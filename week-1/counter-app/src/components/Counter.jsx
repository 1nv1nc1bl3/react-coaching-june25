import { useState } from 'react'; // Βήμα 1: κάνε import το useState από τη React

function App() {
    // Βήμα 2: Δημιουργείς ένα κομμάτι state
    // 'count' είναι η τρέχουσα τιμή
    // 'setCount' είναι η συνάρτηση που τη μεταβάλλει
    const [count, setCount] = useState(0); // Αρχική τιμή: 0

    // Βήμα 3: Οι συναρτήσεις που μεταβάλλουν το count
    const displayAlert = () => {
        alert('Sorry, you reached the upper limit of the Counter!');
    };
    const handlePlusClick = () => {
        if (count < 10) {
            setCount(count + 1);
        } else {
            displayAlert();
        }
    };
    const handleMinusClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const resetCount = () => {
        setCount(0);
    };

    // Βήμα 4: Επιστρέφεις το UI
    return (
        <div className='theClass'>
            <h1>My Counter</h1>
            <p>Count = {count}.</p>
            <div className='buttonsClass'>
                <button onClick={handlePlusClick}>➕</button>
                <button onClick={handleMinusClick}>➖</button>
                <button onClick={resetCount}>🔄</button>
            </div>
        </div>
    );
}

export default App;
