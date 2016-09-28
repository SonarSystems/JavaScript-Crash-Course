CallFunction( );

function CallFunction( )
{
	console.log( "Yes" );
}

var functionVariable = function( )
{
	console.log( "Variable function" );
};

functionVariable( );

function FunctionWithArg( var1, var2 )
{
	console.log( var1 * var2 );
}

FunctionWithArg( 5, 6 );


function AddTwoNumbers( number1, number2 )
{
	return number1 + number2;
}

var hello = AddTwoNumbers( 11, 66 );

console.log( hello );