var bio = {
	"name": "Clifton Mauldin",
  	"role": "Sr. Applications Developer",
	"contacts": 
	[	
		{
			"mobile": "817-992-3298",
			"email": "cam94@att.net",
			"github": "cmdre94",
			"twitter": "@CCamauldin",
			"location": "Dallas, TX"	
		}	
	],
	"welcomeMessage": "Welcome to my resume",
	"skills": ["Management", "Programming", "Network Operations", "Data Analysis"],
	"biopic": "images/Clifton2005.jpg"
};

var work = {
	"jobs" : 
	[
		{
			"company": "AT&T",
			"position": "Manager Network Customer Service Centers",
			"location": "Dallas, TX",
			"dates": "May 2014 to Present",
			"description": "Leader of eighteen Customer Service Reresentatives; responsible for screening air pressure alarms and monitoring cable failures on outside plant in AT&T's 21 state footprint. Responsible for training and developement."
		},
		{
			"company": "AT&T",
			"position": "Customer Service Technician",
			"location": "Dallas, TX",
			"dates": "2000 to 2014",
			"description": "Responded to air pressure alarms and customer troble reports.  Restored service for individual and group trouble reports."
		},
		{
			"company": "AT&T",
			"position": "Cable Splicing Technician",
			"location": "Dallas, TX",
			"dates": "1996 to 2000",
			"description": "Connected and rearranged twisted pair copper to provide all wireline services offered by AT&T; also to restore service after a major outage."
		}
	]
};

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
			"degree": "Electronic Telecommunications Technical Platform",
			"major": "Electronics Telecommunications Certificate"
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
};

var projects = {
	"projects" :
	[
		{
			"title" : "Damaged Cable",
			"dates" : "September 2012",
			"description" : "This is a damaged twisted pair copper cable.  The insulation on the wires is paper.  The cable is pressurized to keep water out if there is a leak.  Telephone cables are monitored by transducers.  When this cable was damaged, it generated an alarm.  As a technician, I was dispatched to find the cause of the alarm and make repairs.",
			"images" : "images/Corsicana.jpg"
		},
		{
			"title" : "Road Widening Project",
			"dates" : "September 2012",
			"description" : "Onsite Hwy 183 road widening project: A contractor damaged a telepone cable that was buried under the highway.  Luckily the contractor admitted to damaging the cable and showed me where it was located.",
			"images" : "images/Euless.jpg" 
		},
		{
			"title" : "Copper Theft",
			"dates" : "December 2005",
			"description" : "Copper theft is a problem that affects AT&T to this day.  These cables are in an off-road eavsment.  Since they were pressurized, an alarm was generated when the cables were cut.  Being that I was the air pressure tech, I was the first responder.",
			"images" : "images/Federal.jpg"
		}
	]
};

bio.nameRole = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend (formattedName);
	$("#header").append (formattedRole);
};

bio.nameRole();

bio.displayContacts = function() {
	if (bio.contacts.length > 0) {

		for (var contact in bio.contacts) {
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
			$("#header").append(formattedMobile);
			$("#footerContacts").append(formattedMobile);

			var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
			$("#header").append(formattedEmail);
			$("#footerContacts").append(formattedEmail);

			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
			$("#header").append(formattedGithub);
			$("#footerContacts").append(formattedGithub);

			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
			$("#header").append(formattedTwitter);
			$("#footerContacts").append(formattedTwitter);

			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
			$("#header").append(formattedLocation);
			$("#footerContacts").append(formattedLocation);
		}
	}
};

bio.displayContacts();

bio.displayBiopic = function() {
	if (bio.biopic.length > 0)
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
};

bio.displayBiopic();

bio.displayWelcome = function() {
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
};

bio.displayWelcome();

bio.displaySkills = function() {
	if (bio.skills.length > 0) { 
		$("#header").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}		
	}
};

bio.displaySkills();

work.displayWork = function() {
	if (work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		
		for (var job in work.jobs) {
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
};	

work.displayWork();

$(document).click(function(loc) {
});

projects.display = function() {
	if (projects.projects.length > 0) {

		for (var project in projects.projects) {
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
	};

 projects.display();

education.displayEducation = function() {
	if (education.schools.length > 0) {
		$("#education").append(HTMLschoolStart);

		for (var school in education.schools) {
	
			if (education.schools[school].name == "The University of North Texas") {
			 	var formatteduntName = HTMLmeanGreen.replace("%data%", education.schools[school].name);
			 	$(".education-entry:last").append(formatteduntName);
			 	}
			 else
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
};

education.displayEducation();

$("#mapDiv").append(googleMap);