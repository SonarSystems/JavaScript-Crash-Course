var User =
{
    name: "Name",
    age: 2,
    talk: function ( )
    {
    	alert( "Hello" );
    }
};

console.log( User.name );

//User.talk( );

User.name = "Hi";

console.log( User.name );

User.address =
{
    line1: "Address Line 1",
    line2: "Address Line 1"
};

console.log( User.address );
console.log( User.address.line1 );