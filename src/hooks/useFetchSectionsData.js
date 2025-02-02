import React from "react";
import axios from "axios";

export const useFetchSectionsData = (section) => {
  const [loaded, setLoaded] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  
  React.useEffect(() => {
    setLoaded(false);

    // Call API only once a section is defined
    section &&
      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${`9F70H1O1ZjGDniO4VWKPDDVDeQpKq3tp`}`
        )
        .then((response) => setArticles(response.data.results))
        .then(() => setLoaded(true))
        .catch((error) => {
          setLoaded(true);
          console.log(error);
        });
  }, [section]);

  return { loaded, articles };
};
