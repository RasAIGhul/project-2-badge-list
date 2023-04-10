import { LitElement, html, css } from 'lit';
import "./search-bar.js";
import "./badge-element.js";
class BadgeList extends LitElement {
  static properties = {
    badgeNumber: { 
      type: String 
    },
    badges: {type: Array}
  }



 

  static styles = css`
    
  `;

  constructor() {
    super();
    this.badgeNumber = 5;
    this.badges=[];
    this.getSearchResults().then((results) => {
      this.badges = results;
  });
  }
  



    async getSearchResults(value = '') {
      const address = `/api/badge-catalog?search=${value}`;
      const results = await fetch(address).then((response) => {
          if (response.ok) {
              return response.json()
          }
          return [];
      })
      .then((data) => {
          return data;
      });

      return results;
  }

  async _handleSearchEvent(e) {
      const term = e.detail.value;
      this.badges = await this.getSearchResults(term);
      console.log(term);
  }


  render() {
    return html`
     <search-bar @value-changed="${this._handleSearchEvent}"></search-bar>
      <div>
      Badges (${this.badgeNumber})
       ${this.badges.map(badgeElement => html`
       <badge-element titleIcon="${badgeElement.titleIcon}" title="${badgeElement.title}" paragraph="${badgeElement.paragraph}" author="${badgeElement.author}" timeToComplete="${badgeElement.timeToComplete}" collapseIcon="${badgeElement.collapseIcon}" opened="${badgeElement.opened}" stepsToComplete="${badgeElement.stepsToComplete}"></badge-element>
       `)}
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);