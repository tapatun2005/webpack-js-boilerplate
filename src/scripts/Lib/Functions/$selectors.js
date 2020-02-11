import $typeof from './$typeof'

const $selectors = (parent, child) => {
    
    if (!child) {
        return document.querySelectorAll(parent)
    } else {
        if ($typeof(parent) === 'HTMLElement') {
            return parent.querySelectorAll(child)
        }
    }
    
}

export default $selectors