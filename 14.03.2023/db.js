/*ejecutar el json server que instalamos el martes.... desde el gitbash ir a la carpeta donde tenemos el db.json y colocar el comando: json-server --watch db.json
crear 4 funciones... getAllPosts(). getPostById(id), createPost(post), updatePost(post) y usar el metodo http correspondiente para cada funcionalidad
utilizar la funcion fetch(url, opciones) donde la url va a ser la url de su localhost (la que les sale cuando ejecutan el json-server) y opciones es un objeto 
(lo pueden construir a partir de las dispositivas)
implementarlo con  Async/Await https://dmitripavlutin.com/javascript-fetch-async-await/*/

const url= "http://localhost:3000/compras";

const getAllPosts = async () => {
   //METODO GET
   const response = await fetch(url);
   const data = await response.json();
   console.log("datos del getAllPost", data);
}  

getAllPosts();

const getPostById = async (id) => {
//METODO GET
   const response = await fetch(`${url}/${id}`);
   const data = await response.json();
   console.log("datos del get post by ID", data);
} 

getPostById(1);

const createPost = async (post) => {
// POST
   const opciones = {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
   }
   const response = await fetch(url, opciones);
   const data = await response.json();
   console.log("datos del POST post", data);
}
createPost({
   "id": 4,
   "title": "Esto es un nuevo objeto de post",
   "author": "anita"
});
const updatePost = (post) => {
// PUT
}

const updatePost2 = (post) => {
   // PATCH
   }
