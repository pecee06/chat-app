import {createElement} from 'react'

const Container = ({element="div", children, ...props}) => {
    const container = createElement(element, {
        children,
        ...props
    })

  return container
}

export default Container