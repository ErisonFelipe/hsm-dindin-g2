const cursos = 
    [{
        "id": 1,
        "tittle": "Rank",
        "description": "Viva Brakespear",
        "thumb_img": "http://dummyimage.com/102x100.png/ff4444/ffffff"
      }, {
        "id": 2,
        "tittle": "Zoolab",
        "description": "Baxy Braunds",
        "thumb_img": "http://dummyimage.com/121x100.png/ff4444/ffffff"
      }, {
        "id": 3,
        "tittle": "Keylex",
        "description": "Pamella Gratrex",
        "thumb_img": "http://dummyimage.com/148x100.png/ff4444/ffffff"
      }, {
        "id": 4,
        "tittle": "Temp",
        "description": "Arie Ajean",
        "thumb_img": "http://dummyimage.com/193x100.png/cc0000/ffffff"
      }, {
        "id": 5,
        "tittle": "Regrant",
        "description": "Any Merigot",
        "thumb_img": "http://dummyimage.com/191x100.png/5fa2dd/ffffff"
      }, {
        "id": 6,
        "tittle": "Greenlam",
        "description": "Valerie Belding",
        "thumb_img": "http://dummyimage.com/240x100.png/ff4444/ffffff"
      }, {
        "id": 7,
        "tittle": "Regrant",
        "description": "Ofilia Boxen",
        "thumb_img": "http://dummyimage.com/127x100.png/5fa2dd/ffffff"
      }, {
        "id": 8,
        "tittle": "Voltsillam",
        "description": "Tatiana Beamand",
        "thumb_img": "http://dummyimage.com/144x100.png/ff4444/ffffff"
      }, {
        "id": 9,
        "tittle": "Y-find",
        "description": "Tonya Eannetta",
        "thumb_img": "http://dummyimage.com/151x100.png/5fa2dd/ffffff"
      }, {
        "id": 10,
        "tittle": "Transcof",
        "description": "Latisha Ashurst",
        "thumb_img": "http://dummyimage.com/206x100.png/ff4444/ffffff"
      }      
];

axios.get("https://test.godigibee.io/pipeline/gama/v1/hsmdinding2")
.then(response =>{
    console.log("Get response", response)
});

const criarCurso = (curso)=>{
    return `    
    <div class="row center">
    <div class="card">
        <a href="produto.html">
            <img class="media" src="./imagens/sem-imagem.png" alt="produto">
        </a>
        <div class="card-box">
            <a href="produto.html">
                <h2>${curso.tittle}</h2>
            </a>
            <div class="avaliacao">
                <span><i class="fa fa-star"></i></span>                        
                <span><i class="fa fa-star"></i></span>           
                <span><i class="fa fa-star"></i></span>                        
                <span><i class="fa fa-star"></i></span>                        
                <span><i class="fa fa-star"></i></span>
                <div class="preco">
                    
                </div>                        
            </div>                    
            </div>                    
        </div>       
    </div> 
    `
};

function Curso(){
    let dados = "";
    cursos.forEach(curso => {
        dados += criarCurso(curso)        
    });
    document.getElementById("curso").innerHTML = dados;
}

Curso();
