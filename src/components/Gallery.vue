<template>
  <div>
    <div class="content">
      <div class="gallery">
        <div class="container">
          <h2>Gallery</h2>
          <div class="sap_tabs">
            <div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
              <ul class="resp-tabs-list">
                <li class="resp-tab-item" aria-controls="tab_item-0" role="tab">
                  <span>All</span>
                </li>
                <li class="resp-tab-item" aria-controls="tab_item-1" role="tab">
                  <span>Kitchen & Bath</span>
                </li>
                <li class="resp-tab-item" aria-controls="tab_item-2" role="tab">
                  <span>Living Rooms</span>
                </li>
                <li class="resp-tab-item" aria-controls="tab_item-3" role="tab">
                  <span>Bedrooms</span>
                </li>
                <div class="clearfix"></div>
              </ul>
              <div class="resp-tabs-container">
                <div
                  class="tab-1 resp-tab-content"
                  aria-labelledby="tab_item-0 wow bounceIn animated"
                  data-wow-delay="0.4s"
                  style="visibility: visible; -webkit-animation-delay: 0.4s;"
                >
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        href="../assets/images/g1.jpg"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses "
                      >
                        <img class="example-image" :src="require('../assets/images/g1.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        href="require('../assets/images/g2.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses nullader yoleac enanrit ma deuytas"
                      >
                        <img class="example-image" :src="require('../assets/images/g2.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g3.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g3.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>

                    <div class="clearfix"></div>
                  </div>
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s4.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s4.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s6.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s6.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s5.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s5.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s8.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s8.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s7.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s7.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s2.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s2.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div
                  class="tab-1 resp-tab-content"
                  aria-labelledby="tab_item-1 wow bounceIn animated"
                  data-wow-delay="0.4s"
                  style="visibility: visible; -webkit-animation-delay: 0.4s;"
                >
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g4.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g4.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g3.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g3.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s2.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s2.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>

                    <div class="clearfix"></div>
                  </div>
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g5.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g5.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s6.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s6.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g6.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g6.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g3.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g3.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div
                  class="tab-1 resp-tab-content"
                  aria-labelledby="tab_item-2 wow bounceIn animated"
                  data-wow-delay="0.4s"
                  style="visibility: visible; -webkit-animation-delay: 0.4s;"
                >
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g7.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g7.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g8.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g8.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g9.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g9.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        href="../assets/images/g1.jpg"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g1.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s8.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s8.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div
                  class="tab-1 resp-tab-content"
                  aria-labelledby="tab_item-3 wow bounceIn animated"
                  data-wow-delay="0.4s"
                  style="visibility: visible; -webkit-animation-delay: 0.4s;"
                >
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g10.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g10.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g11.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g11.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/g12.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/g12.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="tab_img">
                    <div class="col-md-4 img-top">
                      <a
                        class="example-image-link"
                        :href="require('../assets/images/s4.jpg')"
                        data-lightbox="example-set"
                        data-title="Betasase ferode vetuyasas deulidas vacsques mtreasades vias asey yoleacene aris masease. Bsaeats laoieu lacsqueses."
                      >
                        <img class="example-image" :src="require('../assets/images/s4.jpg')" alt />
                        <div class="link-top">
                          <i class="link"></i>
                        </div>
                      </a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			kitchenBath:[],
			livingroom:[],
			bedroom:[]
		};
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.axios
        .get("/gallery")
        .then(res => {
          console.log(res);
          this.kitchenBath = res.data.kitchenBath
          this.livingroom = res.data.livingroom
          this.bedroom = res.data.bedroom
          
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>