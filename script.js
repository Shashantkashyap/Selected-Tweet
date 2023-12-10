document.addEventListener('DOMContentLoaded', function(){
    const content = document.querySelector("p");
    const button = document.getElementById('button');
    const tweetButton = document.getElementById('tweet-button');

   

    content.addEventListener("mouseup",function(e){
        const text = window.getSelection().toString().trim();
        

        if(text !== ''){
            tweetButton.style.backgroundColor = "#4ebbd3"

            

            tweetButton.addEventListener('click', function(){
                
                const url = `https://twitter.com/intent/tweet?text=${text}`;
                console.log(url)
                window.open(url,'_blank');
                
                console.log(url)
            })
        }else{
            button.style.backgroundColor = "#c2bea0";
        }
    })
    

    document.addEventListener('mousedown', function(e){
        if(!button.contains(e.target) && e.target !== tweetButton){
            button.style.backgroundColor = "#c2bea0";
        }
    })
})