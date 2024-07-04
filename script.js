let movies = [
    {
        name: "Avengers Infinity War",
        rating: 8.7,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmE2vwxy5KaCu7cRuYYdgNdQKddux5OYgGwsPo0kqP_xzLnsDV",
        description: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan."
    },
    {
        name: "Avengers:End Game",
        rating: 9,
        poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
        description: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
    },
    {
        name: "Avengers",
        rating: 9.1,
        poster: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSK0mRgxk6RD6AXbkAzpQRs7FCh9J0FiOxC9eIHCqoxAgpBeywiPrFjbAcGKbCaVYkc",
        description: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task."
    },
    {
        name: "Avengers:Age of Ultron",
        rating: 8.9,
        poster: "https://www.movienewsletters.net/photos/183976R1.jpg",
        description: "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him."
    },
    {
        name: "Thor",
        rating: 7.9,
        poster: "https://www.movienewsletters.net/photos/113522R1.jpg",
        description: "Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D."
    },
    {
        name: "Batman",
        rating: 9.2,
        poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo",
        description: "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past."
    },
    {
        name: "The Flash",
        rating: 8,
        poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqLYH_Sfv0dDGSzu6UhTmaYUo1OxBSTtUmRjZIqazHipy3K6Al",
        description: "Worlds collide when the Flash uses his superpowers to travel back in time to change the events of the past. However, when his attempt to save his family inadvertently alters the future, he becomes trapped in a reality in which General Zod has returned, threatening annihilation."
    },
    {
        name: "Iron Man 1",
        rating: 9,
        poster: "https://www.movienewsletters.net/photos/277216R1.jpg",
        description: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world."
    },
    {
        name: "Iron Man 2",
        rating: 6.7,
        poster: "https://www.movienewsletters.net/photos/065116R1.jpg",
        description: "Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies."
    },
    {
        name: "Iron Man 3",
        rating: 9,
        poster: "https://www.movienewsletters.net/photos/156876R1.jpg",
        description: "Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin"
    },
    {
        name: "Blackpanther",
        rating: 6,
        poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPpcKQ9eWZGxJe6eXyCW91eayLVm4KqruvJz3GP0F2T2w46yKZ",
        description: "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation."
    },
    {
        name: "Breaking bad:El Camino",
        rating: 9,
        poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStpQRLPf3ywbt05gx2amIGCjd9DcoKWBHgT75MDl-oIag7qTWY",
        description: "After a dramatic escape from captivity, Jesse Pinkman must deal with his past in order to make some kind of future for himself."
    }

];

function searchMovie() {
    let movieName = document.getElementById('search').value;

    if (movieName != "") {
        let result = movies.filter(function (movie) {
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })
        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }

}

function displayMovies(data) {
    // let movie = document.createElement("div");
    // movie.classList.add("movie");

    // let overlay=document.createElement("div");
    // overlay.classList.add("overlay")

    // movie.appendChild(overlay);

    // console.log(movie);
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;

    for (let i = 0; i < data.length; i++) {


        htmlString = htmlString + `
        
        <div class="movie">
            <div class="overlay">
                <div class="video">

                </div>
                <div class="details">
                    <h1>${data[i].name}</h1>
                    <h2>${data[i].rating}</h2>
                    <p>${data[i].description}</p>
                </div>
            </div>
            <img class="poster" src="${data[i].poster}" alt="${data[i].name}">
        </div>

        `
    }

    document.getElementById("movies").innerHTML = htmlString;
}
displayMovies(movies);