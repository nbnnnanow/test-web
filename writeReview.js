let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav-toggle");
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

function getFile() {
  document.getElementById("photo").click();
}

// function previewFiles() {

//   var preview = document.querySelector('#preview');
//   var files   = document.querySelector('input[type=file]').files;

//   function readAndPreview(file) {

//     // Make sure `file.name` matches our extensions criteria
//     if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
//       var reader = new FileReader();

//       reader.addEventListener("load", function () {
//         var image = new Image();
//         image.height = 50;
//         image.title = file.name;
//         image.src = this.result;
//         preview.appendChild( image );
//       }, false);

//       reader.readAsDataURL(file);
//     }

//   }

//   if (files) {
//     [].forEach.call(files, readAndPreview);
//   }

// }

function uploadImage() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#photo").files[0];
  const name = new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url);
      document.querySelector("#image").src = url;
    })
    .catch(console.error);
}

// let form = document.querySelector('#addNew');

// db.collection('review').get().then(userreview => {
//   userreview.docs.forEach(doc =>{
//     console.log(doc.data())
//   })
// })

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   db.collection('review').add({
//     activityName: form.actName.value,
//     touristAttraction: form.tourAttr.value,
//     descriptionReview: form.descriptReview.value
//   })
// });
