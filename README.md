This simple jQuery plugin will grab the events for today from a public google calendar.

It would be very easy to extend it for different time periods. I'll do that if someone asks me 
to or if I end up needing to do it myself.

I use it read specials and other sschedules events for businesses. They can just manage one or 
more Google Calendars and I can pull that information and put it on their web site. This way
they don't have to modify multiple information sources.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="gcquery/gcquery.js"></script>

<script>
var apikey = ''; // get an API key from https://console.developers.google.com
var calendarid = '5jpmv52i6sgbrti7r9bkp8dg9g@group.calendar.google.com';

$(document).ready(function() {
	$.getGCalEventsForToday(apikey, calendarid, {
		success: function(items){
			console.log(items);
		},
		error: function(r){
			console.log("Error", r);
		}
	});
});

</script>

```

Call `$.getGCalEventsForToday` with your apikey, the calendarid, and options. Success is the only option
that is really required. If you want the raw (unparsed) results, pass "parse:false" as an option. To see
other options, just review the source code. If it very simple.


