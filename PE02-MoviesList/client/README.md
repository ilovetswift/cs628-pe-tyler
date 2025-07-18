# Input  
The program begins by importing a predefined list of movie objects from a data file. Users interact with the interface by selecting a movie genre from a dropdown menu. This dropdown provides options like Action, Drama, and Comedy, as well as an "All Genres" option to show all available movies.

# Process  
When a genre is selected, the program updates its state using React's `useState` hook. The selected value is passed to a filtering function that checks whether each movie's genre includes the selected genre string (case-insensitive). If "All Genres" is selected or no selection is made, all movies are included in the output list. React re-renders the list automatically based on the filtered result.

# Output  
The filtered list of movies is displayed as individual cards on the web page. Each card shows the movie’s title, genre, and release year. Cards are interactive and styled for clarity and usability.
