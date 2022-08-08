
// time and date

setInterval(Timer, 1000); 

function Timer () {
    const date = new Date().toDateString();

    const time = new Date().toLocaleTimeString();

    document.querySelector("#timer").innerHTML = ` ${date} ${time} `
};
//  ---

// characters ---

let characters = [
    {
        name: " Tsubasa Ozora",

        id: "tsubasa",

        photo: "https://pbs.twimg.com/profile_images/2864072222/69d36f2ff401d4ff65ff63e6c669a98c_400x400.jpeg",
    
        descripton: ` <strong> (d. 27 Temmuz) </strong> 10 numarayı giyen orta saha. 
        Muhteşem bir yetenek olmasına karşın iyi kalpliliğiyle de herkesin sevgisini kazanıyor Kendine has şut teknikleri var. 
        Roberto Hongo tarafından keşfedilmiştir ve Wakabayashi'nin yokluğunda karma takıma kaptanlık yapmıştır. 
        Kendine özel şut teknikleri vardır. Nankatsu macerası Ryo İshizaki ile tanışmasından sonra başlamış ve şehre gelir gelmez ilk işi Shutetsu kalecisi Genzo Wakabayashi'ye meydan okumak olmuştur.
        Millî takıma kadar yükselir ve dünyaca meşhur bir futbolcu olmayı başarır. 
        Röveşatalarıyla ve Drive şutu ile bilinir. Hikâyenin sonunda Barcelona'da kariyerini sürdürür.`
    },

    {
        name: " Genzo Wakabayashi",

        id: "waka",

        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XMzDCRkoZ1pYnz_hhIo8sxQNJKWTv21phQ&usqp=CAU",
    
        descripton: `
        <strong> (d. 7 Aralık) </strong> 22 numarayı giyen kalecidir. Taktığı şapka ile dikkat çeken, çok az gol yiyen bir kalecidir. 
        Hislerini kendisine saklar ve takım arkadaşlarına saygılıdır. 
        Çocukluğundan beri en büyük isteği dünyadaki en iyi kaleci olmaktır. 
        Önemli özelliklerinden biri de ceza sahası dışından gol yememesidir. 
        Anime boyunca sadece 3 kişi ona ceza sahası dışından gol atabilmiştir. 
        Mangada Natureza orta sahadan röveşata ile, filmde ise Schneider orta sahadan sadece Genzo için özel olarak geliştirdiği Mirage şutuyla gol atabilmiştir. 
        Genzo Wakabayashi hikâyenin sonunda Bayern Münih takımında olan Karl Heinz Schneider'i yenmiştir.
        `
    },



    {
        name: " Taro Misaki ",

        id: "misaki",

        photo: "https://i.pinimg.com/originals/a7/0a/d4/a70ad4ff804cbd18673a4918a8f4668f.jpg",
    
        descripton: `
        <strong> (d. 5 Mayıs) </strong> 11 numarayı giyen orta saha. Tsubasa'nın en iyi arkadaşıdır. 
        Tsubasa ile "Altın İkili"yi oluşturmuştur. 
        Babasının gezici ressam olması nedeniyle Japonya'daki birçok yeri ve hikâyenin ileriki kısımlarında da Dünya çapında bazı yerleri gezmiştir. 
        Bu yüzden birçok karakterle beraber oynamıştır. Güler yüzü ve yetenekleri ile dikkat çeker. 
        World Youth serisinde kamyon çarpmıştır. Hikayenin sonunda Fransa'da top koşturmaktadır
        `
    },

   

    {
        name: "Kojiro Hyuga",

        id: "hyuga",

        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTYcu81i2hXm6EA_-KEdp8S92XYTpcM46qhRp0eB6cU7FfylQJQ5Vy8wQI_hUB0RN-JQ&usqp=CAU",
    
        descripton: `
        <strong>  (d. 17 Ağustos) </strong> Meiwa FC'nin kaptanıdır Animenin kötü çocuğudur. Küçük yaşlardan beri futbola ilgi duyar. 
        Babası o çok küçükken ölmüştür. Yaşadığı sorunlar nedeniyle karamsar bir kişiliği vardır. Annesi okul masraflarını karşılayabilmek için çalışır ve Kojiro bundan hiç memnun değildir. 
        Futbol bursu ile Toho'ya gider ve Toho takımının 10 numaralı kaptanı olur. Sert bir oyun tarzı vardır. Tsubasanın en büyük rakibi olup başlarda kazanmak için her yolu denemesi Tsubasayı ve diğer iyi futbolcuları sürekli sakatlaması nedeniyle seyirci tarafından Animenin kötü çocuğu olarak hafızalara kazındı 
        Fakat Babasının ölmüş olması nedeniyle Kardeşlerine ve Annesine bakmak için Futbol oynaması ve kazanmak zorunda olması Hyuganın kötü biri olmadığını gösterdi 
        Özel şutlarının adı Kaplan Şutu, Neo Kaplan Şutu ve Raiju Şutudur. Hikâyenin sonunda Juventus ve Reggiana'da oynamıştır. 
        Anime boyunca Tsubasayı yenebilen tek kişidir
        `
    },

];



