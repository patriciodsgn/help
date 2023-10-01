document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('#main')
  
  const val = window.location.href.split('#')[1]
  if(val===undefined){
    console.log('val')
  }else{
    logInfo(val)
    setTimeout(() => Prism.highlightAll(), 100)
  }
  
  const btns = document.querySelectorAll('nav a')
  btns.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
      const val = e.target.href.split('#')[1]
      console.log()
      logInfo(val)
      setTimeout(() => Prism.highlightAll(), 100)
    })
  })
  
  
  async function logInfo(value) {
    const response = await fetch(`./${value}.md`)
    const info = await response.text()
    
    const converter = new showdown.Converter({
      backslashEscapesHTMLTags: true,
      completeHTMLDocument: true,
      customizedHeaderId: true,
      disableForced4SpacesIndentedSublists: true,
      emoji: true,
      excludeTrailingPunctuationFromURLs: true,
      ghCodeBlocks: true,
      ghCompatibleHeaderId: true,
      ghMentions: true,
      ghMentionsLink: true,
      headerLevelStart: true,
      
      omitExtraWLInCodeBlocks: true,
      openLinksInNewWindow: true,
      simpleLineBreaks: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tables: true,
      tablesHeaderId: true,
      tasklists: true,
      underline: true,
    })
    const text      = '# hello, markdown!'
    const html      = converter.makeHtml(info)
    console.log(html)

  //   // const text = '# hello, markdown!'
  //   const html = converter.makeHtml(noscriptData)
    main.innerHTML = html
  }
  
  
  
  
  
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
    
  })
  
  
  
  // var converter = new showdown.Converter();
  
  // async function logInfo() {
  //   const response = await fetch("./mongodb.md");
  //   const movies = await response.text();
  //   console.log(movies);
  // }
  
  // logInfo()
  
  
  
  // var md = '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
  //          'because:\n\n' +
  //          ' - it\'s easy to use\n' +
  //          ' - it\'s extensible\n' +
  //          ' - works in the server and in the browser';
  // var html = converter.makeHtml(md);
