$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Eclipse_Workspace/CucumberTest/src/test/resources/Feature/Home.Feature");
formatter.feature({
  "line": 1,
  "name": "Login to gmail",
  "description": "",
  "id": "login-to-gmail",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Validate gmail login page",
  "description": "",
  "id": "login-to-gmail;validate-gmail-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open browser as\u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter url as\u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter usename as\u003cUSERNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Password as\u003cPASSWORD\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click login",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-to-gmail;validate-gmail-login-page;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "PASSWORD"
      ],
      "line": 9,
      "id": "login-to-gmail;validate-gmail-login-page;;1"
    },
    {
      "cells": [
        "chrome",
        "https://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
        "username.123@gmail.com",
        "mypassw0rd@123"
      ],
      "line": 10,
      "id": "login-to-gmail;validate-gmail-login-page;;2"
    },
    {
      "cells": [
        "chrome",
        "https://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
        "username.234@gmail.com",
        "mypassw0rd@456"
      ],
      "line": 11,
      "id": "login-to-gmail;validate-gmail-login-page;;3"
    },
    {
      "cells": [
        "chrome",
        "https://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
        "username.567@gmail.com",
        "mypassw0rd@789"
      ],
      "line": 12,
      "id": "login-to-gmail;validate-gmail-login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Validate gmail login page",
  "description": "",
  "id": "login-to-gmail;validate-gmail-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open browser aschrome",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter url ashttps://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter usename asusername.123@gmail.com",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Password asmypassw0rd@123",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 15
    }
  ],
  "location": "LoginTest.open_browser_as(String)"
});
formatter.result({
  "duration": 11713861393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
      "offset": 12
    }
  ],
  "location": "LoginTest.enter_url_as(String)"
});
formatter.result({
  "duration": 8367874389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username.123@gmail.com",
      "offset": 16
    }
  ],
  "location": "LoginTest.enter_usename_as(String)"
});
formatter.result({
  "duration": 3600429251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mypassw0rd@123",
      "offset": 17
    }
  ],
  "location": "LoginTest.enter_password_as(String)"
});
formatter.result({
  "duration": 246853757,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_login()"
});
formatter.result({
  "duration": 2391131415,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate gmail login page",
  "description": "",
  "id": "login-to-gmail;validate-gmail-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open browser aschrome",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter url ashttps://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter usename asusername.234@gmail.com",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Password asmypassw0rd@456",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 15
    }
  ],
  "location": "LoginTest.open_browser_as(String)"
});
formatter.result({
  "duration": 5823326357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
      "offset": 12
    }
  ],
  "location": "LoginTest.enter_url_as(String)"
});
formatter.result({
  "duration": 8159363830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username.234@gmail.com",
      "offset": 16
    }
  ],
  "location": "LoginTest.enter_usename_as(String)"
});
formatter.result({
  "duration": 3690643455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mypassw0rd@456",
      "offset": 17
    }
  ],
  "location": "LoginTest.enter_password_as(String)"
});
formatter.result({
  "duration": 572716652,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_login()"
});
formatter.result({
  "duration": 2359745386,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate gmail login page",
  "description": "",
  "id": "login-to-gmail;validate-gmail-login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open browser aschrome",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter url ashttps://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter usename asusername.567@gmail.com",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Password asmypassw0rd@789",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 15
    }
  ],
  "location": "LoginTest.open_browser_as(String)"
});
formatter.result({
  "duration": 6048279304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://accounts.google.com/signin/v2/identifier?flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
      "offset": 12
    }
  ],
  "location": "LoginTest.enter_url_as(String)"
});
formatter.result({
  "duration": 8576897823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username.567@gmail.com",
      "offset": 16
    }
  ],
  "location": "LoginTest.enter_usename_as(String)"
});
formatter.result({
  "duration": 3850517790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mypassw0rd@789",
      "offset": 17
    }
  ],
  "location": "LoginTest.enter_password_as(String)"
});
formatter.result({
  "duration": 232826105,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_login()"
});
formatter.result({
  "duration": 2152224253,
  "status": "passed"
});
});