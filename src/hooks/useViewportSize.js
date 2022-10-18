import { useState, useEffect } from 'react'

export default function useViewportSize() {
    const [viewport, setViewPort] = useState()

    useEffect(() => {
        if (window.innerWidth < 640) {
            setViewPort('small')
        } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
            setViewPort('medium')
        } else {
            setViewPort('large')
        }
        console.log('viewport is:', viewport)
    })

    return { viewport }
}
