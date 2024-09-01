window.sh = {
    matches: [],
    link: (elem) => {
        elem.style.position = "relative"
        elem.innerHTML = `
            <textarea
                spellcheck="false"
                autocorrect="off"
                autocapitalize="off"
                translate="no"></textarea>
            <p></p>`
        elem.childNodes[1].addEventListener("keyup", sh.map)
    },
    map: (evt) => {
        const rawText = evt.target.value
        evt.target.parentElement.childNodes[3].innerHTML = sh.highlight(rawText)
    },
    highlight: (text) => {
        for (let i = 0; i < sh.matches.length; i++) {
            text = text.replace(sh.matches[i][0], `<span class="${sh.matches[i][1]}">$&</span>`)
        }
        return text
    },
    addMatch: (regexp, style) => {
        sh.matches.push([regexp, style])
    }
}
