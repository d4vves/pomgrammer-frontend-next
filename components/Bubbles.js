import React, { Component } from 'react'
import CanvasJSReact from '../lib/canvasjs.react'
let CanvasJSChart = CanvasJSReact.CanvasJSChart
let dataPoints = []
 
class Bubbles extends Component {
	render() {
		const options = {
            animationEnabled: true,
            theme: "light1",
            axisX: {
                valueFormatString: 'MMM',
                lineColor: 'white',
                labelFontColor: 'white',
                tickColor: 'white',
                gridColor: 'white',
            },
            axisY: {
                lineColor: 'white',
                labelFontColor: 'white',
                tickColor: 'white',
                gridColor: 'white',
                maximum: 200,
                minimum: -50
            },
            data: [{
                type: "bubble",
                indexLabel: "{label}",
                toolTipContent: "<b>{label}</b><br>Date Started: {x}<br>POMs: {y}",
                dataPoints: dataPoints
            }]
        }
		
		return (
			<CanvasJSChart options = {options} onRef={ref => this.chart = ref} />
		)
    }

    componentDidMount(){
		var chart = this.chart
        this.props.projects.forEach(project => {
            dataPoints.push({
                label: project.label,
                x: new Date(project.x),
                y: project.y,
                z: project.z
            })
        })
        chart.render()
	}
}

export default Bubbles