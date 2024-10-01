const personalInformationSection = document.getElementById("personal-Information") as HTMLElement;
const togglePersonalInformation = document.getElementById("togglePersonalInformation") as HTMLButtonElement;

// Check if both elements are correctly selected

let isPersonalInformationSectionVisible = true;

togglePersonalInformation.addEventListener("click", () => {
  if (isPersonalInformationSectionVisible) {
    personalInformationSection.style.display = "none";
    togglePersonalInformation.textContent = "Show Personal Information";
  } else {
    personalInformationSection.style.display = "block";
    togglePersonalInformation.textContent = "Hide Personal Information";
  }
  isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
});

const professionalSummary = document.getElementById("professionalSummary") as HTMLElement;
const toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary") as HTMLButtonElement;

toggleProfessionalSummary.addEventListener("click", () => {
  if (professionalSummary.style.display === "none") {
    professionalSummary.style.display = "block";
    toggleProfessionalSummary.textContent = "Hide Professional Summary";
  } else {
    professionalSummary.style.display = "none";
    toggleProfessionalSummary.textContent = "Show Professional Summary";
  }
})

const addSkills = document.getElementById("addSkills") as HTMLButtonElement;
const skillsDetails = document.querySelector(".skillsDetails") as HTMLDivElement;


addSkills.addEventListener("click", () => {
    const newSkillLabel = document.createElement("label")
    newSkillLabel.textContent = "Add more skill"

    const newSkillInput = document.createElement("input")
    newSkillInput.type = "text"
    newSkillInput.placeholder = "Add new skill"
     
    skillsDetails.appendChild(newSkillLabel)
    skillsDetails.appendChild(newSkillInput)
})

const skillsDetailsDiv = document.querySelector(".skillsDetails") as HTMLElement
const toggleSkillDetails = document.getElementById("toggleSkills") as HTMLButtonElement

toggleSkillDetails.addEventListener("click", () => {
  if (skillsDetailsDiv.style.display === "none"){
    skillsDetailsDiv.style.display = "block"
    toggleSkillDetails.textContent = "Hide Skills Section"
  } else {
    skillsDetailsDiv.style.display = "none"
    toggleSkillDetails.textContent = "Show Skills Section"
  }
})

const educationDetailDiv = document.querySelector(".educationDetails") as HTMLElement
const toggleEducationDetails = document.getElementById("toggleEducationDetails") as HTMLButtonElement

toggleEducationDetails.addEventListener("click", () => {
  if (educationDetailDiv.style.display === "none") {
    educationDetailDiv.style.display = "block"
    toggleEducationDetails.textContent = "Hide Education Menu"
  } else {
    educationDetailDiv.style.display = "none"
    toggleEducationDetails.textContent = "Show Education Menu"
  }
})



const experienceDetailDiv = document.querySelector(".experienceDetails") as HTMLElement
const toggleExperienceDetails = document.getElementById("toggleExperience") as HTMLButtonElement

toggleExperienceDetails.addEventListener("click", () => {
  if (experienceDetailDiv.style.display === "none") {
    experienceDetailDiv.style.display = "block"
    toggleExperienceDetails.textContent = "Hide Experience Menu"
  } else {
    experienceDetailDiv.style.display = "none"
    toggleExperienceDetails.textContent = "Show Experience Menu"
  }
})


