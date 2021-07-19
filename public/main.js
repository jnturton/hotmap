OBS = {
  testing: "Testing, ignore",
  covid_vac: "COVID-19 vaccination for walk-ins",
  crime: "Suspicious or criminal activity",
  fire: "Fire",
  infra: "Damaged property or infrastructure",
  supplies: "Charity or emergency relief supplies",
  weather: "Extreme weather",
};

NOTES_EGS = {
  testing: "This field will be enabled when you select an observation.",
  covid_vac: "E.g. 10 surplus doses, queue length 30 minutes",
  crime: "E.g. 3 people, looting, attempted mugging",
  fire: "E.g. fire break jumped here, buildings nearby",
  infra: "E.g. road impassable, power lines down",
  supplies: "E.g. food, water, blankets",
  weather: "E.g. flooding",
};

function getPosition(options) {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}