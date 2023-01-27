// function downloadMenu() {
//     fetch('url')
//         .then((response) => response.json())
//         .then((menu) => console.log(menu));
// }

let menu = {
    "success": true,
    "errorMessage": "",
    "menuDate": "2023-01-24T00:00:00",
    "menuGroup": "Меню Кейтеринг НКИ",
    "serviceTimes": [
        {
            "serviceTimeName": "Обед",
            "serviceTimeCode": 1,
            "serviceTimeZone": "00:00 - 00:00",
            "menuCategories": [
                {
                    "catName": "Диетические блюда",
                    "catCode": "0000034477",
                    "menuItems": [
                        {
                            "itemName": "Куриное филе припущенное ",
                            "itemCode": "00-00001855",
                            "itemDescription": "Лимонная кислота, Масло растительное, Соль, Куриное филе",
                            "url": "00-00001855.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 57
                        },
                        {
                            "itemName": "Яйцо отварное",
                            "itemCode": "00-00002270",
                            "itemDescription": "Яйцо",
                            "url": "00-00002270.jpg",
                            "quantity": 0,
                            "itemWeight": 40,
                            "itemPrice": 11
                        }
                    ]
                },
                {
                    "catName": "Завтрак",
                    "catCode": "0000034486",
                    "menuItems": [
                        {
                            "itemName": "Каша молочная манная ",
                            "itemCode": "00-00001897",
                            "itemDescription": "Молоко, крупа манная, масло сливочное, сахар, соль.",
                            "url": "00-00001897.png",
                            "quantity": 0,
                            "itemWeight": 210,
                            "itemPrice": 21
                        },
                        {
                            "itemName": "Каша молочная кукурузная  ",
                            "itemCode": "00-00002277",
                            "itemDescription": "Молоко, крупа кукурузная, масло сливочное, сахар, соль.",
                            "url": "00-00002277.png",
                            "quantity": 0,
                            "itemWeight": 210,
                            "itemPrice": 21
                        },
                        {
                            "itemName": "Омлет Пуляр 100гр",
                            "itemCode": "МГ-00006456",
                            "itemDescription": "Масло растительное, Соль, Молоко, Укроп свежий, Яйцо куриное",
                            "url": "default.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 25
                        },
                        {
                            "itemName": "Ветчина жареная ",
                            "itemCode": "ЦБ-00005064",
                            "itemDescription": "Масло растительное, Ветчина",
                            "url": "ЦБ-00005064.png",
                            "quantity": 0,
                            "itemWeight": 75,
                            "itemPrice": 44
                        },
                        {
                            "itemName": "Запеканка творожная",
                            "itemCode": "ЦБ-00005778",
                            "itemDescription": "Творог, Дрожжи, Масло растительное, Мука пшеничная в/с, Сахар песок, Соль, Сметана, Крупа манная, Яйцо куриное",
                            "url": "ЦБ-00005778.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 67
                        },
                        {
                            "itemName": "Сметана ",
                            "itemCode": "00-00002292",
                            "itemDescription": "Сметана",
                            "url": "00-00002292.jpg",
                            "quantity": 0,
                            "itemWeight": 20,
                            "itemPrice": 10
                        }
                    ]
                },
                {
                    "catName": "Хлеб",
                    "catCode": "0000034482",
                    "menuItems": [
                        {
                            "itemName": "Хлеб белый",
                            "itemCode": "00-00002481",
                            "itemDescription": "",
                            "url": "00-00002481.png",
                            "quantity": 0,
                            "itemWeight": 38,
                            "itemPrice": 2
                        }
                    ]
                },
                {
                    "catName": "Холодные блюда",
                    "catCode": "0000034474",
                    "menuItems": [
                        {
                            "itemName": "Салат из б/к капусты с укропом ",
                            "itemCode": "00-00002758",
                            "itemDescription": "Масло растительное, сахар песок, соль, капуста белокочанная, укроп свежий, уксус столовый 9%.",
                            "url": "00-00002758.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 17
                        },
                        {
                            "itemName": "Ассорти из свежих овощей с салатом  ",
                            "itemCode": "00-00002850",
                            "itemDescription": "Помидоры, огурцы, перец болгарский, редис, капуста китайская, масло растит.",
                            "url": "00-00002850.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 40
                        },
                        {
                            "itemName": "Салат из крабовых палочек с рисом, яйцом и  кукурузой 100 гр",
                            "itemCode": "00-00002648",
                            "itemDescription": "Соль, Огурцы, Майонез, Крабовые палочки с/м, Крупа Рис круглозерный, Яйцо куриное, Кукуруза консервированная",
                            "url": "00-00002648.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 21
                        },
                        {
                            "itemName": "Салат Оливье с колбасой",
                            "itemCode": "00-00003180",
                            "itemDescription": "Соль, морковь, яблоки, лук репчатый, петрушка свежая, картофель, майонез, колбаса вареная, яйцо куриное, перец ч/м, горошек зеленый консервированный , огурцы консервированные",
                            "url": "default.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 23
                        }
                    ]
                },
                {
                    "catName": "Вторые блюда",
                    "catCode": "0000034476",
                    "menuItems": [
                        {
                            "itemName": "Рыба запеченная под майонезом с луком (минтай) ",
                            "itemCode": "00-00003344",
                            "itemDescription": "Минтай, масло растительное, мука пшеничная в/с, соль, лук репчатый, майонез.",
                            "url": "default.png",
                            "quantity": 0,
                            "itemWeight": 115,
                            "itemPrice": 55
                        },
                        {
                            "itemName": "Котлеты из филе курицы панированные жареные \"Де-воляй\" ",
                            "itemCode": "00-00001790",
                            "itemDescription": "Куриное филе, кляр (дрожжи сухие, масло растительное, мука пшеничная в/с, сахар песок, соль, масло сливочное, яйцо куриное, перец черный молотый)",
                            "url": "00-00001790.jpg",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 49
                        },
                        {
                            "itemName": "Оладьи из печени ",
                            "itemCode": "00-00001989",
                            "itemDescription": "Печень говяжья, дрожжи сухие, масло растительное, мука пшеничная в/с, сахар песок, соль, масло сливочное, перец ч/м.",
                            "url": "default.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 60
                        },
                        {
                            "itemName": "Котлеты, биточки, шницели (свинина) ",
                            "itemCode": "00-00002190",
                            "itemDescription": "Дрожжи, Масло растительное, Мука пшеничная в/с, Сахар песок, Соль, Молоко, Свинина, Перец черный молотый",
                            "url": "default.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 40
                        }
                    ]
                },
                {
                    "catName": "Гарниры",
                    "catCode": "0000034478",
                    "menuItems": [
                        {
                            "itemName": "Картофельное пюре ",
                            "itemCode": "00-00003801",
                            "itemDescription": "Картофель, яйцо, молоко, масло сливочное.",
                            "url": "00-00003801.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 13
                        },
                        {
                            "itemName": "Каша гречневая рассыпчатая",
                            "itemCode": "00-00003727",
                            "itemDescription": "Крупа гречневая, соль, масло сливочное.",
                            "url": "00-00003727.png",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 11
                        },
                        {
                            "itemName": "Макароны отварные ",
                            "itemCode": "00-00003757",
                            "itemDescription": "Макаронные изделия, соль, масло сливочное.",
                            "url": "00-00003757.jpg",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 7
                        }
                    ]
                },
                {
                    "catName": "Выпечка",
                    "catCode": "0000034481",
                    "menuItems": [
                        {
                            "itemName": "Вак-беляш с говядиной и картофелем  ",
                            "itemCode": "НФ-00000865",
                            "itemDescription": "Тесто для вак-беляша, картофель, говядина, лук репч.",
                            "url": "default.png",
                            "quantity": 0,
                            "itemWeight": 80,
                            "itemPrice": 39
                        },
                        {
                            "itemName": "Пирожок печёный с вишней ",
                            "itemCode": "00-00002376",
                            "itemDescription": "Дрожжи, Масло растительное, Мука пшеничная в/с, Сахар песок, Соль, Масло сливочное, Молоко, Вишня, Яйцо куриное, Крахмал картофельный , Какао порошок",
                            "url": "default.png",
                            "quantity": 0,
                            "itemWeight": 60,
                            "itemPrice": 26
                        },
                        {
                            "itemName": "Хачапури с сыром ",
                            "itemCode": "00-00002045",
                            "itemDescription": "Сыр, мука пшеничная, сахар, масло сливочное, молоко, яйцо куриное, сыр фета, дрожжи, масло растительное, соль ",
                            "url": "00-00002045.jpg",
                            "quantity": 0,
                            "itemWeight": 100,
                            "itemPrice": 38
                        },
                        {
                            "itemName": "Кекс шоколадный ",
                            "itemCode": "МГ-00009370",
                            "itemDescription": "Мука пшеничная, сахар, маргарин, яйцо, изюм, какое порошок, сахарная пудра.",
                            "url": "МГ-00009370.jpg",
                            "quantity": 0,
                            "itemWeight": 80,
                            "itemPrice": 21
                        }
                    ]
                }
            ]
        }
    ]
}

