import "../styles/pages/ProfilePage.scss";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src="https://api.dicebear.com/7.x/lorelei/svg?seed=JohnDoe"
              alt="Profile Avatar"
              className="avatar-image"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">John Doe</h1>
            <p className="profile-email">john.doe@example.com</p>
            <p className="profile-role">UI/UX Developer</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-section">
            <h2>About</h2>
            <p>
              Passionate UI developer with expertise in creating beautiful and
              functional user interfaces. Experienced in React, TypeScript, and
              modern CSS frameworks.
            </p>
          </div>

          <div className="profile-section">
            <h2>Skills</h2>
            <div className="skills-list">
              <span className="skill-badge">React</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">SCSS</span>
              <span className="skill-badge">Figma</span>
              <span className="skill-badge">UI Design</span>
              <span className="skill-badge">Web Development</span>
            </div>
          </div>

          <div className="profile-section">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">john.doe@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-value">San Francisco, CA</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website:</span>
                <span className="contact-value">
                  <a href="https://example.com">example.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
