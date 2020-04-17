/*
EXERCISE 03
Create through a literal object the structure of 3 degree careers and one undergraduate career of the UTN.
Every career with their subjects, duration of each, name of subjects and description.
From this tree show by console html code that represents this tree with a friendly format (h1, h2 for titles; ol, ul for lists; etc...).

Software Development Advanced Techniques and Technologies 2020
Autor: Nico Antonelli
*/

// Literal JS Object
var utn = {
    "degree careers": {
        "ise": {
            "name": "Information Systems Engineering",
            "duration": "5 years",
            "description": "Software, models, maths, few heavy theory books... and then more software, models and maths", 
            "subjects": ["Algorithms and data structures", "Systems and organizations", "Linear algebra and geometry", 
            "Physics I", "Mathematical analysis I", "Discrete maths", "Engineering and society", "Computer architecture", 
            "English I, and like 28 more subjects, plus the elective ones"]
        },
        "cme": {
            "name": "Chemical Engineering",
            "duration": "5 years",
            "description": "More professional than walter white, but also cooler than jesse pinkman", 
            "subjects": ["Organic chemistry", "Inorganic chemistry", "Linear algebra and geometry", "Physics I", 
            "Mathematical analysis I", "English I", "Alchemy", "Breaking bad theory I", "Harry potter spells", 
            "and a lot of more subjects, plus the elective ones"]
        },
        "cve": {
            "name": "Civil Engineering",
            "duration": "5.5 years",
            "description": "Building anything except houses :(", 
            "subjects": ["Stability", "Technical blueprints", "Linear algebra and geometry", "Physics I", 
            "Mathematical analysis I", "English I", "Why do i have to compete with architects I", "Patience", 
            "and a lot of more subjects, plus the elective ones"]
        }
    },
    "undergraduate careers": {
        "usa": {
            "name": "Univerisitary Systems Analyst",
            "duration": "3.5 years",
            "description": "Systems engineer's less cool best friend", 
            "subjects": ["Algorithms and data structures", "Systems and organizations", "Linear algebra and geometry", 
            "Physics I", "Mathematical analysis I", "Discrete maths", "Engineering and society", "Computer architecture", 
            "English I, and like 14 more subjects, plus the elective ones"]
        }
    }
}

// Creating UL lists with the career's subjects
let ise_subjects = "", cme_subjects = "", cve_subjects = "", usa_subjects = "";
utn["degree careers"]["ise"]["subjects"].forEach((el) => { ise_subjects += "<li>" + el + "</li>\n" });
utn["degree careers"]["cme"]["subjects"].forEach((el) => { cme_subjects += "<li>" + el + "</li>\n" });
utn["degree careers"]["cve"]["subjects"].forEach((el) => { cve_subjects += "<li>" + el + "</li>\n" });
utn["undergraduate careers"]["usa"]["subjects"].forEach((el) => { usa_subjects += "<li>" + el + "</li>\n" });

// Main Program
var utn_presentation = `
<h1>UTN DEGREE AND UNDERGRADUATE CAREERS</h1>
</hr>
</hr>
<h2>Degree Careers</h2>
<h3>${utn["degree careers"]["ise"]["name"]}</h3>
<h4>Duration: ${utn["degree careers"]["ise"]["duration"]}</h4>
<h4>Description: ${utn["degree careers"]["ise"]["description"]}</h4>
<h4>Subjects:</h4>
<ul>
${ise_subjects.slice(0, -1)}
</ul>
</br>
<h3>${utn["degree careers"]["cme"]["name"]}</h3>
<h4>Duration: ${utn["degree careers"]["cme"]["duration"]}</h4>
<h4>Description: ${utn["degree careers"]["cme"]["description"]}</h4>
<h4>Subjects:</h4>
<ul>
${cme_subjects.slice(0, -1)}
</ul>
</br>
<h3>${utn["degree careers"]["cve"]["name"]}</h3>
<h4>Duration: ${utn["degree careers"]["cve"]["duration"]}</h4>
<h4>Description: ${utn["degree careers"]["cve"]["description"]}</h4>
<h4>Subjects:</h4>
<ul>
${cve_subjects.slice(0, -1)}
</ul>
</br>
</hr>
<h2>Undergraduate Careers</h2>
<h3>${utn["undergraduate careers"]["usa"]["name"]}</h3>
<h4>Duration: ${utn["undergraduate careers"]["usa"]["duration"]}</h4>
<h4>Description: ${utn["undergraduate careers"]["usa"]["description"]}</h4>
<h4>Subjects:</h4>
<ul>
${usa_subjects.slice(0, -1)}
</ul>
</br>
</hr>
`

console.log("EXERCISE THREE: Literals");
console.log(utn_presentation);
