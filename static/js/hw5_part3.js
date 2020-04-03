var states = [
  ['AL', 'Alabama', 'Montgomery', 4887871],
  ['AK', 'Alaska', 'Juneau', 737438],
  ['AZ',	'Arizona',	'Phoenix',	7171646],
  ['AR',	'Arkansas',	'Little Rock',	3010825],
  ['CA',	'California',	'Sacramento',	39557045],
  ['CO',	'Colorado',	'Denver',	5694564]
];

var statesNoData = [
  ['CT', 'Connecticut'], ['DE', 'Delaware'], ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'],
  ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'], ['MD', 'Maryland'],
  ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'], ['MS', 'Mississippi'], ['MO', 'Missouri'],
  ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'],
  ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'], ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'],
  ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'], ['SD', 'South Dakota'], ['TN', 'Tennessee'],
  ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'],
  ['VA', 'Virginia'], ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming']
]

var stateAbbr;

function getStateInfo() {
  valid = false;

  stateAbbr = document.getElementById("stateAbbr").value;

  
  for (let stateInfo of states) {

    if (stateInfo[1].toLowerCase() == stateAbbr.toLowerCase() || stateInfo[0].toLowerCase() == stateAbbr.toLowerCase()) {
      
    
      document.forms["myform"].elements["result"].value = ('Thanks for your inquiry,\n here is the information you requested: \n\nState Abbr = ' + stateInfo[0]  + '\nState Name = ' + stateInfo[1] + '\nCapital = ' + stateInfo[2] + '\nPopulation = ' + stateInfo[2]);
      valid = true
    }
  }

  for (let state of statesNoData) {

    if (state[1].toLowerCase() == stateAbbr.toLowerCase() || state[0].toLowerCase() == stateAbbr.toLowerCase()) {

      document.forms["myform"].elements["result"].value = ('No data available for state ' + state[1]);
      valid = true
    } 
  }


  if (!valid) {
    document.forms["myform"].elements["result"].value = ('Please enter valid input');
  }


}

