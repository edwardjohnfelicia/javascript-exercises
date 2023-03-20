// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

const getTheTitles = function(library) {
    return library.map(book => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
