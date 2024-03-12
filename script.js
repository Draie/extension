
/* récupération donnée formulaire */

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dataForm').addEventListener('submit', saveData);
});
/* sauvegarde et envoie a googlesheet */

function saveData(event) {
    event.preventDefault();
    var data = document.getElementById('inputData').value;
    console.log(data);
    /*chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
       ICI ON STOCK LE CONTENUE DU FORM DANS LE LOCAL STORAGE */
    localStorage.setItem('formData', JSON.stringify(data) )

    
    }
    
    
  
    
        // Récupérer les données du localStorage
       /* const localStorageData = JSON.parse(localStorage.getItem('formData'));*/
    
    
        /* Vérifier si des données sont présentes dans le localStorage
        if (localStorageData) {
            // Ajouter les données dans le corps de la requête
            options.body.push(localStorageData);
    
            try {
                fetch(url, options)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result);
                        console.log('Les données ont été sauvegardées dans la feuille de calcul.');
                    })
                    .catch(error => console.error(error));
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('Aucune donnée n\'a été trouvée dans le localStorage.');
        }
    }
    */






/* Récuperation feuille sheet
 function getSheet(){
    const url = 'https://google-spreadsheets.p.rapidapi.com/spreadsheet/https://docs.google.com/spreadsheets/d/18J-1xiC4vLUQuZCGtcCqB3mG4d-sFc_RnaXhOaaWBSM/edit?usp=sharing%2Fsheets';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8abdf63ee1msh04a5f9ff16c88b6p1dd471jsn1d28c7fca47e',
		'X-RapidAPI-Host': 'google-spreadsheets.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result = response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}



}
*/

