var app = new Vue({
	el: '#app',
	data: {
		artworks: [
			/*{
				title: '',
				description: '',
				date: '2020-01-01',
				isFeatured: true,
				image: 'img/artwork/lorem.jpg'
			},*/
			{
				title: 'Ucchan in Pink',
				description: '',
				date: '2020-11-08',
				isFeatured: true,
				image: 'img/artwork/2020-ucchan_pink_pastel.jpg'
			},{
				title: 'Two Piece',
				description: '',
				date: '2020-01-01',
				isFeatured: true,
				image: 'img/artwork/2020-two_piece.jpg'
			},
			{
				title: 'Scythe Girl',
				description: '',
				date: '2018-01-01',
				isFeatured: true,
				image: 'img/artwork/2018-scythe.jpg'
			},
			{
				title: 'Black Punk OC',
				description: '',
				date: '2018-01-01',
				isFeatured: true,
				image: 'img/artwork/2018-punk_oc_pose.jpg'
			},
			{
				title: 'Michelle Reference Sketch',
				description: '',
				date: '2018-01-01',
				isFeatured: false,
				image: 'img/artwork/2018-michelle_ref.jpg'
			},
			{
				title: 'Heart With Quote',
				description: '',
				date: '2018-01-01',
				isFeatured: true,
				image: 'img/artwork/2018-heart_quote.jpg'
			},
			{
				title: 'Emo in Dress',
				description: '',
				date: '2018-01-01',
				isFeatured: false,
				image: 'img/artwork/2018-emo_dress.jpg'
			},
			
			{
				title: 'Traditional Malay',
				description: '',
				date: '2017-01-01',
				isFeatured: true,
				image: 'img/artwork/2017-trad_malay.jpg'
			},
			{
				title: 'Black Sweater OC',
				description: '',
				date: '2017-01-01',
				isFeatured: true,
				image: 'img/artwork/2017-oc_black.jpg'
			},
			{
				title: 'Kanna from Maid Dragon',
				description: '',
				date: '2017-01-01',
				isFeatured: true,
				image: 'img/artwork/2017-kanna_maid_dragon.jpg'
			},
			{
				title: 'Sagiri from Eromanga Sensei',
				description: '',
				date: '2017-01-01',
				isFeatured: true,
				image: 'img/artwork/2017-eromanga_sensei_sagiri.jpg'
			},
			{
				title: 'Cold',
				description: '',
				date: '2017-01-01',
				isFeatured: true,
				image: 'img/artwork/2017-cold.jpg'
			},
			{
				title: 'Comic Fiesta 2017',
				description: 'Artwork from Comic Fiesta 2017 100 days countdown.',
				date: '2017-01-01',
				isFeatured: true,
				image: 'img/artwork/2017-cf17.jpg'
			},
			{
				title: 'Playful \"What?\"',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-what.jpg'
			},
			{
				title: 'Visual Novel Concept Art',
				description: '',
				date: '2016-01-01',
				isFeatured: false,
				image: 'img/artwork/2016-vn_concept.jpg'
			},
			{
				title: 'Ucchan Thanks!',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-ucchan_thanks.png'
			},
			{
				title: 'School Girl Sigh',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-school_girl_sigh.jpg'
			},
			{
				title: 'Punk OC',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-punk_oc.jpg'
			},
			{
				title: 'Neko Lisa',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-neko_lisa.jpg'
			},
			{
				title: 'Cleaning The Window',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-maid_cleaning.jpg'
			},
			{
				title: 'Hana',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-hana.jpg'
			},
			{
				title: 'Double Self Thumbnail',
				description: '',
				date: '2016-01-01',
				isFeatured: false,
				image: 'img/artwork/2016-double_self_thumb.jpg'
			},
			{
				title: 'Double Self',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-double_self.jpg'
			},
			{
				title: 'Candyland',
				description: '',
				date: '2016-01-01',
				isFeatured: true,
				image: 'img/artwork/2016-candyland.jpg'
			},
			{
				title: 'Ucchan',
				description: '',
				date: '2015-01-01',
				isFeatured: false,
				image: 'img/artwork/2015-ucchan_1.jpg'
			},
			{
				title: 'Surprised',
				description: '',
				date: '2015-01-01',
				isFeatured: true,
				image: 'img/artwork/2015-surprised.jpg'
			},
			{
				title: 'Strawberry Miku',
				description: '',
				date: '2015-01-01',
				isFeatured: false,
				image: 'img/artwork/2015-strawberry_miku.jpg'
			},
			{
				title: 'Chill Maid',
				description: '',
				date: '2015-01-01',
				isFeatured: false,
				image: 'img/artwork/2015-maid_chill.jpg'
			},
			{
				title: 'Comic Fiesta 2015',
				description: '',
				date: '2015-01-01',
				isFeatured: true,
				image: 'img/artwork/2015-cf15.jpg'
			},
			{
				title: 'Bubbles',
				description: '',
				date: '2015-01-01',
				isFeatured: false,
				image: 'img/artwork/2015-bubbles.jpg'
			},
			{
				title: 'Blenda\'s Blender',
				description: '',
				date: '2015-01-01',
				isFeatured: true,
				image: 'img/artwork/2015-blenda_blender.jpg'
			},
			{
				title: 'Bishoujo',
				description: '',
				date: '2015-01-01',
				isFeatured: false,
				image: 'img/artwork/2015-bishoujo.jpg'
			},
			{
				title: 'Star Girl',
				description: '',
				date: '2014-01-01',
				isFeatured: true,
				image: 'img/artwork/2014-star_girl.jpg'
			},
			{
				title: 'Kuriyama Mirai from Kyoukai no Kanata',
				description: '',
				date: '2014-01-01',
				isFeatured: false,
				image: 'img/artwork/2014-kuriyama_mirai.jpg'
			},
			{
				title: 'Jealousy',
				description: '',
				date: '2014-01-01',
				isFeatured: true,
				image: 'img/artwork/2014-jealousy.jpg'
			},
			{
				title: 'Hatsune Miku',
				description: '',
				date: '2014-01-01',
				isFeatured: true,
				image: 'img/artwork/2014-hatsune_miku.jpg'
			},
			{
				title: 'Comic Fiesta 2014',
				description: '',
				date: '2014-01-01',
				isFeatured: true,
				image: 'img/artwork/2014-cf14.jpg'
			},
			{
				title: 'OC Tiung',
				description: '',
				date: '2013-01-01',
				isFeatured: false,
				image: 'img/artwork/2013-tiung_oc.jpg'
			},
			{
				title: 'Shopping',
				description: '',
				date: '2013-01-01',
				isFeatured: true,
				image: 'img/artwork/2013-shopping.jpg'
			},
			{
				title: 'Comic Fiesta 2013',
				description: '',
				date: '2013-01-01',
				isFeatured: true,
				image: 'img/artwork/2013-cf13.jpg'
			},
			{
				title: 'Blue School Girl',
				description: '',
				date: '2013-01-01',
				isFeatured: true,
				image: 'img/artwork/2013-blue_schoolgirl.jpg'
			},
			{
				title: 'Asuna from Sword Art Online',
				description: '',
				date: '2013-01-01',
				isFeatured: true,
				image: 'img/artwork/2013-asuna_sao.jpg'
			},

		],
		modalIsVisible: false,
		modalArtworkId: null
	},
	created: function () {
		//:style="background-image: url(quotes[Math.floor(Math.random() * quotes.length)])"
       	
		var featured = this.artworks[Math.floor(Math.random() * this.artworks.length)];

		while (!featured.isFeatured) {
			featured = this.artworks[Math.floor(Math.random() * this.artworks.length)];
		}

       	document.body.style.background = "url('" + featured.image + "')";
       	document.body.style.backgroundColor = "#000";
       	document.body.style.backgroundSize = "cover";
       	document.body.style.backgroundPosition = "50% 30%";
       	document.body.style.backgroundAttachment = "fixed";



       	/*"background-color: #000;
	    background-size: cover;
	    background-position: center;
	    background-attachment: fixed;"*/

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