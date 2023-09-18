const container = document.querySelector(".contianer");
fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=56.117215871476695&lon=10.150260767658077&units=metric&lang=da&appid=7f58b0b29e6124649f3c0b055c72a08b"
)
    .then(re => re.json())
    .then(d => {
        const city = d.city.name;
        const list = d.list;
        container.innerHTML = city;

        list.forEach(element => {
            console.log(element);
            container.innerHTML += `
                <div class="weather">
                    <div class="date">${element.dt_txt}</div>
                    <div class="temp">${element.main.temp}</div>
                    <div class="wind">${element.wind.speed}</div>
                </div>
            `;
        })

        console.log(d);
    });
