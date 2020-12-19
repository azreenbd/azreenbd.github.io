var app = new Vue({
	el: '#app',
	data: {
		artworks: [
			/*{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'img/artwork/lorem.jpg'
			},*/
			{
				title: 'Comic Fiesta (コミックフィエスタ) 2015',
				description: 'CF\'15 100 Days Countdown (FS) by Nasx',
				date: '2015-10-31',
				isFeatured: true,
				image: 'https://img.huffingtonpost.com/asset/592763fb150000210015b7ca.jpeg?ops=scalefit_720_noupscale&format=webp'
			},
			{
				title: 'Scythe Girl',
				description: '',
				date: '2018-07-02',
				isFeatured: true,
				image: 'https://dthezntil550i.cloudfront.net/cf/0000124766/78aa5d9c-cacf-4d37-97da-d0b3935eda9c.jpg'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=3'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=4'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=5'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=6'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=7'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=8'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=9'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=10'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=11'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=12'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=13'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=14'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=15'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=16'
			},
			{
				title: 'lorem',
				description: 'lorem',
				date: '2020-12-30',
				isFeatured: true,
				image: 'https://loremflickr.com/320/240?random=17'
			}
		],
		modalIsVisible: false,
		modalArtworkId: null
	},
	methods: {
		showModal: function (isShowing, index) {
			if(isShowing) {
				this.modalArtworkId = index;
				this.modalIsVisible = true;

				document.body.style.overflow = "hidden";
				
			} 
			else {
				this.modalIsVisible = false;
				this.modalArtworkId = null;

				document.body.style.overflow = "auto";
			}
		},
		formatDate: function (date) {
			var d = new Date(date);

			const options = { year: 'numeric', month: 'long', day: 'numeric' };
			var formattedDate = d.toLocaleDateString('en-US', options);

			return formattedDate;
		}
	}
})