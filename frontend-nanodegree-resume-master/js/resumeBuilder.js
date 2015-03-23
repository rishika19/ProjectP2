

var bio= {
	"name":"Rishikaa Garemmella",
	"role":"Senior Web Developer",
	"contacts":{
		"mobile":"123456789",
		"email":"rishikagarimella@yahoo.com",
		"location":"San francisco, CA",
		"twitter": "@rishikag",
		"github": "github"
	},
	"pictureURL":"http://placehold.it/300x250",
	"welcomeMessage":"welcome to my Resume page",
	"skills":["JavaScript","HTML","CSS","jQuery"]
};

var work={
	jobs:[{
		"employer":"Yahoo Inc",
		"title":"Senior Web Developer",
		"location":"Sunnyvale, CA",
		"dates":"july 2009-Present",
		"description":"Web developer in the ads and data team at yahoo"
	},
	     {
	  	"employer":"ZL technologies Ltd",
	  	"title":"software test engineer",
	  	"location":"San jose,CA","dates":"june 2008 to july 2009",
	  	"description":"test engineer for archival software"
	},
	    {
	    "employer":"Infosys technologies Ltd",
	    "title":"software engineer",
	    "location":"Hyderabad,Telangana,India",
	    "dates":"jan 2007 - sept 2007",
	    "description":"swe for dataware hourse software"
	}]
};


var projects={
    "projects" :[ { 
    	"title":"project1",
    	"dates":"jan 2007-jan 2008",
    	"description":"This is test project 1",
    	"images":["http://placehold.it/300x250","http://placehold.it/300x250"],

    },
                 {
        "title":"project2",
        "dates":"jan 2008-jan 2009",
        "description":"This is test project 2",
        "images":["http://placehold.it/300x250","http://placehold.it/300x250"]
    }],

    "display" : function() {
        for(project in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:Last').append(HTMLprojectTitle.replace('%data%',projects.projects[project].title));
			$('.project-entry:Last').append(HTMLprojectDates.replace('%data%',projects.projects[project].dates));
			$('.project-entry:Last').append(HTMLprojectDescription.replace('%data%',projects.projects[project].description));
			for(image in projects.projects[project].images) {
				$('.project-entry:Last').append(HTMLprojectImage.replace('%data%',projects.projects[project].images[image]));
			}
		}

    }

};

var education = {
	"schools":[{
		"name":"Santa Clara University",
		"City":"Santa clara,CA",
		"degree":"Masters",
		"major":["masters-computer science","masters-physics"],
		"dates":"sep 2007-march 2009","url":"http://scu.com"
	},        {
		"name":"Jawaharlal technlogical university",
		"City":"Philadelphia, Pennsylvania, USA",
		"degree":"Bachelors",
		"major":["masters-history","masters-arts"],
		"dates":"aug 2002-may 2006","url":"http://jntu.com"
	}],
	"onlineCourses":[ {
		"title":"course1",
		"school":"school1",
		"dates":"01",
		"url":"http://yahoo.com"
	},  {
		"title":"course2",
	    "school":"school2",
	    "dates":"02",
	    "url":"http://google.com"
	}]
};




// Add name and role to page
$('#header').append(HTMLheaderName.replace("%data%",bio.name));
$('#header').append(HTMLheaderRole.replace("%data%",bio.role));
$('h1').insertBefore("#topContacts");
$('span').insertBefore("#topContacts");
 // Add contact info to page
 //$('#topContacts').append(HTMLcontactGeneric.replace("%contacts%","Contact Information"));
 $('#topContacts').append(HTMLmobile.replace("%data%",bio.contacts.mobile));
 $('#topContacts').append(HTMLemail.replace("%data%",bio.contacts.email));
 $('#topContacts').append(HTMLlocation.replace("%data%",bio.contacts.location));
 $('#topContacts').append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
 $('#topContacts').append(HTMLgithub.replace("%data%",bio.contacts.github));

// Add other things to header 

 $('#header').append(HTMLbioPic.replace("%data%",bio.pictureURL));
 $('#header').append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));

// show skills on page 
if(bio.skills.length >0){
	$('#header:Last').append(HTMLskillsStart);
    $('#skills:Last').append(HTMLskills.replace('%data%',bio.skills[0]));
    $('.flex-item:Last').append(HTMLskills.replace('%data%',bio.skills[1]));
    $('.flex-item:Last').append(HTMLskills.replace('%data%',bio.skills[2]));
    $('.flex-item:Last').append(HTMLskills.replace('%data%',bio.skills[3]));
}

function displayWork() {
	$('#workExperience').append(HTMLworkStart);
	for(jobs in work.jobs) {
    	$('.work-entry').append(HTMLworkEmployer.replace('%data%',work.jobs[jobs].employer)+HTMLworkTitle.replace('%data%',work.jobs[jobs].title));
    	$('.work-entry:Last').append(HTMLworkDates.replace('%data%',work.jobs[jobs].dates));
    	$('.work-entry:Last').append(HTMLworkLocation.replace('%data%',work.jobs[jobs].location));
     	$('.work-entry:Last').append(HTMLworkDescription.replace('%data%',work.jobs[jobs].description));

	}
}

// call the func to display work history
displayWork();

function displayEducation() {
	$('#education').append(HTMLschoolStart);
	for(schools in education.schools) {
    	$('.education-entry').append(HTMLschoolName.replace('%data%',education.schools[schools].name)+HTMLschoolDegree.replace('%data%',education.schools[schools].degree));
    	$('.education-entry:Last').append(HTMLschoolDates.replace('%data%',education.schools[schools].dates));
    	$('.education-entry:Last').append(HTMLschoolLocation.replace('%data%',education.schools[schools].City));
     	$('.education-entry:Last').append(HTMLschoolMajor.replace('%data%',education.schools[schools].major));

	}
}

//display edu details
displayEducation();


//print out click coordinates to console

$(document).click(function(loc) {
  var xcoordinate=event.pageX;
  var ycoordinate=event.pageY;
  logClicks(xcoordinate,ycoordinate);

});

// printing out locations where i worked
function locationizer() {
    var myArray=[];
	for(jobs in work.jobs) {
    myArray.push(work.jobs[jobs].location);
    }

    return myArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

// Adding button to page
$('#main').append(internationalizeButton);

// Captalize etc for internatiobalization
function inName(name) {
	var name1= document.getElementById("name").innerHTML;
	name1=name1.split(" ");
	var firstName= name1[0];
	var lastName= name1[1];
	lastName=lastName.toUpperCase();
	var one=firstName.slice(0,1);
	var two=firstName.slice(1,firstName.length-1);
	one=one.toUpperCase();
	firstName=one.concat(two);
	firstName=firstName.concat(" ");
	var finalName=firstName.concat(lastName);
	return finalName;
}



// display the project data on page
projects.display();


//display map on resume

$('#mapDiv').append(googleMap);
initializeMap();



