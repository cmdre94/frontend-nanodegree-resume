
var formattedName = HTMLheaderName.replace(
	"%data%", "Clifton Mauldin");

var role = "Sr. Applications Developer"
var formattedRole = HTMLheaderRole.replace(
	"%data%", role);

$("#header").prepend (formattedName);
$("#header").append (formattedRole);

var skills = 
	["Management", "Programming", "Network Operations", "Data Analysis"];

var bio = {
	"name": "Clifton Mauldin",
	"contact": 
	[
		{
			"phone": "817-992-3298",
			"email": "cam94@att.net",
			"location": "Dallas/Fort Worth Metrolex",
			
		}	
	],
	"skills": skills
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
	"onlineCourse": 
	[
		{
			"name": "Udacity",
			"course": "Front End Web Developer Nanodegree",
			"URL": "udacity.com"
		}
	],

	"schools" : 
	[
		{
			"name": "The University of North Texas",
			"city": "Denton, TX",
			"degree": "Bachelors of Business Administration",
			"magor": ["General Business"] 
		},
		{
			"name": "Eastfield College",
			"city": "Mesquite, TX",
			"degree": "Electronic Telecommunications Certificate",
			"major": ["Electronics and Telecommunications"]
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

//$("#main").append(education.schools[1].name);

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

		//if (projects.projects[project].images.length > 0) {
			//for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
			//}
		}

	}

 projects.display();




function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
		return name[0] +" "+name[1];
};
$("#main").append (internationalizeButton);





