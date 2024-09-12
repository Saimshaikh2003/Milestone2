document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get reference to form elements using their ids
    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("Phone") as HTMLInputElement; // Fixed the ID
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      /// picture element
      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutput = `
        <h2>Resume</h2>
            ${
              profilePictureURL
                ? `<img src="${profilePictureURL}" alt="ProfilePicture" class= "profilePicture"/>`
                : ""
            }

             <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

      // Display resume
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";

        // Handle image display
      }
    } else {
      console.error("One or more form elements are missing.");
    }
  });
