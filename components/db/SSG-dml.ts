import executeQuery from './SSG-db';
// import {PeopleAndRoles,GetPeopleAndRoles} from '../types' types.ts required???

// Use: https://app.quicktype.io/ to calculate interface

  
export async function getPeopleAndRoles () {
  const people = await executeQuery( {query:"select * from peopleandroles_vw"} );
  return ( JSON.parse(JSON.stringify(people))  );
}

export async function getPeopleAndSkills () {
    const people = await executeQuery( {query:"select * from peopleandskills_vw"} );
    return ( JSON.parse(JSON.stringify(people))  );
  }

//JSON.parse(JSON.stringify(people)) 

//https://www.simplenextjs.com/posts/next-mysql
//
// npm install serverless-mysql
// NOTE THAT THE FUNCTION MUST BE ASYNC!!!!
