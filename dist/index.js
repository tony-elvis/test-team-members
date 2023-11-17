"use strict";
// Name: Tony Elvis Garcia Martinez
// Development date: 11/17/2023
// Purpose of Script: show and order by property a object that contain teams members
/* The `enum properties` is defining a set of constant values that represent the properties of the
`Person` interface. Each constant value is assigned a string value that corresponds to the
property name in the `Person` interface. This enum is used to specify the property to be used for
sorting and displaying the team members in the `TeamClass` class. */
var properties;
(function (properties) {
    properties["Name"] = "Name";
    properties["favorite_food"] = "favorite_food";
    properties["favorite_movie"] = "favorite_movie";
    properties["Status"] = "Status";
    properties["executionDate"] = "executionDate";
})(properties || (properties = {}));
/* The code `let rockyObj: Person = { ... }`  is a example od team member object and is
creating an object named `rockyObj` that conforms to
the `Person` interface. It assigns values to the properties `Name`, `favorite_food`,
`favorite_movie`, and `Status` of the `rockyObj` object. These values represent the name, favorite
food, favorite movie, and status of a team member named Rocky. */
// start teams members objects
let rockyObj = {
    Name: 'Rocky',
    favorite_food: 'Sushi',
    favorite_movie: 'Back to The Future',
    Status: 'Inactive'
};
let miroslavObj = {
    Name: 'Miroslav',
    favorite_food: 'Sushi',
    favorite_movie: 'American Psycho',
    Status: 'Active'
};
let donnyObj = {
    Name: 'Donny',
    favorite_food: 'Singapore chow mei fun',
    favorite_movie: 'The Princess Bride',
    Status: 'Inactive'
};
let mattObj = {
    Name: 'Matt',
    favorite_food: 'Brisket Tacos',
    favorite_movie: 'The Princess Bride',
    Status: 'Active'
};
let tonyObj = {
    Name: 'Tony Elvis Garcia',
    favorite_food: 'Tacos',
    favorite_movie: 'Ghost',
    Status: 'Active'
};
// end teams members objects
/* The TeamClass is a TypeScript class that represents a team and provides methods for adding team
members, setting execution dates, getting team members, and showing active team members. */
class TeamClass {
    constructor() {
        /* The line `private teamMember: Person[] = [rockyObj, miroslavObj, donnyObj, mattObj];` is
        declaring a private property named `teamMember` in the `TeamClass` class. This property is an
        array of objects that conform to the `Person` interface. The initial values of the array are
        `rockyObj`, `miroslavObj`, `donnyObj`, and `mattObj`, which are predefined team member objects. */
        this.teamMember = [rockyObj, miroslavObj, donnyObj, mattObj];
    }
    /**
     * The addTeamMember function adds a developer to the teamMember array.
     * @param {Person} developer - The developer parameter is of type Person, which means it expects an
     * object that represents a person.
     */
    addTeamMember(developer) {
        this.teamMember.push(developer);
    }
    /**
     * The function "addExecutionDate" sets the execution date for each team member to the current
     * date.
     */
    addExecutionDate() {
        this.teamMember.forEach(dev => {
            dev.executionDate = new Date().toLocaleDateString();
        });
    }
    /**
    * The function "getActivesTeamMembers" returns an array of team members who have an "Active"
    * status.
    * @returns an array of team members who have a status of "Active".
    */
    getActivesTeamMembers() {
        return this.teamMember.filter(dev => dev.Status === 'Active');
    }
    /**
     * The function returns a list of active team members ordered by the specified properties.
     * @param {properties} properties - The "properties" parameter is an object that specifies the
     * properties by which the active team members should be ordered. Each property should be a
     * key-value pair, where the key is the property name and the value is the sorting order (either
     * "asc" for ascending or "desc" for descending).
     * @returns a list of active team members ordered by the specified properties.
     */
    getActivesMembersOrderedByProper(properties) {
        const filterData = this.getActivesTeamMembers();
        return TeamClass.orderByObjectProperty(filterData, properties);
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
    static orderByObjectProperty(array, property) {
        return array.sort((a, b) => (a[property] || '').localeCompare(b[property] || ''));
    }
    /**
     * The function "showMember" takes an array of Person objects and logs information about each
     * person's name, execution date, and favorite movie.
     * @param {Person[]} array - An array of objects of type Person.
     */
    static showMember(array) {
        array.forEach(obj => {
            console.log(`Developer info: 
            name ${obj.Name}, 
            Date: ${obj.executionDate}, 
            Favorite movie: ${obj.favorite_movie}`);
        });
    }
    static getMemberInfo(array) {
        return array.map(obj => {
            return {
                Name: obj.Name,
                executionDate: obj.executionDate,
                favorite_movie: obj.favorite_movie
            };
        });
    }
}
/**
 * The function `getFormatData` retrieves active members from a team and displays their information.
 * @returns The function `getFormatData` is returning the result of calling the `showMember` method
 * of the `TeamClass` class, passing in the `activeMembers` array as an argument.
 */
const getFormatData = () => {
    const activeMembers = team.getActivesMembersOrderedByProper(properties.Name);
    return TeamClass.getMemberInfo(activeMembers);
};
// implementation
const team = new TeamClass();
team.addTeamMember(tonyObj);
team.addExecutionDate();
const activeMembers = team.getActivesMembersOrderedByProper(properties.Name);
if (activeMembers.length > 0) {
    TeamClass.showMember(activeMembers);
}
else {
    console.log('No team members actives found');
}
