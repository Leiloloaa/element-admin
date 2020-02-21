<template>
    <div>
		<div class="data_section">
			<header class="section_title">数据统计</header>
			<div class="container1">
				<el-row :gutter="20" style="margin-bottom: 10px;">
					<el-col :span="6"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
					<el-col :span="6"><div class="data_list"><span class="data_num">{{userCount}}</span> 访问用户</div></el-col>
					<el-col :span="6"><div class="data_list"><span class="data_num">{{orderCount}}</span> 下单用户</div></el-col>
				</el-row>
				<el-row :gutter="20">
						<el-col :span="6"><div class="data_list all_head"><span class="data_num head">一周数据：</span></div></el-col>
						<el-col :span="6"><div class="data_list"><span class="data_num">{{wekUserCount}}</span> 访问用户</div></el-col>
						<el-col :span="6"><div class="data_list"><span class="data_num">{{wekOrderCount}}</span> 下单用户</div></el-col>
				</el-row>
			</div>
		</div>
		<tendency></tendency>
    </div>
</template>

<script>
	import tendency from '../components/tendency' 
  export default {
		data(){
		return {
			userCount: 570,
			orderCount: 329,
			wekUserCount: 2463,
			wekOrderCount: 1821,
		}
	},
	mounted(){
	},
	methods: {
	},
	components: {
		tendency
	},
}
</script>

<style>
.section_title{
	text-align: center;
	font-size: 30px;
	margin-bottom: 10px;
}

.container1{
	padding-left:240px;
}

.data_num{
	color: #333;
	font-size: 26px;
}

.head{
	border-radius: 6px;
	font-size: 22px;
	padding: 4px 0;
	color: #fff;
	display: inline-block;
}

.data_list{
	text-align: center;
	font-size: 14px;
	color: #666;
	border-radius: 6px;
	background: #E5E9F2;
}

.data_section{
	padding-left: 120px;
	margin-bottom: 40px;
}

.today_head{
	background: #F56C6C;
}
.all_head{
	background: #409EFF;
}
</style>
