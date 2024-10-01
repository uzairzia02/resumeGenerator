var _a;
var personalInformationSection = document.getElementById("personal-Information");
var togglePersonalInformation = document.getElementById("togglePersonalInformation");
// Check if both elements are correctly selected
var isPersonalInformationSectionVisible = true;
togglePersonalInformation.addEventListener("click", function () {
    if (isPersonalInformationSectionVisible) {
        personalInformationSection.style.display = "none";
        togglePersonalInformation.textContent = "Show Personal Information";
    }
    else {
        personalInformationSection.style.display = "block";
        togglePersonalInformation.textContent = "Hide Personal Information";
    }
    isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
});
var professionalSummary = document.getElementById("professionalSummary");
var toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary");
toggleProfessionalSummary.addEventListener("click", function () {
    if (professionalSummary.style.display === "none") {
        professionalSummary.style.display = "block";
        toggleProfessionalSummary.textContent = "Hide Professional Summary";
    }
    else {
        professionalSummary.style.display = "none";
        toggleProfessionalSummary.textContent = "Show Professional Summary";
    }
});
var addSkills = document.getElementById("addSkills");
var skillsDetails = document.querySelector(".skillsDetails");
addSkills.addEventListener("click", function () {
    var newSkillLabel = document.createElement("label");
    newSkillLabel.textContent = "Add more skill";
    var newSkillInput = document.createElement("input");
    newSkillInput.type = "text";
    newSkillInput.placeholder = "Add new skill";
    skillsDetails.appendChild(newSkillLabel);
    skillsDetails.appendChild(newSkillInput);
});
var skillsDetailsDiv = document.querySelector(".skillsDetails");
var toggleSkillDetails = document.getElementById("toggleSkills");
toggleSkillDetails.addEventListener("click", function () {
    if (skillsDetailsDiv.style.display === "none") {
        skillsDetailsDiv.style.display = "block";
        toggleSkillDetails.textContent = "Hide Skills Section";
    }
    else {
        skillsDetailsDiv.style.display = "none";
        toggleSkillDetails.textContent = "Show Skills Section";
    }
});
var educationDetailDiv = document.querySelector(".educationDetails");
var toggleEducationDetails = document.getElementById("toggleEducationDetails");
toggleEducationDetails.addEventListener("click", function () {
    if (educationDetailDiv.style.display === "none") {
        educationDetailDiv.style.display = "block";
        toggleEducationDetails.textContent = "Hide Education Menu";
    }
    else {
        educationDetailDiv.style.display = "none";
        toggleEducationDetails.textContent = "Show Education Menu";
    }
});
var experienceDetailDiv = document.querySelector(".experienceDetails");
var toggleExperienceDetails = document.getElementById("toggleExperience");
toggleExperienceDetails.addEventListener("click", function () {
    if (experienceDetailDiv.style.display === "none") {
        experienceDetailDiv.style.display = "block";
        toggleExperienceDetails.textContent = "Hide Experience Menu";
    }
    else {
        experienceDetailDiv.style.display = "none";
        toggleExperienceDetails.textContent = "Show Experience Menu";
    }
});
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var resumeOutputDisplay = document.querySelector(".resumeOutput");
    var nameElement = document.getElementById("name");
    var addressElement = document.getElementById("address");
    var contactElement = document.getElementById("contact");
    var emailElement = document.getElementById("email");
    var cityElement = document.getElementById("city");
    var pictureElement = document.getElementById("picture");
    var professionalSummaryElement = document.getElementsByName("professionalSummary")[0];
    var skill1Element = document.querySelector(".skill1");
    var skill2Element = document.querySelector(".skill2");
    var skill3Element = document.querySelector(".skill3");
    var skill4Element = document.querySelector(".skill4");
    var matricDegreeNameElement = document.querySelector(".degreeNameMatric");
    var instituteNameMatricElement = document.querySelector(".instituteNameMatric");
    var matricDegreeStartYearElement = document.querySelector(".startYearMatric");
    var matricDegreeEndYearElement = document.querySelector(".endYearMatric");
    var interDegreeNameElement = document.querySelector(".degreeNameInter");
    var instituteNameInterElement = document.querySelector(".instituteNameInter");
    var interDegreeStartYearElement = document.querySelector(".startYearInter");
    var interDegreeEndYearElement = document.querySelector(".endYearInter");
    var bachelorDegreeNameElement = document.querySelector(".degreeNameBachelors");
    var instituteNameBachelorElement = document.querySelector(".instituteNameBachelors");
    var bachelorDegreeStartYearElement = document.querySelector(".startYearBachelors");
    var bachelorDegreeEndYearElement = document.querySelector(".endYearBachelors");
    var mastersDegreeNameElement = document.querySelector(".degreeNameMasters");
    var instituteNameMastersElement = document.querySelector(".instituteNameMasters");
    var mastersDegreeStartYearElement = document.querySelector(".startYearMasters");
    var mastersDegreeEndYearElement = document.querySelector(".endYearMasters");
    var firstOrganizationName = document.querySelector(".firstOrganization");
    var firstOrganizationDesignation = document.querySelector(".firstOrganizationDesignation");
    var firstOrganizationStartDate = document.querySelector(".jobStartDate1");
    var firstOrganizationEndDate = document.querySelector(".jobEndDate1");
    var firstJobJd = document.querySelector(".firstJobJD");
    //creating resume Output
    var allOutputs = nameElement && addressElement && contactElement && emailElement && cityElement && pictureElement && professionalSummaryElement && skill1Element && skill2Element && mastersDegreeNameElement && instituteNameMastersElement && mastersDegreeStartYearElement && mastersDegreeEndYearElement;
    if (allOutputs) {
        var name_1 = nameElement.value;
        var address = addressElement.value;
        var contact = contactElement.value;
        var email = emailElement.value;
        var city = cityElement.value;
        var professionalSummary_1 = professionalSummaryElement.value;
        var skill1 = skill1Element.value;
        var skill2 = skill2Element.value;
        var skill3 = skill3Element.value;
        var skill4 = skill4Element.value;
        var matricDegreeName = matricDegreeNameElement.value;
        var instituteNameMatric = instituteNameMatricElement.value;
        var matricDegreeStartYear = matricDegreeStartYearElement.value;
        var matricDegreeEndYear = matricDegreeEndYearElement.value;
        var interDegreeName = interDegreeNameElement.value;
        var instituteNameInter = instituteNameInterElement.value;
        var interDegreeStartYear = interDegreeStartYearElement.value;
        var interDegreeEndYear = interDegreeEndYearElement.value;
        var bachelorDegreeName = bachelorDegreeNameElement.value;
        var instituteNameBachelor = instituteNameBachelorElement.value;
        var bachelorDegreeStartYear = bachelorDegreeStartYearElement.value;
        var bachelorDegreeEndYear = bachelorDegreeEndYearElement.value;
        var masterDegreeName = mastersDegreeNameElement.value;
        var instituteNameMasters = instituteNameMastersElement.value;
        var mastersDegreeStartYear = mastersDegreeStartYearElement.value;
        var mastersDegreeEndYear = mastersDegreeEndYearElement.value;
        var firstOrganization = firstOrganizationName.value;
        var firstJobDesignation = firstOrganizationDesignation.value;
        var firstJobStartDate = firstOrganizationStartDate.value;
        var firstJobEndDate = firstOrganizationEndDate.value;
        var firstJobJobDescription = firstJobJd.value;
        var profilePictureFile = (_a = pictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n  <div class=\"resumeOutput1\">\n  <h2><u><i><center>Congratulations! Your Resume has been Generated</u></i></h2>\n  ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n\n  <div class=\"personalInfoSumm\">\n  <h2><u>Personal Summary</u></h2>\n  <p><strong>Name:</strong> ").concat(name_1, "</p>\n  <p><strong>Address:</strong> ").concat(address, "</p>\n  <p><strong>Phone:</strong> ").concat(contact, "</p>\n  <p><strong>Email:</strong> ").concat(email, "</p>\n  <p><strong>City:</strong> ").concat(city, "</p>\n  </div>\n  <h2><u>Professional Summary</u></h2>\n  <p>").concat(professionalSummary_1.replace(/\n/g, '<br>'), "</p>\n\n  <h2><u>Skills</u></h2>\n\n  <p><strong>Skill 1:</strong> ").concat(skill1, "</p>\n  <p><strong>Skill 2:</strong> ").concat(skill2, "</p>\n  <p><strong>Skill 3:</strong> ").concat(skill3, "</p>\n  <p><strong>Skill 4:</strong> ").concat(skill4, "</p>\n\n  <h2><u>Education</u></h2>\n\n  <h3>Matric</h3>\n  <p><strong>Matriculation / equivalent:</strong> ").concat(matricDegreeName, "</p>\n  <p><strong>Institute Name:</strong> ").concat(instituteNameMatric, "</p>\n  <p><strong>Start Date:</strong> ").concat(matricDegreeStartYear, "</p>\n  <p><strong>End Date:</strong> ").concat(matricDegreeEndYear, "</p>\n\n  <h3>Intermediate</h3>\n  <p><strong>Intermediate / equivalent:</strong> ").concat(interDegreeName, "</p>\n  <p><strong>Institute Name:</strong> ").concat(instituteNameInter, "</p>\n  <p><strong>Start Date:</strong> ").concat(interDegreeStartYear, "</p>\n  <p><strong>End Date:</strong> ").concat(interDegreeEndYear, "</p>\n\n  <h3>Bachelor's</h3>\n  <p><strong>Bachelor's / equivalent:</strong> ").concat(bachelorDegreeName, "</p>\n  <p><strong>University / Institute Name:</strong> ").concat(instituteNameBachelor, "</p>\n  <p><strong>Start Date:</strong> ").concat(bachelorDegreeStartYear, "</p>\n  <p><strong>End Date:</strong> ").concat(bachelorDegreeEndYear, "</p>\n\n  <h3>Masters</h3>\n  <p><strong>Master's / M.Phill / equivalent:</strong> ").concat(masterDegreeName, "</p>\n  <p><strong>University / Institute Name:</strong> ").concat(instituteNameMasters, "</p>\n  <p><strong>Start Date:</strong> ").concat(mastersDegreeStartYear, "</p>\n  <p><strong>End Date:</strong> ").concat(mastersDegreeEndYear, "</p>\n\n\n   <h2><u>Experience</u></h2>\n\n  <h4>Organization: ").concat(firstOrganization, "</h4>\n  <h4>Designation: ").concat(firstJobDesignation, "</h4>\n  <p>Start Date: ").concat(firstJobStartDate, "</p>\n  <p>End Date: ").concat(firstJobEndDate, "</p>\n  <h4>Job Description</h4>\n  <p>").concat(firstJobJobDescription, "</p>\n\n  </div>\n  ");
        var resumeOutputElement = document.querySelector('.resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Resume Output elements are missing');
        }
    }
});
