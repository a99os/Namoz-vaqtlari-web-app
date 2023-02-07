const selectRegion = document.querySelector("#selectID");
const region__title = document.querySelector(".region__title");
const dateNamaz = document.querySelector(".dateNamaz");
const date__now = document.querySelector(".date__now");
const card__control = document.querySelector(".card__control");
const selectOpt = document.querySelector(".selectOpt");

actionRender(localStorage.getItem("region") || "Toshkent");

selectOpt.textContent = localStorage.getItem("region") || "Toshkent";
setInterval(() => {
  let today = new Date();
  let Hours;
  let Minut;
  let Second;
  if (today.getHours() < 10) Hours = "0" + today.getHours();
  else Hours = today.getHours();
  if (today.getMinutes() < 10) Minut = "0" + today.getMinutes();
  else Minut = today.getMinutes();
  if (today.getSeconds() < 10) Second = "0" + today.getSeconds();
  else Second = today.getSeconds();

  console.log(today.getHours());
  date__now.textContent = `${Hours}:${Minut}:${Second}`;
  let date = (
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate()
  ).split("-");
  dateNamaz.textContent = `${+date[2]}-${month[+date[1]]} ${+date[0]}-yil`;
}, 1000);

// date: "2023-02-07";
// region: "Toshkent";
// times: asr: "16:04";
// hufton: "19:04";
// peshin: "12:37";
// quyosh: "07:29";
// shom_iftor: "17:51";
// tong_saharlik: "06:06";

// weekday: "Seshanba";

async function renderCard(region) {
  const response = await fetch(
    `https://islomapi.uz/api/present/day?region=${region}`
  );
  if (response.status === 404) {
    return 404;
  }
  const result = await response.json();
  region__title.textContent = `${result.region}  shahri`;

  const element = createElement(
    "div",
    "card__wrapper w-full flex flex-col lg:flex-row justify-between items-center mb-16",
    `<div
    class="card relative w-[250px] h-[397px] mt-[82px] flex flex-col items-center justify-between py-5"
  >
    <h1
      class="text-[#FFC700] font-bold text-[32px] leading-[46px] blur-none text-center"
    >
      Tong
    </h1>
    <img
      src="./images/isha-prayer 1.png"
      alt="isha"
      class="absolute top-16"
    />
    <p class="text-white font-bold text-[48px] leading-[69px]">
      ${result.times.tong_saharlik}
    </p>
    <div
      class="card__bgc w-[250px] h-[397px] absolute top-0 left-0 -z-10"
    ></div>
  </div>
  <div
    class="card relative w-[250px] h-[397px] mt-[82px] flex flex-col items-center justify-between py-5"
  >
    <h1
      class="text-[#FFC700] font-bold text-[32px] leading-[46px] blur-none text-center"
    >
      Quyosh
    </h1>
    <img
      src="./images/sunrise 1.png"
      alt="isha"
      class="absolute top-16"
    />
    <p class="text-white font-bold text-[48px] leading-[69px]">
    ${result.times.quyosh}
    </p>
    <div
      class="card__bgc w-[250px] h-[397px] absolute top-0 left-0 -z-10"
    ></div>
  </div>
  <div
    class="card relative w-[250px] h-[397px] mt-[82px] flex flex-col items-center justify-between py-5"
  >
    <h1
      class="text-[#FFC700] font-bold text-[32px] leading-[46px] blur-none text-center"
    >
      Peshin
    </h1>
    <img
      src="./images/sun 1.png"
      alt="isha"
      class="absolute top-16"
    />
    <p class="text-white font-bold text-[48px] leading-[69px]">
    ${result.times.peshin}
    </p>
    <div
      class="card__bgc w-[250px] h-[397px] absolute top-0 left-0 -z-10"
    ></div>
  </div>
  <div
    class="card relative w-[250px] h-[397px] mt-[82px] flex flex-col items-center justify-between py-5"
  >
    <h1
      class="text-[#FFC700] font-bold text-[32px] leading-[46px] blur-none text-center"
    >
      Asr
    </h1>
    <img
      src="./images/sunrise (1) 1.png"
      alt="isha"
      class="absolute top-16"
    />
    <p class="text-white font-bold text-[48px] leading-[69px]">
    ${result.times.asr}
    </p>
    <div
      class="card__bgc w-[250px] h-[397px] absolute top-0 left-0 -z-10"
    ></div>
  </div>
  <div
    class="card relative w-[250px] h-[397px] mt-[82px] flex flex-col items-center justify-between py-5"
  >
    <h1
      class="text-[#FFC700] font-bold text-[32px] leading-[46px] blur-none text-center"
    >
      Shom
    </h1>
    <img
      src="./images/sunrise (1) 2.png"
      alt="isha"
      class="absolute top-16"
    />
    <p class="text-white font-bold text-[48px] leading-[69px]">
    ${result.times.shom_iftor}
    </p>
    <div
      class="card__bgc w-[250px] h-[397px] absolute top-0 left-0 -z-10"
    ></div>
  </div>
  <div
    class="card relative w-[250px] h-[397px] mt-[82px] flex flex-col items-center justify-between py-5"
  >
    <h1
      class="text-[#FFC700] font-bold text-[32px] leading-[46px] blur-none text-center"
    >
      Xufton
    </h1>
    <img
      src="./images/moon 1.png"
      alt="isha"
      class="absolute top-16"
    />
    <p class="text-white font-bold text-[48px] leading-[69px]">
    ${result.times.hufton}
    </p>
    <div
      class="card__bgc w-[250px] h-[397px] absolute top-0 left-0 -z-10"
    ></div>
  </div>`
  );
  return element;
}

async function actionRender(region) {
  card__control.innerHTML = "";
  card__control.innerHTML = `<div
  class="loadingio-spinner-ripple-argrkwg8q5g absolute left-[43%] top-0 spinner hidden"
>
  <div class="ldio-o7kiq4vb7fa">
    <div></div>
    <div></div>
  </div>
</div>`;
  const element = await renderCard(region);
  setTimeout(() => {
    card__control.innerHTML = "";
    if (element !== 404) {
      card__control.append(element);
    } else {
      console.log("salom");
      card__control.innerHTML =
        "<h1 class='text-white font-bold text-[24px] text-center leading-[69px]' >Not Found</h1>";
    }
  }, 1000);
}

selectRegion.addEventListener("input", (e) => {
  localStorage.setItem("region", e.target.value);
  selectOpt.textContent = localStorage.getItem("region");

  actionRender(e.target.value);
});
