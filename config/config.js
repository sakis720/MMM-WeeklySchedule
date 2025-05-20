/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
		/* Positions
		top_bar, 
		top_left, 
		top_center, 
		top_right, 
		upper_third, 
		middle_center, 
		lower_third, 
		bottom_left, 
		bottom_center,
		bottom_right, 
		bottom_bar, 
		fullscreen_above, 
		fullscreen_below
		*/
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "el",
	locale: "el-EL",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "celsius",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		/*
		{
			module: "calendar",
			//header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		*/
		{
    	module: "MMM-WeeklySchedule",
   		position: "top_left",
   		header: "Σχολεικό Πρόγραμμα",
    	config: {
        	schedule: {
            	timeslots: [ "8:20", "9:10", "10:05", "10:55", "11:50", "12:40", "1:25" ],
            		lessons: {
               				mon: [ "test1", "Defense against the Dark Arts", "Lunch Break", "Transfiguration", "test5", "test6", "test7" ],  
               				tue: [ "test1", "Lunch Break", "Charms", "History of Magic", "test5", "test6", "test7" ],
               				wed: [ "Arithmancy", "Divination", "Lunch Break", "Muggle Studies", "Herbology", "test6", "test7" ],
              			    thu: [ "Care of Magical Creatures", "Care of Magical Creatures", "Lunch Break", "Transfiguration", "Charms", "test6", "test7" ],
              				fri: [ "Potions", "Herbology", "Lunch Break", "Charms", "Defense against the Dark Arts", "test6", "test7" ],
              			    // no entries for saturday
        }
        },
        updateInterval: 1 * 60 * 60 * 1000, // every hour
        showNextDayAfter: "23:00"
    }
},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				showHumidity: "temp",
				lat: 40.755713, //γεωγραφικό πλάτος(σχολείο)
				lon: 23.077087 //γεωγραφικό μήκος(σχολείο)
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo", //service
				type: "forecast",
				lat: 40.755713, //γεωγραφικό πλάτος(σχολείο)
				lon: 23.077087 //γεωγραφικό μήκος(σχολείο)
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "School News",
						url: "το rss του σχολείου θα μπει εδώ"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
