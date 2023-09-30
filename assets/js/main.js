const val = window.location.href.split('#')[1]
logMovies(val)

const btns = document.querySelectorAll('nav a')
btns.forEach(btn =>{
  btn.addEventListener('click', (e)=>{
    const val = e.target.href.split('#')[1]
    console.log()
    logMovies(val)

  })
})


async function logMovies(value) {
  const response = await fetch(`./${value}.md`);
  const movies = await response.text();
  console.log(movies);
}


// document.addEventListener('DOMContentLoaded', () => {
//   const noscript = document.querySelector('noscript')
//   const noscriptData = noscript.innerHTML
//   // console.log(data)
//   const converter = new showdown.Converter()
//   // const text = '# hello, markdown!'
//   const html = converter.makeHtml(noscriptData)
//   console.log(html)

//   var nuevoNodo = document.createElement("p");
// nuevoNodo.textContent = "Este es el nuevo nodo.";
//   noscript.replaceWith(nuevoNodo);
  
// })



// var converter = new showdown.Converter();

// async function logMovies() {
//   const response = await fetch("./mongodb.md");
//   const movies = await response.text();
//   console.log(movies);
// }

// logMovies()



// var md = '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
//          'because:\n\n' +
//          ' - it\'s easy to use\n' +
//          ' - it\'s extensible\n' +
//          ' - works in the server and in the browser';
// var html = converter.makeHtml(md);