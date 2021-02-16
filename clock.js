function updateClock ()
    {
    var CurrentTime = new Date ();
var CurrentHours = currentTime.getHours ();
var CurrentMinutes = currentTime.getMinutes ();
var CurrentSeconds = currentTime.getSeconds ();

CurrentMinutes = (CurrentMinutes < 10 ? "0" : " ") + CurrentMinutes;
CurrentSeconds = (CurrentSeconds < 10 ? "0" : " ") + CurrentSeconds;

var TimeOfDay = (CurrentHours < 12) ? "AM" : "PM";
CurrentHours = (CurrentHours > 12) ? CurrentHours - 12 : CurrentHours;
CurrentHours = (CurrentHours == 0) ? 12 : CurrentHours;

var CurrentTimeString = CurrentHours + ":" + CurrentMinutes + ":" + CurrentSeconds + " " + TimeOfDay;
 
document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}
    
  
