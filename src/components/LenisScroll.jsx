import { useEffect } from 'react'
import Lenis from 'lenis'

export default function LenisScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            smoothWheel: true,
            smoothTouch: false
        })

        let rafId = null
        const raf = (time) => {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)

        const cancelSmooth = () => {
            // stop any ongoing smooth animation and resume immediately
            lenis.stop()
            lenis.start()
        }

        const onPointerDown = (e) => {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
            if (scrollbarWidth <= 0) return
            const onScrollbar = e.clientX >= document.documentElement.clientWidth
            if (onScrollbar) cancelSmooth()
        }

        window.addEventListener('pointerdown', onPointerDown, { passive: true })

        return () => {
            window.removeEventListener('pointerdown', onPointerDown)
            if (rafId) cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return children
}
