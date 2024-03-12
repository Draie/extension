// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'saveData') {
        var data = request.data;
        // Code pour enregistrer les données dans Google Sheets
        // Utilisez par exemple l'API Google Sheets ou AJAX pour envoyer les données au serveur


        /* ajout d'un rows à la feuille sheet */



    }
});
