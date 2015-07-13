var bio = {
    "name": "David van Oudheusden",
    "role": "Web Developer",
    "welcomeMessage": "Hello and Welcome to my Resumé",
    "picture_URL": "images/ikzelf.jpg",

    "skills": ["CSS", "HTML5", "JS", "JQUERY", "Git", "Grunt", "SEO", "SEA", "Wordpress", "PHP", "SQL", "Virtual environments", "Scheduling software PlanningPME"],

    "contacts": {
        "mobile": "06-18651912",
        "email": "david@dedaaf.com",
        "twtter": "@dedaaf",
        "github": "dedaaf",
        "location": "Amsterdam"
    },
    "display": function () {
    
	    //set message
	    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	    $("#header").prepend(formattedwelcomeMsg);
	    //set Role
	    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	    $("#header").prepend(formattedRole);

		//set header name
	    var formattedName = HTMLheaderName.replace("%data%", bio.name);
	    $("#header").prepend(formattedName);

	    //print skills
	    if (bio.skills.length > 0) {
	        $('#header').append(HTMLskillsStart);
	        for (var i = 0; i < bio.skills.length; i++) {
	        	HTMLskills = '<li class="flex-item" id="skill-item'+[i]+'"><span class="white-text">%data%</span></li>';
	            var formattedskill = HTMLskills.replace("%data%", bio.skills[i]);
	            $('#skills').append(formattedskill);
	        }
	    }

	//bioPic
	    var formattedPic = HTMLbioPic.replace("%data%", bio.picture_URL);
	    $("#header").append(formattedPic);
	//contact info
	    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	    $("#topContacts").append(formattedMobile);
	//email
	    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	    $("#topContacts").append(formattedEmail);
	//twitter
	    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twtter);
	    $("#topContacts").append(formattedTwitter);
	//github
	    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	    $("#topContacts").append(formattedGithub);
	//location
	    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	    $("#topContacts").append(formattedLocation);
	}

};

var work = {

    "jobs": [{
        "employer": "De Daaf Consulting",
        "title": "Consultant",
        "location": "Amsterdam, Parelstraat 6",
        "dates": "2012-2015",
        "description": "PC Support, Web Development"
    }, {
        "employer": "PlanningPME Nederland",
        "title": "Consultant",
        "location": "Amsterdam, Oudeschans 85",
        "dates": "2012-2015",
        "description": "Sales, Marketing , Support, Website Admin"
    }, {
        "employer": "BurgerMeester",
        "title": "Operational Manager",
        "location": "Amsterdam, Albert Cuypstraat",
        "dates": "2007-2010",
        "description": "HR, Training, Policy making and operational boss"
    }, {
        "employer": "Katholieke Scholengemeenschap Hoofddorp",
        "title": "Docent Natuurkunde en Scheikunde",
        "location": "Hoofddorp",
        "dates": "2006-2007",
        "description": "Educator for 7 classes (each about 25 students) in chemistry and physics. Liked the kids (not all). Subject still really interessting."
    }, {
        "employer": "Multiple Cafes",
        "title": "Barman",
        "location": "Amsterdam, Nieuwmarkt",
        "dates": "2001-2012",
        "description": "Barman/manager around Amsterdam, I can work a tray with only three fingers, oh yeah"
    }],
    "display": function () { //display all work from object
	    for (job in work.jobs) {

	        $('#workExperience').append(HTMLworkStart);

	        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
	        $('.work-entry:last').append(formattedEmployerTitle);

	        var formatttetLocationDatesDescription = formattedWorkLocation + formattedWorkDates + formattedWorkDescription;
	        $('.work-entry:last').append(formatttetLocationDatesDescription);

	    }
	}
};


