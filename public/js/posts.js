const posts = [
  {
    id: 1,
    title: "Foreigner, The",
    cover_img: "http://dummyimage.com/223x100.png/dddddd/000000",
    description: "Rubber",
    content:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    thumb_img: "http://dummyimage.com/159x100.png/ff4444/ffffff",
    name: "John Paul",
    published_at: "04/10/2021",
  },
  {
    id: 2,
    title: "P.U.N.K.S",
    cover_img: "http://dummyimage.com/240x100.png/ff4444/ffffff",
    description: "Plastic",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    thumb_img: "http://dummyimage.com/204x100.png/dddddd/000000",
    name: "John Paul",
    published_at: "12/09/2020",
  },
  {
    id: 3,
    title: "Hitch",
    cover_img: "http://dummyimage.com/179x100.png/cc0000/ffffff",
    description: "Brass",
    content:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    thumb_img: "http://dummyimage.com/125x100.png/cc0000/ffffff",
    name: "John Paul",
    published_at: "09/15/2021",
  },
  {
    id: 4,
    title: "You'll Never Get Rich",
    cover_img: "http://dummyimage.com/138x100.png/dddddd/000000",
    description: "Steel",
    content:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    thumb_img: "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
    name: "John Paul",
    published_at: "04/29/2021",
  },
  {
    id: 5,
    title: "Cream Lemon (Kurîmu remon)",
    cover_img: "http://dummyimage.com/125x100.png/dddddd/000000",
    description: "Brass",
    content:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    thumb_img: "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
    name: "John Paul",
    published_at: "06/28/2021",
  },
  {
    id: 6,
    title: "Crew, The",
    cover_img: "http://dummyimage.com/249x100.png/cc0000/ffffff",
    description: "Stone",
    content:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    thumb_img: "http://dummyimage.com/216x100.png/5fa2dd/ffffff",
    name: "John Paul",
    published_at: "05/28/2021",
  },
];

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
