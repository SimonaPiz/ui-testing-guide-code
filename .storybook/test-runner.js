const { injectAxe, checkA11y } = require('axe-playwright');

module.exports = {
 async preRender(page, context) {   //hook per iniettare axe nella storia
   await injectAxe(page);
 },
 async postRender(page, context) {    //dopo il rendering eseguiamo il test di accessibilità
   await checkA11y(page, '#root', {
     detailedReport: true,    //genererà un rapporto dettagliato basato sui problemi
     detailedReportOptions: {
       html: true,    //e produrrà l'elenco di elementi HTML che violano queste regole a11y
     },
   })
 },
};