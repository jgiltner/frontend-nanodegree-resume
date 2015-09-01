//Data for resume created in Udacity JavaScript basics course

//Personal data
var bio = {
   name : "James D. Giltner",
   role : "Service Manager",
   contacts : {
      mobile : "734-358-1678",
      email : "jim.giltner@gmail.com",
      github : "jgiltner",
      twitter : "<i>no-twitter</i>",
      location : "Ann Arbor, MI"
   },
   bioPic : "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/s720x720/538955_223902714391883_145902030_n.jpg?oh=6bafc9d818e6e55bc68f5b06d467fd5e&oe=567B56C8",
   welcomeMsg : "Thank you for taking the time to look at my resume. I manage post delivery service and support for the Vehicle Simulator Division and BOSS Project group at FAAC Incorporated.",
   skills : [" TCP/IP Networking", " Linux", " Windows NT to 7", " PC/Server Hardware", " MySQL", " Personnel Management", " Customer Relations", " BASH", " Technical Writing", " Cost Analysis", " Issue Tracking"]
};

//Employer data
var work = {
   employer : "FAAC Inc.",
   title : "Service Manager",
   dates : "12/1999 to present&#160&#160&#160",
   location : "Ann Arbor, MI",
   description : "For more than 30 years FAAC has provided systems engineering and software products to the U.S. government and private industry. We take a hands-on approach to developing our solutions, conducting tactical land and air combat analyses, and developing analytical models and simulations. The result is turnkey training systems for the US military and their related industrial contractors. Our services encompass all stages of a job, from problem definition to conceptual innovation and final solution."
};

//Education data
var school = {
   name : "Univerisity of Michigan",
   degree : "Bachelor of Arts",
   dates : "07/1989 to 05/1995&#160&#160&#160",
   location : "Ann Arbor, MI",
   major : "Cultural Anthropology"
};

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

//Post name and role
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

//Post contacts
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

//Post skills
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%", bio.skills));

//Post employer info
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.title));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.dates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.location));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work.description));

//Post education info
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", school.name));
$("#education").append(HTMLschoolDegree.replace("%data%", school.degree));
$("#education").append(HTMLschoolDates.replace("%data%", school.dates));
$("#education").append(HTMLschoolLocation.replace("%data%", school.location));
$("#education").append(HTMLschoolMajor.replace("%data%", school.major));
