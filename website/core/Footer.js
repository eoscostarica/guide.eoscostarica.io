/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}

              />
            )}
          </a>
          <div>
            <h5>EOS Costa Rica</h5>
            <a href={'/docs/engineering-culture'}>
              Engineering Culture
            </a>
            <a href={'/docs/open-source-projects'}>
              Open Source Projects
            </a>
            <a href={'/docs/open-source-guidelines'}>
              Contributing Guidelines
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://www.meetup.com/EOS-Costa-Rica/" target="_blank">
              Meetup
            </a>
            <a href="https://t.me/eoscr" target="_blank">Telegram Channel</a>
            <a href="https://github.com/eoscostarica/">GitHub</a>
            <a 
              class="github-button" 
              href="https://github.com/eoscostarica" 
              aria-label="Follow @eoscostarica on GitHub"
            >
              Follow @eoscostarica
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://www.linkedin.com/company/11800177/admin/" target="_blank">Linkedin</a>
            <a href="https://medium.com/@eoscostarica" target="_blank">Medium</a>
            <a
              href="https://twitter.com/eoscostarica"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
