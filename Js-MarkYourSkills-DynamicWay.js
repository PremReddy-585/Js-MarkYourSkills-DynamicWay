let skillList = [
    {
        skillName:"HTML",
        uniqueNo:1,
    },
    {
        skillName:"Python",
        uniqueNo:2,
    },
    {
        skillName:"Css",
        uniqueNo:3,
    },
    {
        skillName:"JavaScript",
        uniqueNo:4,
    }
];

let skillsContainerEl = document.getElementById("skillsContainer");
let heading = document.createElement("h1");
heading.textContent = "Mark Your Skills";
skillsContainerEl.appendChild(heading);

function onMarkSkills(labelId){
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("selected");
}

function createAndAppendSkill(skill){
    let checkboxId = "checkbox" + skill.uniqueNo;
    let labelId = "label" + skill.uniqueNo;

    let skillCont = document.createElement("ul");
    skillsContainerEl.appendChild(skillCont);

    let skillEl = document.createElement("li");
    skillEl.classList.add("pl-4");
    skillCont.appendChild(skillEl);

    let checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.id = checkboxId;
    checkboxEl.onclick = function(){
        onMarkSkills(labelId);
    };
    skillEl.appendChild(checkboxEl);


let labelEl = document.createElement("label");
labelEl.setAttribute("for", checkboxId);
labelEl.classList.add("checkbox-label");
labelEl.id = labelId;
labelEl.textContent = skill.skillName;
skillEl.appendChild(labelEl);
}

for (let skill of skillList){
    createAndAppendSkill(skill);
}
