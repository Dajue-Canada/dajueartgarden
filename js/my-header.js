class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    @import url("/css/common.css");
    </style>
    <div>
    <div class="header pc">
      <div class="logo">
        <a href="/"
          ><img class="white" src="/images/logo_white.png" alt=""
        /></a>
        <a href="/"
          ><img class="black" src="/images/logo_black.png" alt=""
        /></a>
      </div>
      <div class="header-r">
        <div class="area-btn"></div>
        <ul class="nav">
          <li><a href="/index.html">HOME</a></li>
          <li>
            <a href="/pages/about-us.html">ABOUT US</a>
            <div class="subnav-box">
              <ul class="subnav">
                <li>
                  <a href="/pages/about-us.html"
                    >DAJUE ART GARDEN CENTRE</a
                  >
                </li>
                <li>
                  <a href="/pages/about-us2.html"
                    >DAJUE GARDEN & FLOWERS</a
                  >
                </li>
                <li>
                  <a href="/pages/about-us3.html"
                    >DAJUE COURTYARD</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="https://dajuegarden.myshopify.com/" target="_blank"
              >PRODUCTS & MORE</a
            >
          </li>
          <li>
            <a href="/pages/news/page1.html">DAJUE NEWS</a>
            <div class="subnav-box">
              <ul class="subnav">
                <li>
                  <a href="/pages/news/page1.html"
                    >Daily News</a
                  >
                </li>
                <li>
                  <a href="/pages/blogs/pages1.html">Blog</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/pages/services/landscaping_consultation.html">GARDENING SERVICES</a>
            <div class="subnav-box">
              <ul class="subnav">
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page1"
                    >Landscaping Consultation</a
                  >
                </li>
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page2"
                    >Gardening Advice</a
                  >
                </li>
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page3"
                    >Trimming Service</a
                  >
                </li>
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page4"
                    >Planting Service</a
                  >
                </li>
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page5"
                    >Delivery Service</a
                  >
                </li>
                <li>
                  <a href="/pages/services/plant-library.html"
                    >Plant Library</a
                  >
                </li>
                <li>
                  <a href="/pages/services/plant-guide.html"
                    >Plant Guide</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/pages/contact-us.html">CONTACT US</a>
          </li>
        </ul>
        <div class="nav-btn"></div>
        <div class="search">
          <div class="search-btn"></div>
          <div class="searchform-box">
            <form
              class="searchform"
              action=""
              method="post"
            >
              <i class="iconfont icon-sousuo"></i>
              <input type="text" id="keywordsd" name="keyword" value="" />
              <button type="submit" id="headfilter" style="display: none">
                Search
              </button>
            </form>
          </div>
        </div>
        <div class="lang">
          <div class="langinfo">
            <p>繁</p>
          </div>
          <div class="langlist-box">
            <ul class="langlist">
              <li><a href="/">繁</a></li>
              <li><a href="/">En</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header mobile">
      <div class="header-l">
        <div class="area-btn"></div>
        <ul class="nav">
          <li>
            <a href="/index.html">
              <p>HOME</p>
            </a>
          </li>
          <li>
            <p>ABOUT US</p>
            <div class="subnav-box">
              <ul class="subnav about">
                <li>
                  <a href="/pages/about-us.html"
                    >DAJUE ART GARDEN CENTRE</a
                  >
                </li>
                <li>
                  <a href="/pages/about-us2.html"
                    >DAJUE GARDEN & FLOWERS</a
                  >
                </li>
                <li>
                  <a href="/pages/about-us3.html"
                    >DAJUE COURTYARD</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="https://dajuegarden.myshopify.com/" target="_blank">
              <p>PRODUCTS & MORE</p>
            </a>
          </li>
          <li>
            <p>DAJUE NEWS</p>
            <div class="subnav-box">
              <ul class="subnav news">
                <li>
                  <a href="/pages/news/page1.html"
                    >Daily News</a
                  >
                </li>
                <li>
                  <a href="/pages/blogs/pages1.html">Blog</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <p>GARDENING SERVICES</p>
            <div class="subnav-box">
              <ul class="subnav">
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page1"
                    >Landscaping Consultation</a
                  >
                </li>
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page2"
                    >Gardening Advice</a
                  >
                </li>
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page3"
                    >Trimming Service</a
                  >
                </li>
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page4"
                    >Planting Service</a
                  >
                </li>
                <li>
                  <a href="/pages/services/landscaping_consultation.html#page5"
                    >Delivery Service</a
                  >
                </li>
                <li>
                  <a href="/pages/services/plant-library.html"
                    >Plant Library</a
                  >
                </li>
                <li>
                  <a href="/pages/services/plant-guide.html"
                    >Plant Guide</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/pages/contact-us.html">
              <p>CONTACT US</p>
            </a>
          </li>
          <li>
            <p>繁體中文</p>
            <div class="subnav-box">
              <ul class="subnav language">
                <li>
                  <a href="/">繁體中文</a>
                </li>
                <li>
                  <a href="/">English</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="logo">
        <a href="/"
          ><img
            class="white"
            src="/images/logo_white.png"
            alt=""
        /></a>
        <a href="/"
          ><img
            class="black"
            src="/images/logo_black.png"
            alt=""
        /></a>
      </div>
      <div class="search">
        <div class="search-btn"></div>
        <div class="searchform-box">
          <form class="searchform" onsubmit="return false;">
            <i class="iconfont icon-sousuo"></i>
            <input type="search" id="keywordsdx" name="xkeyword" value="" />
            <input type="text" style="display: none" />
            <button type="submit" id="headfilters" style="display: none">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
        `;
  }
}
customElements.define("my-header", MyHeader);
