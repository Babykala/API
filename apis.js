
var input=document.querySelector("#word");
input.addEventListener("keyup",function(e){
    if(e.keyCode == 13){
        e.preventDefault();
        document.querySelector("#search").click();
    }
    if(e.keyCode==8){
        document.querySelector("#mean").innerText="";
        document.querySelector("#pho").innerText="";
        document.querySelector("#part").innerText="";
        document.querySelector("#syn").innerText="";
    }
})

document.querySelector("#search").addEventListener("click",function(){
    let word=document.querySelector("#word").value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response=>response.json())
        .then(data=>{
           
            //Meanings
            let m=data[0].meanings;
            let def=m[0].definitions;
            def.forEach(ele=>{
                var li=document.createElement("li");
                document.querySelector("#mean").append(li);
                li.innerText+=ele.definition;
            })
            
            //Phonetics
            let ph=data[0].phonetics;
            ph.forEach(ele=>{
                
                document.querySelector("#pho").innerText=ele.text;
            })

            //Parts of speech
            let part=m[0].partOfSpeech;
            document.querySelector("#part").innerText=part;
            
            //Synonyms
            let syn=m[0].synonyms;
            document.querySelector("#syn").innerText=syn;
        })
       
             
});



    