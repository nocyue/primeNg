import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-ring',
	templateUrl: './ring.component.html',
})
export class RingComponent {
	@ViewChild('ring') canvasRef: ElementRef;

	@Input() percentage: number;

	@Input() cricleLength: number;

	b: any;
	d: any;
	d1: any
	f: any;
	process: number = 0;
	ctx: CanvasRenderingContext2D;

	constructor() { }

	ngOnInit() {
		this.ctx = this.canvasRef.nativeElement.getContext('2d');
	}

	ngAfterViewInit() {
		this.b = 'bold';
		this.d = (this.cricleLength)/8 + 'pt';
		this.d1 = (this.cricleLength)/14 + 'pt';
		this.f = 'Microsoft YaHei';
		this.canvasRef.nativeElement.style.width = this.cricleLength;
		this.canvasRef.nativeElement.style.height = this.cricleLength;
		this.drawGrayCricle();
		this.animate();
	}

	animate = () => {
		requestAnimationFrame (() => {
			this.process = this.process + 1;
			this.drawCricle(this.ctx, this.process);
			if (this.process < this.percentage) {
				this.animate();
			}
		});
	}

	drawGrayCricle = () => {
		this.ctx.beginPath();
		this.ctx.arc(this.cricleLength/2, this.cricleLength/2, this.cricleLength/2, 0, Math.PI*2);
		this.ctx.closePath();
		this.ctx.fillStyle = '#262625';
		this.ctx.fill();
	}

	drawCricle = (ctx, percent) => {
		ctx.beginPath();
		ctx.moveTo(this.cricleLength/2, this.cricleLength/2);
		ctx.arc(this.cricleLength/2, this.cricleLength/2, this.cricleLength/2, Math.PI * 1.5, Math.PI * (1.5 + 2 * percent / 100 ));
		ctx.closePath();
		ctx.fillStyle = '#547AFF';
		ctx.fill();

		ctx.beginPath();
		ctx.arc(this.cricleLength/2, this.cricleLength/2, this.cricleLength/2-this.cricleLength/20, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fillStyle = '#000';
		ctx.fill();

		ctx.font = this.b + ' ' + this.d + ' ' + this.f;
		ctx.fillStyle = '#fff';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.moveTo(this.cricleLength/2, this.cricleLength/2);
		ctx.fillText(this.percentage, this.cricleLength/2, this.cricleLength/2 - this.cricleLength/12);

		ctx.font = this.b + ' ' + this.d1 + ' ' + this.f;
		ctx.fillStyle = '#fff';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.moveTo(this.cricleLength/2, this.cricleLength/2);
		ctx.fillText('%', this.cricleLength/2, this.cricleLength/2 + this.cricleLength/12);
	}
}