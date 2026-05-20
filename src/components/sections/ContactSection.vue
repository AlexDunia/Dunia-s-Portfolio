<template>
  <section id="contact" class="contact-section">
    <div class="contact-grid">
      <div class="contact-metadata">
        <div class="contact-meta">
          <p class="label">Visit</p>
          <a class="value" href="https://pertheon.com" target="_blank" rel="noreferrer">WWW.PERTHEON.COM</a>
        </div>
        <div class="contact-meta">
          <p class="label">Creative direction</p>
          <p class="value">Alex Ifeanyi Dunia</p>
        </div>
        <div class="contact-meta">
          <p class="label">Illustrations</p>
          <p class="value">Studio &amp; in-house work</p>
        </div>
        <div class="contact-meta">
          <p class="label">Content</p>
          <p class="value">Technical storytelling</p>
        </div>
      </div>

      <div class="contact-social">
        <div class="follow-heading">
          <p class="label">Follow the work</p>
          <h3>Connect with the studio</h3>
        </div>
        <div class="reachflex">
          <div class="reachflexdiv" id="mail">
            <a href="mailto:thealexdunia@gmail.com?subject=Hi%20Dunia&body=Hello%20Dunia%2C">
              <img src="@/assets/images/mail.png" alt="Mail icon" />
            </a>
          </div>
          <div class="reachflexdiv" id="github">
            <a href="https://github.com/AlexDunia" target="_blank" rel="noreferrer">
              <img src="@/assets/images/githubicon.png" alt="GitHub icon" />
            </a>
          </div>
          <div class="reachflexdiv" id="linkedin">
            <a href="https://www.linkedin.com/in/dunia-alex-2933bb1b9/" target="_blank" rel="noreferrer">
              <img src="@/assets/images/LINKEDIN.png" alt="LinkedIn icon" />
            </a>
          </div>
          <div class="reachflexdiv" id="telegram">
            <a href="https://t.me/Alexdunia" target="_blank" rel="noreferrer">
              <img src="@/assets/images/telegramicon.png" alt="Telegram icon" />
            </a>
          </div>
          <div class="reachflexdiv" id="twitter">
            <a href="https://twitter.com/thealexdunia" target="_blank" rel="noreferrer">
              <img src="@/assets/images/twittericon.png" alt="Twitter icon" />
            </a>
          </div>
          <div class="reachflexdiv" id="devto">
            <a href="https://dev.to/dunia" target="_blank" rel="noreferrer">
              <img src="@/assets/images/devto.png" alt="Dev.to icon" />
            </a>
          </div>
          <div class="reachflexdiv" id="hashnode">
            <a href="https://twitter.com/thealexdunia" target="_blank" rel="noreferrer">
              <img src="@/assets/images/hashnode.png" alt="Hashnode icon" />
            </a>
          </div>
        </div>
        <div class="contact-cta">
          <a class="primary-btn" href="https://twitter.com/thealexdunia" target="_blank" rel="noreferrer">Follow Dunia</a>
          <a class="secondary-btn" href="mailto:thealexdunia@gmail.com?subject=Let's%20collaborate">Appreciate</a>
        </div>
        <p class="social-note">
          Send a quick brief or a one-line hello—responses go out within <strong>48 hours</strong>.
        </p>
      </div>
    </div>

    <div class="personflex">
      <div class="personname">
        <h3>Alex Ifeanyi Dunia</h3>
        <p>Front-end engineer, creative director, and storyteller for bold brands.</p>
      </div>
      <div class="personfleximg">
        <img src="@/assets/images/adcartoon.png" alt="Alex cartoon" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  margin: clamp(40px, 6vw, 80px) clamp(14px, 4vw, 40px);
  padding: clamp(36px, 5vw, 60px);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact-grid {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}

.contact-metadata {
  flex: 1;
  min-width: 240px;
  display: grid;
  gap: 18px;
}

.contact-meta {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 18px 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.36em;
  font-size: 0.58rem;
  color: rgba(255, 255, 255, 0.55);
}

.value {
  margin-top: 6px;
  display: inline-block;
  font-family: 'Abril Fatface', 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #fef6f1;
  text-decoration: none;
}

.contact-social {
  flex: 1;
  min-width: 280px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 26px;
  padding: 24px 26px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.follow-heading h3 {
  margin: 6px 0 14px;
  font-size: 1.4rem;
  color: #fff;
  font-family: 'Abril Fatface', 'Times New Roman', serif;
}

.reachflex {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.reachflexdiv {
  transition: transform 0.8s ease;
  border-radius: 12px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.05);
}

.reachflexdiv img {
  width: 36px;
}

.reachflexdiv:hover {
  transform: rotate(20deg) scale(1.1);
}

.contact-cta {
  display: flex;
  gap: 14px;
  margin-top: 18px;
  flex-wrap: wrap;
  align-items: center;
}

.primary-btn,
.secondary-btn {
  border-radius: 999px;
  padding: 12px 28px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.78rem;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.primary-btn {
  background: var(--colororigin);
  color: #1b030c;
  border-color: var(--colororigin);
  box-shadow: 0 18px 30px rgba(228, 199, 63, 0.35);
}

.secondary-btn {
  background: transparent;
  color: #fef6f1;
  border-color: rgba(255, 255, 255, 0.4);
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-2px);
}

.social-note {
  margin-top: 18px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
}

.personflex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 18px;
}

.personname h3 {
  margin: 0;
  font-size: 1.45rem;
  color: #fff;
  font-family: 'Abril Fatface', 'Times New Roman', serif;
}

.personname p {
  margin: 6px 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Poppins', sans-serif;
  max-width: 420px;
  line-height: 1.5;
}

.personfleximg img {
  width: 72px;
}

@media (max-width: 900px) {
  .contact-grid {
    flex-direction: column;
  }

  .personflex {
    text-align: center;
    flex-direction: column;
  }

  .personname p {
    max-width: 100%;
  }
}
</style>
