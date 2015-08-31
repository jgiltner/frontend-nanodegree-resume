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
   welcomeMsg : "Hello, world. Thank you for taking the time to look at my resume. I manage post delivery service and support for the Vehicle Simulator Division and BOSS Project group at FAAC Incorporated.",
   skills : ["TCP/IP Networking", "Linux", "Windows 7", "Computer Hardware", "RAID", "Personnel Management", "Customer Relations", "Customer Service", "BASH", "Technical Writing", "Cost Analysis", "Issue Tracking"]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%", bio.skills));


