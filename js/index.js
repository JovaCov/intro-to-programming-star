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

const messageform = document.querySelector('form[name="leave_message"]')
console.log(messageform);

messageform.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameinput = messageform.querySelector('input[name="name"]');
    const emailinput = messageform.querySelector('input[name="email"]');
    const messageinput = messageform.querySelector('textarea[name="message"]');
    console.log(nameinput.value);
    console.log(emailinput.value);
    console.log(messageinput.value);
    
    const messageSection = document.querySelector('#message');
    let messagelist = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    const a = document.createElement('a');
    a.innerHTML = nameinput.value;
    a.href = "mailto:" + emailinput.value;
    console.log(a);
    const messagetext = document.createElement('span');
    messagetext.innerHTML = " wrote: " + messageinput.value;
    console.log(messagetext);
    newMessage.appendChild(a);
    newMessage.appendChild(messagetext);
    console.log(newMessage);
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messagelist.appendChild(newMessage);

    messageform.reset();
});