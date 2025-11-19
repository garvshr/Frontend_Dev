"use strict";

const resumeForm = document.getElementById("resumeForm");
const resName = document.getElementById("resName");
const resEmail = document.getElementById("resEmail");
const resSkills = document.getElementById("resSkills");
const resGithub = document.getElementById("resGithub");
const resLinkedin = document.getElementById("resLinkedin");
const jsonOutput = document.getElementById("jsonOutput");

const setErr = (input, errEl, msg) => {
  if (msg) {
    input.style.border = "2px solid red";
    errEl.textContent = msg;
  } else {
    input.style.border = "2px solid green";
    errEl.textContent = "";
  }
};

resumeForm.addEventListener("submit", e => {
  e.preventDefault();
  const emailErr = document.getElementById("emailErr10");
  const githubErr = document.getElementById("githubErr");
  const linkedinErr = document.getElementById("linkedinErr");

  let ok = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(resEmail.value.trim())) {
    setErr(resEmail, emailErr, "Invalid email");
    ok = false;
  } else {
    setErr(resEmail, emailErr, "");
  }

  const urlRegex = /^https:\/\/.+/;
  if (!urlRegex.test(resGithub.value.trim())) {
    setErr(resGithub, githubErr, "GitHub URL must start with https://");
    ok = false;
  } else {
    setErr(resGithub, githubErr, "");
  }

  if (!urlRegex.test(resLinkedin.value.trim())) {
    setErr(resLinkedin, linkedinErr, "LinkedIn URL must start with https://");
    ok = false;
  } else {
    setErr(resLinkedin, linkedinErr, "");
  }

  if (!ok) {
    jsonOutput.textContent = "";
    return;
  }

  const skillsRaw = resSkills.value
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length);

  const resumeObj = {
    name: resName.value.trim(),
    email: resEmail.value.trim(),
    skills: skillsRaw,
    github: resGithub.value.trim(),
    linkedin: resLinkedin.value.trim()
  };

  jsonOutput.textContent = JSON.stringify(resumeObj, null, 2);
});
