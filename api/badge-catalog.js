

export default async function handler(request, res) {
  const search = req.query.search || '';
    const catalog= [
      {
      "titleIcon" : "save",
      "title": "Amazon Cognito",
      "paragraph":"",
      "author":"Ryan",
      "timeToComplete":2.8,
      "opened": false,
      "collapseIcon": "arrow-drop-up",
      "stepsToComplete":"Creating your first lambda function 2.0 hours" + "\n Putting in your Hello Lambda Node.js code 2.0 Hours",
      },
      {
      "titleIcon" : "save",
      "title": "Amazon I AM",
      "paragraph":"",
      "author":"Ryan",
      "timeToComplete":2.8,
      "opened": false,
      "collapseIcon": "arrow-drop-up",
      "stepsToComplete":"Creating your first lambda function 2.0 hours" + "\n Putting in your Hello Lambda Node.js code 2.0 Hours"
      },
      {
      "titleIcon" : "save",
      "title": "Signing Up For AWS Services",
      "paragraph":"This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.",
      "author":"Ryan",
      "timeToComplete":2.8,
      "opened": false,
      "collapseIcon": "arrow-drop-up",
      "stepsToComplete":"Creating your first lambda function 2.0 hours" + "\n Putting in your Hello Lambda Node.js code 2.0 Hours"

      },
      {
      "titleIcon" : "save",
      "title": "AWS- LAMBDA Phase 1",
      "paragraph":"AWS Lambda is an event-driven, serverless computing platform provided by Amazon" 
      + "as a part of Amazon Web Services. It is a computing service that runs code in response to events" +
      "and automatically manages the computing resources required by that code  \n ",
      "author":"Ryan",
      "timeToComplete":2.8,
      "opened": false,
      "collapseIcon": "arrow-drop-up",
      "stepsToComplete":"Creating your first lambda function 2.0 hours" + "\n Putting in your Hello Lambda Node.js code 2.0 Hours"
      },    

    ];
    catalog.map((badge) => {
      badge.index = badge.title.toLowerCase() + " " + badge.author.toLowerCase() + " " + badge.paragraph.toLowerCase()+" "+
      badge.stepsToComplete.toLowerCase()+" "+badge.timeToComplete.toString().toLowerCase();
    });
    catalog = catalog.filter((badge) => {
      return badge.index.indexOf(search.toLowerCase()) > -1;
    });
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(catalog);
  }
  