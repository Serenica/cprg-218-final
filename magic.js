const currentDate = new Date();
console.log(currentDate); 
let currentDay = currentDate.getDay();
console.log(currentDay); /*counts from 0-6, Sunday is 0, Saturday is 6*/
if(currentDay==0){
    book_title.innerHTML = "Iggy Peck Architect by Andrea Beaty"
    book_image.src = "iggy.webp"
    book_description.innerHTML = "Iggy Peck may have trouble paying attention in school, but he sure doesn't have trouble building things! Join Iggy Peck on his adventures with his class, and find out if he saves the day!"
    
}

if(currentDay==1){
    book_title.innerHTML = "Ada Twist Scientist by Andrea Beaty"
    book_image.src = "ada.webp"
    book_description.innerHTML = "Miss Lila Greer and the Second Grade Class at Blue River Creek Elementary are back! Ada has always loved asking questions and finding answers. Can she find the answer to save the day this time?"
}

if(currentDay==2){
    book_title.innerHTML = "Rosie Revere Engineer by Andrea Beaty"
    book_image.src = "rosie.webp"
    book_description.innerHTML = "All pretending aside, this is one of my favourite children's books in my collection. There is a Rosie the Riveter easter egg, there is social emotional learning, there is complex things for kids, this book has everything. This book is incredibly pro-STEAM in an incredibly accessible way. The only book I have that's better than this one is Ara the Star Engineer, but I can't find that one to take a picture of."
}

if(currentDay==3){
    book_title.innerHTML = "Sofia Valdez Future Prez by Andrea Beaty"
    book_image.src = "sofia.webp"
    book_description.innerHTML = "Once again, we return to Miss Lila Greer and the second grade class at Blue River Creek. This time, our second grade heroine is plucky girl who is striving for social equity and fairness for all. Democracy is also involved."
}

if(currentDay==4){
    book_title.innerHTML = "Chester's Way by Kevin Henkes"
    book_image.src = "chester.webp"
    book_description.innerHTML = "Chester and his best friend have a very fun time being best friends. They do everything together, and wouldn't change a single thing about their lives. Then one day, Lily moves in down the street. Can these two friends make room for someone new in their lives, and new ways of doing things?"  
}

if(currentDay==5){
    book_title.innerHTML = "Finding Winnie by Lindsay Mattick"
    book_image.src = "winnie.webp"
    book_description.innerHTML = "Before his stuff and fluff became known across the land as Winnie The Pooh, friend of Christopher Robin, there was a real bear in need of a loving family. This bear found her home on the front lines of WWI with a very brave veterinarian. Get your parents their sad storytime kleenex, and get ready to cuddle up and read all about a bear named Winnie. "
}

if(currentDay==6){
    book_title.innerHTML = "The Jolly Christmas Postman by Janet and Allen Ahlberg"
    book_image.src = "jcpp.jpg"
    book_description.innerHTML = "The Jolly Postman returns, this time to deliver seasons greetings and Christmas Wishes! This book contains small parts."
}
