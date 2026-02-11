//your JS code here. If required.
  function manipulateArray() {
      const outputDiv = document.getElementById("output");

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      })
      .then((arr) => {
        
        const evenNumbers = arr.filter(num => num % 2 === 0);

        
        return new Promise((resolve) => {
          setTimeout(() => {
            outputDiv.textContent = evenNumbers;
            resolve(evenNumbers);
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        
        const multipliedNumbers = evenNumbers.map(num => num * 2);

        
        return new Promise((resolve) => {
          setTimeout(() => {
            outputDiv.textContent = multipliedNumbers;
            resolve(multipliedNumbers);
          }, 2000);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    manipulateArray();