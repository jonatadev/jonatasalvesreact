import React, { useEffect, useState } from 'react';
import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Personal.css';

const Personal: React.FC = () => {
  // Álbum de fotos pessoais
  const personalPhotos = [
    { original: '/img/jonatas/IMG_20221231_144905_879.jpg', thumbnail: '/img/jonatas/IMG_20221231_144905_879.jpg' },
    { original: '/img/jonatas/IMG_20221029_111451_675.jpg', thumbnail: '/img/jonatas/IMG_20221029_111451_675.jpg' },
    { original: '/img/jonatas/IMG_20221029_112133_943.jpg', thumbnail: '/img/jonatas/IMG_20221029_112133_943.jpg' },
    { original: '/img/jonatas/IMG_20221030_133221_466.jpg', thumbnail: '/img/jonatas/IMG_20221030_133221_466.jpg' },
    { original: '/img/jonatas/IMG_20221030_133230_659.jpg', thumbnail: '/img/jonatas/IMG_20221030_133230_659.jpg' },
    { original: '/img/jonatas/IMG_20221103_193250_692.jpg', thumbnail: '/img/jonatas/IMG_20221103_193250_692.jpg' },
    { original: '/img/jonatas/IMG_20221103_194443_643.jpg', thumbnail: '/img/jonatas/IMG_20221103_194443_643.jpg' },    
    { original: '/img/jonatas/IMG_20231206_225830_485.jpg', thumbnail: '/img/jonatas/IMG_20231206_225830_485.jpg' },
    { original: '/img/jonatas/IMG_20231215_211314_793.jpg', thumbnail: '/img/jonatas/IMG_20231215_211314_793.jpg' }
  ];
  // Lista de filmes e imagens locais
  const movies = [
      { title: 'Society of the Snow', year: 2023, img: '/img/snow_2023.jpg' },
  { title: 'Prisoners', year: 2021, img: '/img/prisioners_2021.jpg' },
  { title: 'Miracle in Cell No. 7', year: 2019, img: '/img/miracle_2019.jpg' },
  { title: 'Joker', year: 2019, img: '/img/joker_2019.jpg' },
  { title: 'The Boy Who Harnessed the Wind', year: 2019, img: '/img/the_boy_2019.jpg' },
  { title: 'Me Before You', year: 2016, img: '/img/berore_2016.jpg' },
  { title: 'Point Break', year: 2015, img: '/img/point_2015.jpg' },
  { title: 'Mad Max: Fury Road', year: 2015, img: '/img/mad_2015.jpg' },
  { title: 'Son of God', year: 2014, img: '/img/son_2014.jpg' },
  { title: 'Conjuring', year: 2013, img: '/img/conjuring_2013.jpg' },
  { title: 'Django', year: 2012, img: '/img/django_2012.jpg' },
  { title: 'The Curious Case of Benjamin Button', year: 2009, img: '/img/curios_2008.jpg' },
  { title: 'City of God', year: 2002, img: '/img/city_god_2002.jpg' },
  { title: 'Black Hawk Down', year: 2001, img: '/img/black_hawk_down_2001.jpg' },
  { title: 'A Beautiful Mind', year: 2001, img: '/img/mind_2001.jpg' },
  { title: 'Gladiator', year: 2000, img: '/img/gladiator_2000.jpg' },
  { title: 'Notting Hill', year: 1999, img: '/img/notting_hill_1999.jpg' },
  { title: 'The Matrix', year: 1999, img: '/img/matrix_1999.jpg' },
  { title: "The Devil's Advocate", year: 1997, img: '/img/devil_1997.jpg' },
  { title: 'Titanic', year: 1997, img: '/img/titanic_1997.jpg' },
  { title: 'Jerry Maguire', year: 1996, img: '/img/jerry_1996.jpg' },
  { title: 'Heat', year: 1995, img: '/img/heat_1995.jpg' },
  { title: 'Shawshank Redemption', year: 1994, img: '/img/shawshank_redemption_1994.jpg' },
  { title: 'Forrest Gump', year: 1994, img: '/img/forrest_gum_1994.jpg' },
  { title: 'Legends of the Fall', year: 1994, img: '/img/legends_1994.jpg' },
  { title: 'The Mask', year: 1994, img: '/img/mask_1994.jpg' },
  { title: 'Basic Instinct', year: 1992, img: '/img/basic_instinct_1992.jpg' },
  { title: 'Kickboxer', year: 1989, img: '/img/kickboxer_1989.jpg' },
  { title: 'Alien', year: 1979, img: '/img/alien_1979.jpg' }
   ];

  // Lista de shows e imagens locais
  const shows = [

  { title: 'House of David', year: 2025, img: '/img/shows/house_david_2025.jpg' },
  { title: 'Mob Land', year: 2025, img: '/img/shows/mob.png' },
  { title: 'The Penguin', year: 2024, img: '/img/shows/pinguim_2024.jpg' },
  { title: 'Lupin', year: 2021, img: '/img/shows/lupin_2023.jpg' },
  { title: 'Masters of the Universe: Revelation', year: 2021, img: '/img/shows/master_2021.jpg' },
  { title: 'Sex/Life', year: 2021, img: '/img/shows/sex_life_2021.jpg' },
  { title: 'Dom', year: 2021, img: '/img/shows/dom_2021.jpg' },
  { title: 'Extraction', year: 2020, img: '/img/shows/extraction_2020.jpg' },
  { title: 'Criminal Code', year: 2020, img: '/img/shows/criminal_code_2020.jpg' },
  { title: 'Good Morning Verônica', year: 2020, img: '/img/shows/veronica_2020.png' },
  { title: 'La Révolution', year: 2020, img: '/img/shows/revolution_2020.jpg' },
  { title: 'Sex Education', year: 2019, img: '/img/shows/education_2019.jpg' },
  { title: 'You', year: 2018, img: '/img/shows/you_2018.jpg' },
  { title: 'Money Heist', year: 2017, img: '/img/shows/money_2017.jpg' },
  { title: 'Roman Empire', year: 2016, img: '/img/shows/roman_2016.jpg' },
  { title: 'Lucifer', year: 2016, img: '/img/shows/lucifer_2016.jpg' },
  { title: 'The Girlfriend Experience', year: 2016, img: '/img/shows/girlfriend_2016.jpg' },
  { title: 'Verdades Secretas', year: 2015, img: '/img/shows/verdades_2015.jpg' },
  { title: 'Daredevil', year: 2015, img: '/img/shows/devil_2015.jpg' },
  { title: 'Outlander', year: 2014, img: '/img/shows/outlander_2014.jpg' },
  { title: 'Amores Roubados', year: 2014, img: '/img/shows/amores_roubados.jpg' },
  { title: 'Game of Thrones', year: 2011, img: '/img/shows/games_2011.jpg' },
  { title: 'Spartacus', year: 2010, img: '/img/shows/spartacus_2010.jpg' },
  { title: 'The Office', year: 2005, img: '/img/shows/office_2005.jpg' },
  { title: 'Lois & Clark: The New Adventures of Superman', year: 1993, img: '/img/shows/superman_1993.jpg' }

];
  const [isMoviesExpanded, setIsMoviesExpanded] = useState(false);
  const [isShowsExpanded, setIsShowsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Ref e navegação por teclado para a galeria
  const galleryRef = React.useRef<any>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        galleryRef.current?.slideToIndex(galleryRef.current.getCurrentIndex() - 1);
      } else if (e.key === 'ArrowRight') {
        galleryRef.current?.slideToIndex(galleryRef.current.getCurrentIndex() + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Comportamento responsivo: esconde thumbnails em telas pequenas
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  const renderItem = (item: ReactImageGalleryItem) => (
    <img
      className="image-gallery-image"
      src={item.original as string}
      alt={(item as any).originalAlt || 'Photo'}
      loading="lazy"
      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 90vw, 1100px"
      style={{ width: '100%', height: 'auto' }}
    />
  );


  return (
    <section id="personal" className="personal-container">
      <section className="container mb-4" style={{ textAlign: 'justify', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '2rem' }}>
        <p>I’m someone who truly values the simple yet meaningful experiences in life. Traveling is one of my greatest passions — discovering new places, cultures, and people always inspires me. I feel a deep connection with nature: I enjoy the sea, the sound of the waves, hiking trails, and simply appreciating its beauty.</p>
        <p>In my free time, I like to dive into great stories — whether through movies that make me reflect and dream, or books that broaden my perspective of the world. And when I’m really tired, nothing beats relaxing with some casual video games, just for fun and to recharge my energy.</p>
        <p>This website is a reflection of my interests, passions, and what drives me. Feel free to explore and get to know me better.</p>
      </section>
      <button
        onClick={() => setIsMoviesExpanded(!isMoviesExpanded)}
        className="personal-toggle"
        aria-expanded={isMoviesExpanded}
        aria-controls="movie-list"
      >
        Must-See Movies {isMoviesExpanded ? '-' : '+'}
      </button>
      {isMoviesExpanded && (
        <ol id="movie-list" className="movie-list">
          {movies.map((movie, index) => (
            <li key={movie.title + movie.year || index} className="movie-item">
              {/* log removido */}
              <img src={movie.img} alt={movie.title} className="movie-poster" />
              <span className="movie-title">{movie.title}</span>
              {Boolean(movie.year) && <span className="movie-year">({movie.year})</span>}
            </li>
          ))}
        </ol>
      )}

      <button
        onClick={() => setIsShowsExpanded(!isShowsExpanded)}
        className="personal-toggle"
        aria-expanded={isShowsExpanded}
        aria-controls="show-list"
      >
        Memorable Series {isShowsExpanded ? '-' : '+'}
      </button>
      {isShowsExpanded && (
        <ol id="show-list" className="show-list">
          {shows.map((show, index) => (
            <li key={show.title + show.year || index} className="show-item">
              <img src={show.img} alt={show.title} className="show-poster" />
              <span className="show-title">{show.title}</span>
              {Boolean(show.year) && <span className="show-year">({show.year})</span>}
            </li>
          ))}
        </ol>
      )}

      {/* Álbum de fotos pessoais separado */}
  <h2 className="personal-subtitle" style={{ marginTop: '2rem' }}>Just Some Photos</h2>
      <div style={{ marginBottom: '2rem' }}>
        <ImageGallery
          items={personalPhotos}
          renderItem={renderItem}
          showThumbnails={!isMobile}
          showFullscreenButton={true}
          showPlayButton={false}
          showNav={true}
          slideDuration={350}
          autoPlay={false}
          lazyLoad={true}
          infinite={true}
          showBullets={true}
          thumbnailPosition="bottom"
          useBrowserFullscreen={true}
          additionalClass="personal-photo-gallery"
          slideOnThumbnailOver={true}
          ref={galleryRef}
        />
      </div>
    </section>
  );
};

export default Personal;
