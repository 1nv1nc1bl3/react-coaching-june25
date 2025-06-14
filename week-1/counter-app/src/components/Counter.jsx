import { useState } from 'react'; // ✅ Βήμα 1: κάνε import το useState από τη React

function App() {
    // ✅ Βήμα 2: Δημιουργείς ένα κομμάτι state
    // 'count' είναι η τρέχουσα τιμή
    // 'setCount' είναι η συνάρτηση που τη μεταβάλλει
    const [count, setCount] = useState(0); // Αρχική τιμή: 0

    // ✅ Βήμα 3: Η συνάρτηση που αυξάνει το count
    function handlePlusClick() {
        setCount(count + 1);
    }
    function handleMinusClick() {
        setCount(count - 1);
    }

    // ✅ Βήμα 4: Επιστρέφεις το UI
    return (
        <div>
            <h1>My Counter</h1>
            <p>Count = {count}.</p>
            <button onClick={handlePlusClick}>Click for +</button>
            <br></br>
            <button onClick={handleMinusClick}>
                Click for {'('}-{')'}"
            </button>
        </div>
    );
}

export default App;
