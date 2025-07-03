document.addEventListener('DOMContentLoaded', () => {
  // Project expand/collapse functionality on hover
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    const title = project.querySelector('h3');
    const hoverBox = project.querySelector('.project-hover');

    // Show on mouseenter
    title.addEventListener('mouseenter', () => {
      hoverBox.style.maxHeight = hoverBox.scrollHeight + "px";
      hoverBox.style.opacity = "1";
      hoverBox.style.pointerEvents = "auto";
    });

    // Hide on mouseleave
    project.addEventListener('mouseleave', () => {
      hoverBox.style.maxHeight = "0px";
      hoverBox.style.opacity = "0";
      hoverBox.style.pointerEvents = "none";
    });
  });

  // Animated Skills Slider
  const skills = [
    "Cybersecurity",
    "Artificial Intelligence",
    "Web Development",
    "Python Development",
    "Writing"
  ];
  const skillSlider = document.getElementById('skill-slider');
  let skillIndex = 0;

  function showSkill() {
    skillSlider.style.transform = 'translateY(-2.5rem)';
    setTimeout(() => {
      skillSlider.textContent = skills[skillIndex];
      skillSlider.style.transform = 'translateY(0)';
      skillIndex = (skillIndex + 1) % skills.length;
    }, 500);
  }

  // Initialize animated skills slider
  if (skillSlider) {
    skillSlider.textContent = skills[0];
    setInterval(showSkill, 2000);
  }
});