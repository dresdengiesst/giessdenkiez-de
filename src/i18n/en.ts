import { Content } from "./content-types";

export const en: Content = {
	map: {
		attribution: {
			mapbox: {
				href: "https://www.mapbox.com/about/maps/",
				label: "© Mapbox",
			},
			openStreetMap: {
				href: "https://www.openstreetmap.org/copyright",
				label: "© OpenStreetMap",
			},
			improve: {
				href: "https://www.mapbox.com/map-feedback",
				label: "**Improve this map**",
			},
			feedback: {
				href: "https://citylabberlin.typeform.com/to/kCdnCgvC#product_id=GdK",
				label: "Feedback",
			},
			imprint: {
				href: "https://www.dresdengiesst.de/impressum/",
				label: "Imprint",
			},
			privacy: {
				href: "https://www.dresdengiesst.de/datenschutz-app/",
				label: "Privacy",
			},
		},
	},
	locationSearch: {
		placeholder: "Search for an address",
	},
	legend: {
		title: "Legend",
		greenTrees: "No water requirement",
		yellowTrees: "Moderate water requirement",
		orangeTrees: "Critical water requirement",
		grayTrees: "Not matching the filter settings",
	},
	navbar: {
		map: "Map",
		profile: {
			sidebarLabel: "Profile",
			title: "Your profile",
			overview: {
				subtitle: "Your overview",
				irrigations: "Waterings",
				liter: "Liters",
				adoptedTrees: "Adopted trees",
			},
			adoptedTrees: {
				subtitle: "Adopted trees",
				irrigationTimes: "Times",
				irrigationAmount: "Liters",
				showAll: "Show all",
				showLess: "Show less",
				noAdoptedTreesMessage:
					"If you regularly water a tree, you can adopt it. Your adopted trees will appear here in your profile overview.",
			},
			settings: {
				subtitle: "Profile details",
				username: "Username",
				yourUsername: "Your username",
				editUsername: "New username",
				placeholderUser: "Your username",
				email: "Email",
				yourEmail: "Your email address",
				editEmail: "New email address",
				placeholderMail: "xyz@example.org",
				updateEmailEmailSentTitle: "Email sent!",
				updateEmailEmailSentMessage:
					"We have sent a confirmation link to your new email address. Please check your inbox!",
				password: "Password",
				changePassword: "Change password",
				newPassword: "New password",
				passwordChangeConfirmationTitle:
					"Your password was changed successfully!",
				passwordChangeConfirmationMessage:
					'Click "OK" to return to your profile.',
				passwordChangeWithoutRecoveryLinkTitle:
					"An error occurred.",
				passwordChangeWithoutRecoveryLinkMessage:
					"Note: This page can only be accessed if the password reset link in the email was clicked before.",
				passwordChangeWithoutRecoveryLinkLinkLabel: "Back to homepage",
				pleaseWait: "Please wait a moment...",
				deleteAccount: "Delete account",
				confirmDelete: "Delete",
				approve: "Done",
				checkInput: "Please check your input",
				usernameShould: "Your username must: ",
				usernameLength: "be 3-50 characters long",
				onlyNumberAndLetters: "and only contain letters or numbers",
				usernameTaken: "This username is already taken",
				backToLogin: "Back to login",
				register: "Register",
				confirmEmailTitle: "Confirm account",
				confirmEmail: (email: string) =>
					`Check your inbox for ${email} for an email from "post@app.dresdengiesst.de" with a link to confirm your account.`,
				existingAccount: "Already have an account?",
				logIn: "Log in",
				passwordShould: "Your password must contain:",
				passwordLength: "at least 8 characters",
				passwordUpperAndLowerCase: "upper and lower case letters",
				passwordSpecialChar: "at least one special character",
				passwordNumber: "at least one number",
				logInShort: "Log in",
				missingAccount: "Don't have an account yet?",
				registerNow: "Register now",
				forgotYourPassword: "forget your password?",
				ohNoforgotYourPassword: "Oh no. Did you",
				passwordForgotten: "Reset your password",
				resetPasswordEmailSentTitle: "Email sent!",
				resetPasswordEmailSentMessage: "We have sent you an email to change your password. Please check your inbox!",
				clickHere: "click here",
				resetPassword: "Reset password",
				invalidCredentials: "Incorrect password or email address",
				deleteAccountConfirm: "Do you really want to delete your account?",
				cancel: "Cancel",
				save: "Save",
				confirm: "OK",
			},
			logOut: "Log out",
			showPassword: "Show",
			hidePassword: "Hide",
		},
		info: "Info",
	},
	notFound: {
		title: "404 - Page Not Found",
	},
	info: {
		infoTitel: "Information",
		about: {
			head: {
				question: "About the project",
				answer: `The consequences of climate change, especially the dry and hot summers, are putting a strain on Dresden's ecosystem. Our urban trees are drying out and suffering long-term damage: In recent years, more and more trees had to be felled and their lifespan is decreasing. The public is now regularly called upon for support, but in a so far uncoordinated manner. Through this project we want to improve this and enable coordinated citizen participation in the watering of urban green spaces.`,

				aboutUsTitle: "About Us",
				aboutUsAnswer: `The Dresden Giesst App is provided by the initiative Dresden Giesst and is based on th work of “Gieß den Kiez”. “Gieß den Kiez” is a project of the [CityLAB Berlin](https://www.citylab-berlin.org/).
				The CityLAB is a public innovation laboratory in the former Berlin-Tempelhof airport. Together with a large network of administration, civil society, science and start-ups, we are working on new ideas to make Berlin even more liveable. The CityLAB is a project of the Technologiestiftung Berlin and is funded by the Berlin Senate Chancellery.`,
				press: `For press inquiries please contact [post@dresdengiesst.de](mailto:post@dresdengiesst.de?subject=dresdengiesst.de%20Presseanfrage).`,
				communityTitle: "Community",
				communityAnswer:
					"Would you like to find out more about watering trees or exchange ideas with other active users? Then join one of our [events](https://dresdengiesst.de/vernetzen/)!",
				feedback: `Do you have **feedback** on *Gieß den Kiez*?
				
[Feel free to answer a few questions](https://citylabberlin.typeform.com/to/kCdnCgvC#product_id=GdK)`,
			},
			qa: [
				{
					question: "Useful links",
					answer: `[[Watering in dry conditions (Baumpflegeportal)](https://www.baumpflegeportal.de/baumpflege/trockenheit-duerre-wann-baeume-giessen/)

[Irrigation recommendation for urban trees (Berlin Plant Protection Office)](https://www.berlin.de/pflanzenschutzamt/stadtgruen/beratung/bewaesserungsempfehlung-fuer-stadtbaeume/)

[City trees - significance and challenges in times of climate change (HCU Hamburg)](https://www.hcu-hamburg.de/fileadmin/documents/REAP/files/Bildungsmaterial_Stadtbaeume_im_Klimawandel_2017.pdf)

[Functions of city trees (Nature Conservation Association)](https://www.bund-naturschutz.de/natur-und-landschaft/stadt-als-lebensraum/stadtbaeume/funktionen-von-stadtbaeumen.html)`,
				},
				{
					question: "Data sources",
					answer: `The map shows the majority of Dresden's street trees (120,766; as of March 2026). It also shows how much precipitation has fallen on each tree in the last 30 days and whether users have watered them. Unfortunately, for various reasons, not all of Dresden's urban trees are listed yet. However, we are working on improving the data situation. The current data sources are the following:

[Geoportal Dresden / Street trees](https://opendata.dresden.de/informationsportal/?open=1&result=8B5B50B7A6E746EB9DEB634A041F596E#app/mainpage/)

Precipitation from [German Weather Service](https://www.dwd.de/)`,
				},
			],
		},
		faq: {
			title: "F.A.Q.",
			description:
				"Based on the active exchange via email and telephone, we have created a small FAQ. The most frequently asked questions are answered here.",
			qa: [
				{
					question: "How can I participate?",
					answer: `Explore:

Curious which tree is in front of your door? Our interactive map visualizes over 120,000 street trees of Dresden. If you want to find out more about a tree, navigate and zoom to the desired location and click on the colored dot. You will now see a lot of information about the selected tree.

Watering and adopting trees:

Do you want to get active or are you already actively watering? You can enter when and with how much water you watered a tree. Trees can also be adopted. The adopted trees appear in your own user profile and can be found more quickly. This allows other neighbors in the area to see which trees need their attention. To water and adopt trees, first create a profile with a valid email address and then log in.

Connect:

Visit one of our [Watering groups](https://dresdengiesst.de/vernetzen/) to exchange ideas with our community members and to jointly water your neighborhood.`,
				},
				{
					question: "What can I do if trees are not registered correctly?",
					answer: `We obtain the tree data set with all attributes such as address, tree species and planting year for each tree from the geoportal of the city of Dresden. The tree register provided in the geoportal is based on the data from the city authorities. It can therefore happen that data from trees is out of date or that properties differ from current reality. Unfortunately, we cannot make any changes to the tree register ourselves. Any deviations can only be reported directly to the responsible authority. The "Amt für Stadtgrün und Abfallwirtschaft" publish an updated tree register regularly, which we link to Dresden Giesst after publication.`,
				},
				{
					question: "Why should I take action and water trees?",
					answer: `The long-lasting drought and heat periods of recent years have taken a heavy toll on Dresden's urban green spaces. In the past five years, many city trees have died due to drought. In the Großer Garten alone, around 300 of the 19,000 trees had to be felled in spring 2023. In the Blasewitz forest park, 2000 trees did not survive within two years [Sächsische Zeitung](https://www.saechsische.de/lokales/dresden/dresden-kaempft-mit-duerre-und-ruft-einwohner-zum-giessen-auf-X7TKNR4G4JCQZHT5V3HFOA74HY.html).
The municipal offices regularly water several thousand trees, but cannot keep up with watering during Dresden's hot summers. Through the platform, we also want to give citizens the opportunity to help trees specifically based on their current water supply and to inform themselves. The aim is to save as many trees as possible through neighbourly commitment.`,
				},
				{
					question: "How do I water correctly?",
					answer: `
Trees require different amounts of water depending on their age, location and species. Young trees (0-10 years) in particular are dependent on frequent waterings in times of drought, radiation and heat. The municipal offices or contractors in Dresden typically take care of young trees up to the age of 5 years, which means that young trees between 5 and 10 years old require your attention.

Before watering, you should first look at the tree and consider whether it really needs water. Important indicators for need-based watering include the age (young/old), trunk circumference (thin/thick), location (sunny/shady), and the condition of fresh shoots (bare/green) of a tree. Before you start watering, we recommend loosening the dry soil so that the water can penetrate the ground instead of running off or pooling on the surface. Based on Berlin's [Good Care Manual](https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/pflegen-und-unterhalten/handbuch-gute-pflege), it is better to water less frequently but with larger amounts of water. The manual recommends up to 200 liters per watering for newly planted trees. This ensures that the soil moisture is also increased at depth. So-called watering bags are also recommended, from which the water only emerges very slowly, hardly runs off the surface and therefore seeps continuously into the soil.
					`,
				},
				{
					question: `How do I deal with water scarcity?`,
					answer: `In times of drought and water scarcity, it is especially important to use water sparingly. If you want to water your tree, first ask yourself which tree has the greatest need. Water less frequently, but with larger amounts of water. This encourages the tree to develop deeper roots and become more resilient to drought. Try to use water from public street pumps instead of tap water from your home. In the long term, it is worth collecting rainwater and storing it in rain barrels. Neighborhood initiatives like [Wassertanke](https://wassertanke.org) can help you with such community projects.`,
				},
				{
					question: "How are technical problems handled?",
					answer: `The participation platform "Gieß den Kiez" is a prototype and therefore a beta version of a web app. We are aware of some technical hurdles, but we are dependent on your help. We are happy to receive your technical feedback and questions by email. If you feel at home in the "tech world", you are invited to contribute to our [Open Source GitHub Repository](https://github.com/dresdengiesst) and can comment on your issues or code fixes directly in the repository.`,
				},
				{
					question: "Why is the website not loading or loading very slowly?",
					answer: `When the page is first opened, the browser loads over 100,000 data points - this can take a while! Regardless, there may be slightly different displays when using different browsers. For the best experience, we recommend using Chrome or Firefox Desktop. Experience has shown that the most common problems can be solved if the browser is not outdated or the latest version is installed and there is a stable internet connection (LAN or WLAN). 

Use via smartphone (mobile network) can lead to performance problems (page loads slowly). If problems occur repeatedly, you can report them by email or via GitHub Issue, stating the device used, the operating system, the browser and the browser version.`,
				},
				{
					question: "What should I do if I watered a tree incorrectly?",
					answer: `To remove a watering entry first click on the tree for which you entered the watering. Scroll down the tree sidebar to the section of past waterings, click the trash can icon next to the entry you want to delete, and click “Delete” to confirm. Only waterings that you have made yourself can be deleted. After deleting, enter the watering with the correct information (number of liters and time) via the "I watered" button.`,
				},
				{
					question: "Can the principle be transferred to other cities?",
					answer: `The “Gieß den Kiez” platform is an open source software project and runs under an MIT license. Accordingly, the idea and also the source code can be used and further developed free of charge for implementation in other cities. If you are interested, please take a look at our [GitHub Repository](https://github.com/technologiestiftung/giessdenkiez-de) or contact us via email. We are also happy to support your city with the technical implementation via [DeineStadtgießt](https://deinestadt.giessdenkiez.de/).`,
				},
				{
					question: "I still have a question!",
					answer: `The FAQ couldn't help you or you have a more complex query? Then write us an [Email](mailto:post@dresdengiesst.de).`,
				},
				{
					question: "Why aren't all of Dresden's trees shown?",
					answer: `The Dresden Giesst App is based on the tree register. The tree register is a city directory in which (city/street or park) trees are managed and which is provided by "Amt für Stadtgrün und Abfallwirtschafft" (municipal authorities). However, the green space authorities are not responsible for all of Dresden's trees. The trees in the Großer Garten, for example, are subject to the "Staatliche Schlösser, Burgen und Gärten Sachsen gGmbH". These trees therefore do not appear in the app.`,
				},
			],
		},
		share: {
			title:
				"Share the Dresden Giesst App with those around you and help us expand the watering community:",
			content:
				"On Dresden Giesst you can find out about Dresden's tree population, find thirsty trees and record when you watered them!",
			openSource:
				"The Dresden Giesst App is based on Gieß den Kiez. Gieß den Kiez is an [Open Source Project](https://github.com/technologiestiftung/giessdenkiez-de)!",
		},
		credits: {
			projectBy: "A project of",
			fundedBy: "Funded by",
		},
	},
	treeDetail: {
		title: "Tree information",
		adoptIt: "Adopt this tree",
		alsoAdoptedByOtherUsers: "Also adopted by other users",
		onlyAdoptedByOtherUsers: "Adopted by other users",
		ageTitle: "Age",
		adoptLoading: "Tree is being adopted...",
		unadoptLoading: "Adoption is being canceled...",
		isAdopted: "You have adopted this tree",
		adoptHintTitle: "Adopt a tree",
		adoptHint:
			"If you water this tree on a regular basis, you can adopt it. This way you can find it in your profile.",
		adoptErrorMessage: "Error adopting the tree. Please try again.",
		adoptLoginFirst: "Please log in first to adopt this tree",
		age: (age: number) => `${age === 1 ? "year" : "years"}`,
		ageUnknown: "Unknown",
		treeTypeUnknown: "Tree species unknown",
		managedBy:
			"This tree is already being taken care of by the Dresden administration and does not need to be watered.",
		waterNeed: {
			title: "Water requirements",
			hintWinter:
				"Outside of the vegetation period (March-October), the trees do not require any water as they are practically in hibernation.",
			hint: "Depending on the age of the tree, the need for water varies.",
			needXLiters: (liters: string) => `Needs ${liters} liters per week`,
			needsOnlyOnDryDays: "Only needs water on dry days",
			waterManaged: "Supplied, only in need during dry periods",
			winterSleep: "The trees are currently in hibernation",
			managedByGroundwater: "Groundwater",
			unknownTitle: "Water needs **unknown**",
			unknown:
				"The age and therefore the water requirement are unfortunately unknown. The info box may help you make your own assessment.",
			unknownShort: "Unknown",
			seniorTitle: "Needs water only during dry periods",
			seniorExplanation:
				"Older trees can usually supply themselves with groundwater, but as the heat increases they also appreciate additional water.",
			liters: "liters",
			watered: "watered",
			covered: "covered",
			rained: "rain",
			stillMissing: "still missing",
			dataOfLastXDays: "* data of last 30 days",
			manager: "city",
			alreadyWateredByManager: "Watered by **city authority**",
			alreadyWateredByGroundwater: "Covered by **groundwater**",
			winterNeedsNoWater: "No water needed in winter",
			stillWaterXLiters: (liters: string) => `
Needs

**${liters} liters**`,
			shouldBeWatered: "Should be watered",
			sufficientlyWatered: "Sufficiently watered at the moment",
			readMore: "Show more",
			ageAndWaterHintTitle: "Water requirements and age",
			ageAndWaterHint: `
Particularly young trees need water in the first few years. Rather less often, but a lot at once. 

**Below 5 years**: We are taken care of by the district green space office.

**5-10 years**: At this age, we are no longer watered by the administration in all areas and are not yet "self-sufficient". We are thankful for some extra water, especially in dry times - preferably less often, but a lot at once (approx. 100-200 liters per month). 

**Older trees (10+ years)**: We can supply ourselves via the groundwater.`,
			ageAndWaterHintWinter: `
When the trees lose more of their leaves in autumn, their photosynthetic processes also decrease, and they need less energy—and therefore less water. 
With the official end of the vegetation period, the watering season also comes to an end for this year. Starting in March, it will pick up again! We Can!

**Water needs during the vegetation period (March-October)**:

`,
			ageAndWaterHintSpecialDistrict: (
				babyAgeLimit: number,
				district: string,
			) => `
Particularly young trees need water in the first few years. Rather less often, but a lot at once. 

The district ${district} has provided us with additional information on the individual pouring strategy.

**Below ${babyAgeLimit} years**: We are taken care of by the district green space office.

**Older trees (${babyAgeLimit}+ years)**: We can supply ourselves via the groundwater.`,

			close: "Show less",
			lastXDaysYLitersWater: (days: number, liters: string) =>
				`In the last ${days} days, **${liters} liters** were watered.`,
			lastXDaysYLitersRain: (days: number, liters: string) =>
				`In the last ${days} days, it rained **${liters} liters**.`,
			iWatered: "I watered",
			loginToWater: {
				login: "Log-in",
				toWater: "to submit a watering",
			},
			submitWatering: "Submit watering",
			wateredHowMuch: "Liters",
			wateredHowMuchPlaceholder: "Amount in L",
			wateredWhen: "When?",
			waterSave: "Save",
			waterCancel: "Cancel",
			wateringSuccessful: "Your watering entry was successful!",
		},
		lastWaterings: {
			deletedAccount: "Deactivated Account",
			title: "Last waterings",
			last30Days: "Last 30 days",
			nothingLast30Days: "No waterings in the last 30 days",
			before: "Previous",
			nothingBefore: "No previous waterings",
		},
		problem: {
			title: "Report a problem",
			description:
				"Have you discovered tree damage or is the tree disk being misused? Tell the city:",
			link: "To the official form",
		},
		treeTypeInfos: [
			{
				id: "AHORN",
				title: "Maple (Acer)",
				description:
					"The maple genus comprises approx. 20% of the total stock. The Norway maple (Acer platanoides) is particularly suitable for the street location. The early flowering and the colorful autumn coloring make the maple a very popular tree species.",
			},
			{
				id: "LINDE",
				title: "Lime (Tilia)",
				description:
					"The lime tree has been a typical street tree in Dresden for years. With a share of a nearly a fourth, it characterizes the street tree population. Over 20 different species can be distinguished. The winter lime tree (Tilia cordata), a medium-sized tree that also finds room in narrower streets, is the preferred tree. The large-crowned imperial lime (Tilia intermedia), on the other hand, is reserved for wide avenues.",
			},
			{
				id: "EICHE",
				title: "Oak (Quercus)",
				description:
					"Oaks make up around 8% of the total stock. In Dresden, it is mainly the pedunculate oak (Quercus robur) that is planted. As a light tree, the oak is not suitable for narrow streets.",
			},
			{
				id: "PRUNUS",
				title: "Prunus",
				description:
					"The genus Prunus with its more than 200 species from the Rose family makes up about 6 percent of the total population. Sweet cherry and Bird cherry are particularly planted.",
			},
			{
				id: "ESCHE",
				title: "Ash (Fraxinus)",
				description:
					"The ash tree (Fraxinus) accounts for approx. 4% of the total population and thus occupies fifth place among Dresden's street trees. With a height of up to 40 m, it is one of the tallest deciduous trees in Europe.",
			},
			{
				id: "ROSSKASTANIE",
				title: "Horse chestnut (Aesculus hippocastanum)",
				description:
					"The horse chestnut (Aesculus hippocastanum) accounts for around 4% of the total population, making it the sixth most popular street tree in Dresden. Horse chestnuts have five- and multi-lobed leaves that resemble the fingers of a hand; sweet chestnuts have single leaves that are also clearly serrated.",
			},
			{
				id: "BIRKE",
				title: "Birch (Betula)",
				description:
					"The birch (Betula) accounts for around 3% of the total population. Although the birch is a pioneer tree that is very undemanding and grows on any soil, it is less suitable as a street tree as the tree grates often offer too little space for the shallow-rooted trees.",
			},
			{
				id: "HAINBUCHE",
				title: "Hornbeam (Carpinus)",
				description:
					"The proportion of hornbeams (Carpinus) is around 2% of the total population. The tree reaches a height of up to 25 meters. The crown is initially slightly conical and later expands widely.",
			},
			{
				id: "ROBINIE",
				title: "Robinia (Robinia)",
				description:
					"The Robinia (Robinia) accounts for around 2% of the total population. The Robinia has low demands on the soil and, thanks to the nodule bacteria on its roots, it can bind atmospheric nitrogen and thus fertilize the soil.",
			},
			{
				id: "PLATANE",
				title: "Plane tree (Platanus)",
				description:
					"An ideal avenue tree for wide streets is the plane tree (Platanus acerifolia), which in addition to a height of 20 to 30 m can also reach a stately crown diameter of 15 to 20 m. Sycamore trees make up around 6% of the total population. The best-known and, at over 120 years old, oldest plane tree avenue in Berlin is Puschkinallee in Berlin-Treptow.",
			},
		],
		treeTypeInfoTitle: "Tree profile",
	},
	filter: {
		title: "Filter",
		myAdoptedTrees: "My adopted trees",
		allAdoptedTrees: "Adopted trees",
		lastWateredTrees: "Last watered trees",
		treeAge: "Tree age",
		show: "Show",
		reset: "Reset",
		treeAgeTitle: "Tree age range",
		years: "years",
	},
	common: {
		defaultErrorMessage: "Something went wrong! Please try again later.",
	},
	contact: {
		dialogTitle: (contactName: string) =>
			`**Send an email to *${contactName}***`,
		dialogDetail: (contactName: string, userMail: string) =>
			`The email to *${contactName}* automatically contains your email address (*${userMail}*) and your text message:`,
		dialogPlaceholder: "Briefly describe why you would like to connect...",
		dialogCancel: "Cancel",
		dialogSubmit: "Send",
		dialogAlreadyContactedError: (contactName: string) =>
			`You already sent a contact request to *${contactName}*.`,
		dialogAlreadyContactedExplanation:
			"You have already sent a contact request to this person. Another request is not possible.",
		genericErrorTitle: "Contact request not possible",
		genericError: `Oops, something went wrong. Please try again.`,
		dialogSuccess: (contactName: string) =>
			`The contact request was sent to *${contactName}*.`,
		dailyLimitError: "You have reached the daily limit for contact requests.",
		dailyLimitExplanation:
			"You have reached the daily limit of 3 contact requests. Please try again tomorrow.",
		containsUrlHint:
			" Please note, that the message must not contain any links.",
		messageTooLongError: "The message must be less than 200 characters long.",
		messageRestrictionsHint: (maxLength: number, message: string) =>
			`${Math.max(0, maxLength - message.length)} characters left.`,
		loginFirst: "Log in for contact request",
		loginFirstReason:
			"You can only send contact requests if you are logged in.",
		loginFirstAction: "Log in",
		confirm: "Okay!",
	},
	splash: {
		headline:
			"Dresden's city trees are suffering from drought and you can help them!",
		subheadlineWinter: `Currently the trees are practically in hibernation and don’t need any additional water.\n**Starting in March, it will pick up again! We Can!**`,
		subheadline:
			"Find out about the water needs of the trees in your neighborhood, adopt the tree on your doorstep and become part of the active watering community in Berlin!",
		actionTitle: "Let's go",
		actionTitleWinter: "Explore!",
		discoverTitle: "Discover",
		discoverContent:
			"The map visualizes over 120,000 urban trees (as of 2025) and displays information on species, age and water requirements. Use the filter and search functions to quickly get an overview.",
		waterTitle: "Water",
		waterContent:
			"Grab a watering can and become part of the watering community! Over a hundred active people have already joined forces for Dresden's trees and are regularly submitting their waterings.",
		adoptTitle: "Adopt",
		adoptContent:
			"By adopting a tree - or several - you let your neighborhood know that these trees will be cared for. This creates a coordinated commitment.",
		questionHeadline: "Gieß den Kiez also in your city?",
		questionSubheadline:
			"Cities like Leipzig, Magdeburg and Co. have already successfully joined the watering wave! Is your city the next one?",
		discoverMoreTitle: "Learn more!",
		letsGo: "Let's go",
	},
	loading: {
		mapLoading:
			"We are currently loading 120,766 trees from the Dresden tree population.",
		treeLoading: "Loading tree information...",
	},
	stats: {
		title: "Dresden Statistics",
		subtitle: "Dresden Giesst in numbers",
		streetTrees: "City trees",
		activeUsers: "Active casters",
		backToFront: "back",
		wateringsStat: {
			title: "Waterings",
			unit: "times",
			hint: (currentYear) => `wase poured in ${currentYear}.`,
			legend: "Number of waterings",
			backContent: `The watering activity varies in the districts depending on the level of volunteer involvement. In some areas, engaged residents have already organized themselves into watering groups ([Join the community](https://dresdengiesst.de/vernetzen/)).`,
		},
		wateringBehaviorStat: {
			title: "Pouring behaviour",
			unit: "liters",
			watered: "poured",
			rain: "rain",
			hint: () => `have already been poured since 2025.`,
			legend: "∑ Liters poured per month",
			backContent: `Over impressive 2 million liters have already been poured by volunteers!\n\n“The more the better” does not always apply in the face of increasing water shortages though. And the Dresden watering community knows this, of course, and is therefore mainly active when the trees are actually thirsty: during the vegetative period (April-October) in particularly hot, dry years.\n\nData source: [Weather data (DWD)](https://opendata.dwd.de/)`,
		},
		wateringAmountStat: {
			title: "Pouring volume",
			unit: "liters",
			hint: (currentYear) =>
				`are entered on average per watering in ${currentYear}.`,
			legend: "Ø Liters per year",
			backContent: `“The more the better” applies here to a limited extent: a lot at once, but not too often. And the active community already knows this too, of course.\n\nA watering should involve more rather than fewer liters at a time so that the root system of the thirsty young trees can develop downwards.\n\nBut be careful! Young trees can also be overwatered. More information on [watering recommendations for urban trees](https://www.berlin.de/pflanzenschutzamt/stadtgruen/beratung/bewaesserungsempfehlung-fuer-stadtbaeume/).`,
		},
		treeSpeciesStat: {
			title: "Tree species",
			unit: "tree species",
			hint: () => `exist in Dresden.`,
			other: "Other",
			legend: "Share of Dresden’s tree population",
			backContent: `Dresden is diverse - including the trees!\n\nThis overview shows the twenty most common species, each summarized according to the overarching tree genus.\n\nThe [Dresden Giesst map](https://www.dresdengiesst.de/map) shows the full splendor, and thus over 120,000 city trees, with information on species, age and water requirements. Use the filters and search to find out more about the trees in your neighborhood.\n\nData source: [Dresdener Baumkataster (Geoportal Dresden)](https://opendata.dresden.de/informationsportal/?open=1&result=8B5B50B7A6E746EB9DEB634A041F596E#app/mainpage/)`,
		},
		adoptionStat: {
			title: "Tree adoptions",
			unit: "trees",
			hint: () => `are adopted.`,
			legend: "of the adopted trees are particularly thirsty.",
			backContent: `Adopting a tree shows that it is regularly cared for and thus facilitates neighborly coordination. Many trees can already count themselves lucky.\n\nYoung trees (under 10 years old) are particularly thirsty. These are usually watered by the municipal authorities until at least their fifth year. The **5 - 10 years** old trees are therefore “particularly thirsty”.`,
		},
		gdKSalesPitch: `*Gieß den Kiez* also in **your city**?\n\n[Find out more!](https://deinestadt.giessdenkiez.de/)`,
	},
};
