import React from 'react'

import '../assets/css/vapor.css'
import '../assets/css/Home.css'



const Genres = () => {
    
      const  Genresl = [
            {
                "id": 28,
                "name": "Action",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/jpeg/static/62d9f1537dec2814ccdd3a980f8fc9a6/1701586688981/1ec458c2bc8aeb1b62c478093dc63677_low.webp"
            },
            {
                "id": 12,
                "name": "Adventure",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-08-11/cqsefqle878c7395jlog/a4e897798b4d215299cf30c162d74f43_low.webp"
            },
            {
                "id": 16,
                "name": "Animation",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-08-16/cqvhbste878c73fl0ua0/afd336df900d44424b9c1f4663d3edca_low.webp"
            },
            {
                "id": 35,
                "name": "Comedy",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-08-14/cqu0s5te878c739ica6g/31f130633bf07f89f2628393477df829_low.webp"
            },
            {
                "id": 80,
                "name": "Crime",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-11-22/ct02jmte878c73fqv1h0/a4e835221bbbed443231d4ab157b19da_low.webp"
            },
            {
                "id": 99,
                "name": "Documentary",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2025-01-01/ctqs86le878c738m3o20/7fe40b15213d5e0d3aa9312f978c4f58_low.webp"
            },
            {
                "id": 18,
                "name": "Drama",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-09-23/crok8jde878c73c2sv4g/839e39a17b1d002ae470494011e2c8a8_low.webp"
            },
            {
                "id": 10751,
                "name": "Family",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-10-29/csg9hnte878c739b7ra0/3807a660e0afe33fb2bf7e7191d903e6903d1cff_low.webp"
            },
            {
                "id": 14,
                "name": "Fantasy",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-08-21/cr2p3vde878c73asr8sg-1/080ca4c9bd4257160ca640ffa0d49ec0_low.webp"
            },
            {
                "id": 36,
                "name": "History",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-08-29/cr89ig5e878c73ej3ro0/6e092feda4a2b5d0f306060f69927fb874988070_low.webp"
            },
            {
                "id": 27,
                "name": "Horror",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-12-01/ct5r145e878c73drg9b0/e04113c3a39973663c2f02cfe06cfd6a_low.webp"
            },
            {
                "id": 10402,
                "name": "Music",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-08-12/cqt9fkde878c73csdhcg-2/860b33c4cef550a93340ac4f2da9e3be_low.webp"
            },
            {
                "id": 9648,
                "name": "Mystery",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-12-20/ctioefde878c739ds9d0-1/673714a9398ec0df9b53575982c1eff4_low.webp"
            },
            {
                "id": 10749,
                "name": "Romance",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-06-29/cpvmd2le878c73c8shs0/3f269e6bd0d1dbb47a54a59fd9df5439633072ba_low.webp"
            },
            {
                "id": 878,
                "name": "Science Fiction",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-05-19/cp4n86de878c73aluh70/c05bb3dde3db78f0a585d5a32a30f80c4f46c700_low.webp"
            },
           
            {
                "id": 53,
                "name": "Thriller",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-12-20/cti7aele878c73cus2t0-2/fbdbcdc1cc2b42f8355d6ab0dc7d71c1_low.webp"
            },
            {
                "id": 10752,
                "name": "War",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/highwebp/2024-08-15/cqv27lte878c73cuogq0/915a58e5e468494e1e4b90fc726d555b_low.webp"
            },
            {
                "id": 37,
                "name": "Western",
                "image_url": "https://image.cdn2.seaart.me/temp-convert-webp/png/2023-10-20/20412939412447237/6e6776c38165d16a314d6f0900e6bc485d5a4eca_low.webp"
            }
        ];
  

    return<div className="movies-grid">
    {Genresl.map((Genre) => (
   
    <div className="movie-card"  key={Genre.id}>
        <div className="movie-poster">
            <img src={`${Genre.image_url}`} alt={Genre.name}/>
            <div className="movie-overlay">
                
            </div>
        </div>
        <div className="movie-info">
            <h3>{Genre.name}</h3>
           
        </div>
    </div>
    
    ))}
  </div>
  
}

export default Genres
