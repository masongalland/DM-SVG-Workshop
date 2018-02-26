import React, { Component } from "react";
import Triangle from "./Triangle";

export default class SingleTri extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vertices: [[0, 60], [30, 0], [60, 60]],
			color: "#005E7C"
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			color: this.getRandomColor()
		});
	}
	getRandomColor() {
		const clrs = ["#2F1847", "#C62E65", "#F9B3D1", "#D63AF9", "#624763", "#0094C6", "#005E7C", "#DB5461", "#FFFD82", "#4CB944", "#E6AF2E"];
		return clrs[Math.floor(Math.random() * clrs.length)];
	}

	render() {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 60 60"
				className="single-tri"
			>
				<Triangle
					vertices={this.state.vertices}
					color={this.state.color}
					delay="0"
					changeColor={this.handleClick}
				/>
			</svg>
		);
	}
}
