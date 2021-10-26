const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyRight = document.createElement('p');
copyRight.innerHTML = 'Jovany Cortes Marure ' + thisYear;
footer.appendChild(copyRight);

const skills = ['Basic knowledge of java', 'Basic knowledge of Python', 'Basic knowledge of CSS', 'Basic knowledge of HTML', 'Well versed in the Microsoft Suit', 'Fluent in Spanish'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
} 