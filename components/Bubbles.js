import React, { Component } from 'react'
import CanvasJSReact from '../lib/canvasjs.react'
import projectData from '../lib/projects.json'
let CanvasJSChart = CanvasJSReact.CanvasJSChart
let dataPoints = []
 
class BubbleChart extends Component {
	render() {
		const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1", // "light1", "light2", "dark1", "dark2"
            axisX: {
                valueFormatString: 'MMM'
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
        projectData.forEach(project => {
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

export default BubbleChart