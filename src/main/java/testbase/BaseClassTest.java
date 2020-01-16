package testbase;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClassTest {
	public static WebDriver driver;
public static void initilizer( String browser) {
	 if(browser.equals("chrome")) {
		    System.setProperty("webdriver.chrome.driver","D:\\chromedriver.exe");
			  driver=new ChromeDriver();
			  driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			  }
}
public static  WebElement getElement(String xpath){
	return driver.findElement(By.xpath(xpath));
}
	

}
