function setScrollToOptions($num) {
    window.scrollTo({
        top: $num,
        left: 0,
        behavior: "smooth"
    });
    const windowScrollTop = window.pageYOffset;
}