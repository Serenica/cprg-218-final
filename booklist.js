pick.addEventListener("change",function(){
    console.log("change");
    let choice = document.getElementById("pick").value;
    console.log(choice);
    
    if(choice=="happy"){
    console.log("Reader Selected Happy");
    document.getElementById('sass').innerHTML="You should try Rosie Revere Engineer by Andrea Beaty. Scroll down to learn more about it!"
    }
    
    if(choice=="silly"){
        console.log("Reader Selected Silly");
        document.getElementById('sass').innerHTML="You should try Chester's Way by Kevin Henkes. Scroll down to learn more about it!"
    }
    
    if(choice=="sad"){
        console.log("Reader Selected Sad");
        document.getElementById('sass').innerHTML="You should try Finding Winnie by Lindsay Mattick. It's a very happy kind of sad. Scroll down to learn more about it!"
    }
    
    if(choice=="random"){
        console.log("Reader Selected Random");
        document.getElementById('sass').innerHTML="You should read Ara the Star Engineer by Komal Singh. You can find it at your local library, or on it's amazon page: https://shorturl.at/pY8Ly"
    }
    });
    
    bg.addEventListener('input',function(){
    let bgcolor = document.getElementById('bg').value;
    console.log(bgcolor);
    document.body.style.backgroundColor = bgcolor;
    });
    
    bg.addEventListener('input',function(){
        let font = document.getElementById('fc').value;
        console.log(font);
        document.body.style.Color = font;
    
    })
