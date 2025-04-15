'use strict';
(async () => {
    const url = 'https://catfact.ninja/fact';
    const response = await fetch(url);
    console.log(response.status);
    console.log(response.ok);
    const fact = response.json();
    console.log(fact);
})();



// 'use strict';
// fetch('https://catfact.ninja/fact')
//     .then(response => response.json()) // Для вывода всего ответа
//     .then(console.log);

// 'use strict';
// fetch('https://catfact.ninja/fact')
//     .then(response => response.json()) // Для вывода только факта
//     .then(obj => console.log(obj.fact));