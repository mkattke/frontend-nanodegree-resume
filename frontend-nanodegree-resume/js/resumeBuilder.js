 var DATA = '%data%';



 var bio= {
    name: "Melissa Kattke",
    role: "SharePoint Developer",
    contacts:{
        mobile: "571-888-0405",
        email: "mel_kattke@yahoo.com",
        GitHub: "mkattke",
        location: "Washington DC"
    },
 welcomeMessage: "Polished, professional and dedicated SharePoint Developer" +
                 "specializes in customizing SharePoint websites for " +
                 "government clients.",
    skills: ["SharePoint 2013", "SharePoint 2010", "HTML", "CSS",
            "JavaScript", "jQuery and BootStrap"],
    bioPic:"images/Mel.png",
    display: function() {
        var formattedName = HTMLheaderName.replace(DATA, bio.name);
        var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

        var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

        var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

        $('#header').prepend(formattedName + formattedRole);
        $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
            formattedGithub + formattedLocation);

        if (bio.skills.length>0){
            $('#header').append(HTMLskillsStart);

        var i = 0;
        for (i=0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

            $('#skills').append(formattedSkills);
        }
    }
 }
};


var work={
    jobs:[
    {
        employer:"BAH",
        title:"SharePoint Developer",
        location:"Washington, DC",
        dates:"Jan. 2017 - present",
        description:"Provides SharePoint support to gov't client with administrative and development skills."
    },
    {
        employer:"Xgility",
        title:"SharePoint Site Administrator",
        location:"Ashburn, VA",
        dates:"Jan. 2015 - Aug. 2016",
        description:"Administrated intranet site using SharePoint artifacts, customized lists, libraries, groups and made metadata easily identifible."
    },
    {
        employer:"Randstad",
        title:"Contracted Document Processor",
        location:"Herndon, VA",
        dates:"April 2014 - Aug. 2014",
        description:"Inspected inbound documents to facilitate student enrollment."
    },
    {
        employer:"Cordia Partners",
        title:"Contracted Financial Assistant",
        location:"Herndon, VA",
        dates:"Oct.2013 - Jan.2014",
        description:"Analyzed government contracts to ensure full compliance with contract terms and documented events."
    }
  ],
  display: function(){
    if (work.jobs.length>0){
        for(i=0; i < work.jobs.length;i++){
            var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
        }
     }
   }
};

var projects={
    projects:[
    {
        "title":"Animal Card",
        "dates":"June 2017",
        "description":"Card that describes a breed of dog.",
        "images":["www.google.com", "www.github.io"
     ]
   },
   {
        "title":"Commercial website",
        "dates":"August 2017",
        "description":"Advertises chiropractic and massage services",
        "images":[]
   }
  ],

   display: function() {
    if (projects.length > 0) {
      for (i = 0; i < projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (j = 0; j < projects.projects[j].images.length; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

var education={
    schools:[
    {
        "name":"University of Delaware",
        "city":"Newark, DE",
        "degree":"Bachelor of Science",
        "majors":"Nutrition",
        "dates": "2003",
        "url":"www.udel.edu"
    },
    {
        "name":"The Learning Tree",
        "city":"Reston, VA",
        "degree":"certificate",
        "majors":"SharePoint 2010",
        "dates": "2013",
        "url":"www.learningtree.com"
    }
  ],

  onlineCourses:[
    {
       "title":"Front-End Web Development",
        "school":"Udacity",
        "dates": "2017",
        "url":"www.udacity.com"
    }
  ],

 display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (i = 0; i < education.schools.length;i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (j = 0; j < education.schools[j].majors.length;j++) {
          var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (k = 0; k < education.onlineCourses.length; k++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};


bio.display();

work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);



function locationizer(work.obj){
    var locationArray = [];

    for(job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));
/*

//$('#main').append(internationalizeButton);
//$("#mainDiv").append(googleMap);

/** For-in Loops not working when I see the index.html in the browser
for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace
    ("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace
    ("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer+
    formattedTitle;

    $(".work-entry:last").append(
        formattedEmployerTitle);

    $ formattedDates=HTMLworkDates.replace
    ("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(
        formattedDates);

    var formattedDescription=HTMLworkDescription.replace
    ("%data%", work.job[job].description);
    $(".work-entry:last").append(
        formattedDescription);
}*/



/**projects.display = function (){
    for (project in projects.projects){
        $("projects").append(HTMLprojectStart);

        var formmatedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length>0){
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formatedImage);
            }
        }
    } **/