document.querySelector('.header').innerHTML = `${menu.menuGroup}`

let menuCategories = menu.serviceTimes[0].menuCategories;
let main = document.querySelector('.main');

document.addEventListener("DOMContentLoaded", function () {

    menuCategories.map((item) => {
        main.innerHTML += `<div class="category__title">${item.catName}</div>`;

        item.menuItems.map((category) => {
            main.innerHTML += `
            <div class="card">
            <div class="card__img">
                <img src="https://smartapp.acs-cis.ru/assets/img/Menu/${category.url}">
            </div>
            <div class="card__content">
                <div class="card__content-title">${category.itemName}</div>
                <div class="card__content-description">${category.itemDescription}</div>
                <div class="card__content-weight">${category.itemWeight} гр</div>
                <div class="card__content-price">${category.itemPrice}
                <img src="ruble.png">
            </div>
            <div class="card__content-count">
                <button onclick="Decrease()" id="buttonDecrease">-</button>
                <input placeholder=0 id="countInput">
                <button onclick="Increase()">+</button>
            </div>
            </div>
            </div>`
        })

    })
})


let count = 0
const Increase = () => {
    count += 1

    console.log(count)
}

const Decrease = () => {

    if (count > 0) {
        count -= 1
    }
    else {
        return
    }

    console.log(count)
}




    // for (i = 0; i < menuCategories.length; i++) {
    //     console.log(menuCategories[i].catName)
    //     menuCategories[i].menuItems.map(function (item) {
    //         let element = document.createElement("div");
    //         element.className = "catName" + menuCategories[i].catCode;
    //         element.innerHTML = `
    //         <div class="card">
    //         <div>${item.itemName}</div>
    //         <div>${item.itemDescription}</div>
    //         </div>`;
    //         document.body.appendChild(element);
    //     })
    // }
// })

















