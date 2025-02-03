const btn = document.querySelector(".click")



function Random() {
    var RandomImg = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fdisney-princess-png&psig=AOvVaw1xt6daeZYHGe6n6Zcy5HLA&ust=1738661352863000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjd9LWYp4sDFQAAAAAdAAAAABAh",
        "https://w7.pngwing.com/pngs/597/600/png-transparent-princess-aurora-ariel-belle-maleficent-princess-aurora-cartoons-disney-princess-fictional-character-thumbnail.png",
        "https://w7.pngwing.com/pngs/631/446/png-transparent-disney-princess-illustration-belle-princess-aurora-cinderella-rapunzel-princess-jasmine-beauty-and-the-beast-disney-princess-beast-doll-thumbnail.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcf5FfVY_5OyQ4LXkbxulEKmEgfz3TyVMoNw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH99XpZ91FRi0njFkunUvrQfgkcBMnkBvsSQ&s"]
    var RandomX = Math.random() * 100;
    var RandomY = Math.random() * 90;
    return [RandomX, RandomY, RandomImg]
}
Random();


btn.addEventListener("click", () => {
    var [RandomX, RandomY, RandomImg] = Random();
    var img = document.createElement("img");
    document.body.appendChild(img);
    img.src = RandomImg[Math.floor(Math.random() * RandomImg.length)]

    img.style.height = "150px";
    img.style.position = "absolute"
    img.style.left = RandomX + "%"
    img.style.top = RandomY + "%"

})