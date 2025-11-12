let count = 0;

function counterSystem() {
    function increment() {
        count++;
        console.log(`Count: ${count}`);
    }
    function decrement() {
        count--;
        console.log(`Count: ${count}`);
    }
    return { increment, decrement };
}

const counter = counterSystem();
counter.increment();
counter.increment();
counter.decrement();
