var indicators = document.getElementsByClassName("collapse_indicator");

for(let i=0; i<indicators.length; i++) {
    indicators[i].addEventListener('click', function(){
        var wrapper = this.closest(".collapse_wrapper");
        var content = wrapper.querySelector(".expand_content");
        wrapper.classList.toggle("active");
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            this.style.transform = "rotate(0deg)";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.style.transform = "rotate(180deg)";
        }

    })
}
