// Задание: "Генератор случайных профилей"

// Цель:
// Создать веб-приложение, которое отображает случайный профиль пользователя при нажатии на кнопку.

// Используйте API https://randomuser.me/.
// При нажатии на кнопку "Сгенерировать профиль" отправляется запрос на сервер.
// Отображайте следующую информацию о пользователе:
// Имя и фамилия.
// Пол.
// Страна проживания.
// Адрес электронной почты.
// Фотография профиля.
// Реализуйте возможность загрузки нескольких профилей сразу.

const loading = `
     <div class="loading">
        <div class="loader"></div>
    </div>
`

async function fetchProfile() {
    try {
        document.body.insertAdjacentHTML("beforeend", loading);

        let res = await fetch("https://randomuser.me/api");

        let { results } = await res.json();

        let [profile] = results;

        displayUserProfile(profile)
    } catch (err) {
        console.log(err)
    } finally {
        document.querySelector(".loading").remove()
    }
}

function displayUserProfile(user) {
    const profileHTML = `
          <div class="profile">
            <img src="${user.picture.large}" alt="Фото профиля">
            <p><strong>Имя:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Пол:</strong> ${user.gender === 'male' ? 'Мужчина' : 'Женщина'}</p>
            <p><strong>Страна:</strong> ${user.location.country}</p>
            <p><strong>Email:</strong> ${user.email}</p>
          </div>
        `;

    document.querySelector(".users").innerHTML = profileHTML;
}

document.querySelector(".button").addEventListener("click", fetchProfile);