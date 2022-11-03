//import { people } from './data.js';
import { getImageUrl } from './util.js';

export default function Header({people, data}) {

    const rows = [];

    people.forEach(person => {
      if (
        person.name.toLowerCase().indexOf(
          data.toLowerCase()
        ) === -1
      ) {
        return;
      }
        rows.push(
          <li class = "list-group-item" key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>

    
        );
    });
  
     
      // const listItems = people.map(person =>
      //   <li key={people.id}>
      //     <img
      //       src={getImageUrl(person)}
      //       alt={person.name}
      //     />
      //     <p>
      //       <b>{person.name}:</b>
      //       {' ' + person.profession + ' '}
      //       known for {person.accomplishment}
      //     </p>
      //   </li>
      // );
      return (
        <article>
          <h1>Scientists</h1>
          <ul class = "list-group">{rows}</ul>
        </article>
      );
    
      }  
    
  