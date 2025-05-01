/**
 * Copyright 2025 Ryan-Mindick
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/scroll-button/scroll-button.js";
import "/portfolio-very-screen.js";
import "/portfolio-very-header.js";
import "/portfolio-very-project-card.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.pages = []
    this.title = {
      ...this.t,
    }
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      screen: { type: Number, reflect: true },
      screens: { type: Array },
      skipped: { type: Boolean, reflect: true },
      active: { type: Object },
      title: { type: String },
      pages: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
      .scroll-button {
        position: fixed;
        right: var(--ddd-spacing-5);
        bottom: var(--ddd-spacing-5);
      }
      @media (max-width: 742px) {
          .wrapper {
            width: 100vw;
            height: auto;
          }
        }
    `];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3>${this.title}</h3>
      <ul>
        ${this.pages.map(
          (page, index) =>
            html`<li>
              <a
                href="#${page.number}"
                @click="${this.linkChange}"
                data-index="${index}"
                >${page.title}</a
              >
            </li>`
        )}
      </ul>
      <div class="wrapper">
        <slot></slot>
        <scroll-button></scroll-button>
      </div>
    </div>`;
  }


  linkChange(e) {
    let number = parseInt(e.target.getAttribute("data-index"));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    const element = e.detail.value;
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    };
    this.pages = [...this.pages, page];
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);