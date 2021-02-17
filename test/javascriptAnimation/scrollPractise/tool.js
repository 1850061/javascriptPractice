function scroll() {
    return {
        top:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,
        left:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft
    }
}