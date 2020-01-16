package Pages;

import org.openqa.selenium.support.FindBy;

import testbase.BaseClassTest;

public class LoginPage extends BaseClassTest {
	
	public static void enterUrl(String url) {
		driver.get(url);
		driver.manage().window().maximize();
	}
public static void enterusername(String username) {
  BaseClassTest.getElement("//input[contains(@id,'identifierId')]").sendKeys(username);
  BaseClassTest.getElement("//span[contains(@class,'RveJvd snByac')]").click();
}
public static void enterPassword(String password) {
	BaseClassTest.getElement("//input[contains(@class,'whsOnd zHQkBf')]").sendKeys(password);
}

}
