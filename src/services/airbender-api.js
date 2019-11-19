export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/')
    .then(res => res.json()).
    then((arr) => {
      return arr.map(char => {
        return {
          name: char.name,
          affiliation: char.affiliation,
          photoUrl: char.photoUrl,
          _id: char._id
        };
      });
    });
};
