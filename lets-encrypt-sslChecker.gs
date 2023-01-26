function singleDomain() {

// @file: single-domain-sslChecker.gs
// @author: Osvaldo Alves
// @date: 29/05/2022
// @description: Script for checking a spreadsheet that stores SSL expiration dates to send email alerts.

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sd = ss.getSheetByName("SINGLE-DOMAIN");

  var dates = [
    le.getRange(3,4).getValue(),
    le.getRange(4,4).getValue(),
    le.getRange(5,4).getValue(),
    le.getRange(6,4).getValue(),
    le.getRange(7,4).getValue(),
    le.getRange(8,4).getValue(),
    le.getRange(9,4).getValue(),
    le.getRange(10,4).getValue(),
    le.getRange(11,4).getValue(),
    le.getRange(12,4).getValue(),
    le.getRange(13,4).getValue(),
    le.getRange(14,4).getValue(),
    le.getRange(15,4).getValue()
  ];
  
  var urls = [
    le.getRange(3,3).getValue(),
    le.getRange(4,3).getValue(),
    le.getRange(5,3).getValue(),
    le.getRange(6,3).getValue(),
    le.getRange(7,3).getValue(),
    le.getRange(8,3).getValue(),
    le.getRange(9,3).getValue(),
    le.getRange(10,3).getValue(),
    le.getRange(11,3).getValue(),
    le.getRange(12,3).getValue(),
    le.getRange(13,3).getValue(),
    le.getRange(14,3).getValue(),
    le.getRange(15,3).getValue()
  ];

  const MILLIS_PER_DAY = 7000 * 60 * 60 * 24;
  const now = new Date();
  const toDay = new Date(now.getTime() + MILLIS_PER_DAY);

  for(var i=0; i < 16; i++)
  {
    if(dates[i] < toDay)
    {
    MailApp.sendEmail("oalves@ecritel.com.br", "Wildcard PRO - SSL Expiration - " + urls[i],"The domain's SSL: " + urls[i] + " will expire in the next 30 days: " + dates[i] + ".");
    }
  }

}
