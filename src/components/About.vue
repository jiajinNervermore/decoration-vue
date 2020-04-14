<template>
  <div>
  		<div class="content">
		
			<div class="about-section">
				<div class="container">
					<h2>关于我们</h2>
					<div class="about-grids wow fadeInRight animated animated" data-wow-delay="0.4s">
						<div class="col-md-8 about-grid">
							<img :src="require('../assets/images/a1.jpg')" class="img-responsive" alt=""/>
						</div>
						<div class="col-md-4 about-grid1 wow fadeInLeft animated animated" data-wow-delay="0.4s">
							<img :src="require('../assets/images/a2.jpg')" class="img-responsive" alt=""/>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="about-at wow fadeInRight animated animated" data-wow-delay="0.4s">
						<h4> Nam libero tempore, cum soluta nobis est eligendi</h4>
						<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.
						But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings</p>
					</div>
				</div>
			</div>
		
			<div class="team-section">
				<div class="container">
					<h3> Our Team Members</h3>
					<div class="team-grids">
						<div class="col-md-4 team-grid wow fadeInLeft animated animated" data-wow-delay="0.4s">
							<div class="ih-item circle effect1"><a href="#">
								<div class="spinner"></div>
								<div class="img"><img :src="require('../assets/images/t1.jpg')" alt="img"></div>
								<div class="info">
								  <div class="info-back">
									<h4>Victoria</h4>
									<span>Description goes here</span>
								  </div>
								</div></a>
							</div>
							<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
							<div class="social-icons">
								<a href="#"><i class="icon"></i></a>
								<a href="#"><i class="icon1"></i></a>
								<a href="#"><i class="icon2"></i></a>
								<a href="#"><i class="icon3"></i></a>
							</div>
						</div>
						<div class="col-md-4 team-grid wow fadeInDownBig animated animated" data-wow-delay="0.4s">
							<div class="ih-item circle effect1"><a href="#">
								<div class="spinner"></div>
									<div class="img"><img :src="require('../assets/images/t2.jpg')" alt="img"></div>
								<div class="info">
									<div class="info-back">
										<h4>Tincidun</h4>
										<span>Description goes here</span>
								  </div>
								</div></a>
							</div>
							<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
							<div class="social-icons">
								<a href="#"><i class="icon"></i></a>
								<a href="#"><i class="icon1"></i></a>
								<a href="#"><i class="icon2"></i></a>
								<a href="#"><i class="icon3"></i></a>
							</div>
						</div>
						<div class="col-md-4 team-grid wow fadeInRight animated animated" data-wow-delay="0.4s">
							<div class="ih-item circle effect1"><a href="#">
								<div class="spinner"></div>
									<div class="img"><img :src="require('../assets/images/t3.jpg')" alt="img"></div>
								<div class="info">
									<div class="info-back">
										<h4>Posuere</h4>
										<span>Description goes here</span>
								  </div>
								</div></a>
							</div>
							<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
							<div class="social-icons">
								<a href="#"><i class="icon"></i></a>
								<a href="#"><i class="icon1"></i></a>
								<a href="#"><i class="icon2"></i></a>
								<a href="#"><i class="icon3"></i></a>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
			
			<div class="furniture">
				<div class="container">
					<div class="furniture-grids">
						<div class="col-md-4 furniture-grid wow fadeInRight animated animated" data-wow-delay="0.4s">
							<h3>Who we are</h3>
							<div class="tab1">
								<ul class="place">
									<li><img :src="require('../assets/images/cir.png')" alt=""></li>
									<li>Placerat ligula tincidunt</li>
								</ul>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
							</div>
							<div class="tab2">
								<ul class="place">
									<li><img :src="require('../assets/images/cir.png')" alt=""></li>
									<li>Sed ut perspiciatis unde</li>
								</ul>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
							</div>
							<div class="tab3">
								<ul class="place">
									<li><img :src="require('../assets/images/cir.png')" alt=""></li>
									<li>Eaque ipsa quae ab illo </li>
								</ul>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
							</div>
							
							<div class="tab4">
								<ul class="place">
									<li><img :src="require('../assets/images/cir.png')" alt=""></li>
									<li>Eaque ipsa quae ab illo </li>
								</ul>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
							</div>
							
							

						
						</div>
						<div class="col-md-8 furniture-grid1 wow fadeInLeft animated animated" data-wow-delay="0.4s">
							<h3>Furniture Design</h3>
							<div class="fur-img">
								<img :src="require('../assets/images/f1.jpg')" class="img-responsive" alt=""/>
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
	data(){
		return {
			aboutpic:[],
			company:[],
			designer:[],
			team:[]
		}
	},
	created() {
		this.loadMore()
	},
	methods: {
		loadMore(){
			this.axios.get('/about')
			.then(res=>{
				console.log(res)
				this.aboutpic = res.data.aboutpic
				this.company = res.data.company
				this.designer = res.data.designer
				this.team = res.data.team
			})
			.catch(err=>{
				console.log(err)
			})
		}
	},
}
</script>

<style>

</style>