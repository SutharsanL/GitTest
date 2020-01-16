package stepdefinitionTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import testbase.BaseClassTest;

public class LoginTest extends BaseClassTest {

	  @Given("^Open browser as(.+)$")
	    public void open_browser_as(String browser)  {
		 BaseClassTest.initilizer(browser);
	}

	  @Then("^Enter url as(.+)$")
	    public void enter_url_as(String url) {
	    LoginPage.enterUrl(url);
	}
	  @Then("^Enter usename as(.+)$")
	    public void enter_usename_as(String username) throws InterruptedException {
	    LoginPage.enterusername(username);
		Thread.sleep(3000);
		   
	}
	  @Then("^Enter Password as(.+)$")
	    public void enter_password_as(String password) {
	    LoginPage.enterPassword(password);
	}

	@Then("^click login$")
	public void click_login() {
		System.out.println("Login Sucess");
	    driver.close();
	}

}
