Feature: login and creating contacts

Scenario Outline: Creating differnt contacts

Given user is already in login page
When title of login page is free crm
And click on Login_in button
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user clicks on contacts button
And user clicks on new button
Then user enters contact details "<firstName>" and "<lastName>" and "<position>"
And user clicks save button
Then user close browser

Examples:
	| username		    | password	|	firstName	|	lastName	|	position	|
	| laqin3@gmail.com	|laqin32019 |   Tom			|   Peter		|	manager		|
	| laqin3@gmail.com  |laqin32019 |   Jim			|	John		|	Director	|

