// Name: Tony Elvis Garcia Martinez
// Development date: 11/17/2023
// Purpose of Script: show and order by property a object that contain teams members


/* The `Person` interface is defining the structure of an object that represents a team member. It has the
following properties: */
    interface Person {
    Name: string;
    favorite_food: string;
    favorite_movie: string;
    Status: 'Active' | 'Inactive';
    executionDate?: string;
  }

  /* The `enum properties` is defining a set of constant values that represent the properties of the
  `Person` interface. Each constant value is assigned a string value that corresponds to the
  property name in the `Person` interface. This enum is used to specify the property to be used for
  sorting and displaying the team members in the `TeamClass` class. */
  enum properties {
    Name = 'Name',
    favorite_food = 'favorite_food',
    favorite_movie = 'favorite_movie',
    Status = 'Status',
    executionDate = 'executionDate',

  }
  
  /* The code `let rockyObj: Person = { ... }`  is a example od team member object and is 
  creating an object named `rockyObj` that conforms to
  the `Person` interface. It assigns values to the properties `Name`, `favorite_food`,
  `favorite_movie`, and `Status` of the `rockyObj` object. These values represent the name, favorite
  food, favorite movie, and status of a team member named Rocky. */

  // start teams members objects
  let rockyObj: Person = {
    Name: 'Rocky',
    favorite_food: 'Sushi',
    favorite_movie: 'Back to The Future',
    Status: 'Inactive'
  };
  
  let miroslavObj: Person = {
    Name: 'Miroslav',
    favorite_food: 'Sushi',
    favorite_movie: 'American Psycho',
    Status: 'Active'
  };
  
  let donnyObj: Person = {
    Name: 'Donny',
    favorite_food: 'Singapore chow mei fun',
    favorite_movie: 'The Princess Bride',
    Status: 'Inactive'
  };
  
  let mattObj: Person = {
    Name: 'Matt',
    favorite_food: 'Brisket Tacos',
    favorite_movie: 'The Princess Bride',
    Status: 'Active'
  };
  
  let tonyObj: Person = {
    Name: 'Tony Elvis Garcia',
    favorite_food: 'Tacos',
    favorite_movie: 'Ghost',
    Status: 'Active'
  };
  // end teams members objects

  /* The TeamClass is a TypeScript class that represents a team and provides methods for adding team
  members, setting execution dates, getting team members, and showing active team members. */
  class TeamClass {
    /* The line `private teamMember: Person[] = [rockyObj, miroslavObj, donnyObj, mattObj];` is
    declaring a private property named `teamMember` in the `TeamClass` class. This property is an
    array of objects that conform to the `Person` interface. The initial values of the array are
    `rockyObj`, `miroslavObj`, `donnyObj`, and `mattObj`, which are predefined team member objects. */
    private teamMember: Person[] = [rockyObj, miroslavObj, donnyObj, mattObj];
  
    constructor() {
    }
  
    /**
     * The addTeamMember function adds a developer to the teamMember array.
     * @param {Person} developer - The developer parameter is of type Person, which means it expects an
     * object that represents a person.
     */
    addTeamMember(developer: Person) {
      this.teamMember.push(developer);
    }

    /**
     * The function "addExecutionDate" sets the execution date for each team member to the current
     * date.
     */
    addExecutionDate(){
        this.teamMember.forEach(dev => {
            dev.executionDate = new Date().toLocaleDateString();
        });
    }
  
    /**
     * The function returns the team member.
     * @returns The team member.
     */
    getTeamMember() {
      return this.teamMember;
    }

    /**
     * The function sorts an array of objects based on a specified property.
     * @param {Person[]} array - An array of objects of type Person.
     * @param {properties} property - The "property" parameter is the name of the property of the
     * "Person" objects in the array that you want to sort by.
     * @returns the sorted array of Person objects based on the specified property.
     */
    private  static orderByObjectProperty(array: Person[], property: properties) {
        return array.sort((a, b) => (a[property] || '').localeCompare(b[property] || ''));
      }

    /**
     * The function "showActivesTeamMembers" filters the team members based on their status, orders
     * them by a specified property, and then displays the ordered list.
     * @param {properties} property - The "property" parameter is a property of the team members that
     * you want to use for ordering the active team members.
     * @returns an array of active team members.
     */
    showActivesTeamMembers(property: properties){
        const ActivesTeamMembers = this.teamMember.filter(dev => dev.Status === 'Active');
        if(property && ActivesTeamMembers.length > 0){
            const ActivesTeamMembersOrdered = TeamClass.orderByObjectProperty(ActivesTeamMembers, property)
            TeamClass.showMember(ActivesTeamMembersOrdered);
            return ActivesTeamMembers;
        } 
        
        console.log('No actives team members actives');
        return ActivesTeamMembers;
    }

    /**
     * The function "showMember" takes an array of Person objects and logs information about each
     * person's name, execution date, and favorite movie.
     * @param {Person[]} array - An array of objects of type Person.
     */
    private static showMember(array:  Person[]) {
        array.forEach(obj => {
            console.log(`Developer info: 
            name ${obj.Name}, 
            Date: ${obj.executionDate}, 
            Favorite movie: ${obj.favorite_movie}`);
        });
    }
  }
  
  const team = new TeamClass();
  team.addTeamMember(tonyObj);
  team.addExecutionDate();
  team.showActivesTeamMembers(properties.Name)
 
  