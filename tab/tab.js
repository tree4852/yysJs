window.onload = function() {
    const tabbtn = document.querySelectorAll("#tab li");
    tabbtn.forEach(function(ele) {
        ele.addEventListener('click', function() {
            const siblings = this.parentElement.children;
            for (let sibling of siblings){
                sibling.classList.remove('on');

                this.classList.add('on');

            }
        });
    });
}
