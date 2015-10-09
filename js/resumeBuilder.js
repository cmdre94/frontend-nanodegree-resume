
var formattedName = HTMLheaderName.replace(
	"%data%", "Clifton Mauldin");

var role = "Sr. Applications Developer"
var formattedRole = HTMLheaderRole.replace(
	"%data%", role);

$("#header").prepend (formattedName);
$("#header").append (formattedRole);

var contactGeneric = 
	["Mobile", "Email", "github", "Twitter", "Location"];

var skills = 
	["Management", "Programming", "Network Operations", "Data Analysis"];	

var bio = {
	"name": "Clifton Mauldin",
	"contacts": 
	[	
		{
			"mobile": "817-992-3298",
			"email": "cam94@att.net",
			"github": "cmdre94",
			"twitter": "@CCamauldin",
			"location": "Mansfield, TX"	
		}	
	],
	"welcomeMessage": "Welcome to my resume.",
	"skills": skills,
	"biopic": "images/Fry.jpg"
}

var work = {
	"jobs" : 
	[
		{
			"company": "AT&T",
			"position": "Manager Network Customer Service Centers",
			"location": "Dallas, TX",
			"dates": "May 2014 to Present",
			"description": "Manager of air pressure and cable desk"
		},
		{
			"company": "AT&T",
			"position": "Customer Service Technician",
			"location": "Dallas, TX",
			"dates": "2000 to 2014",
			"description": "Repaired copper telepone cables"
		},
		{
			"company": "AT&T",
			"position": "Cable Splicing Technician",
			"location": "Dallas, TX",
			"dates": "1996 to 2000",
			"description": "Spliced new telephone cables from to Central Office to field"
		}
	]
}

var education = {
	"schools" : 
	[
		{
			"name": "The University of North Texas",
			"dates": "2000 to 2004",
			"location": "Denton, TX",
			"degree": "Bachelor of Business Administration",
			"major": "General Business"
		},
		{
			"name": "Eastfield College",
			"dates": "2004 to 2006",
			"location": "Mesquite, TX",
			"degree": "Electronic Telecommunications Certificate",
			"major": "Electronics and Telecommunications"
		}
	],
	"onlineCourse": 
	[
		{
			"name": "Udacity",
			"course": "Front End Web Developer Nanodegree",
			"URL": "udacity.com"
		}
	]
}

var projects = {
	"projects" :
	[
		{
			"title" : "Project1",
			"dates" : "December 2005",
			"description" : "Photo of some stuff",
			"images" : "images/Fry.jpg"
		},
		{
			"title" : "Project2",
			"dates" : "December 2005",
			"description" : "Photo of some stuff",
			"images" : "images/Fry.jpg" 
		},
		{
			"title" : "Project3",
			"dates" : "December 2005",
			"description" : "Photo of some stuff",
			"images" : "images/Fry.jpg"
		}
	]
}

function displayContacts() {
	for (contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		$("#header").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		$("#header").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
		$("#header").append(formattedGithub);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
		$("#header").append(formattedTwitter);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$("#header").append(formattedLocation);

	}
}

displayContacts();

function displayBiopic() {
	if (bio.biopic.length > 0)
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
}

displayBiopic();

if (bio.skills.length > 0) { 
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmp = HTMLworkEmployer.replace("%data%", 
			work.jobs[job].company);
		$(".work-entry:last").append(formattedEmp);

		var formattedTitle = HTMLworkTitle.replace("%data%",
			work.jobs[job].position);
		$(".work-entry:last").append(formattedTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%",
			work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%",
			work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDesc = HTMLworkDescription.replace("%data%",
			work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc);		
	}
}	

displayWork();
$(document).click(function(loc) {
});

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDesc);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
		}

	}

 projects.display();

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
}

displayEducation();

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
		return name[0] +" "+name[1];
};
$("#main").append (internationalizeButton);

$("#mapDiv").append(googleMap);


