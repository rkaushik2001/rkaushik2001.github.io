$(document).ready(function(){
   var url= "https://api.covid19india.org/data.json";

   $.getJSON(url,function(data){
       console.log(data);

       var total_confirmed,total_active,total_recovered,total_deaths;

       var states=[];
       var confirmed=[];
       var recovered=[];
       var deaths=[];
       var active=[];

       $.each(data.statewise,function(index){
           states.push(this.state);
           confirmed.push(this.confirmed);
           recovered.push(this.recovered);
           deaths.push(this.deaths);
           active.push(this.active);

           $("#tablebody").append(
               "<tr>"+
               "<td>"+this.state+"</td>"+
               "<td>"+this.confirmed+"</td>"+
               "<td>"+this.active+"</td>"+
               "<td>"+this.recovered+"</td>"+
               "<td>"+this.deaths+"</td>"
           );
       });
       
       total_confirmed=data.statewise[0].confirmed;
       total_active=data.statewise[0].active;
       total_recovered=data.statewise[0].recovered;
       total_deaths=data.statewise[0].deaths;

       $("#active").append(total_active);
       $("#recovered").append(total_recovered);
       $("#confirmed").append(total_confirmed);
       $("#deaths").append(total_deaths);
       


   });
   
});