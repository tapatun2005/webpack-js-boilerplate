import $typeof from './$typeof'

const $selector = (parent, child) => {
    
    if (!child) {
        return document.querySelector(parent)
    } else {
        if ($typeof(parent) === 'HTMLElement') {
            return parent.querySelector(child)
        }
    }
    
}

export default $selector