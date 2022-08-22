https://teachablemachine.withgoogle.com/models/pvYKqP8uH/

function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pvYKqP8uH/')

}

function modelaReady()
{
    classifier.classify(gotResults);
}

function gotResults()
if (error) {
    console.error(error)
}
else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) +1;
    random_number_g = Math.floor(Math.random() * 255) +1;
    random_number_b = Math.floor(Math.random() * 255) +1;


    document.getElementById("result_label").innerHTML = 'I can here - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")"
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElemenetById('https://www.rover.com/blog/wp-content/uploads/2020/03/animal-3122933_1920.jpg');
    img1 = document.getElemenetById('https://www.hdnicewallpapers.com/Walls/Big/Dog/Black_Dog_Image_Free_Download.jpg');
    img2 = document.getElemenetById('https://tse1.mm.bing.net/th?id=OIP.aGGA_Dgp0O_x9mDhR6UKQQHaE8&pid=Api&P=0');
    img3 = document.getElemenetById('http://upload.wikimedia.org/wikipedia/commons/0/09/Blackbird_2.jpg');


    if (result[0].label == "Meow") {
        img.src = 'https://welovecatsandkittens.com/wp-content/uploads/2016/11/infinity-cat.gif';
        img1.src = 'https://www.hdnicewallpapers.com/Walls/Big/Dog/Black_Dog_Image_Free_Download.jpg';
        img2.src = 'https://tse1.mm.bing.net/th?id=OIP.aGGA_Dgp0O_x9mDhR6UKQQHaE8&pid=Api&P=0';
        img3.src = 'http://upload.wikimedia.org/wikipedia/commons/0/09/Blackbird_2.jpg';
    }else if (result[0].label == "Bark") {
        img.src = 'https://www.rover.com/blog/wp-content/uploads/2020/03/animal-3122933_1920.jpg';
        img1.src = 'http://www.thethings.com/wp-content/uploads/2016/03/hottodgif-anim.gif';
        img2.src = 'https://tse1.mm.bing.net/th?id=OIP.aGGA_Dgp0O_x9mDhR6UKQQHaE8&pid=Api&P=0';
        img3.src = 'http://upload.wikimedia.org/wikipedia/commons/0/09/Blackbird_2.jpg';
    }else if (results[0].label == "Moo") {
        img.src = 'https://www.rover.com/blog/wp-content/uploads/2020/03/animal-3122933_1920.jpg';
        img1.src = 'https://www.hdnicewallpapers.com/Walls/Big/Dog/Black_Dog_Image_Free_Download.jpg';
        img2.src = 'https://media.giphy.com/media/kdicjggNCgM10dtqvO/giphy.gif';
        img3.src = 'http://upload.wikimedia.org/wikipedia/commons/0/09/Blackbird_2.jpg';
        
    }else if (result[0].label == "Caw") {
        img.src = 'https://www.rover.com/blog/wp-content/uploads/2020/03/animal-3122933_1920.jpg';
        img1.src = 'https://www.hdnicewallpapers.com/Walls/Big/Dog/Black_Dog_Image_Free_Download.jpg';
        img2.src = 'https://tse1.mm.bing.net/th?id=OIP.aGGA_Dgp0O_x9mDhR6UKQQHaE8&pid=Api&P=0';
        img3.src = 'https://bestanimations.com/Animals/Birds/bird-animated-gif-7.gif'; 
    }

}
