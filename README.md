This simple jQuery plugin will grab the events for today from a public google calendar.

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