var projects = {

    "projects": [{
        "title": "De Rekenspecialist",
        "dates": "2014",
        "description": "Website voor de rekenspecialist. Speels en overzichtelijk",
        "url": "http://www.rekenspecialist.nl",
        "image": "images/rekenspecialist.png"
    }, {
        "title": "Bacchus Wijnhandel",
        "dates": "2014",
        "description": "Website voor Bacchus Wijnhandel in Peize",
        "url": "http://www.bacchuswijnimport.nl",
        "image": "images/bacchus.png"
    }, {
        "title": "Kroon op je Werk",
        "dates": "2014",
        "description": "Website voor Kroon op je Werk",
        "url": "http://www.kroonopjewerk.net",
        "image": "http://www.dedaaf.com/wp-content/uploads/2014/08/kroonopjewerk.png"
    }],
    "display": function() { //display all projects from object

	    for (project in projects.projects) {
	        $('#projects').append(HTMLprojectStart);
	        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].url).replace("%data%", projects.projects[project].title);
	        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

	        var formattedprojectURL = HTMLprojectURL.replace("%data%", projects.projects[project].url).replace("%data%", projects.projects[project].url);

	        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
	        var formattedProjectItems = formattedprojectTitle + formattedprojectURL + formattedprojectDates + formattedprojectDescription + formattedprojectImage;
	        $('.project-entry:last').append(formattedProjectItems);
	    }
	}
};

var education = {

    "onlineCourse": [{
        "school": "Udacity",
        "title": "Front-End Web Development",
        "dates": "2015-current",
        "url": "http://www.udacity.com"
    }],

    "schools": [{
        "name": "Universiteit van Amsterdam",
        "location": "Amsterdam, The Netherlands",
        "degree": "none",
        "major": "Political Sciences",
        "dates": "2004-2005",
        "url": "http://www.uva.nl"
    }, {
        "name": "Hogeschool van Amsterdam",
        "location": "Amsterdam",
        "degree": "Propedeuse",
        "major": "Natuur- Scheikunde Docent",
        "dates": "2000-2003",
        "url": "http://www.hva.nl"
    }, {
        "name": "Hogeschool van Amsterdam",
        "location": "Amsterdam",
        "degree": "Propedeuse",
        "major": "Computer Sciences",
        "dates": "1999-2001",
        "url": "http://www.hva.nl"
    }, {
        "name": "Werenfridus",
        "location": "Hoorn",
        "degree": "Hava",
        "major": "Na, Sch, Wi-b, Eco-2, NL, ENG",
        "dates": "1991-1997",
        "url": "http://www.hva.nl"
    }],
    "display": function() {
	    for (school in education.schools) {
	        $('#education').append(HTMLschoolStart);
	        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	        var formattedschoolUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url).replace("%data%", education.schools[school].url);

	        var formattedSchoolItems = formattedschoolName + formattedschoolDegree + formattedschoolDates +
	            formattedschoolLocation + formattedschoolMajor + formattedschoolUrl;
	        $('.education-entry:last').append(formattedSchoolItems);
	    }
	}

};


bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);



$("#skills li").hover(function() {
	var text = $(this).text(); 

	switch(text) {
    case 'CSS':
        $('.welcome-message').text("I am GREAT at "+text); 
        break;
   
   
	} 

	//$('.welcome-message').text("I am good at "+text, '1px solid red'); 
}
);

/*
function inName(oldName) { //set lastname to Uppercase

    var finalName = oldName;
    // Your code goes here!

    splitArray = finalName.split(' ');
    // firstName = splitArray[0]; get firstname
    firstName = splitArray[0].toLowerCase();
    firstLetter = firstName[0].toUpperCase();
    firstLast = firstName.slice(1);
    firstName = firstLetter + firstLast;

    lastName = splitArray[1].toUpperCase();

    finalName = firstName + " " + lastName;
    // Don't delete this line!
    return finalName;
};

*/

/*
	$( ".flex-item" ).hover(function() {
		$("a", this).addClass('hover-enabled');
		}, 
		function () {
    		$("a", this).removeClass('hover-enabled');
  	
  	);
*/














