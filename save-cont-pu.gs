function singleDomain() {

// @file: single-domain-sslChecker.gs
// @author: Osvaldo Alves
// @date: 29/05/2022
// @description: Script for stored proposals informations in spreadsheed.

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var pu = ss.getSheetByName("PU")
  var contPU = ss.getSheetByName("CONTROLE-DE-PU")
  var user = Session.getActiveUser().getEmail()

  var id = pu.getRange(14, 7).getValue()
  var sigla = pu.getRange(10, 2).getValue()
  var mesRef = pu.getRange(17, 9).getValue()
  var instalacao = pu.getRange(32, 9).getValue()
  var mensalidade = pu.getRange(46, 9).getValue()
  var status = pu.getRange(17, 7).getValue()
  var descricao = pu.getRange(5, 6).getValue()
  
  var lr = contPU.getLastRow() + 1 

  contPU.getRange(lr, 1).setValue(id)
  contPU.getRange(lr, 2).setValue(sigla)
  contPU.getRange(lr, 3).setValue(mesRef)
  contPU.getRange(lr, 4).setValue(instalacao)
  contPU.getRange(lr, 5).setValue(mensalidade)
  contPU.getRange(lr, 6).setValue(status)
  contPU.getRange(lr, 13).setValue(user)
  contPU.getRange(lr, 14).setValue(descricao)

}
