const criaPost = (post) => {
  return `
    <div class="card" >
        <div class="card__header">
            <img src="${post.cover_img}" alt="card__image" class="card__image"/>
        </div>
        <div class="card__body">
            <h4 class="text-center">${post.title}</h4>
            <p class="card__description text-center">${post.description}</p>
            <p class="card__content">${post.content}</p>
        </div>
        <div class="card__footer">
            <div class="user">
                <img src="${getImagePathByAuthorName(
                  post.name
                )}" alt="user__image" class="user__image"/>
                <div class="user__info">
                    <h5>${post.name}</h5>
                    <small>${new Intl.DateTimeFormat("pt-br").format(
                      post.published_at
                    )}</small>
                </div>
            </div>
        </div>
    </div>
    `;
};

const getImagePathByAuthorName = (name) => {
  const firstName = name.split(" ")[0];
  const path = "/public/assets/image/";
  switch (firstName) {
    case "João":
      return path + "joao.jpg";
    case "Maria":
      return path + "maria.jpg";
    case "Silvia":
      return path + "silvia.jpg";
  }
};

const getPosts = () => {
  axios
    .get("https://test.godigibee.io/pipeline/gama/v1/hsmdinding2?rota=posts", {
      headers: {
        apikey: "3OUYJz5DrI7w5SMMJL2EVmO93JREo6Nm",
      },
    })
    .then((response) => {
      const posts = response.data.data;
      let html = "";
      posts.forEach((post) => (html += criaPost(post)));
      $("#posts").html(html);
    })
    .catch((error) => console.error(error));
};

getPosts();
