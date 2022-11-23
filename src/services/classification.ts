import info from "../locales/info";
import { theme } from "../config/styles/theme";



export function classification( imc: number ){

    var classific = ''
    var colors = ''
    var descript = ''

    switch(true) {
      case (imc < 16):
        classific = info.magrezagrave.diagnostic
        descript = info.magrezagrave.description
        colors = theme.colors.classification.magrezagrave
      break;

      case (imc < 17):
        classific = info.magrezamoderada.diagnostic
        descript = info.magrezamoderada.description
        colors = theme.colors.classification.magrezamoderada
      break;

      case (imc <= 18.4):
        classific = info.magrezaleve.diagnostic
          descript = info.magrezaleve.description
          colors = theme.colors.classification.magrezaleve
        break;
      
      case (imc <= 24.9):
        classific = info.saudavel.diagnostic
          descript = info.saudavel.description
          colors = theme.colors.classification.normal
        break;

      case (imc <= 29.9):
        classific =  info.sobrepeso.diagnostic
        descript = info.sobrepeso.description
        colors = theme.colors.classification.sobrepeso
      break;

      case (imc <= 34.9):
        classific =  info.obeso1.diagnostic
        descript = info.obeso1.description
        colors = theme.colors.classification.obeso1
      break;

      case (imc <= 39.9):
        classific =  info.obeso2.diagnostic
        descript = info.obeso2.description
        colors = theme.colors.classification.obeso2
      break;
      
      case ( imc > 39.9 ):
        classific =  info.obeso3.diagnostic
        descript = info.obeso3.description
        colors = theme.colors.classification.obeso2
      break;
    } 
    return { classific, colors, descript }
  };