import React, { Component } from 'react'
import Triangle from './Triangle'

export default class TriTriangle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vertices: [
        [[0,240],
        [120,0],
        [240,240]],
        [[20,240],
        [120,40],
        [220,240]],
        [[40,240],
        [120,80],
        [200,240]],
        [[60,240],
        [120,120],
        [180,240]],
      ],
      colors: ["#2F1847", "#C62E65", "#F9B3D1", "#D63AF9"],
      delays: ["0", "60", "110", "220"]
    }
  }

  render() {
    const {vertices, colors, delays} = this.state;
    const triangles = vertices.map((e,i) => {
      return (
        <Triangle key={i} vertices={e} color={colors[i]} delay={delays[i]}/>
      )
    })
    return (
      <svg viewBox="0 0 240 240">
        {triangles}
      </svg>
    )
  }
}
