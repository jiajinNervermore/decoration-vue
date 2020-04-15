<template>
  <div class="">
	<cx-header></cx-header>
    <h1>抱歉！您访问的页面不知飞到哪里去了....</h1>
	<cx-footer></cx-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export  default {
	data: ()=>{
		return {}
	},
	components: {
		'cx-header': Header,
		'cx-footer': Footer
	}
}	
</script>

<style>
	
</style>
