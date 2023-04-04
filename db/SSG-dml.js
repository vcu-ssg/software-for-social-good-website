import executeQuery from './SSG-db';
// import {PeopleAndRoles,GetPeopleAndRoles} from '../types' types.ts required???

// Use: https://app.quicktype.io/ to calculate interface

  
// export async function getPeople () {
//   try {
//     const people = await executeQuery( {query:'select * from people'});
//   return (JSON.parse(JSON.stringify(people)));
//   } catch (error) {
//     return { error }
//   }
// }

export default async function getPeople () {
  const people = await executeQuery( {query:'select * from people'});
  return (JSON.parse(JSON.stringify(people)));
}

export async function getPeopleAndRoles () {
  const peopleRoles = await executeQuery( {query:"select * from peopleandroles_vw"} );
  return ( JSON.parse(JSON.stringify(peopleRoles))  );
}

export async function getPeopleAndSkills () {
    const peopleSkills = await executeQuery( {query:"select * from peopleandskills_vw"} );
    return ( JSON.parse(JSON.stringify(peopleSkills))  );
  }

//JSON.parse(JSON.stringify(people)) 

//https://www.simplenextjs.com/posts/next-mysql
//
// npm install serverless-mysql
// NOTE THAT THE FUNCTION MUST BE ASYNC!!!!
