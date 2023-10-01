const app = document.querySelector('#app')
const md = fetch(file).then(res=>res.text()).then(text=>{
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
  const html = converter.makeHtml(text)
  app.innerHTML = html
})




