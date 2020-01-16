package runnertest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D:\\Eclipse_Workspace\\CucumberTest\\src\\test\\resources\\Feature\\Home.Feature"
 ,glue= "stepdefinitionTest"
 ,format= {"pretty","html:test-output"}
,monochrome=true, strict=true)
public class RunnerTest {

}
