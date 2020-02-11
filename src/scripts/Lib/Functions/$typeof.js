const $typeof = (obj) => {
    
    let type = ''
    
    if (obj instanceof Element || obj instanceof HTMLElement) {
        type = 'HTMLElement'
    } else {
        type = {}.toString.call(obj).split(' ')[1].slice(0, -1)
    }

    return type

}

export default $typeof