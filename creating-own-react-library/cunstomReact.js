function customRender(reactElement, container) {
    // let element = document.createElement(reactElement.type)
    // element.innerHTML = reactElement.childern
    // element.setAttribute('href', reactElement.prop.href)
    // element.setAttribute('target', reactElement.prop.target)
    // element.setAttribute('className', reactElement.prop.className)
    // // now append the element into  container
    // container.appendChild(element)


    // this method is not good for seting attributes one by one 


    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.childern
    for (const i in reactElement.prop) {
        if (i == 'childern') continue
        element.setAttribute(i, reactElement.prop[i])
    }




    container.appendChild(element)
}


// 

const reactElement = {
    type: 'a',
    prop: {
        href: 'https://google.com',
        className: 'container',
        target: '_blank'
    },
    childern: 'Click here '
}
// now we need to put this reactElement in to root 
// meaning render root

const root = document.getElementById('root')
// first parm take 'what to inject?'

// second param take ' in which to inject? '
customRender(reactElement, root)