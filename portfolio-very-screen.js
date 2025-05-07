/**
 * Copyright 2025 Ryan-Mindick
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `final-test`
 *
 * @demo index.html
 * @element final-test
 *
 */
export class PortfolioVeryScreen extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-very-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :root {
        --ddd-theme-default-beaverBlue: #1e407c;
        --ddd-theme-default-nittanyNavy: #001e44;
        --ddd-theme-default-pughBlue: #3366cc;
        --ddd-theme-default-slateGray: #708090;
        --ddd-theme-default-skyBlue: #87ceeb;
        --ddd-theme-default-slateMaxLight: #f0f0f0;
        --ddd-theme-accent: #3366cc;
        --ddd-theme-primary: #ffffff;
        --ddd-spacing-2: 8px;
        --ddd-spacing-4: 16px;
        --ddd-spacing-5: 24px;
        --ddd-font-navigation: sans-serif;
        }
        :host {
          display: block;
          height: 100vh;
          padding: var(--ddd-spacing-5);
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          padding-top: var(--ddd-spacing-2);
        }

        h3 span {
          font-size: var(--final-test-label-font-size, var(--ddd-font-size-s));
        }
        :host(.about) {
          background-color: var(--ddd-theme-default-beaverBlue);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.resume) {
          background-color: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.projects) {
          background-color: var(--ddd-theme-default-pughBlue);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.work) {
          background-color: var(--ddd-theme-default-slateGray);
          color: var(--ddd-theme-default-slateMaxLight);
        }
        :host(.contact) {
          background-color: var(--ddd-theme-default-skyBlue);
          color: var(--ddd-theme-default-slateMaxLight);
        }

        .contact-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 742px) {
          .wrapper {
            width: 100vw;
            height: auto;
            display: flex;
            flex-direction: column-reverse;
          }
        }        
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3>${this.title}</h3>
      <slot></slot>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(PortfolioVeryScreen.tag, PortfolioVeryScreen);