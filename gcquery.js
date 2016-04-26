/*
 * Thomas Simpson
 * Simple jQuery plugin to pull a single day's events from a google calendar.
 *
 * Helpful Links:
 * https://developers.google.com/apis-explorer/?hl=en_US#p/calendar/v3/calendar.events.list
 * https://console.developers.google.com/apis/api/calendar/overview
 *
 */
(function( $ ) {
	$.extend({
		getGCalEventsForToday: function(apikey, calid, options) {
			var defaults= {
				parse: true,
				success: function(){},
				error: function(){}
			};

			var settings= $.extend({}, defaults, options);

			var now= new Date();
			var tmin= new Date(); tmin.setHours(0);tmin.setMinutes(0);tmin.setSeconds(0);
			var tmax= new Date(); tmax.setHours(23);tmax.setMinutes(59);tmax.setSeconds(59);
			var url= 'https://www.googleapis.com/calendar/v3/calendars/' + calid+ '/events?key=' + apikey + '&timeMax=' + tmax.toISOString() + '&timeMin=' + tmin.toISOString();
			$.ajax({
				type: 'GET',
				url: encodeURI(url),
				dataType: 'json',
				success: function (response) {
					if(!settings.parse){
						settings.success(response);
					} else {
						var results= [];
						for(var i=0; i < response.items.length; i++){
							var item= response.items[i];
							results.push({
								summary: item.summary,
								start: new Date(item.start.dateTime),
								end: new Date(item.end.dateTime)
							});
						}
						settings.success(results);
					}
				},
				error: settings.error
			}); // ajax
		} // getGCalEventsForToday
	}); // extend
}( jQuery ));

