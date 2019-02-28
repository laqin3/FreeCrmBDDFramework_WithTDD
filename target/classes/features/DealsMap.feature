Feature: deal data creation 

Scenario: Free Crm create a new deal scenario 

	Given user is already in login page 
	When title of login page is free crm 
	And click on Login_in button 
	Then user enters username and password 
		| username| password |
		| laqin3@gmail.com | laqin32019 |
		
	Then user clicks on login button 
	Then user is on home page 
	Then user moves to new deals page 
	Then user enters deal details 
		| title | Amount | probability | commission |
		| test data1 | 1000 | 50 | 10 |
		| test data2 | 2000 | 150 | 20 |
		| test data3 | 3000 | 250 | 30 |
		
	Then user close browser