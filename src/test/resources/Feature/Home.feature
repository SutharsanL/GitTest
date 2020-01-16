Feature: Login to gmail
Scenario Outline: Validate gmail login page
Given Open browser as<BROWSER>
Then Enter url as<URL>
Then Enter usename as<USERNAME>
Then Enter Password as<PASSWORD>
Then click login
Examples:
|BROWSER|URL|USERNAME|PASSWORD|
|chrome|https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin|username.123@gmail.com|mypassw0rd@123|
|chrome|https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin|username.234@gmail.com|mypassw0rd@456|
|chrome|https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin|username.567@gmail.com|mypassw0rd@789|