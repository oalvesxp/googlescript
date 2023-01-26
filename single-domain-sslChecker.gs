function singleDomain() {

// @file: single-domain-sslChecker.gs
// @author: Osvaldo Alves
// @date: 29/05/2022
// @description: Script for checking a spreadsheet that stores SSL expiration dates to send email alerts.

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sd = ss.getSheetByName("SINGLE-DOMAIN");

  var dates = [
    sd.getRange(3,4).getValue(),
    sd.getRange(4,4).getValue(),
    sd.getRange(5,4).getValue(),
    sd.getRange(6,4).getValue(),
    sd.getRange(7,4).getValue(),
    sd.getRange(8,4).getValue(),
    sd.getRange(9,4).getValue(),
    sd.getRange(10,4).getValue(),
    sd.getRange(11,4).getValue(),
    sd.getRange(12,4).getValue(),
    sd.getRange(13,4).getValue(),
    sd.getRange(14,4).getValue(),
    sd.getRange(15,4).getValue(),
    sd.getRange(16,4).getValue(),
    sd.getRange(17,4).getValue(),
    sd.getRange(18,4).getValue()
  ];

  Logger.log(dates[3]);

}
