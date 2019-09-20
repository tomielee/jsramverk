// const w2 = () => {
//     return (
//         ### Kmom02
//         Ambitionen var att göra en "riktig" datepicker.Det finns kod för att rendera ut ett helt år.Planen var att göra en 2D array med 35 element = 5 veckor x 7 dagar, detta för att sedan kunna mappa genom arrayen i en klickbar tabell.Målet var att skriva en funktion som returnerar `month[x][y]` där x = 1 = veckodag och y = månadens samtliga datum givet veckodag.

//         Det finns färdiga funktioner som tar hänsyn till skottår, som också tar fram vilken veckodag den 1: a sker på i vald månad.Det slutgilta resultatet blev dock något annat.

//         Resultatet blev ett enkelt formulär där den ** DatePickern ** är en enkelt`<select>`.Själva Datepickern är en egen komponent som skrivs ut i Form.

//         Samtliga fält valideras med egen funktion`handleValidation`.


//         ## BUG
//         Det är något som gör att currDate halkar efter. //Datepicker.js handleDateChange, if-satsen tycks "sakta ner" och därmed inte skicka med value vid första valet? Omedelbar ändring sker däremot för vald år och månad. 

//         Kolla det som skrivs i console, gå in på ** D ** där är Datepicker utan parent form.
//             handleDateChange() skriver ut en console.log när`typeof(this.state.currDay) === "number"`, alltså när användaren valt en dag och Dateforms`this.state.date` ska skapa ett datum av vald år, månad och dag.

//         Felsökning pågår...
//     )
    
// }

// eslint-disable-next-line no-multi-str
let w2 = "**Kmom02** \
        \ \n \
        Ambitionen var att göra en 'riktig' datepicker.Det finns kod för att rendera ut ett helt år. \
        Planen var att göra en 2D array med 35 element = 5 veckor x 7 dagar, detta för att sedan kunna mappa genom arrayen i en klickbar tabell. \
        Målet var att skriva en funktion som returnerar `month[x][y]` där x = 1 = veckodag och y = månadens samtliga datum givet veckodag. \
        \ \n \
        Det finns färdiga funktioner som tar hänsyn till skottår, som också tar fram vilken veckodag den 1: a sker på i vald månad.Det slutgilta resultatet blev dock något annat. \
        \ \n \
        Resultatet blev ett enkelt formulär där den ** DatePickern ** är en enkelt <select> . Själva Datepickern är en egen komponent som skrivs ut i Form.\
        \ \n \
        Samtliga fält valideras med egen funktion handleValidation. \
        \ \n \
        **BUG** \
        \ \n \
        Det är något som gör att currDate halkar efter. Datepicker.js handleDateChange, if-satsen tycks 'sakta ner' och därmed inte skicka med value vid första valet? \
        Omedelbar ändring sker däremot för vald år och månad. \
        \
        Kolla det som skrivs i console, gå in på ** D ** där är Datepicker utan parent form. \
            handleDateChange() skriver ut en console.log när`typeof(this.state.currDay) === 'number'`, alltså när användaren valt en dag och Dateforms`this.state.date` \
            ska skapa ett datum av vald år, månad och dag. \
        \
        Felsökning pågår... \
        \ \n \
        **Pågående arbete** \
        \ \n \
        Försöker lösa att läsa av en md fil i reports. Det går sådär. Ägnar liten stund åt detta vid varje kursmoment. Har använt mig av [ReactMarkdown](https://github.com/rexxars/react-markdown) \
        samt [React-md-file](https://www.npmjs.com/package/react-md-file), som det står i README.md. (som ej är uppdaterat här då det är en copy. Se Github för uppdaterade dependencies) \
    "


export default w2
