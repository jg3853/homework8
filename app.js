console.log('Hello World!');

const ownerName = 'Becky Sue';

function showGreeting(name) { 
    return `Hello, my name is ${name}! Welcome to my portfolio!`;
}

document.getElementById('greeting-message').textContent = showGreeting(ownerName);

function daysUntilDeadline(deadline) {
    const today = new Date();
    
    const [month, day, year] = deadline.split('-');
    const targetDate = new Date(`${year}-${month}-${day}`);
    const timeDifference = targetDate - today;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}

const deadlineDate = '12-31-2024';
document.getElementById('days-until-deadline').textContent = daysUntilDeadline(deadlineDate);
console.log(`Days until deadline: ${daysUntilDeadline(deadlineDate)}`);

let hasDownloadedResume = false;
let downloadCount = 0;

document.getElementById('download-resume-btn').addEventListener('click', function () {
    if (!hasDownloadedResume) {
        alert('Your resume downloaded successfully!');
        hasDownloadedResume = true;
        downloadCount++;
        document.getElementById('download-count').textContent = downloadCount;
    }
});

document.getElementById('add-skill-btn').addEventListener('click', function () {
    const newSkillInput = document.getElementById('new-skill-input');
    const newSkill = newSkillInput.value.trim();

    if (newSkill) {
        const newSkillItem = document.createElement('li');
        newSkillItem.className = 'list-group-item';
        newSkillItem.textContent = newSkill;

        document.getElementById('skills-list').appendChild(newSkillItem);

        newSkillInput.value = '';
    } else {
        alert('Please enter a skill.');
    }
});


const projectTitles = [
    "Sport Injury Rehabilitation",
    "Patient Education Initiatives",
    "Align the Spine, Body, and Mind"
];

const projectDescriptions = [
    "My program is designed to help athletes recover from their injuries quicker and prevent more from happening in the long run. Every athlete has a customized program depending on their needs, whether there is an injury or an athlete is just trying to take care of themselves. We also use this program to help train new chiropractors.",
    "We make brochures and videos to help educate patients. We also upload all this information onto our website for those that are willing to learn.",
    "Creating a deeper understanding of how your body and mental state can affect each other."
];

const projectDeadlines = [
    "12-31-2024",
    "12-31-2024", 
    "01-01-2023" 
];


const projectImages = [
    "pexels-pixabay-2346.jpg", 
    "pexels-karolina-grabowska-4506109.jpg", 
    "pexels-pixabay-355863.jpg" 
];

function getProjectStatus(deadline) {
    const today = new Date();
    const [month, day, year] = deadline.split('-');
    const projectDate = new Date(`${year}-${month}-${day}`);
    
    return projectDate > today ? "Ongoing" : "Completed";
}

const projectsGrid = document.querySelector('.projects-grid');

for (let i = 0; i < projectTitles.length; i++) {
    const projectCard = document.createElement('div');
    projectCard.className = 'col-md-6';
    const projectStatus = getProjectStatus(projectDeadlines[i]);

    projectCard.innerHTML = `
        <div class="card mb-3">
            <img src="${projectImages[i]}" class="card-img-top" alt="${projectTitles[i]}">
            <div class="card-body">
                <h5 class="card-title">${projectTitles[i]}</h5>
                <p class="card-text">${projectDescriptions[i]}</p>
                <p class="card-text">Deadline: <span>${projectDeadlines[i]}</span></p>
                <p class="card-text"><strong>Status:</strong> <span>${projectStatus}</span></p>
            </div>
        </div>
    `;

    projectsGrid.appendChild(projectCard);
}

const experiences = [
    {
        position: "Intern",
        company: "XYZ Chiropractic Clinic",
        start: "2010",
        end: "2011",
        description: "Assisted in helping patients under the supervision of a higher-up."
    },
    {
        position: "Associate Chiropractor",
        company: "ABC Chiropractic Center",
        start: "2011",
        end: "2014",
        description: "Worked with my own patients such as athletes and older people."
    },
    {
        position: "Chiropractor",
        company: "Becky Sue's Chiropractic Clinic",
        start: "2014",
        end: "Present",
        description: "Opened my own clinic, specializing in athlete care."
    }
];

const education = [
    {
        institution: "Abraham Lincoln High School",
        degree: "High School Diploma",
        duration: "4 years",
        start: "2002",
        end: "2006"
    },
    {
        institution: "Palmer College of Chiropractic, Iowa",
        degree: "Doctorate",
        duration: "8 years",
        start: "2006",
        end: "2014"
    }
];

function generateTableRows(data) {
    return data.map(item => `
        <tr>
            <td>${item.position || item.degree}</td>
            <td>${item.company || item.institution}</td>
            <td>${item.start} - ${item.end}</td>
            <td>${item.description || item.duration}</td>
        </tr>
    `).join('');
}

function createTable(sectionId, tableData, headers) {
    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    ${headers.map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${generateTableRows(tableData)}
            </tbody>
        </table>
    `;
    document.getElementById(sectionId).innerHTML = tableHTML;
}

createTable('experience-section', experiences, ['Position', 'Company', 'Duration', 'Description']);
createTable('education-section', education, ['Degree', 'Institution', 'Start-End', 'Duration']);
