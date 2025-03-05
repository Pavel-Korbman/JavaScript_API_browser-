// BOM
// BOM, или browser object model, — это свойства и методы глобального объекта, которые мы,
// по большей части, используем для работы со всем, кроме HTML-кода. Это, например:
// 🚩 Функции alert/confirm/prompt
// 🚩 Объект navigator.
// 🚩 Объект location
// 🚩 fetch
// Регулируются они разными стандартами. Например, fetch регулируется стандартами WHATWG и W3C

// ● Объект navigator. Здесь нам выведется информация о браузере,
// операционной системе и их настройках, которые могут быть важны при
// выполнении нашей программы. Например:

console.log(navigator.userAgent); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36
console.log(navigator.cookieEnabled); // true
console.log(navigator.doNotTrack); // null
console.log(navigator.platform); // Win32
console.log(navigator.geolocation); // Geolocation {}

// Здесь:
// ○ userAgent — информация о браузере;
// ○ cookieEnabled — включены ли coockie;
// ○ doNotTrack — включена ли опция запрета на отслеживание;
// ○ platform — текущая ОС пользователя;
// ○ geolocation — геолокация, в данном случае не активированная.

// Примеры

function calculateDistance(location1, location2) {
    const [lat1, lon1] = location1; // разбираем координаты на широту и долготу
    const [lat2, lon2] = location2;

    const toRad = value => (value * Math.PI) / 180; // преобразует значения из градусов в радианы
    const R = 6371; // Радиус земли в км

    const dLat = toRad(lat2 - lat1); // разница широты в радианах
    const dLon = toRad(lon2 - lon1); // разница долготы в радианах

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance;
}

// Найдём расстояние между точками:
console.log('Расстояние (км) = ',
    calculateDistance([55.804950, 37.548820], [55.706533, 37.583697]));
// Расстояние (км) =  11.15894543384768

// Ближайший город:

function findFastestCity(cities) {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) { // Проверяем поддержку геолокации в браузере
            navigator.geolocation.getCurrentPosition(position => {
                const userLocation = [position.coords.latitude, position.coords.longitude];
                console.log('Я нахожусь:', userLocation);
                // Текущие координаты пользователя
                let closestCity = null; // переменная для хранения ближайшего города
                let shortestDistance = Infinity; // переменная для хранения кратчайшего расстояния

                cities.forEach(city => {
                    const distance = calculateDistance(userLocation, city.location);
                    if (distance < shortestDistance) {
                        closestCity = city.name;
                        shortestDistance = distance;
                        console.log(closestCity, shortestDistance);
                    }
                });
                resolve(closestCity); // возвращаем ближайший город
            },
                error => {
                    if (error.code === error.PERMISSION_DENIED) { // если отказанно в геолокации
                        reject(new Error('Пользователь отказал в доступе к геолокации.'));
                    } else {
                        reject(new Error('Ошибка получения местоположения.'));
                    }
                }
            );
        } else {
            reject(new Error('Геолокация не поддерживается вашим браузером.'));

        }
    });
}

// Использование:

const cities = [
    { name: 'Нью-Йорк', location: [40.714627, -74.002863] },
    { name: 'Токио', location: [35.681729, 139.753927] },
    { name: 'Лиссабон', location: [38.732937, -9.133962] },
    { name: 'Мадрид', location: [40.418407, -3.712746] },
    { name: 'Париж', location: [48.856663, 2.351556] },
    { name: 'Санкт-Петербург', location: [59.938784, 30.314997] }
];

findFastestCity(cities)
    .then(closestCity => {
        console.log('Ближайший к вам город: ', closestCity);
    })
    .catch(error => {
        console.log(error.message);
    });

//  Я нахожусь: (2) [55.7613056, 37.4833152]
//  Нью-Йорк 7503.1554045839985
//  Токио 7489.1880843689
//  Лиссабон 3896.5493018520638
//  Мадрид 3432.7027423180944
//  Париж 2477.9476918488836
//  Санкт-Петербург 628.3541530179283
//  Ближайший к вам город:  Санкт-Петербург
