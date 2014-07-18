import "nylon.client.jsx";
import "js/web.jsx";
import "nylon.coe.jsx";

final class Pen{
	var canvas : HTMLCanvasElement;
	var ctx : CanvasRenderingContext2D;
	var mouse : boolean;
	var x = [] : number[];
	var y = [] : number[];

	function constructor(canvas : HTMLCanvasElement){
		this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
		this.canvas = canvas;
		this.mouse = false;
	}

	function start() : void{
		var color = [] : number[];
		var nl = new nylon();							//nylonの生成
		var co = new coe('ws://localhost:8000/chat');

		nl.on("color",(dummy:Map.<variant>):void ->{	//コールバック関数
			color = dummy["rgb"] as number[];
		});
		
		var pen_down = function(e : Event):void{
			this.mouse = true;
			this.x = [];
			this.y = [];
		};
		var pen_up = function(e : Event):void{
			this.mouse = false;
			nl.emit( "bloadcast|draw", { x:this.x, y:this.y } );
		};
		var draw = function(e : Event):void{
			if( this.mouse){
				var es = e as MouseEvent;
				var ee = es.target as Element;
				var rect = ee.getBoundingClientRect();
				var x = es.clientX - rect.left;
				var y = es.clientY - rect.top;
				this.x.push( x );
				this.y.push( y );
				this.ctx.beginPath();
				this.ctx.fillStyle = "rgb("+color[0]+","+color[1]+","+color[2]+")";
				this.ctx.arc(x,y,5,0,Math.PI*2.0,false);
				this.ctx.fill();
			}
		};
		this.canvas.addEventListener( "mousedown", pen_down );
		this.canvas.addEventListener( "mouseup", pen_up );
		this.canvas.addEventListener( "mousemove", draw );
	}
}

final class Palett{
	var canvas : HTMLCanvasElement;
	var ctx : CanvasRenderingContext2D;
	var color = [] : number[];	//r,g,b
	var mouse : boolean;

	function constructor(canvas : HTMLCanvasElement){
		this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
		this.canvas = canvas;
		this.mouse = false;
		if(this.color[0] == null){
		for(var i=0; i<3; i++)
			this.color[i] = 0;
		}
		this.palett_Draw();
	}

	function palett_Draw() : void{
		//パレットの表示
		for(var j=0; j<3; j++){
			for(var i=0; i<255; i++){
				this.ctx.beginPath();
				switch(j){
					case 0: 	this.ctx.strokeStyle = "rgb("+i+",0,0)"; break;
					case 1: 	this.ctx.strokeStyle = "rgb(0,"+i+",0)"; break;
					case 2:     this.ctx.strokeStyle = "rgb(0,0,"+i+")"; break;
				}
				this.ctx.moveTo(i,j*50);
				this.ctx.lineTo(i,j*50+50);
				this.ctx.stroke();
			}
			//選択ラインの表示
			this.ctx.beginPath();
			this.ctx.strokeStyle = "rgb(255,255,255)";
			this.ctx.moveTo(this.color[j],j*50);
			this.ctx.lineTo(this.color[j],j*50+50);
			this.ctx.stroke();
		}
		log("OK");
	}

	function start() :void{
		var palett_down = function(e : Event):void{
			if(this.mouse == false){
				this.mouse = true;
				var es = e as MouseEvent;
				var ee = es.target as Element;
				var rect = ee.getBoundingClientRect();
				var x = es.clientX - rect.left;
				var y = es.clientY - rect.top;
				log("check0 "+this.color[0]);
				if(x < 256){
					if(y < 50)
						this.color[0] = x;
					else if(y < 100)
						this.color[1] = x;
					else if(y < 150)
						this.color[2] = x;
				}
				//合成色の表示
				this.ctx.beginPath();
				this.ctx.fillStyle = "rgb("+this.color[0]+","+this.color[1]+","+this.color[2]+")";
				this.ctx.fillRect(0,150,255,200);
				//nylonによる色情報の送信
				var nl = new nylon();							//nylonの生成
				var msg ={"rgb":this.color}:Map.<variant>;
				nl.emit("color|broadcast",msg);
				this.palett_Draw();
			}	
		};
		var palett_up = function(e : Event):void{
			this.mouse = false;
		};
		//イベント待ち
		this.canvas.addEventListener( "mousedown", palett_down );
		this.canvas.addEventListener( "mouseup", palett_up );
	}
}

final class _Main{
	static function main(args : string[]):void{
		var canvas2 = dom.id("palett") as HTMLCanvasElement;
		var palett = new Palett(canvas2);

		var canvas1 =  dom.id("myCanvas") as HTMLCanvasElement;
		var pen = new Pen(canvas1);
		
		palett.start();
		pen.start();
	}
}

