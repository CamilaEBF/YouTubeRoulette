var App = React.createClass({
	getInitialState:function(){
		return{
			video:{},
			loaded:false,
			url:""
		}
	},
	loadVideo:function(event){
		event.preventDefault();
		var that = this;

		that.state.loaded = false;
		that.setState(that.state);

		var req = new XMLHttpRequest();
		req.open('GET', 'http://localhost:3000/videos', false); 
		req.send(null);

		if (req.status == 200){
			var video = JSON.parse(req.response)
			that.state.video = video;
			that.state.loaded = true;
			this.state.url = 'https://www.youtube.com/embed/'+video.id+'?autoplay=1';

			that.setState(that.state);
		}

	},
	render: function() {
		return(
			<div>
				<h1> YouTube Roulette </h1>
				<Player url={this.state.url} />
		 		<Info artist={this.state.video.artist} song={this.state.video.song}/>
		 		<input type="button" className="test" value="Carga Nuevo Video" onClick={this.loadVideo}/>
	 		</div>
 		);
	}
});


var Player = React.createClass({
	getInitialState:function(){
		return{
			url:""
		}
	},
	componentDidUpdate:function(prevProps, prevState){
		if(prevState.url !== this.props.url){
			this.state.url = this.props.url;
			this.setState(this.state);
		}
	},
	render: function() {
		return(
			<iframe width="420" height="315" src={this.state.url}/>
		);
	}
});

var Info = React.createClass({
	getInitialState:function(){
		return{
			song:"",
			artist:""
		}
	},
	componentDidUpdate:function(){
		this.state.artist = this.props.artist;
		this.state.song = this.props.song;
		this.setState(this.state);
	},
	render: function(){
		return(
			<div>
				<h1>
					{this.state.song}
				</h1>
				<h2>
					{this.state.artist}
				</h2>
			</div>
		)
	}
});

ReactDOM.render(<App/>, document.getElementById('wrapper'));