// buttons are here ---

let buttonsDom = document.querySelector("#buttonsDiv");

let buttons = `
<button type="button" id="buttonTsubasa" class="btn btn-outline-primary col-sm-2 col-lg-1 ms-1 fs-5">Tsubasa</button>

<button type="button" id="buttonWaka" class="btn btn-outline-danger col-sm-2 col-lg-1  ms-1 fs-5"">Genzo W.</button>

<button type="button" id="buttonMisaki" class="btn btn-outline-success col-sm-2 col-lg-1  ms-1 fs-5"">Misaki</button>    

<button type="button" id="buttonHyuga" class="btn btn-outline-dark col-sm-2 col-lg-1  ms-1 fs-5"">Hyuga</button>
`;

buttonsDom.innerHTML = buttons;

// ---



// list characters

let listCharacterDom = document.querySelector("#listCharacter");

function CreateCharacters (item) {
    let html = ` 
    <section>

        <div>
    
            <img src=" ${item.photo} " 
            height="300" width="400"
            class="img-thumbnail mt-3" alt="...">

            <p class="text-start mt-3 fs-1 text text-decoration-underline text-warning"> ${item.name} </p>

            <p class="text-start mt-3 fs-4"> ${item.descripton} </p>
    
    
        </div>

    </section>
`
return html;
};
// ---




// all characters sorting
function ListTsubasa () {
    let listTsubasa = "";

    characters.map(item => {
        if ( item.id == "tsubasa" ) {
            listTsubasa += CreateCharacters(item)
            document.body.style.backgroundColor= "blue"
          
            
        }
    });

    listCharacterDom.innerHTML = listTsubasa;
};

document.querySelector("#buttonTsubasa").addEventListener("click", ListTsubasa);

document.addEventListener("DOMContentLoaded", ListTsubasa);





function ListWaka () {
    let listWaka = "";

    characters.map(item => {
        if (item.id == "waka" ) {
            listWaka += CreateCharacters(item)
            document.body.style.backgroundColor= "red"
        }
    });

    listCharacterDom.innerHTML = listWaka;
};

document.querySelector("#buttonWaka").addEventListener("click", ListWaka);


function ListMisaki () {
    let listMisaki = "";

    characters.map(item => {
        if (item.id == "misaki") {
            listMisaki += CreateCharacters(item)
            document.body.style.backgroundColor= "green"
        }
    });

    listCharacterDom.innerHTML = listMisaki
};

document.querySelector("#buttonMisaki").addEventListener("click", ListMisaki);



function ListHyuga () {
    let listHyuga = "";

    characters.map(item => {
        if (item.id == "hyuga") {
            listHyuga += CreateCharacters(item)
            document.body.style.backgroundColor= "black"
        }
    });

    listCharacterDom.innerHTML = listHyuga;
};

document.querySelector("#buttonHyuga").addEventListener("click", ListHyuga)

// ---