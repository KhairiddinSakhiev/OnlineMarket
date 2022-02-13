let objects = [
    {
        "name": "Помидор(Курган)",
        "cost": "50 tjs",
        "img": "https://domovouyasha.ru/wp-content/uploads/2018/06/1.jpg"
    },
    {
        "name": "Огурец(Курган)",
        "cost": "30 tjs",
        "img": "https://legkovmeste.ru/wp-content/uploads/2019/05/post_5cd1e0b1d4299.jpeg"
    },
    {
        "name": "Лук(Курган)",
        "cost": "20 tjs",
        "img": "http://nagrunte.ru/wp-content/uploads/2018/05/luk_foto6.jpg"
    },
    {
        "name": "Картофель(Чиргатол)",
        "cost": "60 tjs",
        "img": "http://molva33.ru/wp-content/uploads/2015/11/potatos-0070044001412928013-e1447321361633.jpg"
    },
    {
        "name": "Капуста(Дангара)",
        "cost": "15 tjs",
        "img": "https://diz-cafe.com/wp-content/uploads/2019/05/post_5ab399178e326.jpg"
    },
    {
        "name": "Марковка(Рудаки)",
        "cost": "25 tjs",
        "img": "https://zdorovaya-eda.com/sites/default/files/zdorovoe-pitanie/1-11/c8c0148f0724.jpg"
    },
    {
        "name": "Чиснок(Дангара)",
        "cost": "80 tjs",
        "img": "https://tltaudit.ru/wp-content/uploads/2018/9732e973.jpg"
    },
    {
        "name": "Укроп(Рудаки)",
        "cost": "0.5 tjs",
        "img": "http://img1.liveinternet.ru/images/attach/c/2/68/333/68333602_1293305214_dill.jpg"
    },
    {
        "name": "Клубник(Курган)",
        "cost": "30 tjs",
        "img": "https://go.imgsmail.ru/imgpreview?key=190f19cb3348239a&mb=imgdb_preview_exp"
    },
    {
        "name": "Помидор(Узбекистон)",
        "cost": "100 tjs",
        "img": "http://www.mycharm.ru/data/cache/2016nov/28/13/301081_95772thumb650.jpg"
    },
    {
        "name": "Огурец(Узбекистон)",
        "cost": "45 tjs",
        "img": "http://tikitoki.ru/uploads/material/3/cc/46/551.jpg?time=1489240796282"
    },
    {
        "name": "Лук(Россия)",
        "cost": "40 tjs",
        "img": "https://allya.ru/wp-content/uploads/2016/07/sok-luka-23.jpg"
    },
    {
        "name": "Картошка(Мастчах)",
        "cost": "80 tjs",
        "img": "https://fruitinfo.ru/data/tradeboard/29564/tradeboardwLFxGQ_img.jpg"
    },
    {
        "name": "Капуста(Китай)",
        "cost": "10 tjs",
        "img": "https://orebenke.info/wp-content/uploads/2017/12/kapusta-pekinskaya-600x371.jpg"
    },
    {
        "name": "Марковка(Курган)",
        "cost": "15 tjs",
        "img": "https://funforkids.ru/pictures/carrotphoto/carrot17.png"
    },
    {
        "name": "Чиснок(Россия)",
        "cost": "80 tjs",
        "img": "https://tiensmed.ru/upfiles/kfm/articles/news/glisti-lechenie/27.jpg"
    },
    {
        "name": "Укроп(Курган)",
        "cost": "0.5 tjs",
        "img": "https://polzaili.ru/wp-content/uploads/2015/08/55675dgfdg.jpg"
    },
    {
        "name": "Клубник(Узбекистан)",
        "cost": "50 tjs",
        "img": "https://i09.fotocdn.net/s108/b00be459f5375eff/public_pin_m/2359639582.jpg"
    },

];
let out = '',
    inputValue = document.querySelector('#searching'),
    elemConteiner = document.getElementById('frame');
for (var i in objects) {
    out += '<div class = "elems">';
    out += '<img src="' + objects[i].img + '" class="imgg">';
    out += "Названия: " + objects[i].name + "</br>";
    out += "Цена: " + objects[i].cost + "</br>";
    out += '</div>'
}
elemConteiner.innerHTML = out;
function search() {
    if (inputValue.value !== '') {
        for (let i = 0; i < objects.length; i++) {
            if (!objects[i].name.toLowerCase().includes(inputValue.value.toLowerCase())) {
                elemConteiner.children[i].style.display = 'none';
            }
            else {
                elemConteiner.children[i].style.display = 'block';
            }
        }
    } else {
        elemConteiner.innerHTML = out;
    }
}

function filtr() {
    let fromm = document.getElementById('from').value,
        too = document.getElementById('to').value;
    parseInt(fromm); parseInt(too);

    if(too == 0 && fromm == 0){
        elemConteiner.innerHTML = out;
        return
    }
    for (let i = 0; i < objects.length; i++) {
        /*if (parseInt(objects[i].cost) >= fromm && parseInt(objects[i].cost) <= too) {
            elemConteiner.children[i].style.display = 'block';
        }
        else {
            elemConteiner.children[i].style.display = 'none';
        }
        if(too == 0 && fromm == 0){
            elemConteiner.innerHTML = out;
        }*/
        if (!(parseInt(objects[i].cost) >= fromm && parseInt(objects[i].cost) <= too)) {
            elemConteiner.children[i].style.display = 'none';
        }
    }

}


