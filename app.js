var mysql=require('mysql');
var restify = require('restify');
var builder = require('botbuilder');




var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  

var connector = new builder.ChatConnector({
    appId: '00e7b929-15c2-4ca1-a9f6-8c74e5a191ad',
    appPassword: 'h1MUTUwpCXnrfzgYqUjR1jz'
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//var intents = new builder.IntentDialog();
var model='https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/fb96e281-ac80-4feb-be5d-8f848c428069?subscription-key=c958236acb4848959cbea93d74973a03&timezoneOffset=0.0&verbose=true&spellCheck=true&q=';
var recognizer = new builder.LuisRecognizer(model);
var intents=new builder.IntentDialog({recognizers:[recognizer]});



var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12169643",
  password: "1vIIS4tapU",
  database: "sql12169643"
});


var ab,ba;


bot.dialog('/',intents);


function createHeroCard(session) {
    return new builder.HeroCard(session)
        /* .title('Bot')
        .subtitle('Your bots ')*/
        
        .images([
            builder.CardImage.create(session, ab)
        ])
        .buttons([
            builder.CardAction.openUrl(session, ba, 'know more')
        ])
    
    ;
}


   intents.matches('about', [
    function (session) {
    if(/area|extent|dimen|acre|square/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'about\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
        
        
        else if(/award|achie|accre|naac|nba/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'about\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        else if(/contact|phn|phon|mob|mail|web/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'about\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
                      
                       
                      ab='http://www.ajce.in/wp-content/uploads/2014/05/profile-amal-jyothi-header.jpg';
                      ba='http://www.ajce.in/contact-us/phone-book/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session)));  
                      
        
});
        }
        
        else if(/manag/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'about\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
                      ab='http://www.ajce.in/wp-content/uploads/2014/05/profile-amal-jyothi-header.jpg';
                      ba='http://www.ajce.in/amal-jyothi/management/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session)));   
                      
        
});
        }
        
        
        else{
                        
                  con.query('SELECT f1 FROM college where inten= \'about\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
                       ab='http://www.ajce.in/wp-content/uploads/2014/05/profile-amal-jyothi-header.jpg';
                      ba='http://www.ajce.in/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session)));   
                      
        
});
        }
        
    }    
]);



   intents.matches('location', [
    function (session) {
                     
                          
    if(/cs|computer/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        
        
        else if(/auto|ae/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        else if(/che/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        
        
        else if(/civil/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        
        
        else if(/ec|electronics/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        
        
        else if(/eee|electrical/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        
        else if(/it/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        
        
        
        else if(/mca|appli/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        
        
        else if(/mech/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        
        
        
        else if(/mt|met/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        
        
        
        else {
                        
                  con.query('SELECT f1,f2 FROM college where inten= \'location\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
session.send(res[0].f2);
                      
                      
                      ab='http://www.ajce.in/wp-content/uploads/2011/07/AJCE-Route-Map.gif';
                      ba='http://www.ajce.in/route-map/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session)));  
                  
                      
        
});
            
            
        }
        
     
    }    
]);



intents.matches('placement', [
    function (session) {
                     
                        
    if(/cs|computer/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        else if(/auto|ae/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        else if(/che/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        else if(/civil/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        else if(/ec|electronics/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        else if(/eee|electrical/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        else if(/it/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        
        else if(/mca|appli/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        
        else if(/mech/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        
        else if(/mt|met/i.test(session.message.text)){
                        
                  con.query('SELECT f8 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
       
        else {    
                        
                 
            
             ab=' http://www.ajce.in/wp-content/uploads/2014/12/placement-header.jpg';
                      ba='http://www.ajce.in/placement/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session)));  
                  
        }
        
        
        
     
    }    
]);



intents.matches('branch', [
    function (session) {
                      
                        
      if(/course/i.test(session.message.text)){
                        
                  if(/btech|b tech|b.tech/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'courses\'',function(err,res){
                    if(err) throw err;
    
                    session.send(res[0].f5);
                      
        
                    });
                }
        
        
                else if(/mtech|m tech|m.tech/i.test(session.message.text)){

                          con.query('SELECT f6 FROM college where inten= \'courses\'',function(err,res){
                        if(err) throw err;

                        session.send(res[0].f6);


                    });
                }




                else if(/mca|com.*app/i.test(session.message.text)){

                          con.query('SELECT f7 FROM college where inten= \'courses\'',function(err,res){
                            if(err) throw err;

                            session.send(res[0].f7);


                    });
                }
          
                else if(/pg|post graduat/i.test(session.message.text)){

                          con.query('SELECT f6,f7 FROM college where inten= \'courses\'',function(err,res){
                            if(err) throw err;

                            session.send(res[0].f6);
                            session.send(res[0].f7);


                    });
                }
          
                else if(/add|extra/i.test(session.message.text)){
                        
                        con.query('SELECT f4 FROM college where inten= \'courses\'',function(err,res){
                            if(err) throw err;
    
                            session.send(res[0].f4);
                      
        
                    });
                }

                else{
                        con.query('SELECT f5,f6,f7 FROM college where inten= \'courses\'',function(err,res){
                        if(err) throw err;

                        session.send(res[0].f5);
                        session.send(res[0].f6);
                        session.send(res[0].f7);


                    });

                }
        }
        
        
        else if(/dept|depart/i.test(session.message.text)){
                        
                  con.query('SELECT f9 FROM college where inten= \'courses\'',function(err,res){
        if(err) throw err;
    
        session.send(res[0].f9);
                      
        
            });
        }
        
        
        else if(/nos|number/i.test(session.message.text)){
                        
            if(/btech|b tech|b.tech/i.test(session.message.text)){
                        
                  con.query('SELECT f1 FROM college where inten= \'courses\'',function(err,res){
                    if(err) throw err;
    
                    session.send(res[0].f1);
                
                      
        
                    });
                }
        
        
                else if(/mtech|m tech|m.tech/i.test(session.message.text)){

                          con.query('SELECT f2 FROM college where inten= \'courses\'',function(err,res){
                        if(err) throw err;

                        session.send(res[0].f2);
                        

                    });
                }




                else if(/mca|com.*app/i.test(session.message.text)){

                          con.query('SELECT f3 FROM college where inten= \'courses\'',function(err,res){
                            if(err) throw err;

                            session.send(res[0].f3);

                    });
                }
          
                else if(/pg|post graduat/i.test(session.message.text)){

                          con.query('SELECT f2,f3 FROM college where inten= \'courses\'',function(err,res){
                            if(err) throw err;

                            session.send(res[0].f2);
                            session.send(res[0].f3);


                    });
                }

                else{
                        con.query('SELECT f1,f2,f3 FROM college where inten= \'courses\'',function(err,res){
                        if(err) throw err;

                        session.send(res[0].f1);
                        session.send(res[0].f2);
                        session.send(res[0].f3);

                    });

                }
        }
        
        
        
        
        else if(/special|only/i.test(session.message.text)){
                        
          con.query('SELECT f8 FROM college where inten= \'courses\'',function(err,res){
        if(err) throw err;
    
  session.send(res[0].f8);
                      
        
});
        }
        
        
        else if(/add|extra/i.test(session.message.text)){
                        
          con.query('SELECT f4 FROM college where inten= \'courses\'',function(err,res){
        if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        else{
                con.query('SELECT f1,f2,f3,f9 FROM college where inten= \'courses\'',function(err,res){
  if(err) throw err;
    
    session.send(res[0].f1);
    session.send(res[0].f2);
    session.send(res[0].f3);
    session.send(res[0].f9);
                    
                    
                    
               ab='http://www.ajce.in/wp-content/uploads/2014/12/courses_header.jpg';
                      ba='http://www.ajce.in/amal-jyothi/courses/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session)));  
                  
                    
                  
                      
        
});
            
            
        }
     
    }    
]);



intents.matches('bursar', [
    function (session) {
                      
     if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'bursar\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'bursar\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'bursar\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
        
     
    }    
]);






intents.matches('cs', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|manoj/i.test(session.message.text)){ 
                        
            ab='http://www.ajce.in/wp-content/uploads/2013/08/manoj-t-joy.jpg';
                      ba='http://www.ajce.in/amal-jyothi/courses/computer-science-and-engineering/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session)));  
                  
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
                      
        
});
        }
        
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
        
        
        
     
    }    
]);


intents.matches('auto', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|vijayan/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);



intents.matches('chem', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|sasi|shasi|sashi|shashi/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'chem\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);


intents.matches('civil', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|clara|rosary/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      
        ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);


intents.matches('ec', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|satheesh/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);


intents.matches('eee', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|thomas|/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);


intents.matches('it', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|sandhya|ramakrishnan/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);


intents.matches('mca', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|rubin|ruban|thottupuram/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);


intents.matches('mech', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|sreekumar/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);


intents.matches('met', [
    function (session) {
                      
                        
    
        if(/hod|head|dept.*head|samuel/i.test(session.message.text)){
                        
           
            if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
            
            else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
            
        }
        
        
        else if(/facult|staff/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/locat|where/i.test(session.message.text)){
                        
                  con.query('SELECT f7 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f7);
                      ab='http://www.ajce.in/wp-content/uploads/2015/05/campus_plan_amal_jyothi.jpg';
                      ba='http://www.ajce.in/campus-plan/';
                      
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session))); 
        
});
        }
        
        else {
                        
                  con.query('SELECT f9,f8 FROM college where inten= \'met\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f9);
session.send(res[0].f8);
                  
                      
        
});
            
            
        }
        
     
    }    
]);




intents.matches('principal', [
    function (session) {
                      
        
        if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'principal\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'principal\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
        
        
        else if(/spec|interest/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'principal\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        
        
        
        else if(/exp|work|job|empl/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'principal\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'principal\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
        
     
    }    
]);



intents.matches('fest', [
    function (session) {
        
        
        if(/arena|basket/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'fest\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        else if(/aspire|volle/i.test(session.message.text)){
                        
                  con.query('SELECT f6 FROM college where inten= \'fest\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f6);
                      
        
});
        }
        
        else{
                con.query('SELECT f2 FROM college where inten= \'fest\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
            
        }
        
     
    }    
]);




intents.matches('manager', [
    function (session) {
                      
                        
                  if(/cont|ph|mob|mail/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'manager\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        
        else if(/address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'manager\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
        
        else{
                con.query('SELECT f1 FROM college where inten= \'manager\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
            
        }
        
        
      
     
    }    
]);



intents.matches('dean', [
    function (session) {
                      
                        
                  if(/acad|cher/i.test(session.message.text)){
                        
                  con.query('SELECT f1 FROM college where inten= \'dean\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        else if(/resea|james/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'dean\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/admin|tom/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'dean\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
        
        else{
                con.query('SELECT f1,f2,f3 FROM college where inten= \'dean\'',function(err,res){
  if(err) throw err;
    
        session.send(res[0].f1);
        session.send(res[0].f2);
        session.send(res[0].f3);
                      
        
});
            
        }
        
        
      
     
    }    
]);





intents.matches('staff', [
    function (session) {
                      
               if(/cs|computer/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        else if(/auto|ae/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        else if(/chem/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        else if(/civil/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        else if(/ec|electronics/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        else if(/eee|electrical/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        else if(/it/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        
        else if(/mca|appli/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        
        else if(/mech/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        
        else if(/mt|met/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        
        
        else {
                        //LINK
                  
             ab='http://www.ajce.in/wp-content/uploads/2017/02/staff_page_header.png';
                      ba='http://www.ajce.in/faculty/';
                       session.send(new builder.Message(session).addAttachment(createHeroCard(session)));  
                  
            
        }
     
    }    
]);


intents.matches('fee', [
    function (session) {
                      
                        
    
        if(/host/i.test(session.message.text)){
                        
           if(/girl|women|woman|lad/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
            
            
            else if(/boy|men|man|gent/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        else{
                con.query('SELECT f4,f5 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
    session.send(res[0].f5);
                      
        
});
            
        }
            
        }
        
        
        else if(/btech|b tech|b.tech/i.test(session.message.text)){
                        
                  con.query('SELECT f1 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        else if(/mtech|m tech|m.tech/i.test(session.message.text)){
                        
                  con.query('SELECT f2 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f2);
                      
        
});
        }
        
        else if(/mca|com.*app/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
        
        
        else {
                        
                  con.query('SELECT f1,f2,f3 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
    session.send(res[0].f2);
    session.send(res[0].f3);                  
                  
                      
        
});
            
            
        }
        
     
    }    
]);


intents.matches('hod',[
    function (session){
        builder.Prompts.text(session, 'Which branch do you prefer to know?');
    },
    function (session,results){
    
         if(/cs|computer/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'cs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        else if(/auto|ae/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'auto\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        else if(/chem/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'chemical\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        else if(/civil/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'civil\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        else if(/ec|electronics/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'ec\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        else if(/eee|electrical/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'eee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        else if(/it/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'it\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        
        else if(/mca|appli/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'mca\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        
        else if(/mech/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'mech\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        
        else if(/mt|met/i.test(results.response)){
                        
                  con.query('SELECT f1 FROM college where inten= \'metallurgy\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
                      
        
});
        }
        
        
        
    }

]);



intents.matches('hostel', [
    function (session) {
                      
        if(/location|address|visit|meet/i.test(session.message.text)){
                        
                  con.query('SELECT f5 FROM college where inten= \'hostel\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f5);
                      
        
});
        }
        
        else if(/contact|phn|phon|mob|mail|web/i.test(session.message.text)){
                        
                  con.query('SELECT f4 FROM college where inten= \'hostel\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f4);
                      
        
});
        }
        
        else if(/mca|com.*app/i.test(session.message.text)){
                        
                  con.query('SELECT f3 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f3);
                      
        
});
        }
        
        
        else {
                        
                  con.query('SELECT f1,f2,f3 FROM college where inten= \'fee\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].f1);
    session.send(res[0].f2);
    session.send(res[0].f3);                  
                  
                      
        
});
            
            
        }
        
     
    }    
]);



/*

intents.matches('activity', [
    function (session) {
                      
                        
                  con.query('SELECT des FROM college where word= \'staffs\'',function(err,res){
  if(err) throw err;
    
  session.send(res[0].des);
                      
        
});
     
    }    
]);
*/

intents.matches('None', [
    function (session) {
                      
                 
  session.send("Sorry. I didn't get you. Could you ask me more clearly or something else please?");
                      

     
    }    
]);

intents.matches('greet', [
    function (session) {
                      
                        
          if(/good|great|awsom|nice|cool|ok|k/i.test(session.message.text)){
                        
                  ab='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDxAPEBAVEBAPGBcQFRAPFRcYFhYXFRcXFxUVFRgaHioiGBslIBgVITEiJSkrOi4uIyA4ODMuOCktLisBCgoKDg0OGhAQGislHyYtKy0rKy0tLjArLS0vLSsrNS0tKystLSsuLS0rLi0rLS0vLSstLS0tLS03Li0tKzAtLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECAwUGCAT/xABEEAABAwMBBQQFCQcDAwUAAAABAAIDBAURIQYHEjFBEyJRYRQycYGhIzNCUnKCkZKxFSRTYrLBwoOi0lSTwzRDY3Oz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwUEBv/EADARAAIBAwIFAgQFBQAAAAAAAAABAgMEERIxBRMhQVEycUJhgaEiIzOxwRSCkdHh/9oADAMBAAIRAxEAPwCcUREAREQBERAERCUARcJtLvVttI/sIS6vqieEQUY4+94Ofy5jGG8RHgtK2bau6atEVlpnajiHFUFpHUEEh3ujUNpbgk6srIoWGSaRkTBzfK4NaPaScLlLnvSsdOcOrmSO8IGvlH5mAt+K0dHuco3OEtwqqm4zYwXTSOa0/gS8fnXWW3Y2102OxoYGFvJ5ja5/53Zd8Vk6yRODkzvtt73FlPS1lSR/Dibj+vPwR29eoPzdhr3jxMbh+jCpHDQBgDAHQclQrGV1jsTpI4bvWqh69gr2jxDHn9WBHb66KMgVNDW0+TjL4mY+LwfgpGVrhlZ/1rXYnScnbt7FjnIaKwROPSdj2D3uLeH4rrbfcqeobx088c7PrQva8fi0laa5bMW+o+fooJD9Z0TOL3OAyPxXI1+6G2lwlpHz0ErdWvp5XEAn7eT+Dgrxvod1gjSyUUUTNp9qrb8zURXiBuPk6gcM2OpySCTj+d3s8dpYd7lFLJ6PXxSWup0yyrBDMn+cgcP3w0eZXphVhP0vJDWCRUVsUjXNDmuDmuGQ5pyCDyII5hXLQgIiIAiIgCIiAIiIAiIgCIiAIijLavb+oqKk2qxME9UciWr5xU45E55Ejq46A4ADicA3gHR7a7e0NraGyuMtS8dykhwZHZ0BP1G+Z564B5Ljm2K+X7v3KV1st7tRQwaSvaf4meXT1+o9QLotiN3VPQO9Jnca24P7z6ufLiHHn2fFkj7R1OuoBwu2WEquekScGk2a2ToLczhpKdsZIw6Q96R32nnU+zl4BbtVVFTHkkKhQq0lYVJJEoFUVEXjlIsUKoVVFk5AtIVhCyK0rNskxELV3yxUlbH2VVAyZvTjHebnqxw1afMELbEKxwWepp5RJF79lLrZ3GayVJnp88TrbVHiac8+A6D8OE6c3cl1mxW8ikuDvRpWuoq9vddSVGhLhzEZOOL7JAPPTAyugcFy+2OxVJcm5kHZVDR8nVRDEjcagH67fI+4jmuhb8RkulTqvPco4eDvkUSWDbestM7LdfMvhd3YLoMlrhyAlPXzJ1GnFkHiUsxvDgHNIc1wBBByCDyIPULsRkpLMX0My5ERWAREQBERAEREARFGO8jaWpqaltgtZ/eZx+81A5QRH1gSORwck9AQBku0hvHVg+XavaaqvFU+zWd/DCzSsuA9VreRYwjmOY01ccgYaC49zsnsxS2ynFPTMwOb5HevI76zz1PlyHRNkdmqe2UrKWnboO8+Q+tI883u8/0GAt2AvHKo6j6bFsYKhVAQBVK1jHCyyCioSqEqwuWNWqkSkVJVuVTKoudOpkvgrlFRUWTkSVRUyio2AiZVFm2SUIVjgshVhCzbJMRCsIWYhWEKAau9WmCrhfT1EYkifzaeh6OaebXDoQuBst5qdm6llFWvdPZ53YgqiMupydeF2Oni3w7zfpNUnOC194tcNVBJTzsEkUow5p+BB6OB1B6Fey1upUZfLuiso5Omika9rXtcHNcA5rmnIIOoII5gq5RBsPep7LXNslc8vpJjmhq3chk6ROPgScY+i7HRwIl9fRQkpJSWxiERFYBERAERUc4AEk4A1JPRAcnvK2uFroi9gD6uc9jTRcy55+ljmQ3OfM8I6r492OyBt9M6Wcl9fWHtqiVxy4Odr2eeuCSSeriTnGMc1sq39u3qa7SDiobc7sKNjuTpB3u0weoyH8s5dH9VSyF4688vQvqWSKgK4KiEpHEUCpKtLlaXKwlY1rjBKRUlc/tHtlbbe5rKyqbE9+oYA578fWLWAkDQ6kdFsL3cmUlNPVSasp43SkDmeEE8I8zyXkC8XOarqJamd3HLM4vcfbyA8GgYAHQABY29J123J9ES3g9h224wVMTZ6eVs0T9WvjOQfEeRHIjovpXnTcRtK+nuHoTnHsK3IDSdGytBLXDwyAWnHPu+C9FLzXNN0Z6SU8lVREXl1FgioijIC198vtJQxdtVzNhjzgF2SSfBrRkuPkAVsF5Z3qbSvuFzmPETBTuMELc6cLDhzx5uIJz4YHRei1t+fPD2W5Eng9IbPbTUVwY59HUNmDNHAZa5uc44mOAcAcHBI1wcLbFeRtidopLbXQVTCeFpDZWj6cTiO0bjrpqPMA9F64Y8OAIOQRkEdQeRUXlryJLGzEZZKEKxwWQqwheMsYiFjcFmIWNwVgc3ttszFcqR9O/uvHfil6skHI/ZPIjw88KzdNtZLVQyUFbltxt57KQPPekYO62TzPQnXOhz3l0Tgo43h08luq6a/wBK3vQObFVMboJInYYC74MzrrwH6K6nD7jTLlvZ7e//AEzmu5MiL57dWx1EMVRE7iima2RjvFrhkezmvoXbMwiIgCj/AH0Xx8FvFHBrVXNwpI2NxxFrsCTGfEFrPvhSAongP7U2rlk9amsjOzbg5aZ3ZByOhDjJ742qk5aYuQR3WyNiZb6Gno2YPYtw5w+m86yP18XEnHQYHRblWhCVy+Z3ZpguJVhKoSrSVjUr+CUipKoqIvJKWSTg999SWWSoAOO1fFHp4do1x/pXmRelt+kJdZZXfw5Inn3u4P8AILzSuzw79J+/+jOe5sdnKnsa2km/hTRSfle0/wBl7GXjWywGSqp4xzkljYPvPA/uvZS83FN4/UtAoiIuRk0CIijIPjvNV2NLUTfwYpJPyMLv7LxqvYu0dN2tFVxDnLDLH+aNw/uvHS7XCsaZfQzqBett39SZbTb3k5PYRtJPMlrQ0k/gvJK9ZbuISyz28HrAx/5xxD9Vbiv6cfciG50itKuVpXCNTGVY5ZCrCpBhcvjuNHHPFJBKOKOZro3Dxa4YPsPmvtcsT1dPBBxm5W4SQGtsdQ7MtveXxE6cULzkkDwy5rv9QKUlDW2Uv7NvNsu4PDFK70KpJOG8LtA53jhpcf8ATaplX09vV5lNSMWsMIiLYg+S7VzKannqX+pBG+Z3sY0uP6KO9xtG4W6WtkPFNcZ5J3PxgkNcWa/eEh962++mvMFjq8HDpuCAex72h4/LxrbbI0Ho1vo6frFDG132uEcZ/HK8F/U0wS8loo3OVQlUVFx3Ns0KqiIqNkhURFRsGp2ts4rqCqpDjM0bmtLuQeO9GT7HBpXkOeFzHuY9pa9hLXNcMEEHBBHQgr2kuB2y3VUNxnNTxvppn/OGIAtf/M5p5O8x78r3WN3GjmM9mVlHJEO5mxOq7tC8tzFR/vL3dAW/NDPjx8Jx4A+C9OLR7I7K0trg7Cmae8eJ8jzl8juWXHy6AYA95zvFheXHOqZW3YmKwgiIvKWCIigFF5H24sTqC4VNKW4ax5dHzwYnd6Mg9dCAfMEdF65XLbb7C0d2azt+KOaLIZPFjiAOpa4HRzc64PLXBGTn22VyqM3q2ZWSyeYbDapKyqgpYh353hgOM4B9Zx8gMk+QK9hUlO2KNkTBhkbWxtHg1oAA/ALk9ht3VFai6WMumqHjh7aXGWt6tYBo0HrzPmuxVr66VaSUdkIxwFQqqoV4CxYVjKyFWFSDG5YXLM5YnqyIOP3o2z0m01TfpRN9IafAxd53+3jHvXWbvbv6baqKpJ4nPia15PV8fych/M1yxVEQe1zHateC0jyIwVy+4OZzaCqo3nLqKpki9jSGn+oSLtcMnmMomcyTkRF1ChF+/pva01upf+orI2nHhwvb/mFIYUcb5Hk3HZyPo+ryfuy0wH9RUjBcficvxRXuaQL1RAqLlZLlVREUZAREUEhERQAiIoAREQBERAEREAREQBUKqrSgLSrHK9yxuUgscsT1lcsT1ZEGF64zdUOyvW0EA5PfHOB9oyOOP+4F2b1w2xEhG1t2j6OpmPPtApf+RXT4Y/zGvl/KKT2JcREXbMyKt8jCLjs5J0ZV4PvkpiP6SpFBUf7+3dlS26q/6esjcceHC93+AXfgri8VX4ov3NIGQFFQKq5OTQIiIAioStVYtpaGuDjSVLJuD1mtPeGuMlpwQPA4wVKi2s4BtkRFUBERAEREAREQBERAEREBRUK+O93WGjp5KmclsUQy4ta5x1IA0aM8yPZ1Wv2S2oprpTmppuINDnRuZIAHtI5cQBI1BBGvVX0S06sdAblyscrirCqgscsT1kcsTlZEGJ64fYdhO1t2kHJtMxh9pFL/AMCu2eVx+6k9rer/AD9GPjgB+yZGn/8AMLp8MX5jfy/lFJ7ErIiLtmZw++mgM9jq8DLoeCcexj28Z/LxrYbJV/pNBRz9ZYY3O+1wgPH4gre3ahZU089M/wBSeN8LvY9paf1Ua7k6x37PlopBwy2+aSBzc6gOcX6/eMg9y5nFIZpqXh/uXg+pIwVwWMFXgrgmpVF8N7u0FHTyVVQ4shiALnNa5xGSGjRoJ5kBQxtBvOuF1k9Bs9PJGJNC9uO3c3QE5Hdhbrqcnp3hyXoo206vVbd29iG8G53wbf8AC11poXdpUTfJTPj7xYHaGFmOcjuR8Bkcz3em3U7G/sui+VA9LqcSTcjw4HciyOfDk58yeYwoTu1grtnayiqX8LnaTNczVhc04khJI54IBPg7Rek7HdYqymhqoDxRztDx4jo5p8wQQfMFeu6iqVGMafWL3fllY9X1PvREXMLhERAEREAREQBERAERUKAxVdOyWN8UjQ+ORpY9juTmuGHA+RBUAvZV7KXQuAdNb6nT/wCyMHIBPISsyfb5By9AlQJvOu8t5u0NpozxRwvMeR6rpde1kPi1jQR7n4zle+wy5OL9OOpWRNNlvFPWwMqKaQSRP6jmD1a4c2uHgV9bioKuOx94sEzqq2yOqKc+vwNyeEH1ZodeIanvN5anurv93G3RuzJeKnMMlOG8b2nMTi7OOHOoOhONfaq1bZKPMpvMfuvcKXZnYuKxOKvcVheV5kSYZ5Qxrnu0awFxPkBkrm9wUDnUFVWPGHVtTJJ7WgNH9RkVm825+j2qqd9KVvo7R4mXuu/28Z9y7Dd7aPQrVRUxHC5kTXPB6Pk+UkH5nOXZ4ZDEZS+hnM6FERdQoFEnB+zNqpWY4aa9s7RuBhombknJ6kuD/wDuBS2o/wB9NifUW8VcGlVbHelxubjiDW4MmM+ADX/cCzrU1Ug4PuSnhnWgq8FaTZS+Mr6KCrZgds3Lmj6LxpIz3OBHmMHqtwCvlJRcW0zcsuFFHUQywSt4opmuje3llrhg6jUc+YWCy2SloouxpYGQR9QwauI0y9x1efMklfaCrgU1PGM9AaPbPZqG50clLL3Se9HJjJjkGeF48eZBHUEhRDu12llsldNabkeyhc/Ac71YpDyeD/DeMa8hodO8p7XCb09g23SDtYgG1sAPZuOnaN59k4/iQTyPgCV6ratHDpVPS/s/JVrujulVQLuy3mPoXC23PiEMZ7JkrweOnLTgxSDmWA6eLeXLHDO0EzJGtexwex4DmvYQWuB1BaRoQfFZV7edGWHt2fklPJkREWBIREQBERAERUQBUKKM95u9COha+lo3NlrT3XP0cyDxJ6Ok8G9OvLhOtKlKrLTFEN4Kb3t4LaKN1DSvzWStw9zT8wxw556SEch0Gundzdud2K9ApvS524q6po7rhgxRHUM8nO0J9w6Fcvum2EkqZRd7gC5pd2sLJcl0zyc9u/P0c6jPrHXkO9NhK9deUaUOTT/ufn5ELr1ZQlfLFTRsL3MjawyHjeWNAL3YA4nY9Y4AGSs7isbivEiS1xWBxV7yvjr6yOCKSeU8McLXSOPg1oyfafJWSyDiNrov2lebZaQOKKJ3plSCMt4W6hrvDLQ4f6gUzqLNyluknNZfKhuJbg8siB14YWHUA+GWhv8AphSmvpqFLl01ExbywiItiAqOaCCCMg6EHqqogIb2db+wrzNapDw0NxPb0b3cmvOnZ5PU4DOectj+spPBWn3l7IC6URYwhlXAe2p5eRa8c256B2MeR4T0Wm3cbVmvp3RTgsrqM9jURvGHcTdO0x0yQQR0cD5Z43ErbD5sfqaQfY7MFXgrCCrwVyDQygquVjBVQVAOB3mbtYbmDUwcMNc0esdGzADAbJ/MOQd4aHIxiIdnNsLpYZ3U0jHcDHfKUdRnHPV0Z+jnmHNyDnODovTuVotrNkaK5xdnVR5c3PBMzSRmfqu8PI5Hkvfb3ijHl1VmP7FXHujW7J7ybbcA1rZewnOno9QQ1xPgx3qv9xz5BdivNe126S40Rc+Bpraca8UI+UaP54+Z9rc+eFpbFt7dqDDIqp/AzTsZ++0Y04QH5LB9nC2lYQqLVQl9GRqxuerkUE23fxUtAFRRRyn60L3R/Bwfr71v4d+1AR36Woaf5Ozd+rgvNKwrx+EnUiV0UVv36W3pTVRPm2If+QrUV+/kaiCg9jppf1a1v+ShWNd/CNSJqytNtFtRQ29nHV1DIs6iPnI77LB3j7cYHVefb1vZvFSC0TtpmkYLaRvAfzkl49zgvg2d2Iul0f2rI3cDzl1XUkhhz14jrJ90FemPDtK1VpJIjX4Ok233v1VWHQUIdSQO0L8jt3jwyNIx5NJPn0Wy3bbp3OLKy5s4WDDo6Nw1d1Dph0b/ACcz1wND2+xO7SitpbM795qx/wC/INGH/wCJnJv2jk+YzhdqSq1buEI8ugsLz3YUe7HLTkBpgKxxQlY3OXPLhxWJzlVzlhcVZEFHFR9t9NJcaumsFK7vTObLVPGvZxN7wDvdh+NNeAfSXSbZbSRW2kfUP7zz3Io+r3nkPYOZPh54WXdLsnLSQyV9bl1wuHykheO9Gw95sfkepGnQY7q6fD7fVLmPZbe5Sb7HcW6ijp4YqeJvDFC1sbG+DWjA9vJfQiLtGYREQBERAFF+8vZiop6ht+tg/eYB+8wAaTxDm7A5kAYI6gAjBbrKCKJJSWGDj9ltoqe40zKmB2h0ew+tG/qx3n59RgrcgqO9sNlaq01L7xaGcUL9ay3j1XN5l8YHTmdNWnJGWkgdTsvtJTXGAVFO/I5PjPrxu+q8dPbyPRfPXdo6LyvSbRlk3oKuBWEOVwK8RYy5VcrFlVyoBlytLfdlLfXZ9KpY5XHTtMcMmByHaNw7HllbbKZUxk4vKeARfdNx9vfxGnqJoCeQdwyMHsGjse1y0U24iYepcI3fbhc39HFTblMr1Rvq8fi/YrpRB0e4mo+lXxD7Mbz+pC2tv3FUzf8A1FdLJ5Qxtj+Li9S3lUypd/XfxfZDSjmbJu+tNGQ6KkY94we0nzI7I5EceQ0+wBdOSrS5Wly80pym8yeSS4lWFytLlYXKMAuLljc5Uc5YyVOAHFfDdrlDSwyVE7wyKMZLj8AB1J5AKl3ukFJC+oqJBHEzmT1PRrR1cfALi7DY6naOoZW1rHQWiB2YKYnDqgjTidjp4u+636Tl67a1lWfy7siUsH0bCWOa81rb3XMLKSE4oqV3I4Okrh4AjOfpOx0aAZhVsUbWNaxrQ1rQGta0YAA0AAHIBXL6CMVFKK2MQiIrAIiIAiIgCIiAKMNr93s8NQbpY3CCqGTLScopxzIA5Anq06E4ILSMmT0UNJrDBGmx+3sFa70aZpo69h4X0s2WkuHPs+LBP2TqNeeMrrw5fDtrsFQ3VvFK0xVLR3KqHAkbjUA/Xb5HlrgjmuDkuN7sfduETrlQN0FbBrIxo5dpnXw9fqfXK5Fxw5r8VL/Bop+STA5V4lotn9qKKvbxUs7ZCNTHykb9ph1Ht5ea2/EuVKLi8NFzPxJxLDxJxKMAzZVOJYuJOJMAy8StLlj4lQuTAMhcrC5WFytLlOAXlysLlaStdeb1S0cfaVMzIW9OM6ux0a0auPkAVZRbeEDYErnNrdsaW3NxIe0qHfN0sesjidBn6rfM+4HktA3aK63dxis1MYYM8LrjVDhaPHgGo/DiOvJvNdnsVu2pLe70mRxrK53edV1GpBPPswc8PtJJ564OF0rfh7fWp0XjuUc/BzGzmwtZdJ2XG+ZZE3vQWwZAaOYMo6ebTqdOLAHCpbjYGgNaA1rRgADAAHIAdArkXXjFRWFsZhERWAREQBERAEREAREQBERAEIREBwe026m21b+3hDqCpB4hNR90cXi5nLmc5bwk+K519s2otujTFeKdvLJ4Zw0Drkgk++RS8izqUoVFiSySngh6n3p0rHCKvpqi3y4yWzRuIHwD/wDault+1luqMdlWwuJ5NMga78rsH4LtaukimYY5o2SsPNkrQ5p9oIwuUue62x1By6hZG7xgc+IflYQ34LxT4bTfpbRbWz7mvyMjUeI1CZXKO3I25ri6CqrKcnpHKzH9GfirXbo5h83fK5g83uP6PCwfC32l9idZ1mVQnquTbujnPr32ucPAOcP1eVcdyVC8g1FbWz4OcPlZj4sJ+KLhb7y+w1m2r9o6GD56rhjP1XSN4vy5yfwXMVm9Kg4hHSsnrpXaNZTxu1P3sH8GldVbt09jgIcKMSuHWd73j3tLuH4LrbfbaenbwU8EcDPqwsawfg0Bbw4bTXqbZGtkURM2ouOOyp47TA7HylQczY690gkHHixvt8N5YN0VDE8VFdJJc6nTL6okx5H8hJ4vvlw8gpFRe2nRhT9KwVbbLYo2taGtaGtaMBrRgADkAByCuRFoQEREAREQBERAEREB/9k=';   
              ba='';
                  session.send(new builder.Message(session).addAttachment(createHeroCard(session)));
        }
        
        
        else if(/bad|sorry|sad/i.test(session.message.text)){
                        
                  ab='data:image/jpeg;base64,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';   
            ba='';
                  session.send(new builder.Message(session).addAttachment(createHeroCard(session)));   
                 
        }
        
       
     
    }    
]);