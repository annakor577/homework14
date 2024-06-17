//1 

function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  const promises = [
    delayedPromise("1", 1000),
    delayedPromise("2", 2000),
    delayedPromise("3", 1500),
    delayedPromise("4", 2500),
    delayedPromise("5", 500)
  ];
  
  Promise.all(promises)
    .then((results) => {
      console.log("Усі проміси вирішено:");
      results.forEach((result, index) => {
        console.log(`Проміс ${index + 1}: ${result}`);
      });
    })
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });


//2

function randomDelay(value) {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  
  const promise = [
    randomDelay("1"),
    randomDelay("2"),
    randomDelay("3"),
    randomDelay("4"),
    randomDelay("5")
  ];
  
  
  Promise.race(promises)
    .then((result) => {
      
      console.log("Найшвидший проміс вирішено:");
      console.log(result);
    })
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });
  