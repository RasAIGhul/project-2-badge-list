import { LitElement, html, css } from 'lit';

class BadgeList extends LitElement {
  static properties = {
    badgeNumber: { 
      type: String 
    },
    badges: {type: Array}
  }



 

  static styles = css`
    
    .background {

      background-color: #e9ecf3

    }
    
  `;

  constructor() {
    super();
    this.badgeNumber = '5';
    this.badges=[];
    this.updateClasses();
  }
  
  updateClasses() {
    const address = '/api/badge-catalog.js';
   fetch(address).then((response) =>{
    if(response.ok){
      return response.json();
    }
         return [];
     }).then((data)=>{
    this.badges = data;
    });
    }

  render() {
    return html`
      <div class='background'>
      Badges (${this.badgeNumber})
       ${this.badges.map(badgeElement => html`
       <badge-element titleIcon="${badgeElement.titleIcon}" title="${badgeElement.title}" paragraph="${badgeElement.paragraph}" author="${badgeElement.author}" timeToComplete="${badgeElement.timeToComplete}" collapseIcon="${badgeElement.collapseIcon}" opened="${badgeElement.opened}"></badge-element>
       `)}
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);