document.getElementById('resumeForm')?.addEventListener('submit', function(event){
  event.preventDefault();

  const resumeOutputDisplay = document.querySelector(".resumeOutput") as HTMLElement
  const nameElement = document.getElementById("name") as HTMLInputElement
  const addressElement = document.getElementById("address") as HTMLInputElement
  const contactElement = document.getElementById("contact") as HTMLInputElement
  const emailElement = document.getElementById("email") as HTMLInputElement
  const cityElement = document.getElementById("city") as HTMLInputElement
  const pictureElement = document.getElementById("picture") as HTMLInputElement
  const professionalSummaryElement = document.getElementsByName("professionalSummary")[0] as HTMLTextAreaElement
  const skill1Element = document.querySelector(".skill1") as HTMLInputElement
  const skill2Element = document.querySelector(".skill2") as HTMLInputElement
  const skill3Element = document.querySelector(".skill3") as HTMLInputElement
  const skill4Element = document.querySelector(".skill4") as HTMLInputElement  
  const matricDegreeNameElement = document.querySelector(".degreeNameMatric") as HTMLInputElement
  const instituteNameMatricElement = document.querySelector(".instituteNameMatric") as HTMLInputElement
  const matricDegreeStartYearElement = document.querySelector(".startYearMatric") as HTMLInputElement
  const matricDegreeEndYearElement = document.querySelector(".endYearMatric") as HTMLInputElement

  const interDegreeNameElement = document.querySelector(".degreeNameInter") as HTMLInputElement
  const instituteNameInterElement = document.querySelector(".instituteNameInter") as HTMLInputElement
  const interDegreeStartYearElement = document.querySelector(".startYearInter") as HTMLInputElement
  const interDegreeEndYearElement = document.querySelector(".endYearInter") as HTMLInputElement
  
  const bachelorDegreeNameElement = document.querySelector(".degreeNameBachelors") as HTMLInputElement
  const instituteNameBachelorElement = document.querySelector(".instituteNameBachelors") as HTMLInputElement
  const bachelorDegreeStartYearElement = document.querySelector(".startYearBachelors") as HTMLInputElement
  const bachelorDegreeEndYearElement = document.querySelector(".endYearBachelors") as HTMLInputElement
  
  const mastersDegreeNameElement = document.querySelector(".degreeNameMasters") as HTMLInputElement
  const instituteNameMastersElement = document.querySelector(".instituteNameMasters") as HTMLInputElement
  const mastersDegreeStartYearElement = document.querySelector(".startYearMasters") as HTMLInputElement
  const mastersDegreeEndYearElement = document.querySelector(".endYearMasters") as HTMLInputElement
  
  const firstOrganizationName = document.querySelector(".firstOrganization") as HTMLInputElement
  const firstOrganizationDesignation = document.querySelector(".firstOrganizationDesignation") as HTMLInputElement
  const firstOrganizationStartDate = document.querySelector(".jobStartDate1") as HTMLInputElement
  const firstOrganizationEndDate = document.querySelector(".jobEndDate1") as HTMLInputElement
  const firstJobJd = document.querySelector(".firstJobJD") as HTMLTextAreaElement

  



//creating resume Output

const allOutputs = nameElement && addressElement && contactElement && emailElement && cityElement && pictureElement && professionalSummaryElement && skill1Element && skill2Element && mastersDegreeNameElement && instituteNameMastersElement && mastersDegreeStartYearElement && mastersDegreeEndYearElement
if (allOutputs) {
  const name = nameElement.value
  const address = addressElement.value
  const contact = contactElement.value
  const email = emailElement.value
  const city = cityElement.value
  const professionalSummary = professionalSummaryElement.value
  const skill1 = skill1Element.value
  const skill2 = skill2Element.value
  const skill3 = skill3Element.value
  const skill4 = skill4Element.value
  const matricDegreeName =  matricDegreeNameElement.value
  const instituteNameMatric = instituteNameMatricElement.value
  const matricDegreeStartYear = matricDegreeStartYearElement.value
  const matricDegreeEndYear = matricDegreeEndYearElement.value
  const interDegreeName = interDegreeNameElement.value
  const instituteNameInter = instituteNameInterElement.value
  const interDegreeStartYear = interDegreeStartYearElement.value
  const interDegreeEndYear = interDegreeEndYearElement.value
  const bachelorDegreeName = bachelorDegreeNameElement.value
  const instituteNameBachelor = instituteNameBachelorElement.value
  const bachelorDegreeStartYear = bachelorDegreeStartYearElement.value
  const bachelorDegreeEndYear = bachelorDegreeEndYearElement.value
  const masterDegreeName = mastersDegreeNameElement.value
  const instituteNameMasters = instituteNameMastersElement.value
  const mastersDegreeStartYear = mastersDegreeStartYearElement.value
  const mastersDegreeEndYear = mastersDegreeEndYearElement.value
  const firstOrganization = firstOrganizationName.value
  const firstJobDesignation = firstOrganizationDesignation.value
  const firstJobStartDate = firstOrganizationStartDate.value
  const firstJobEndDate = firstOrganizationEndDate.value
  const firstJobJobDescription = firstJobJd.value


  const profilePictureFile = pictureElement.files?.[0]
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): '';



  const resumeOutput = `
  <div class="resumeOutput1">
  <h2><u><i><center>Congratulations! Your Resume has been Generated</u></i></h2>
  ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}

  <div class="personalInfoSumm">
  <h2><u>Personal Summary</u></h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Address:</strong> ${address}</p>
  <p><strong>Phone:</strong> ${contact}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>City:</strong> ${city}</p>
  </div>
  <h2><u>Professional Summary</u></h2>
  <p>${professionalSummary.replace(/\n/g,'<br>')}</p>

  <h2><u>Skills</u></h2>

  <p><strong>Skill 1:</strong> ${skill1}</p>
  <p><strong>Skill 2:</strong> ${skill2}</p>
  <p><strong>Skill 3:</strong> ${skill3}</p>
  <p><strong>Skill 4:</strong> ${skill4}</p>

  <h2><u>Education</u></h2>

  <h3>Matric</h3>
  <p><strong>Matriculation / equivalent:</strong> ${matricDegreeName}</p>
  <p><strong>Institute Name:</strong> ${instituteNameMatric}</p>
  <p><strong>Start Date:</strong> ${matricDegreeStartYear}</p>
  <p><strong>End Date:</strong> ${matricDegreeEndYear}</p>

  <h3>Intermediate</h3>
  <p><strong>Intermediate / equivalent:</strong> ${interDegreeName}</p>
  <p><strong>Institute Name:</strong> ${instituteNameInter}</p>
  <p><strong>Start Date:</strong> ${interDegreeStartYear}</p>
  <p><strong>End Date:</strong> ${interDegreeEndYear}</p>

  <h3>Bachelor's</h3>
  <p><strong>Bachelor's / equivalent:</strong> ${bachelorDegreeName}</p>
  <p><strong>University / Institute Name:</strong> ${instituteNameBachelor}</p>
  <p><strong>Start Date:</strong> ${bachelorDegreeStartYear}</p>
  <p><strong>End Date:</strong> ${bachelorDegreeEndYear}</p>

  <h3>Masters</h3>
  <p><strong>Master's / M.Phill / equivalent:</strong> ${masterDegreeName}</p>
  <p><strong>University / Institute Name:</strong> ${instituteNameMasters}</p>
  <p><strong>Start Date:</strong> ${mastersDegreeStartYear}</p>
  <p><strong>End Date:</strong> ${mastersDegreeEndYear}</p>


   <h2><u>Experience</u></h2>

  <h4>Organization: ${firstOrganization}</h4>
  <h4>Designation: ${firstJobDesignation}</h4>
  <p>Start Date: ${firstJobStartDate}</p>
  <p>End Date: ${firstJobEndDate}</p>
  <h4>Job Description</h4>
  <p>${firstJobJobDescription}</p>

  </div>
  `

  const resumeOutputElement = document.querySelector('.resumeOutput')
  if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
}
else {
  console.error ('Resume Output elements are missing')
} 
}

}
)





