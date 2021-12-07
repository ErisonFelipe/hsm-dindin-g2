axios.get("https://test.godigibee.io/pipeline/gama/v1/hsmdinding2?rota=curso", {
  headers: {
    "apikey": "3OUYJz5DrI7w5SMMJL2EVmO93JREo6Nm"
  }
})
.then(response =>{
 const {data} = response.data;
  let dados = "";
//   console.table(response.data.data)
    data.forEach(curso => {
        dados += criarCurso(curso)        
    });
    document.getElementById("cursos").innerHTML = dados;
    console.log("Get response", response)
});

const criarCurso = (curso)=>{
    return `
    <div class="card g-col-4 g-col-md-2 m-3 card-size" >
        <img src="${curso.thumb_img}" alt=""  class="card-img card-size">
        <div class="card-body">
            <h5 class="card-title"> ${curso.title}</h5>
            <p name="" id="" cols="30" rows="10"card-text class="">${curso.description}</p>
        </div>
            </div>
    `
};