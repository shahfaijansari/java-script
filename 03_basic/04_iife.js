// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`Db connected`);
    
})();

( () => {
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO`);
    
} )()