function downloadResume() {
    const resumeURL = 'resume.pdf';
    const confirmation = confirm("Download resume?");

    if (confirmation) {
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeURL;
        downloadLink.download = 'your-resume.pdf';
        downloadLink.click();
    }
}

function visitGitHub() {
    const githubURL = 'https://github.com/yourusername';
    window.open(githubURL, '_blank');
}

const downloadResumeBtn = document.querySelector('.download-resume-btn');
const visitGitHubBtn = document.querySelector('.visit-github-btn');

downloadResumeBtn.addEventListener('click', downloadResume);
visitGitHubBtn.addEventListener('click', visitGitHub);
