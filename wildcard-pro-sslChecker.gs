function singleDomain() {

// @file: single-domain-sslChecker.gs
// @author: Osvaldo Alves
// @date: 29/05/2022
// @description: Script for checking a spreadsheet that stores SSL expiration dates to send email alerts.

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sd = ss.getSheetByName("SINGLE-DOMAIN");

  var dates = [
    wp.getRange(3,4).getValue(),
    wp.getRange(4,4).getValue(),
    wp.getRange(5,4).getValue(),
    wp.getRange(6,4).getValue(),
    wp.getRange(7,4).getValue(),
    wp.getRange(8,4).getValue(),
    wp.getRange(9,4).getValue(),
    wp.getRange(10,4).getValue(),
    wp.getRange(11,4).getValue(),
    wp.getRange(12,4).getValue(),
    wp.getRange(13,4).getValue(),
    wp.getRange(14,4).getValue(),
    wp.getRange(15,4).getValue(),
    wp.getRange(16,4).getValue(),
    wp.getRange(17,4).getValue(),
    wp.getRange(18,4).getValue(),
    wp.getRange(19,4).getValue(),
    wp.getRange(20,4).getValue(),
    wp.getRange(21,4).getValue(),
    wp.getRange(22,4).getValue(),
    wp.getRange(24,4).getValue(),
    wp.getRange(25,4).getValue(),
    wp.getRange(26,4).getValue(),
    wp.getRange(27,4).getValue(),
    wp.getRange(28,4).getValue(),
    wp.getRange(29,4).getValue(),
    wp.getRange(30,4).getValue(),
    wp.getRange(31,4).getValue(),
    wp.getRange(32,4).getValue()
  ];
  
  var urls = [
    wp.getRange(3,3).getValue(),
    wp.getRange(4,3).getValue(),
    wp.getRange(5,3).getValue(),
    wp.getRange(6,3).getValue(),
    wp.getRange(7,3).getValue(),
    wp.getRange(8,3).getValue(),
    wp.getRange(9,3).getValue(),
    wp.getRange(10,3).getValue(),
    wp.getRange(11,3).getValue(),
    wp.getRange(12,3).getValue(),
    wp.getRange(13,3).getValue(),
    wp.getRange(14,3).getValue(),
    wp.getRange(15,3).getValue(),
    wp.getRange(16,3).getValue(),
    wp.getRange(17,3).getValue(),
    wp.getRange(18,3).getValue(),
    wp.getRange(19,3).getValue(),
    wp.getRange(20,3).getValue(),
    wp.getRange(21,3).getValue(),
    wp.getRange(22,3).getValue(),
    wp.getRange(23,3).getValue(),
    wp.getRange(24,3).getValue(),
    wp.getRange(25,3).getValue(),
    wp.getRange(26,3).getValue(),
    wp.getRange(27,3).getValue(),
    wp.getRange(28,3).getValue(),
    wp.getRange(29,3).getValue(),
    wp.getRange(30,3).getValue(),
    wp.getRange(31,3).getValue(),
    wp.getRange(32,3).getValue()
  ];

  const MILLIS_PER_DAY = 7000 * 60 * 60 * 24;
  const now = new Date();
  const toDay = new Date(now.getTime() + MILLIS_PER_DAY);

  for(var i=0; i < 33; i++)
  {
    if(dates[i] < toDay)
    {
    MailApp.sendEmail("oalves@ecritel.com.br", "Wildcard PRO - SSL Expiration - " + urls[i],"The domain's SSL: " + urls[i] + " will expire in the next 30 days: " + dates[i] + ".");
    }
  }

}
