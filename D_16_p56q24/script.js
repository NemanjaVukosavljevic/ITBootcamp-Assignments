const moviesCollection = firebase.firestore().collection('movies');

async function addMovies() {
  try {
    await moviesCollection.add({
      Name: 'Film 1',
      Director: { firstName: 'John', lastName: 'Doe' },
      Release_year: 2022,
      Genres: ['Action', 'Adventure'],
      Rating: 8.5,
    });

    await moviesCollection.add({
      Name: 'Film 2',
      Director: { firstName: 'Jane', lastName: 'Doe' },
      Release_year: 2021,
      Genres: ['Drama', 'Romance'],
      Rating: 7.8,
    });

    console.log('Movies added successfully.');
  } catch (error) {
    console.error('Error adding movies:', error);
  }
}

async function addGenreToMovie(movieName, newGenre) {
  try {
    const movieToUpdate = await moviesCollection.where('Name', '==', movieName).get();

    movieToUpdate.forEach(async (doc) => {
      await moviesCollection.doc(doc.id).update({
        Genres: firebase.firestore.FieldValue.arrayUnion(newGenre),
      });
    });

    console.log('Genre added to the movie successfully.');
  } catch (error) {
    console.error('Error adding genre to the movie:', error);
  }
}



async function updateMovieData() {
  try {
    const movieToUpdate = await moviesCollection.where('Name', '==', 'Film 1').get();

    movieToUpdate.forEach(async (doc) => {
      await moviesCollection.doc(doc.id).update({
        Release_year: 2023,
        Rating: 9.0,
      });
    });

    console.log('Movie data updated successfully.');
  } catch (error) {
    console.error('Error updating movie data:', error);
  }
}


async function changeDirectorNameOrLastName(movieName, newFirstName, newLastName) {
  try {
    const movieToUpdate = await moviesCollection.where('Name', '==', movieName).get();

    movieToUpdate.forEach(async (doc) => {
      await moviesCollection.doc(doc.id).update({
        'Director.firstName': newFirstName,
        'Director.lastName': newLastName,
      });
    });

    console.log('Director name or last name changed successfully.');
  } catch (error) {
    console.error('Error changing director name or last name:', error);
  }
}

async function removeGenreFromMovie(movieName, genreToRemove) {
  try {
    const movieToUpdate = await moviesCollection.where('Name', '==', movieName).get();

    movieToUpdate.forEach(async (doc) => {
      await moviesCollection.doc(doc.id).update({
        Genres: firebase.firestore.FieldValue.arrayRemove(genreToRemove),
      });
    });

    console.log('Genre removed from the movie successfully.');
  } catch (error) {
    console.error('Error removing genre from the movie:', error);
  }
}

addMovies().then(() => {
  updateMovieData();
  addGenreToMovie('Film 1', 'Comedy');
  removeGenreFromMovie('Film 2', 'Action');
  changeDirectorNameOrLastName('Film 1', 'Dragan', 'Bjelogrlic');
});