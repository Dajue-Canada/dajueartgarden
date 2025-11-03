class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
          @import "/css/common.css";
        </style>
        <div class="footer">
          <div class="container">
            <div class="top clearfix">
              <img
                class="logo"
                src="/images/logo_footer.png"
                alt=""
              />
              <ul>
                <li>
                  <div>
                    <p class="title">DAJUE ART GARDEN CENTRE</p>
                    <div class="info">
                      <div class="item">
                        <a
                          href="https://maps.app.goo.gl/ykm3kJMdodh5vrc77"
                          target="_blank"
                        >
                          <i class="iconfont icon-dizhi"></i>
                          <p>8451 No.5 Road Richmond BC V6Y 2V5, Canada</p>
                        </a>
                      </div>
                      <div class="item">
                        <a href="mailto:dajueartgarden@dajue-group.com">
                          <i class="iconfont icon-youxiang"></i>
                          <p>dajueartgarden@dajue-group.com</p>
                        </a>
                      </div>
                      <div class="item">
                        <i class="iconfont icon-dianhua"></i>
                        <p>(604) 505-6286</p>
                      </div>
                      <div class="item">
                        <i class="iconfont icon-shijian"></i>
                        <p>Open Daily:10 AM – 6 PM</p>
                      </div>
                    </div>
                  </div>
                  <div class="platform">
                    <a href="https://www.facebook.com/dajueartgardencentre"
                      ><i class="iconfont icon-facebook"></i
                    ></a>
                    <a href="https://www.instagram.com/DAJUE_ART_GARDEN_CENTRE"
                      ><i class="iconfont icon-Instagram"></i
                    ></a>
                    <a href="https://chat.whatsapp.com/LYojDXh5NZmAzTjEwlrY21"
                      ><i class="iconfont icon-whatsapp"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div>
                    <p class="title">DAJUE GARDEN & FLOWERS</p>
                    <div class="info">
                      <div class="item">
                        <a
                          href="https://maps.app.goo.gl/5W57Gdy9ZcPGWMSS7"
                          target="_blank"
                        >
                          <i class="iconfont icon-dizhi"></i>
                          <p>2121 Granville St. Vancouver BC V6H 3E9, Canada</p>
                        </a>
                      </div>
                      <div class="item">
                        <a href="mailto:gardenflowers@dajue-group.com">
                          <i class="iconfont icon-youxiang"></i>
                          <p>gardenflowers@dajue-group.com</p>
                        </a>
                      </div>
                      <div class="item">
                        <i class="iconfont icon-dianhua"></i>
                        <p>（778） 325 8451</p>
                      </div>
                      <div class="item">
                        <i class="iconfont icon-shijian"></i>
                        <p>
                          Mon.：Closed<br />
                          Tues.-Thurs.：10AM-5:30PM<br />
                          Fri.-Sun.：10:30AM-6:30PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="platform">
                    <a href="https://www.facebook.com/dajuegardenflowers"
                      ><i class="iconfont icon-facebook"></i
                    ></a>
                    <a href="https://www.instagram.com/dajuegardenflowers/"
                      ><i class="iconfont icon-Instagram"></i
                    ></a>
                    <a
                      href="https://chat.whatsapp.com/LYojDXh5NZmAzTjEwlrY21?fbclid=IwAR1eXYcvXyRk1fVXi-FsighlsDqUr1ks0-n3uuaT0ZMIzJh76pJmgVn_YIo_aem_AczxhZGiQxaexszD4NmNnijC_HAlAX8JP01ozSkw9srnynBBcwkanxQJuEbFzRd1gSTwc2Nyz31xbm3pLLcUifaQ"
                      ><i class="iconfont icon-whatsapp"></i
                    ></a>
                  </div>
                </li>
                <li>
                  <div>
                    <p class="title">DAJUE COURTYARD</p>
                    <div class="info">
                      <div class="item">
                        <i class="iconfont icon-dizhi"></i>
                        <p>14671 Burrows Rd, Richmond,BC V6V 1K9</p>
                      </div>
                      <div class="item">
                        <i class="iconfont icon-youxiang"></i>
                        <p>dajueartgarden@dajue-group.com</p>
                      </div>
                      <div class="item">
                        <i class="iconfont icon-dianhua"></i>
                        <p>（604） 277 0871</p>
                      </div>
                      <!-- <div class="item">
                                <i class="iconfont icon-shijian"></i>
                                <p>每日9:30AM至6PM</p>
                            </div> -->
                    </div>
                  </div>
                  <!-- <div class="platform">
                        <a href="#"><i class="iconfont icon-facebook"></i></a>
                        <a href="#"><i class="iconfont icon-Instagram"></i></a>
                        <a
                            href="https://chat.whatsapp.com/LYojDXh5NZmAzTjEwlrY21?fbclid=IwAR1eXYcvXyRk1fVXi-FsighlsDqUr1ks0-n3uuaT0ZMIzJh76pJmgVn_YIo_aem_AczxhZGiQxaexszD4NmNnijC_HAlAX8JP01ozSkw9srnynBBcwkanxQJuEbFzRd1gSTwc2Nyz31xbm3pLLcUifaQ"><i
                                class="iconfont icon-whatsapp"></i></a>
                    </div> -->
                </li>
              </ul>
            </div>
            <div class="center">
              <div class="title">
                <p>Excited to share more gardening stories with you!</p>
                <p>
                  If you have any gardening-related questions, feel free to
                  contact us!
                </p>
                <!-- <img src="/themes/default_en-us/Public/assets/images/home_text.png" alt=""> -->
              </div>
              <form class="form" id="allforma" method="post">
                <ul>
                  <li>
                    <p>NAME</p>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value=""
                      placeholder="Your Name*"
                    />
                  </li>
                  <li>
                    <p>EMAIL</p>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value=""
                      placeholder="Your Email*"
                      style="width: 240px"
                    />
                  </li>
                  <li>
                    <p>PHONE</p>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value=""
                      placeholder="Your Phone"
                    />
                  </li>
                </ul>
                <a type="button" id="submit-post" class="submit-btn">Confirm</a>
              </form>
              <div class="nav">
                <ul>
                  <li>
                    <a href="/"> Home </a>
                  </li>
                  <li>
                    <a href="/index.php?g=portal&m=page&a=index&id=2">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dajuegarden.myshopify.com/"
                      target="_blank"
                    >
                      Products & More
                    </a>
                  </li>
                  <li>
                    <a href="/index.php?m=page&a=index&id=15">
                      Gardening Services
                    </a>
                  </li>
                </ul>
              </div>
              <p class="copyright">©COPYRIGHT 2013-2024 ALL RIGHTS RESERVED</p>
            </div>
          </div>
          <div class="bot">
            <div class="container">
              <p class="copyright">©COPYRIGHT 2013-2024 ALL RIGHTS RESERVED</p>
              <img
                class="gotop"
                src="/images/gotop.png"
                alt=""
              />
              <div class="nav">
                <ul>
                  <li>
                    <a href="/"> Home </a>
                  </li>
                  <li>
                    <a href="/index.php?g=portal&m=page&a=index&id=2">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dajuegarden.myshopify.com/"
                      target="_blank"
                    >
                      Products & More
                    </a>
                  </li>
                  <li>
                    <a href="/index.php?m=page&a=index&id=15">
                      Gardening Services
                    </a>
                  </li>
                </ul>

                <div class="wechat">
                  <i class="iconfont icon-weixin"></i>
                  <img
                    class="qrcode"
                    src="/images/qrcode.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="wechat mobile">
                <i class="iconfont icon-weixin"></i>
                <img
                  class="qrcode"
                  src="./images/qrcode.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        `;
  }
}
customElements.define("my-footer", MyFooter);
